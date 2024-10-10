import Logotype from './logotype'
import Link from 'next/link'
import VKIcon from './social/vk'
import TelegramIcon from './social/telegram'
import { Button } from './ui/button'

export default function Footer() {
	return (
		<footer className='w-full mx-auto bg-black dark:bg-transparent text-white space-y-8'>
			<div className='container p-8  grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-[auto,1fr,auto] mx-auto justify-between gap-y-4 md:gap-12 w-full'>
				<div className='space-y-4 min-w-72 text-center md:text-start'>
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

				<div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 justify-evenly text-center col-span-2 2xl:col-span-1'>
					<div className='space-y-4'>
						<p className='text-xl font-medium'>Заголовок</p>
						<div className='space-y-2'>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
						</div>
					</div>

					<div className='space-y-4'>
						<p className='text-xl font-medium'>Заголовок</p>
						<div className='space-y-2'>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
						</div>
					</div>

					<div className='space-y-4'>
						<p className='text-xl font-medium'>Заголовок</p>
						<div className='space-y-2'>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
						</div>
					</div>

					<div className='space-y-4'>
						<p className='text-xl font-medium'>Заголовок</p>
						<div className='space-y-2'>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
							<p className='text-base text-muted-foreground'>Подзаголовок</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col gap-4 justify-between min-w-72 text-center md:col-start-2 md:row-start-1 2xl:col-start-3'>
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
							{/* <Link href='/' target='_blank'>
								<Image
									src='/social/vk-video-logo.svg'
									alt=''
									width={110}
									height={24}
									quality={100}
								/>
							</Link> */}
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
