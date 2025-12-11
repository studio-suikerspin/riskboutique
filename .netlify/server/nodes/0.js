import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.eQ5M6DJV.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BGm2FRE4.js","_app/immutable/chunks/DkMiz2ez.js","_app/immutable/chunks/DZizjJuI.js","_app/immutable/chunks/CNehfJ4j.js","_app/immutable/chunks/C5wg99Yo.js","_app/immutable/chunks/B1Ul0HW3.js"];
export const stylesheets = ["_app/immutable/assets/0.BLZU-Qw2.css"];
export const fonts = [];
