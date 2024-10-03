'use client'

import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { usePrevNextButtons } from '../ui/EmblaCarouselArrowButtons'

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
		<div className='w-full p-4 lg:p-16 xl:p-32'>
			<div className='flex justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Магазин
				</h1>
				<div className='flex border rounded-xl items-center divide-x overflow-hidden'>
					<div
						className={`p-2 cursor-pointer ${
							prevBtnDisabled
								? 'cursor-default text-gray-500'
								: 'hover:bg-[#F8F8F8]'
						}`}
						onClick={onPrevButtonClick}
					>
						<ChevronLeftIcon className='size-4' />
					</div>

					<Link
						href='/shop'
						className='content-center p-2 text-sm leading-[1rem] text-center hover:bg-[#F8F8F8]'
					>
						Показать всё
					</Link>

					<div
						className={`p-2 cursor-pointer ${
							nextBtnDisabled
								? 'cursor-default text-gray-500'
								: 'hover:bg-[#F8F8F8]'
						}`}
						onClick={onNextButtonClick}
					>
						<ChevronRightIcon className='size-4' />
					</div>
				</div>
			</div>
			<div className='embla'>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container'>
						{new Array(12).fill(0).map((_, index) => (
							<div
								className='embla__slide select-none flex-[0_0_calc(100%/2)] md:flex-[0_0_calc(100%/3)] 2xl:flex-[0_0_calc(100%/6)]'
								key={index}
							>
								<div className='flex flex-col rounded-xl overflow-hidden bg-[#F8F8F8]'>
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
										<Link
											href='/'
											className='bg-[#E32726] text-white font-semibold p-2 text-center rounded-xl w-full'
										>
											Купить
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-6'>
				{new Array(6).fill(0).map((_, index) => (
					<div
						className='flex flex-col rounded-xl overflow-hidden bg-[#F8F8F8]'
						key={index}
					>
						<Image
							src='/main-background.png'
							alt='shop-item image'
							width={1000}
							height={1000}
							className='w-full aspect-square object-cover'
						/>
						<div className='py-4 px-6 flex flex-col gap-6'>
							<h1 className='font-medium text-lg line-clamp-2'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</h1>
							<h1 className='font-semibold text-xl line-clamp-2'>22 200₽</h1>
							<Link
								href='/'
								className='bg-[#E32726] text-white font-semibold p-2 text-center rounded-xl w-full'
							>
								Купить
							</Link>
						</div>
					</div>
				))}
			</div> */}
		</div>
	)
}
