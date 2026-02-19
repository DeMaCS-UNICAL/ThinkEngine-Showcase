import type { Game } from '$lib/types/game';

/**
 * Trasforma una stringa in uno slug URL-safe:
 * "Pacman Incremental" -> "pacman-incremental"
 */
function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // rimuove accenti
    .replace(/[^a-z0-9]+/g, '-') // non alfanumerici -> -
    .replace(/^-+|-+$/g, '') // trim trattini
    .replace(/-{2,}/g, '-'); // comprimi --
}

/**
 * Estrae il primo link markdown `[label](url)` dalla cella.
 */
function extractMarkdownLink(cell: string): { label?: string; url?: string } {
  const match = cell.match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (!match) return {};
  const [, label, url] = match;
  return { label: label.trim(), url: url.trim() };
}

/**
 * Dato un URL GitHub del repo, prova a costruire:
 * - l'URL RAW del README.md
 * - la base per gli asset (immagini, ecc.)
 *
 * Esempio:
 *  repoUrl:       https://github.com/OWNER/REPO
 *  readmeUrl:     https://raw.githubusercontent.com/OWNER/REPO/master/README.md
 *  assetsBaseUrl: https://raw.githubusercontent.com/OWNER/REPO/master/
 */
function buildGithubReadmeInfo(
  repoUrl: string
): { readmeUrl: string; assetsBaseUrl: string } | undefined {
  try {
    const url = new URL(repoUrl);
    if (url.hostname !== 'github.com') return undefined;

    const parts = url.pathname.split('/').filter(Boolean); // ['OWNER', 'REPO', ...]
    if (parts.length < 2) return undefined;

    const owner = parts[0];
    const repo = parts[1];

    const base = `https://raw.githubusercontent.com/${owner}/${repo}/master/`;
    const readme = `${base}README.md`;

    return { readmeUrl: readme, assetsBaseUrl: base };
  } catch {
    return undefined;
  }
}

/**
 * Dato il testo completo del README (markdown),
 * estrae la tabella principale e la converte in Game[].
 */
export function parseThinkEngineShowcaseReadme(md: string): Game[] {
  const lines = md.split(/\r?\n/);

  // 1. Trova l'header della tabella (riga con Project | Link | ...)
  let headerIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim().toLowerCase();
    if (line.startsWith('|') && line.includes('project') && line.includes('link')) {
      headerIndex = i;
      break;
    }
  }

  if (headerIndex === -1) {
    // Nessuna tabella trovata
    return [];
  }

  // 2. La riga successiva è la riga di separatori | --- | --- | ...
  const separatorIndex = headerIndex + 1;

  const games: Game[] = [];

  // 3. Tutte le righe successive che iniziano con '|' sono righe dati
  for (let i = separatorIndex + 1; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine.startsWith('|')) break;
    if (rawLine === '|' || rawLine === '') break;

    // Rimuovi '|' iniziale/finale e splitta
    const trimmed = rawLine.replace(/^\|/, '').replace(/\|$/, '');
    const cells = trimmed.split('|').map((c) => c.trim());

    if (cells.length < 4) {
      // riga malformata, skip
      continue;
    }

    const projectCell = cells[0];
    const linkCell = cells[1];
    const versionCell = cells[2];
    const usageCell = cells[3];
    const testsCell = cells[4] ?? '';

    const title = projectCell;
    const slug = slugify(title);

    const { url: repoUrl } = extractMarkdownLink(linkCell);
    const { url: testInstancesUrl } = extractMarkdownLink(testsCell);

    const thinkEngineVersion = versionCell;
    const thinkEngineUsage = usageCell;

    if (!repoUrl) {
      // Senza repoUrl non ha molto senso inserire il gioco
      continue;
    }

    // Tag base
    const tags: string[] = ['ThinkEngine'];

    if (thinkEngineVersion && thinkEngineVersion.trim() !== '') {
      tags.push(`TE ${thinkEngineVersion.trim()}`);
    }

    const usageLower = thinkEngineUsage.toLowerCase();
    if (usageLower.includes('reactive brain')) {
      tags.push('Reactive Brain');
    }
    if (usageLower.includes('planner brain')) {
      tags.push('Planner Brain');
    }
    if (usageLower.includes('incremental')) {
      tags.push('Incremental');
    }

    const info = buildGithubReadmeInfo(repoUrl);

    const game: Game = {
      slug,
      title,
      short: thinkEngineUsage,
      thinkEngineVersion,
      thinkEngineUsage,
      repoUrl,
      testInstancesUrl,
      tags,
      thumbnail: undefined,
      doc: info
        ? {
            kind: 'markdown-remote',
            url: info.readmeUrl,
            assetsBaseUrl: info.assetsBaseUrl,
            fallbackMdPath: 'prototype-one.md'
          }
        : {
            kind: 'markdown-local',
            mdPath: 'prototype-one.md'
          }
    };

    games.push(game);
  }

  return games;
}
