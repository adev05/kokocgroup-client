'use client'

import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { usePrevNextButtons } from '../ui/EmblaCarouselArrowButtons'
import { Button } from '@/components/ui/button'

export default function Matches() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		// dragFree: true,
		align: 'start',
	})

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	return (
		<div className='w-full container p-8 mx-auto'>
			<div className='flex flex-col md:flex-row gap-2 justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Матчи</h1>
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
						<Link href='/matches'>Показать всё</Link>
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
						{new Array(16).fill(0).map((_, index) => (
							<div
								className='embla__slide select-none flex-[0_0_calc(100%/1)] md:flex-[0_0_calc(100%/2)] xl:flex-[0_0_calc(100%/4)] min-w-64 xs:min-w-0'
								key={index}
							>
								<div className='border rounded-3xl aspect-[0.975] hover:bg-secondary cursor-pointer transition-colors'>
									<div className='flex flex-col w-full justify-center items-center py-12 px-6 gap-12 h-full'>
										<div className='mb-auto'>
											<p className='uppercase text-xs font-medium text-center line-clamp-1'>
												Fonbet Кубок России
											</p>
											<p className='uppercase text-xs font-medium text-center line-clamp-1'>
												Групповой этап. Тур 4
											</p>
										</div>
										<div className='grid grid-cols-[1fr,1fr,1fr] content-center w-full justify-evenly items-center mb-auto'>
											<div className='flex flex-col items-center gap-4'>
												<Image
													src='/pfc-cska-moscow-logo.png'
													alt='pfc-cska-moscow-logo'
													width={150}
													height={150}
													className='w-full h-auto aspect-square object-contain'
												/>
												<p className='text-sm uppercase'>ЦСКА</p>
											</div>
											{index < 5 ? (
												<div className='font-bold w-8 text-center text-xl mx-auto'>
													1:5
												</div>
											) : (
												<div className='font-bold w-8 text-center text-xl mx-auto'>
													VS
												</div>
											)}
											<div className='flex flex-col items-center gap-4'>
												<Image
													src='/fc-spartak-moscow-logo.png'
													alt='fc-spartak-moscow-logo'
													width={150}
													height={150}
													className='w-full h-auto aspect-square object-contain'
												/>
												<p className='text-sm uppercase'>Спартак</p>
											</div>
										</div>
									</div>
									<hr />
									<div className='p-3 text-center text-sm'>
										<p>Пятница</p>
										<p>22 сентября 2024</p>
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
