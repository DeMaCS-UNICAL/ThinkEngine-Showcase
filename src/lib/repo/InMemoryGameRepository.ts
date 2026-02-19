/*import type { GameRepository } from './GameRepository';
import { games } from '$lib/data/games';

export class InMemoryGameRepository implements GameRepository {
  async list() {
    return games;
  }
  async getBySlug(slug: string) {
    return games.find((g) => g.slug === slug) ?? null;
  }
}
*/