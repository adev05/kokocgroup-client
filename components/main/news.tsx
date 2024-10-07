'use client'

import { Button } from '@/components/ui/button'
import NewsCard from '../news/card'
import Link from 'next/link'
import { news } from '@/app/lib/placeholder-data'

export default function News() {
	return (
		<div className='w-full container p-8 mx-auto'>
			<div className='flex flex-col md:flex-row gap-2 justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Новости
				</h1>
				<div className='flex items-center gap-2'>
					<Button asChild variant='outline'>
						<Link href='/news'>Показать всё</Link>
					</Button>
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
				{news.slice(0, 8).map(item => (
					<NewsCard item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}
