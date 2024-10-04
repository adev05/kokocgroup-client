'use client'

import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { EyeIcon } from '@heroicons/react/24/outline'
import { usePrevNextButtons } from '../ui/EmblaCarouselArrowButtons'
import { Button } from '@/components/ui/button'
import NewsCard from '../news/card'

// interface newsType {
// 	id: number
// 	title: string
// 	image: string
// 	eventDate: Date // если дата > текущаяДата, то статус "Анонс"
// 	views: number
// 	type: string // трансфер, интервью, матч, пресс-релиз
// }

export default function News() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
	})

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	return (
		<div className='w-full p-4 pt-8 pb-0 lg:p-16 lg:pb-0 xl:p-32 xl:pb-0'>
			<div className='flex flex-col md:flex-row gap-2 justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Новости
				</h1>
				<div className='flex items-center gap-2'>
					{/* <Button
						size='icon'
						variant='outline'
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					>
						<ChevronLeftIcon className='size-4' />
					</Button> */}

					<Button asChild variant='outline'>
						<Link href='/news'>Показать всё</Link>
					</Button>

					{/* <Button
						size='icon'
						variant='outline'
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					>
						<ChevronRightIcon className='size-4' />
					</Button> */}
				</div>
			</div>
			{/* <div className='embla'>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container'>
						{new Array(12).fill(0).map((_, index) => (
							<div
								className='embla__slide select-none flex-[0_0_100%] md:flex-[0_0_calc(100%/3)] 2xl:flex-[0_0_calc(100%/6)] min-w-72 sm:min-w-0'
								key={index}
							>
								<NewsCard />
							</div>
						))}
					</div>
				</div>
			</div> */}
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
				{new Array(8).fill(0).map((_, index) => (
					<NewsCard key={index} />
				))}
			</div>
		</div>
	)
}
