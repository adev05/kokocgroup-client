'use client'

import { SignOut } from '@/components/signout-button'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function Dashboard() {
	const { data: session, status, update } = useSession()

	console.log('Dashboard')

	useEffect(() => {
		console.log('Dashboard update')
	}, [status])

	if (status === 'loading') return <div>Loading...</div>

	if (!session) return <div>{status}</div>

	return (
		<>
			<p>Dashboard</p>
			<pre>{JSON.stringify(session, null, 2)}</pre>
			<SignOut />
		</>
	)
}
