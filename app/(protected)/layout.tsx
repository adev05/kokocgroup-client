'use client'
import { useSession } from 'next-auth/react'
import DashboardPanel from '@/components/dashboard/panel'

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { status } = useSession()

	if (status == 'loading') {
		return <div>Loading...</div>
	}

	return (
		<div className='w-full container p-8 mx-auto space-y-2 min-h-[calc(100svh-60px)]'>
			<DashboardPanel />
			<div>{children}</div>
		</div>
	)
}
