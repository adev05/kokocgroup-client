'use client'

import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const elements = [
	{
		id: 1,
		name: 'Новости',
		link: '/news',
		canAccess: [
			'delete_news',
			'view_sheduled_news',
			'create_news',
			'edit_news',
			'view_deleted_news',
		],
	},
	{
		id: 2,
		name: 'Команда',
		link: '/team',
		canAccess: [
			'delete_team',
			'edit_team',
			'create_team',
			'edit_team_member',
			'delete_team_member',
			'add_team_member',
		],
	},
	{
		id: 3,
		name: 'Матчи',
		link: '/matches',
		canAccess: ['create_event', 'edit_event'],
	},
	{
		id: 4,
		name: 'Магазин',
		link: '/shop',
		canAccess: ['edit_store_item', 'delete_store_item', 'create_store_item'],
	},
]

export default function ManagementAside() {
	const { data: session } = useSession()
	return (
		<div className='w-64 bg-secondary rounded-2xl p-4'>
			<div className='space-y-2'>
				{elements.map(
					(element, index) =>
						session?.user.permissions.some(item =>
							element.canAccess.includes(item)
						) && (
							<Button variant='ghost' className='w-full' asChild key={index}>
								<Link href={`/dashboard/management${element.link}`}>
									{element.name}
								</Link>
							</Button>
						)
				)}
			</div>
		</div>
	)
}
