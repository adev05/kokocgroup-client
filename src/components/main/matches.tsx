'use client'

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import MatchesCard from '../matches/card'
import { useEffect, useState } from 'react'
import { matchesType } from '@/app/lib/definitions'
import MatchesLoadingCard from '../matches/loading-card'

export default function Matches() {
	const [matches, setMatches] = useState<matchesType[]>([])

	useEffect(() => {
		const fetchMatches = async () => {
			try {
				const response = await fetch(
					process.env.SERVER_URL + '/v1/events?page=main'
				)

				console.log({ response })

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				console.log(data)
				// console.log({ data })

				setMatches(data)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
			}
		}

		fetchMatches()
	}, [])

	return (
		<div className='w-full container p-8 mx-auto'>
			<div className='flex flex-col md:flex-row gap-2 justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Матчи</h1>
				<Button asChild variant='secondary'>
					<Link href='/matches' className='space-x-2'>
						<span>Показать всё</span>
						<ChevronRightIcon className='size-4' />
					</Link>
				</Button>
			</div>

			<div className='grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-4'>
				{matches.length > 0
					? matches.map(item => <MatchesCard item={item} key={item.id} />)
					: new Array(4)
							.fill(0)
							.map((_, index) => <MatchesLoadingCard key={index} />)}
			</div>
		</div>
	)
}
