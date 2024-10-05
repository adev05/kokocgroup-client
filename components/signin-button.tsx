'use client'

import { Button } from './ui/button'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export function SignIn() {
	const { status } = useSession()

	return (
		<Button asChild className='hidden xs:block'>
			<Link href='/login'>
				{status === 'authenticated' ? 'Профиль' : 'Войти'}
			</Link>
		</Button>
	)
}
