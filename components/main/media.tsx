'use client'

import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { usePrevNextButtons } from '../ui/EmblaCarouselArrowButtons'

export default function Media() {
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
		<div className='w-full p-4 pb-0 lg:p-16 lg:pb-0 xl:p-32 xl:pb-0'>
			<div className='flex justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Медиа</h1>
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
						href='/media'
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
			{/* <div className='flex gap-4'>
				<div className='bg-black rounded-xl aspect-video w-full'></div>
				<div className='w-1/4'>
					<div className='bg-red-500 h-8'></div>
					<p>2</p>
					<p>3</p>
				</div>
			</div> */}
			<div className='embla'>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container'>
						{new Array(12).fill(0).map((_, index) => (
							<div
								className='embla__slide select-none flex-[0_0_100%] md:flex-[0_0_calc(100%/3)] 2xl:flex-[0_0_calc(100%/6)]'
								key={index}
							>
								<div className='w-full flex gap-2 flex-col justify-end overflow-hidden cursor-pointer'>
									<div className='relative'>
										<Image
											src='/main-background.png'
											alt='news-background'
											width={1920}
											height={1080}
											className='w-full max-w-full h-auto aspect-video rounded-3xl'
										/>
										<div className='absolute bottom-3 right-4 bg-[rgba(21,21,21,0.75)] text-white py-1 px-3 text-sm font-medium rounded-xl'>
											15:00
										</div>
									</div>
									<div className='flex justify-between items-center'>
										<h3 className='line-clamp-2 font-medium'>
											Разгромная победа над «Альпикой» (12:1) по техническим
											причинам осталась незаслуженно обделена зрительским
											вниманием.
										</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
				{new Array(4).fill(0).map((_, index) => (
					<div
						className='w-full flex gap-2 flex-col justify-end overflow-hidden cursor-pointer'
						key={index}
					>
						<div className='relative'>
							<Image
								src='/main-background.png'
								alt='news-background'
								width={1920}
								height={1080}
								className='w-full max-w-full h-auto aspect-video rounded-3xl'
							/>
							<div className='absolute bottom-3 right-4 bg-[rgba(21,21,21,0.75)] text-white py-1 px-3 text-sm font-medium rounded-xl'>
								15:00
							</div>
						</div>
						<div className='flex justify-between items-center'>
							<h3 className='line-clamp-2 font-semibold'>
								Разгромная победа над «Альпикой» (12:1) по техническим причинам
								осталась незаслуженно обделена зрительским вниманием.
							</h3>
						</div>
					</div>
				))}
			</div> */}
		</div>
	)
}
