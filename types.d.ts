import NextAuth, { DefaultSession } from 'next-auth'
declare module 'next-auth' {
	interface User extends UserInterface {}
	interface Session extends UserInterface {
		access_token: {
			token: string
			expire_date: Date
		}
		refresh_token: {
			token: string
			expire_date: Date
		}
	}
}

interface UserInterface {
	id: string
	email: string
	username: string
	first_name: string
	last_name: string
	patronymic: string
	date_of_birth: string
	phone_number: string
}

declare module 'next-auth/adapters' {
	interface AdapterUser extends UserInterface {}
}

import { JWT } from 'next-auth/jwt'
declare module 'next-auth/jwt' {
	interface JWT extends UserInterface {
		access_token: {
			token: string
			expire_date: Date
		}
		refresh_token: {
			token: string
			expire_date: Date
		}
	}
}
