import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import prisma from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import { PrismaClient } from '@prisma/client';

import { facebook } from '@lucia-auth/oauth/providers';
import {
	FACEBOOK_CLIENT_ID,
	FACEBOOK_CLIENT_SECRET,
	FACEBOOK_REDIRECT_URI
} from '$env/static/private';

export const auth = lucia({
	adapter: prisma(new PrismaClient()),
	env: dev ? 'DEV' : 'PROD',
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			username: userData.username
		};
	},
	middleware: sveltekit()
});

export const facebookAuth = facebook(auth, {
	clientId: FACEBOOK_CLIENT_ID,
	clientSecret: FACEBOOK_CLIENT_SECRET,
	redirectUri: FACEBOOK_REDIRECT_URI
});

export type Auth = typeof auth;
