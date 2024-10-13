'use client'

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import MatchesCard from '../matches/card'

export default function Matches() {
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
				{new Array(4).fill(0).map((_, index) => (
					<MatchesCard key={index} />
				))}
			</div>
		</div>
	)
}
