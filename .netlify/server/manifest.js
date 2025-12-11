export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","apple-touch-icon.png","favicon-96x96.png","favicon.ico","favicon.svg","fonts/.DS_Store","fonts/general-sans/GeneralSansVariable-Bold.woff","fonts/general-sans/GeneralSansVariable-Bold.woff2","fonts/general-sans/GeneralSansVariable-BoldItalic.woff","fonts/general-sans/GeneralSansVariable-BoldItalic.woff2","fonts/general-sans/general-sans.css","fonts/icons/.DS_Store","fonts/icons/iconly.css","fonts/icons/iconly.eot","fonts/icons/iconly.min.css","fonts/icons/iconly.svg","fonts/icons/iconly.ttf","fonts/icons/iconly.woff","fonts/icons/iconly.woff2","site.webmanifest","web-app-manifest-192x192.png","web-app-manifest-512x512.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".woff":"font/woff",".woff2":"font/woff2",".css":"text/css",".ttf":"font/ttf",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.cHHJ4TZi.js",app:"_app/immutable/entry/app.CbiDlw_N.js",imports:["_app/immutable/entry/start.cHHJ4TZi.js","_app/immutable/chunks/CNehfJ4j.js","_app/immutable/chunks/BGm2FRE4.js","_app/immutable/entry/app.CbiDlw_N.js","_app/immutable/chunks/BGm2FRE4.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DkMiz2ez.js","_app/immutable/chunks/Cp6hzOhC.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/api/preview",
				pattern: /^\/api\/preview\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/preview/_server.ts.js'))
			},
			{
				id: "/slice-simulator",
				pattern: /^\/slice-simulator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/[uid]",
				pattern: /^(?:\/([^/]+))?\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/slice-simulator","/slice-simulator/__data.json","/","/__data.json","/test-page","/test-page/__data.json"]),
		matchers: async () => {
			const { match: preview } = await import ('./entries/matchers/preview.js')
			return { preview };
		},
		server_assets: {}
	}
}
})();
