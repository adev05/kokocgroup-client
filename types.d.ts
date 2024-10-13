import { userType } from '@/app/lib/definitions'
import { Session } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: userType
		access_token: string
		expires_at: string
		refresh_token: string
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
