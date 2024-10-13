'use client'

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import ShopCard from '../shop/card'

export default function Shop() {
	return (
		<div className='w-full container p-8 mx-auto'>
			<div className='flex flex-col md:flex-row gap-2 justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Магазин
				</h1>
				<div className='flex items-center gap-2'>
					<Button asChild variant='secondary'>
						<Link href='/shop' className='space-x-2'>
							<span>Показать всё</span>
							<ChevronRightIcon className='size-4' />
						</Link>
					</Button>
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
				{new Array(4).fill(0).map((_, index) => (
					<ShopCard key={index} />
				))}
			</div>
		</div>
	)
}
