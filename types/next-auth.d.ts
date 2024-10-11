import { Session } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			username: string
			email: string
			first_name: string
			last_name: string
			patronymic: string
			date_of_birth: string
			phone_number: string
			avatar_url: string
			permissions: string[]
		}
		access_token: string
	}
}

import { JWT } from 'next-auth/jwt'
declare module 'next-auth/jwt' {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		access_token: string
		expires_at: string
		refresh_token: string
	}
}
