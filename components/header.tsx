import Link from 'next/link'
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
import SignIn from './signin-button'
import Navbar from './navbar'

export const headerComponents = [
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
	return (
		<header className='flex mx-auto justify-between items-center p-[10px] m-[8px] w-[calc(100%-18px)] h-[60px] gap-2 sticky top-2 bg-background z-10 rounded-2xl'>
			<Logotype variant='red' size='long' />
			<Navbar />
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
				<SignIn />
			</div>
		</header>
	)
}
