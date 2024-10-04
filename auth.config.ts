import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
	pages: {
		signIn: '/login',
	},
	providers: [
		// added later in auth.ts since it requires bcrypt which is only compatible with Node.js
		// while this file is also used in non-Node.js environments
	],
	callbacks: {
		async session({ token, session }) {
			session.user.id = token.id as string
			session.user.username = token.username as string
			session.user.first_name = token.first_name as string
			session.user.last_name = token.last_name as string
			session.user.patronymic = token.patronymic as string
			session.user.date_of_birth = token.date_of_birth as string
			session.user.phone_number = token.phone_number as string
			return session
		},
		async jwt({ token, user, trigger }) {
			return { ...token, ...user }
		},
	},
} satisfies NextAuthConfig
