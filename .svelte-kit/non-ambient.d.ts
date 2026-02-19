
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/games" | "/games/[slug]";
		RouteParams(): {
			"/games/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/games": { slug?: string };
			"/games/[slug]": { slug: string }
		};
		Pathname(): "/" | "/games" | "/games/" | `/games/${string}` & {} | `/games/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/docs/prototype-one.md" | "/images/demacs-logo.png" | "/images/placeholder-game.png" | "/robots.txt" | string & {};
	}
}