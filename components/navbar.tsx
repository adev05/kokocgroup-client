'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { headerComponents } from './header'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const pathname = usePathname()

	return (
		<nav className='hidden lg:block space-x-2'>
			{headerComponents.map(component => (
				<Button
					asChild
					variant={pathname == component.link ? 'outline' : 'ghost'}
					className='transition-colors'
					key={component.id}
				>
					<Link href={component.link}>{component.name}</Link>
				</Button>
			))}
		</nav>
	)
}
