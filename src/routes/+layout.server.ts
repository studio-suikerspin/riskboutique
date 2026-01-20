import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export const load = async ({ fetch, cookies }) => {
	const client = createClient({ fetch, cookies });
	const site_settings = await client.getSingle('site_settings');
	const page = await client.getSingle('under_construction_page');
	const header = await client.getSingle('header');
	const socials = await client.getSingle('social_links');

	return {
		page,
		site_settings,
		header,
		socials
	};
};
