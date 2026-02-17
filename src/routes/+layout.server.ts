import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export const load = async ({ fetch, cookies, setHeaders }) => {
	const client = createClient({ fetch, cookies });
	const site_settings = await client.getSingle('site_settings');
	const page = await client.getSingle('under_construction_page');
	const header = await client.getSingle('header');
	const socials = await client.getSingle('social_links');
	const footer = await client.getSingle('footer');

	setHeaders({
		'Cache-Control': 'public, max-age=60'
	})

	return {
		page,
		site_settings,
		header,
		socials,
		footer
	};
};
