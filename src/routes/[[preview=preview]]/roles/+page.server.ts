import { createClient } from '$lib/prismicio'

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies })

	const openRoles = await client.getAllByType('open_role')

	return {
		openRoles
	}
}
