import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies, setHeaders }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getSingle('homepage');

 setHeaders({
    'Cache-Control': 'public, s-maxage=60'
  });


	return {
		page,
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}

export function entries() {
	return [{}];
}
