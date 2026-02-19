// src/lib/repo/index.ts
import { GithubReadmeGameRepository } from './GithubReadmeGameRepository';

const README_URL =
  'https://raw.githubusercontent.com/DeMaCS-UNICAL/ThinkEngine-Showcase/main/README.md';

// Repository principale usato dall'applicazione
export const gameRepo = new GithubReadmeGameRepository(README_URL);
