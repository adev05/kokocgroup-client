// async function verifyToken(token: string, publicKeyBase64: string) {
// 	try {
// 		const publicKey = await importSPKI(
// 			Buffer.from(publicKeyBase64, 'base64').toString('utf-8'),
// 			'RS256'
// 		)
// 		const { payload } = await jwtVerify(token, publicKey, {
// 			algorithms: ['RS256'],
// 		})
// 		return payload as UserFrontJwtPayload
// 	} catch (error) {
// 		console.log('JWT verification failed:', error)
// 		return null
// 	}
// }

import { NextRequest, NextResponse } from 'next/server'
import {
	apiAuthPrefix,
	authRoutes,
	DEFAULT_LOGIN_REDIRECT,
	publicRoutes,
} from './app/lib/routes'
import { getToken } from 'next-auth/jwt'

// import { NextRequest, NextResponse } from "next/server"

// const pathsToExclude =
// 	/^(?!\/(api|_next\/static|favicon\.ico|manifest|icon|static|mergn)).*$/
// const publicPagesSet = new Set<string>(['/home'])
// const privatePagesSet = new Set<string>(['/dashboard'])
// const rootRegex = /^\/($|\?.+|#.+)?$/

// export default async function middleware(req: NextRequest) {
// 	if (
// 		!pathsToExclude.test(req.nextUrl.pathname) ||
// 		publicPagesSet.has(req.nextUrl.pathname)
// 	) {
// 		return NextResponse.next()
// 	}

// 	const accessToken = req.cookies.get(`access.${WORKSPACE_ID}`)?.value
// 	const decoded = accessToken
// 		? await verifyToken(accessToken, JWT_PUBLIC_KEY_BASE64)
// 		: null
// 	const isAuthenticated = decoded && decoded.userId

// 	if (rootRegex.test(req.nextUrl.pathname)) {
// 		return isAuthenticated
// 			? NextResponse.redirect(new URL('/dashboard', req.url))
// 			: NextResponse.redirect(new URL('/login', req.url))
// 	}

// 	if (privatePagesSet.has(req.nextUrl.pathname) && !isAuthenticated) {
// 		return NextResponse.redirect(new URL('/login', req.url))
// 	}

// 	if (req.nextUrl.pathname.startsWith('/login') && isAuthenticated) {
// 		return NextResponse.redirect(new URL('/dashboard', req.url))
// 	}
// }
export default async function middleware(req: NextRequest) {
	const { nextUrl } = req
	const token = await getToken({ req })
	const isLoggedIn = !!token

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
	const isAuthRoute = authRoutes.includes(nextUrl.pathname)

	if (isApiAuthRoute) {
		return NextResponse.next()
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
		}
		return NextResponse.next()
	}

	if (!isLoggedIn && !isPublicRoute) {
		return NextResponse.redirect(new URL('/', nextUrl))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
