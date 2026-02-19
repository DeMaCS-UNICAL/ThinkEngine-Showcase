export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "ThinkEngine-Showcase/_app",
	assets: new Set(["docs/prototype-one.md","images/demacs-logo.png","images/placeholder-game.png","robots.txt"]),
	mimeTypes: {".md":"text/markdown",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BfwTppQZ.js",app:"_app/immutable/entry/app.DdPN897l.js",imports:["_app/immutable/entry/start.BfwTppQZ.js","_app/immutable/chunks/BTgBOJtH.js","_app/immutable/chunks/CO1MWHG9.js","_app/immutable/chunks/KOaAy5Qh.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/B566qRAL.js","_app/immutable/entry/app.DdPN897l.js","_app/immutable/chunks/CO1MWHG9.js","_app/immutable/chunks/CXEPWSRR.js","_app/immutable/chunks/B566qRAL.js","_app/immutable/chunks/DiYUuYCN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/games/[slug]",
				pattern: /^\/games\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
