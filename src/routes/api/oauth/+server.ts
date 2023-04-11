import { facebookAuth } from '$lib/server/lucia';

export const GET = async ({ url, cookies }) => {
	const provider = url.searchParams.get('provider');
	if (provider === 'facebook') {
		const [url, state] = await facebookAuth.getAuthorizationUrl();
		cookies.set('oauth_state', state, {
			path: '/',
			maxAge: 60 * 60
		});
		return new Response(null, {
			status: 302,
			headers: {
				location: url.toString()
			}
		});
	}
	return new Response(null, {
		status: 400
	});
};
