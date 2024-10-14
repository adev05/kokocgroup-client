'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

const dashboardNavbarComponents = [
	{
		id: 0,
		name: 'О себе',
		link: '',
	},
	{
		id: 1,
		name: 'Новости',
		link: '/news',
	},
	{
		id: 2,
		name: 'Матчи',
		link: '/matches',
	},
	{
		id: 3,
		name: 'Достижения',
		link: '/achievements',
	},
]

const dashboardProtectedComponents = [
	{
		id: 0,
		name: 'Управление',
		link: '/management',
		canAccess: 'management',
	},
]

export default function DashboardNavbar() {
	const pathname = usePathname()
	const { data: session } = useSession()
	const permissions = session?.user.permissions

	console.log(pathname)

	return (
		<nav className='hidden xl:block space-x-2 mx-auto'>
			{dashboardNavbarComponents.map(component => (
				<Button
					asChild
					variant={
						pathname == `/dashboard${component.link}` ? 'outline' : 'ghost'
					}
					className='transition-colors'
					key={component.id}
				>
					<Link href={`/dashboard${component.link}`}>{component.name}</Link>
				</Button>
			))}
			{dashboardProtectedComponents.map(
				component =>
					permissions?.includes(component.canAccess) && (
						<Button
							asChild
							variant={
								pathname == `/dashboard${component.link}` ? 'outline' : 'ghost'
							}
							className='transition-colors'
							key={component.id}
						>
							<Link href={`/dashboard${component.link}`}>{component.name}</Link>
						</Button>
					)
			)}
		</nav>
	)
}
