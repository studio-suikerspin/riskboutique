import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BmW4tV3g.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DbLIQC5o.js","_app/immutable/chunks/CQEKzHKH.js","_app/immutable/chunks/CajNje-O.js","_app/immutable/chunks/JRIAkMHP.js","_app/immutable/chunks/B9IHJCFh.js","_app/immutable/chunks/CZCR3FxE.js"];
export const stylesheets = ["_app/immutable/assets/0.B0_Ha0X_.css"];
export const fonts = [];
