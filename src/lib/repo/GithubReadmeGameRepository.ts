// src/lib/repo/GithubReadmeGameRepository.ts
import type { Game } from '$lib/types/game';
import type { GameRepository } from './GameRepository';
import { parseThinkEngineShowcaseReadme } from '$lib/parsers/thinkengineShowcase';

export class GithubReadmeGameRepository implements GameRepository {
  private cache: Game[] | null = null;

  constructor(private readmeUrl: string) {}

  async list(): Promise<Game[]> {
    // Se abbiamo già i dati in cache, restituiamoli
    if (this.cache) {
      return this.cache;
    }

    // 1. Fetch del README RAW principale (ThinkEngine-Showcase)
    const res = await fetch(this.readmeUrl);
    if (!res.ok) {
      throw new Error(`Impossibile leggere README da ${this.readmeUrl}`);
    }

    const md = await res.text();

    // 2. Parsing della tabella in Game[]
    const games = parseThinkEngineShowcaseReadme(md);

    // 3. Arricchiamo i giochi con le "languages" dal GitHub /languages API
    await this.enrichLanguages(games);

    this.cache = games;
    return games;
  }

  async getBySlug(slug: string): Promise<Game | null> {
    const games = await this.list();
    return games.find((g) => g.slug === slug) ?? null;
  }

  /**
   * Per ogni gioco, se possibile, chiama la GitHub API:
   *   GET /repos/{owner}/{repo}/languages
   * e salva i linguaggi (ordinati per byte desc) in game.languages.
   */
  private async enrichLanguages(games: Game[]): Promise<void> {
    const jobs = games.map(async (game) => {
      const info = this.extractRepoInfo(game.repoUrl);
      if (!info) return;

      try {
        const url = `https://api.github.com/repos/${info.owner}/${info.repo}/languages`;
        const res = await fetch(url);
        if (!res.ok) {
          // Se fallisce, semplicemente non settiamo le lingue
          return;
        }

        const data = (await res.json()) as Record<string, number>;
        const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);

        // Salviamo solo i nomi dei linguaggi, in ordine decrescente di "peso"
        game.languages = sorted.map(([name]) => name);
      } catch (err) {
        console.error('Errore nel recupero lingue GitHub per', game.repoUrl, err);
      }
    });

    await Promise.all(jobs);
  }

  /**
   * Estrae { owner, repo } da un URL GitHub tipo:
   *   https://github.com/OWNER/REPO
   */
  private extractRepoInfo(repoUrl: string): { owner: string; repo: string } | null {
    try {
      const url = new URL(repoUrl);
      if (url.hostname !== 'github.com') return null;

      const parts = url.pathname.split('/').filter(Boolean); // ['OWNER', 'REPO', ...]
      if (parts.length < 2) return null;

      const owner = parts[0];
      const repo = parts[1];

      return { owner, repo };
    } catch {
      return null;
    }
  }
}
