// 'use client'

// import { SignOut } from '@/components/signout-button'
// import { useSession } from 'next-auth/react'

// export default function Dashboard() {
// 	const { data: session, status } = useSession()

// 	if (status === 'loading') return <div>Loading...</div>

// 	if (!session) return <div>{status}</div>

// 	return (
// 		<>
// 			<p>Dashboard</p>
// 			<pre>{JSON.stringify(session, null, 2)}</pre>
// 			<SignOut />
// 		</>
// 	)
// }

import { auth } from '@/auth'
import { SignOut } from '@/components/signout-button'

export default async function Dashboard() {
	const session = await auth()

	if (!session) return null

	return (
		<div className='h-[calc(100svh-76px)]'>
			<p>Dashboard</p>
			<pre>{JSON.stringify(session, null, 2)}</pre>
			<SignOut />
		</div>
	)
}
