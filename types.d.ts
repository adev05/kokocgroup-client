// import { DefaultSession } from 'next-auth'
// declare module 'next-auth' {
// 	export interface UserObject {
// 		id: string
// 		username: string
// 	}
// 	export interface User {
// 		user: UserObject
// 	}
// 	export interface Session {
// 		user: UserObject
// 		access_token: string
// 		expires_at: Date
// 		refresh_token: string
// 		error: 'RefreshTokenExpired' | 'RefreshAccessTokenError'
// 	}
// }

// import { JWT } from 'next-auth/jwt'
// declare module 'next-auth/jwt' {
// 	export interface JWT {
// 		data: User
// 		access_token: string
// 		expires_at: Date
// 		refresh_token: string
// 		error: 'RefreshTokenExpired' | 'RefreshAccessTokenError'
// 	}
// }

// import NextAuth, { DefaultSession, Session, User } from 'next-auth'
// declare module 'next-auth' {
// 	interface Session {
// 		user: User
// 		access_token: string
// 		expires_at: Date
// 		refresh_token: string
// 	}
// 	interface User extends DefaultSession['user'] {
// 		username: string
// 	}
// }

// declare module 'next-auth/jwt' {
// 	/** Returned by the `jwt` callback  */
// 	interface JWT {
// 		user: User
// 		access_token: string
// 		expires_at: Date
// 		refresh_token: string
// 	}
// }

// export interface User {
// 	id: string
// 	name: string
// 	email: string
// 	access_token: string
// 	refresh_token: string
// 	expires_at: Date
// }

// export interface Token {
// 	access_token: string
// 	refresh_token: string
// 	expires_at: Date
// 	error?: string
// }

// export interface RefreshTokenResponse {
// 	access_token: string
// 	refresh_token?: string
// 	expires_at: Date // Время жизни нового access токена в секундах
// }

// declare module 'next-auth' {
// 	interface Session {
// 		user: Token
// 	}
// }

// declare module 'next-auth/jwt' {
// 	interface JWT extends Token {}
// }

// declare module 'next-auth' {
// 	/**
// 	 * The shape of the user object returned in the OAuth providers' `profile` callback,
// 	 * or the second parameter of the `session` callback, when using a database.
// 	 */
// 	interface User {}
// 	/**
// 	 * The shape of the account object returned in the OAuth providers' `account` callback,
// 	 * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
// 	 */
// 	interface Account {}

// 	/**
// 	 * Returned by `useSession`, `auth`, contains information about the active session.
// 	 */
// 	interface Session {
// 		error?: 'RefreshTokenError'
// 	}
// }

// // The `JWT` interface can be found in the `next-auth/jwt` submodule
// import { JWT } from 'next-auth/jwt'

// declare module 'next-auth/jwt' {
// 	/** Returned by the `jwt` callback and `auth`, when using JWT sessions */
// 	interface JWT {
// 		access_token: string
// 		expires_at: string
// 		refresh_token?: string
// 		error?: 'RefreshTokenError'
// 	}
// }
