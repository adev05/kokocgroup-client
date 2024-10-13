import Logotype from './logotype'
import Link from 'next/link'
import VKIcon from './social/vk'
import TelegramIcon from './social/telegram'
import { Button } from './ui/button'
import { headerComponents } from './header'

export default function Footer() {
	return (
		<footer className='w-full mx-auto bg-black dark:bg-transparent text-white space-y-8'>
			<div className='container p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto,1fr,auto] mx-auto justify-between gap-y-4 md:gap-12 w-full'>
				<div className='space-y-4 text-center md:text-start min-w-64 sm:min-w-fit'>
					<div className='space-y-4 flex justify-center md:justify-start'>
						<Logotype variant='light' size='long' />
					</div>
					<div className='space-y-2'>
						<p className='text-sm text-muted-foreground'>Адрес:</p>
						<p className='text-sm'>
							г. Москва, 127051, Цветной Бульвар, 30 стр.1
						</p>
					</div>
					<div className='space-y-2'>
						<p className='text-sm text-muted-foreground'>Телефон:</p>
						<p className='text-sm'>+7 (495) 30 80 110</p>
					</div>
				</div>

				<div className='grid col-span-2 xl:col-span-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-4 min-w-64 sm:min-w-fit'>
					{headerComponents.map(component => (
						<Button
							asChild
							variant='ghost'
							className='transition-colors'
							key={component.id}
						>
							<Link href={component.link}>{component.name}</Link>
						</Button>
					))}
				</div>

				<div className='flex flex-col gap-4 justify-between min-w-64 sm:min-w-fit text-center md:col-start-2 md:row-start-1 xl:col-start-3'>
					<div className='space-y-2'>
						<p className='text-sm text-muted-foreground'>
							Разработано студией:
						</p>
						<h1 className='text-4xl font-semibold'>SkyDevs</h1>
					</div>
					<div className='space-y-2'>
						<p className='text-sm text-muted-foreground'>Социальные сети:</p>
						<div className='flex items-center gap-2 justify-center'>
							<Button asChild>
								<Link href='/' target='_blank'>
									<VKIcon />
								</Link>
							</Button>
							<Button asChild>
								<Link href='https://t.me/fckokocgroup' target='_blank'>
									<TelegramIcon />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
			{/* <p className='text-sm text-center md:text-start'>
				© 2024 Футбольный клуб «Кокос Групп»{' '}
			</p> */}
		</footer>
	)
}
