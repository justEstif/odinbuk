import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/sign-in');
	return {
		user
	};
};

// GET posts
// POST create a post
