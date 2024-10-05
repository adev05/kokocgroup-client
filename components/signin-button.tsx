// 'use client'

import { auth } from '@/auth'
import { Button } from './ui/button'
import Link from 'next/link'

// import { Button } from './ui/button'
// import Link from 'next/link'
// import { useSession } from 'next-auth/react'

// export function SignIn() {
// 	const { status } = useSession()

// 	return (
// <Button asChild className='hidden xs:block'>
// 	<Link href='/login'>
// 		{status === 'authenticated' ? 'Профиль' : 'Войти'}
// 	</Link>
// </Button>
// 	)
// }

export default async function SignIn() {
	const session = await auth()

	if (!session)
		return (
			<Button asChild className='hidden xs:block'>
				<Link href='/login'>Войти</Link>
			</Button>
		)

	return (
		<Button asChild className='hidden xs:block'>
			<Link href='/dashboard'>Профиль</Link>
		</Button>
	)
}
