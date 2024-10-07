'use client'

import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { usePrevNextButtons } from '../ui/EmblaCarouselArrowButtons'
import { Button } from '@/components/ui/button'

export default function Shop() {
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
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Магазин
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
						<Link href='/shop'>Показать всё</Link>
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
								className='embla__slide select-none flex-[0_0_calc(100%/1)] md:flex-[0_0_calc(100%/2)] xl:flex-[0_0_calc(100%/4)] min-w-72 xs:min-w-0'
								key={index}
							>
								<div className='border flex flex-col rounded-2xl overflow-hidden'>
									<Image
										src='/main-background.png'
										alt='shop-item image'
										width={1000}
										height={1000}
										className='w-full aspect-square object-cover'
									/>
									<div className='py-4 px-6 flex flex-col gap-6'>
										<h1 className='font-medium text-lg line-clamp-2'>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry.
										</h1>
										<h1 className='font-semibold text-xl line-clamp-2'>
											22 200₽
										</h1>

										<Button asChild>
											<Link href='/'>Купить</Link>
										</Button>
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
