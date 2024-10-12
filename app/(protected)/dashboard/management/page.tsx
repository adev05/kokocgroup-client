'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function DashboardManagementPage() {
	const { data: session } = useSession()
	const router = useRouter()
	const permissions = session?.user.permissions

	if (!permissions?.includes('management')) {
		router.push('/dashboard')
	}

	return (
		<>
			{session?.user.permissions.map((permission, index) => (
				<div key={index}>{permission}</div>
			))}
		</>
	)
}
