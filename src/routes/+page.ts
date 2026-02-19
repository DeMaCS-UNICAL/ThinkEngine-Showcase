import { gameRepo } from '$lib/repo';

export const load = async () => {
  let games = await gameRepo.list();

  // Ordina dal più recente al meno recente
  games = games.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  return { games };
};
