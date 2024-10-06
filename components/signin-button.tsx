'use client'

import { useSession } from 'next-auth/react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function SignIn() {
	const { status } = useSession()

	return (
		<Button asChild className='hidden xs:block'>
			<Link href={status == 'authenticated' ? '/dashboard' : '/login'}>
				{status == 'authenticated' ? 'Профиль' : 'Войти'}
			</Link>
		</Button>
	)
}
