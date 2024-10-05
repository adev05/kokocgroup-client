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
		maxAge: 15 * 60, // 15 mins
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				console.log('token:', token, 'user: ', user)
				// token.user = {}
				// token.user = user.user
				token.user.id = user.user.id
				token.user.email = user.user.email
				token.user.username = user.user.username
				token.user.first_name = user.user.first_name
				token.user.last_name = user.user.last_name
				token.user.patronymic = user.user.patronymic
				token.user.date_of_birth = user.user.date_of_birth
				token.user.phone_number = user.user.phone_number
				token.access_token = user.access_token
				token.refresh_token = user.refresh_token
			}
			console.log('new token:', token)
			const now = Date.now()
			const isTokenExpired =
				token.access_token.expire_date &&
				now > new Date(token.access_token.expire_date).getTime()

			if (isTokenExpired && token.refresh_token) {
				console.log('token expired')
				const refreshedToken = await fetch(
					process.env.SERVER_URL + '/v1/users/auth/refresh',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ token: token.refresh_token.token }),
					}
				).then(res => res.json())

				console.log(refreshedToken)

				if (refreshedToken.access_token) {
					token.access_token.token = refreshedToken.access_token.token
					token.access_token.expire_date = new Date(
						refreshedToken.access_token.token.expire_date
					)
				}
			}
			return token
		},
		async session({ token, session }) {
			if (token) {
				session.user = token.user
				session.access_token = token.access_token
				session.refresh_token = token.refresh_token
			}
			console.log('session:', session, 'token:', token)
			return session
		},
	},
	secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig
