import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.dLf6ysd6.js","_app/immutable/chunks/D9M9ssGC.js","_app/immutable/chunks/CO1MWHG9.js","_app/immutable/chunks/CXEPWSRR.js","_app/immutable/chunks/-TgyxBBA.js","_app/immutable/chunks/DiYUuYCN.js","_app/immutable/chunks/B2lg-arB.js","_app/immutable/chunks/KOaAy5Qh.js"];
export const stylesheets = ["_app/immutable/assets/Theme.CNRe0r1A.css","_app/immutable/assets/2.BwRY1OD6.css"];
export const fonts = [];
