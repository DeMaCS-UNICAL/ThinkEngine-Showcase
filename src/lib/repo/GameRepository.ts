// src/lib/repo/GameRepository.ts
import type { Game } from '$lib/types/game';

export interface GameRepository {
  list(): Promise<Game[]>;
  getBySlug(slug: string): Promise<Game | null>;
}
