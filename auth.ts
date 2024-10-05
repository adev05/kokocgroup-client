import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { User } from './app/lib/definitions'
import { authConfig } from './auth.config'

const userSchema = z.object({
	login: z.string().min(4),
	password: z.string().min(8),
})

async function fetchUser(
	login: string,
	password: string
): Promise<User | null> {
	try {
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

		return userData
	} catch (error) {
		console.error('Ошибка авторизации:', error)
		return null
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			authorize: async credentials => {
				const parsedCredentials = userSchema.safeParse(credentials)

				if (!parsedCredentials.success) {
					console.log('Invalid credentials:', parsedCredentials.error)
					throw new Error('Invalid credentials')
				}

				const { login, password } = parsedCredentials.data

				try {
					const user = await fetchUser(login, password)

					if (!user) {
						console.log('User not found or invalid credentials')
						throw new Error('User not found')
					}

					return user
				} catch (error) {
					console.error('Error during authorization:', error)
					throw new Error('Authorization failed')
				}
			},
		}),
	],
})
