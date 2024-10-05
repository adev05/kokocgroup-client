declare module 'next-auth' {
	/**
	 * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			/** The user's postal address. */
			username: string
			first_name: string
			last_name: string
			patronymic: string
			date_of_birth: string
			phone_number: string
			/**
			 * By default, TypeScript merges new interface properties and overwrites existing ones.
			 * In this case, the default session user properties will be overwritten,
			 * with the new ones defined above. To keep the default session user properties,
			 * you need to add them back into the newly declared interface.
			 */
		} & DefaultSession['user']
		access_token: string
	}
}

import { JWT } from 'next-auth/jwt'
declare module 'next-auth/jwt' {
	interface JWT {
		user: {
			/** The user's postal address. */
			username: string
			first_name: string
			last_name: string
			patronymic: string
			date_of_birth: string
			phone_number: string
			/**
			 * By default, TypeScript merges new interface properties and overwrites existing ones.
			 * In this case, the default session user properties will be overwritten,
			 * with the new ones defined above. To keep the default session user properties,
			 * you need to add them back into the newly declared interface.
			 */
		} & DefaultSession['user']
		access_token: string
	}
}
