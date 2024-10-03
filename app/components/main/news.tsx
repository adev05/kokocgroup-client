'use client'

import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import {
	ChatBubbleBottomCenterIcon,
	EyeIcon,
	HeartIcon,
} from '@heroicons/react/24/outline'
import { usePrevNextButtons } from '../ui/EmblaCarouselArrowButtons'
import { Button } from '@/components/ui/button'

interface newsType {
	id: number
	title: string
	image: string
	eventDate: Date // если дата > текущаяДата, то статус "Анонс"
	views: number
	type: string // трансфер, интервью, матч, пресс-релиз
}

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
					<Button
						size='icon'
						variant='outline'
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					>
						<ChevronLeftIcon className='size-4' />
					</Button>

					<Button asChild variant='outline'>
						<Link href='/news'>Показать всё</Link>
					</Button>

					<Button
						size='icon'
						variant='outline'
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					>
						<ChevronRightIcon className='size-4' />
					</Button>
				</div>
			</div>
			<div className='embla'>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container'>
						{new Array(12).fill(0).map((_, index) => (
							<div
								className='embla__slide select-none flex-[0_0_100%] md:flex-[0_0_calc(100%/3)] 2xl:flex-[0_0_calc(100%/6)] min-w-72 sm:min-w-0'
								key={index}
							>
								<div className='w-full flex flex-col justify-end overflow-hidden cursor-pointer border rounded-3xl group/item hover:bg-secondary'>
									<div className='overflow-hidden'>
										<Image
											src='/main-background.png'
											alt='news-background'
											width={1920}
											height={1080}
											className='w-full max-w-full h-auto aspect-video group-hover/item:[transform:scale3d(1.05,1.05,1.05)] transition-transform'
										/>
									</div>

									{index < 3 && (
										<div className='px-3 py-1 bg-[rgba(21,21,21,0.75)] text-white absolute top-4 right-4 text-xs rounded-lg font-medium'>
											<p>Анонс</p>
										</div>
									)}

									<div className='px-4 pb-4 pt-2'>
										<div className='flex flex-col gap-2 justify-between items-center mb-2'>
											<h3 className='line-clamp-2 font-medium'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua.
											</h3>
										</div>
										<div className='flex justify-between'>
											<div className='text-xs font-light'>
												#пресс-релиз • 15 мин назад
											</div>
											<div className='flex gap-2'>
												<div className='flex gap-1 items-center'>
													<EyeIcon className='size-4 text-gray-400' />
													<div className='text-xs font-light'>150</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
