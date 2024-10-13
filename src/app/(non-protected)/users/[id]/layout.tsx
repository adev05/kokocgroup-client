'use client'
import UsersPanel from '@/components/users/panel'

export default function UsersLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { id: number }
}) {
	return (
		<div className='w-full container p-8 mx-auto space-y-2 min-h-[calc(100svh-60px)]'>
			<UsersPanel userId={params.id} />
			<div>{children}</div>
		</div>
	)
}
