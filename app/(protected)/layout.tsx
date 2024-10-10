'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import {
	ArrowRightEndOnRectangleIcon,
	PencilIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import DashboardNavbar from '@/components/dashboard-navbar'

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='w-full container p-8 mx-auto space-y-2 min-h-[calc(100svh-60px)]'>
			<div className='w-full bg-secondary rounded-2xl p-2 space-y-2'>
				<div className='w-full aspect-[16/2] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl'></div>
				<div className='flex items-center justify-between'>
					<div className='flex gap-4 items-center'>
						<Image
							src='https://starryai.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/61554cf069663530fc823d21/6369fed004b5b041b7ed686a_download-8-min.png'
							alt='avatar'
							width={96}
							height={96}
							className='aspect-square object-cover rounded-xl'
						/>
						<div className='space-y-1'>
							<h1 className='text-xl leading-5 font-medium'>Имя Фамилия</h1>
							<h3 className='text-base leading-4 text-muted-foreground'>
								Какая то информация
							</h3>
						</div>
					</div>
					<DashboardNavbar />
					{/* <div className='space-x-2'>
						<Button variant='ghost'>Новости</Button>
						<Button variant='outline'>Матчи</Button>
						<Button variant='ghost'>Достижения</Button>
					</div> */}
					<div className='space-x-2'>
						<Button variant='outline' className='space-x-2'>
							<PencilIcon className='size-4' />
							<span>Изменить</span>
						</Button>
						<Button
							variant='destructive'
							className='space-x-2'
							onClick={() => signOut()}
						>
							<ArrowRightEndOnRectangleIcon className='size-4' />
							<span>Выйти</span>
						</Button>
					</div>
				</div>
			</div>
			<div>{children}</div>
		</div>
	)
}
