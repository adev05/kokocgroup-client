'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

const usersNavbarComponents = [
	{
		id: 0,
		name: 'Главная',
		link: '',
	},
	{
		id: 1,
		name: 'Достижения',
		link: '/achievements',
	},
]

export default function UsersNavbar({ userId }: { userId: number }) {
	const pathname = usePathname()

	console.log(pathname)

	return (
		<nav className='space-x-2 mx-auto'>
			{usersNavbarComponents.map(component => (
				<Button
					asChild
					variant={
						pathname == `/users/${userId}${component.link}`
							? 'outline'
							: 'ghost'
					}
					className='transition-colors'
					key={component.id}
				>
					<Link href={`/users/${userId}${component.link}`}>
						{component.name}
					</Link>
				</Button>
			))}
		</nav>
	)
}
