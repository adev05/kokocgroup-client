'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Logotype from './logotype'

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
		<div className='flex'>
			<header className='text-black flex mx-auto justify-between items-center p-[10px] m-[8px] w-[calc(100%-16px)] h-[60px] gap-4'>
				<Logotype variant='red' size='long' />
				<nav className='hidden lg:block'>
					{headerComponents.map(component => (
						<Link
							href={component.link}
							className={`hover:text-[#E32726] transition-colors mr-8 ${
								pathname == component.link && 'text-[#E32726]'
							}`}
							key={component.id}
						>
							{component.name}
						</Link>
					))}
				</nav>
				<div className='flex gap-4 items-center lg:w-[160px]'>
					<Link
						href='/login'
						className='rounded-xl bg-black text-white font-medium text-base h-10 content-center px-3 hidden xs:block w-[80px] ml-auto'
					>
						Войти
					</Link>
					<Bars3Icon className='size-6 xs:size-9 block lg:hidden cursor-pointer max-w-full h-auto' />
				</div>
			</header>
		</div>
	)
}
