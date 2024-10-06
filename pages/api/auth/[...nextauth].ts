import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { z } from 'zod'

const userSchema = z.object({
	login: z.string().min(4),
	password: z.string().min(8),
})

export const authOptions: NextAuthOptions = {
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				return {
					...token,
					...user,
				}
			} else if (Date.now() < new Date(token.expires_at).getTime()) {
				return token
			} else {
				if (!token.refresh_token) throw new TypeError('Missing refresh_token')

				try {
					const response = await fetch(
						process.env.SERVER_URL + '/v1/users/auth/refresh',
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								Authorization: `Bearer ${token.refresh_token}`,
							},
						}
					)

					const tokensOrError = await response.json()

					if (!response.ok) throw tokensOrError

					const newTokens = tokensOrError as {
						access_token: string
						expires_at: string
						refresh_token?: string
					}

					token.access_token = newTokens.access_token
					token.expires_at = newTokens.expires_at
					if (newTokens.refresh_token) {
						token.refresh_token = newTokens.refresh_token
					}

					return token
				} catch (error) {
					console.error('Error refreshing access_token', error)
					return token
				}
			}
		},
		async session({ session, token }) {
			// session.error = token.error
			return { ...session, ...token }
		},
	},
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				login: {
					label: 'login',
					type: 'text',
				},
				password: {
					label: 'password',
					type: 'password',
				},
			},
			async authorize(credentials) {
				const parsedCredentials = userSchema.safeParse(credentials)
				if (!parsedCredentials.success) {
					return null
				}

				const { login, password } = parsedCredentials.data

				const response = await fetch(
					process.env.SERVER_URL + '/v1/users/auth/login',
					{
						method: 'POST',
						headers: {
							accept: 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ login, password }),
					}
				)

				if (!response.ok) {
					return null
				}

				const userData = await response.json()

				if (!userData) {
					return null
				}

				console.log(userData)

				return userData
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/login',
	},
	session: {
		strategy: 'jwt',
		maxAge: 15 * 60, // 15 min
	},
	events: {
		async signOut(message) {
			console.log('signOut message:', message)
			if ('token' in message) {
				await fetch(process.env.SERVER_URL + '/v1/users/auth/logout', {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${message.token.refresh_token}`,
					},
				})
			}
		},
		async session(message) {
			console.log('session message', message)
		},
	},
}
export default NextAuth(authOptions)
