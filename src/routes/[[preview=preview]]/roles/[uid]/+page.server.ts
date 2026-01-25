import { createClient } from '$lib/prismicio'

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies })
	const { uid } = params

	const role = await client.getByUID('open_role', uid)

	return {
		role
	}
}
