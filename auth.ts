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
			throw new Error('Failed to fetch user.')
		}

		const userData = await response.json()

		if (!userData) {
			throw new Error('Failed to fetch user.')
		}

		return userData
	} catch (error) {
		console.error('Failed to fetch user:', error)
		return null
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			authorize: async credentials => {
				// Валидация входных данных с помощью схемы
				const parsedCredentials = userSchema.safeParse(credentials)

				if (!parsedCredentials.success) {
					console.log('Invalid credentials:', parsedCredentials.error)
					throw new Error('Invalid credentials') // Используем исключение, как указано в примере
				}

				const { login, password } = parsedCredentials.data

				try {
					// Здесь также можно использовать оригинальный запрос `request`, если нужно
					// Например, для извлечения дополнительных данных из заголовков, куки и т.д.

					// Вызов функции для получения пользователя
					const user = await fetchUser(login, password)

					if (!user) {
						console.log('User not found or invalid credentials')
						throw new Error('User not found') // Бросаем ошибку, если пользователь не найден
					}

					// Возвращаем пользователя при успешной авторизации
					return user
				} catch (error) {
					console.error('Error during authorization:', error)
					throw new Error('Authorization failed') // Бросаем общее исключение при ошибке
				}
			},
		}),
	],
})
