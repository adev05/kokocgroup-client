import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
	pages: {
		signIn: '/login',
	},
	providers: [
		// added later in auth.ts since it requires bcrypt which is only compatible with Node.js
		// while this file is also used in non-Node.js environments
	],
	session: {
		strategy: 'jwt', // <-- make sure to use jwt here
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	callbacks: {
		async session({ token, session }) {
			session.user.id = token.user.id as string
			session.user.email = token.user.email as string
			session.user.username = token.user.username as string
			session.user.first_name = token.user.first_name as string
			session.user.last_name = token.user.last_name as string
			session.user.patronymic = token.user.patronymic as string
			session.user.date_of_birth = token.user.date_of_birth as string
			session.user.phone_number = token.user.phone_number as string
			session.access_token = token.access_token as string
			// console.log(session)
			return session
		},
		async jwt({ token, user }) {
			return { ...token, ...user }
		},
	},
} satisfies NextAuthConfig
