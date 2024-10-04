'use client'

import { auth } from '@/auth'
import { Button } from './ui/button'
import Link from 'next/link'

export async function SignIn() {
	const session = await auth()
	return (
		<Button asChild className='hidden xs:block'>
			<Link href='/login'>{session?.user ? 'Профиль' : 'Войти'}</Link>
		</Button>
	)
}
