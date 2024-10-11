'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

const dashboardNavbarComponents = [
	{
		id: 0,
		name: 'Главная',
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

export default function DashboardNavbar() {
	const pathname = usePathname()

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
		</nav>
	)
}
