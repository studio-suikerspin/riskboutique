import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export const load = async ({ fetch, cookies }) => {
	const client = createClient({ fetch, cookies });
	const site_settings = await client.getSingle('site_settings');

	return {
		site_settings
	};
};
