'use client'

import { Button } from '@/components/ui/button'
import NewsCard from '../news/card'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { newsType } from '@/app/lib/definitions'

export default function News() {
	const [news, setNews] = useState<newsType[]>([])

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch(
					process.env.SERVER_URL + '/v1/news?limit=8&offset=0'
				)

				console.log({ response })

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				console.log(data)
				// console.log({ data })

				setNews(data)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
			}
		}

		fetchNews()
	}, [])

	return (
		<div className='w-full container p-8 mx-auto'>
			<div className='flex flex-col md:flex-row gap-2 justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Новости
				</h1>
				<div className='flex items-center gap-2'>
					<Button asChild variant='secondary'>
						<Link href='/news' className='space-x-2'>
							<span>Показать всё</span>
							<ChevronRightIcon className='size-4' />
						</Link>
					</Button>
				</div>
			</div>
			<div className='grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 gap-4'>
				{news.map(item => (
					<NewsCard item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}
