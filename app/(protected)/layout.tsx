'use client'

import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import {
	ArrowRightEndOnRectangleIcon,
	Bars3Icon,
	PencilIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import DashboardNavbar from '@/components/dashboard-navbar'
import { ModeToggle } from '@/components/ui/ModeToggle'

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { data: session, status } = useSession()

	if (status == 'loading') {
		return <div>Loading...</div>
	}

	return (
		<div className='w-full container p-8 mx-auto space-y-2 min-h-[calc(100svh-60px)]'>
			<div className='w-full bg-secondary rounded-2xl p-2 space-y-2 min-w-64'>
				<div className='w-full h-32 sm:h-48 md:h-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-2'></div>

				<div className='grid gap-y-4 md:gap-y-0 grid-cols-1 grid-rows-[auto,auto] md:grid-cols-[auto,1fr] lg:grid-cols-[auto,1fr,auto] items-center'>
					<div className='grid justify-center text-center md:text-start grid-cols-1 md:grid-cols-[auto,auto] gap-4 items-center md:ml-8'>
						{session?.user.avatar_url && (
							<Image
								src={session?.user.avatar_url}
								alt={`${session?.user.first_name} ${session?.user.last_name}`}
								width={400}
								height={400}
								className='aspect-square object-cover rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto -mt-[56px] sm:-mt-[72px] md:-mt-[88px] outline-secondary outline-4 outline'
								quality={100}
							/>
						)}
						{/* <Image
							src={session?.user.avatar_url}
							alt={`${session?.user.first_name} ${session?.user.last_name}`}
							width={400}
							height={400}
							className='aspect-square object-cover rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto -mt-[56px] sm:-mt-[72px] md:-mt-[88px] outline-secondary outline-4 outline'
							quality={100}
						/> */}
						<div className='space-y-1'>
							<h1 className='text-xl leading-5 font-medium'>{`${session?.user.first_name} ${session?.user.last_name}`}</h1>
							<h3 className='text-base leading-4 text-muted-foreground'>
								Какая то информация
							</h3>
						</div>
					</div>

					<DashboardNavbar />

					<div className='ml-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(3,auto)] gap-2 w-full md:w-auto'>
						<Button variant='outline' className='space-x-2 flex xl:hidden'>
							<Bars3Icon className='h-4 w-4' />
							<span>Действия</span>
						</Button>
						<Button variant='outline' className='space-x-2'>
							<PencilIcon className='size-4' />
							<span>Изменить</span>
						</Button>
						<Button
							variant='destructive'
							className='space-x-2 md:col-span-2'
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
