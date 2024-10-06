// import { RefreshTokenResponse, Token } from '@/types'

// export async function refreshAccessToken(token: Token): Promise<Token> {
// 	try {
// 		const response = await fetch(
// 			process.env.SERVER_URL + '/v1/users/auth/refresh',
// 			{
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 					Authorization: `Bearer ${token.refresh_token}`,
// 				},
// 			}
// 		)

// 		const refreshedTokens: RefreshTokenResponse = await response.json()

// 		if (!response.ok) {
// 			throw new Error('Refresh token is no longer valid')
// 		}

// 		console.log('refreshedTokens', refreshedTokens, response.ok)

// 		return {
// 			...token,
// 			access_token: refreshedTokens.access_token,
// 			expires_at: refreshedTokens.expires_at, // время истечения нового access токена
// 			refresh_token: refreshedTokens.refresh_token ?? token.refresh_token, // обновляем только если сервер вернул новый refreshToken
// 		}
// 	} catch (error) {
// 		console.error('Error refreshing access token', error)
// 		return { ...token, error: 'RefreshAccessTokenError' }
// 	}
// }
