import { g as gameRepo } from "../../../../chunks/index3.js";
import { error } from "@sveltejs/kit";
const load = async ({ params }) => {
  const game = await gameRepo.getBySlug(params.slug);
  if (!game) {
    throw error(404, "Game not found");
  }
  return { game };
};
export {
  load
};
