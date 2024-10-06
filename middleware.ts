import { NextRequest, NextResponse } from 'next/server'
import {
	apiAuthPrefix,
	authRoutes,
	DEFAULT_LOGIN_REDIRECT,
	publicRoutes,
} from './app/lib/routes'
import { getToken } from 'next-auth/jwt'

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
