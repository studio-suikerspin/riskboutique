import { createClient } from '$lib/prismicio'

export async function load({ params, fetch, cookies, setHeaders }) {
	const client = createClient({ fetch, cookies })

	const openRoles = await client.getAllByType('open_role')

 setHeaders({
    'Cache-Control': 'public, s-maxage=60'
  });

	return {
		openRoles
	}
}
