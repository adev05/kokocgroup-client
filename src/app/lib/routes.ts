export const publicRoutes = [
	'/',
	'/news',
	'/team',
	'/matches',
	'/shop',
	'/about',
	'/contacts',
]

export const regexpPublicRoutes = [
	/^\/(|news|team|matches|shop|about|contacts)(?!\.)$/,
	/^\/news(?:\/([^\/\.]+))?$/,
	/^\/matches(?:\/([^\/\.]+))?$/,
	/^\/users(?:\/([^\/\.]+))?$/,
]

export const authRoutes = ['/login', '/register']

export const apiAuthPrefix = '/api/auth'

export const DEFAULT_LOGIN_REDIRECT = '/dashboard'
