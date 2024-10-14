'use client'
import ManagementAside from '@/components/dashboard/management/aside'
import { useSession } from 'next-auth/react'

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
		<div className='w-full container grid grid-cols-[auto,1fr] gap-2 min-h-[calc(100svh-60px-352px-8px-64px)]'>
			<ManagementAside />
			<div className='w-full h-full bg-secondary rounded-2xl p-8'>
				{children}
			</div>
		</div>
	)
}
