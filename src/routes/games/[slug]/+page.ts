import { gameRepo } from '$lib/repo';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const game = await gameRepo.getBySlug(params.slug);

  if (!game) {
    throw error(404, 'Game not found');
  }

  return { game };
};
