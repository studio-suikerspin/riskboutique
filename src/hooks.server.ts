export async function handle({ event, resolve }) {
	const response = await resolve(event);

	if (response.headers.get('content-type')?.includes('text/html')) {
		response.headers.set('Cache-Control', 'public, s-maxage=60');
	}

	return response;
}
