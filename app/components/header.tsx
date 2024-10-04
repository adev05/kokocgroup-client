'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logotype from './logotype'
import { ModeToggle } from './ui/ModeToggle'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Bars3Icon } from '@heroicons/react/16/solid'

const headerComponents = [
	{
		id: 0,
		name: 'Новости',
		link: '/news',
	},
	{
		id: 1,
		name: 'Команда',
		link: '/team',
	},
	{
		id: 2,
		name: 'Матчи',
		link: '/matches',
	},
	{
		id: 3,
		name: 'Магазин',
		link: '/shop',
	},
	{
		id: 4,
		name: 'О клубе',
		link: '/about',
	},
	{
		id: 5,
		name: 'Контакты',
		link: '/contacts',
	},
]

export default function Header() {
	const pathname = usePathname()

	return (
		<header className='flex mx-auto justify-between items-center p-[10px] m-[8px] w-[calc(100%-18px)] h-[60px] gap-2 sticky top-2 bg-background z-10 rounded-2xl'>
			<Logotype variant='red' size='long' />
			<nav className='hidden lg:block'>
				{headerComponents.map(component => (
					<Button
						asChild
						variant={pathname == component.link ? 'outline' : 'ghost'}
						className='transition-colors mr-3'
						key={component.id}
					>
						<Link href={component.link}>{component.name}</Link>
					</Button>
				))}
			</nav>
			<div className='flex gap-2 items-center lg:w-[160px] justify-end'>
				<ModeToggle />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant='ghost'
							size='icon'
							className='rounded-xl flex lg:hidden'
						>
							<Bars3Icon className='h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						{headerComponents.map(component => (
							<DropdownMenuItem key={component.id} asChild>
								<Link href={component.link}>{component.name}</Link>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
				{/* <Bars3Icon className='size-6 xs:size-9 block lg:hidden cursor-pointer max-w-full h-auto' /> */}
				<Button asChild className='hidden xs:block'>
					<Link href='/login'>Войти</Link>
				</Button>
			</div>
		</header>
	)
}
