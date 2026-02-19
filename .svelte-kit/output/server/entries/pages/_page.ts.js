import { g as gameRepo } from "../../chunks/index3.js";
const load = async () => {
  let games = await gameRepo.list();
  games = games.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  return { games };
};
export {
  load
};
