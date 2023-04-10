/// <reference types="lucia-auth" />
declare namespace Lucia {
	type Auth = import('$lib/server/lucia.ts').Auth;
	type UserAttributes = {
		username: string;
	};
}

declare global {
	namespace App {
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
