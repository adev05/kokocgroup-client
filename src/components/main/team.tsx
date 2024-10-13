// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import useEmblaCarousel from 'embla-carousel-react'
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
// import { usePrevNextButtons } from '../ui/EmblaCarouselArrowButtons'

// export default function Team() {
// 	const [emblaRef, emblaApi] = useEmblaCarousel({
// 		// dragFree: true,
// 		align: 'start',
// 	})

// 	const {
// 		prevBtnDisabled,
// 		nextBtnDisabled,
// 		onPrevButtonClick,
// 		onNextButtonClick,
// 	} = usePrevNextButtons(emblaApi)

// 	return (
// 		<div className='w-full p-4 pb-0 lg:p-16 lg:pb-0 xl:p-32 xl:pb-0'>
// 			<div className='flex justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
// 				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
// 					Команда
// 				</h1>
// 				<div className='flex border rounded-xl items-center divide-x overflow-hidden'>
// 					<div
// 						className={`p-2 cursor-pointer ${
// 							prevBtnDisabled
// 								? 'cursor-default text-gray-500'
// 								: 'hover:bg-[#F8F8F8]'
// 						}`}
// 						onClick={onPrevButtonClick}
// 					>
// 						<ChevronLeftIcon className='size-4' />
// 					</div>

// 					<Link
// 						href='/team'
// 						className='content-center p-2 text-sm leading-[1rem] text-center hover:bg-[#F8F8F8]'
// 					>
// 						Показать всё
// 					</Link>

// 					<div
// 						className={`p-2 cursor-pointer ${
// 							nextBtnDisabled
// 								? 'cursor-default text-gray-500'
// 								: 'hover:bg-[#F8F8F8]'
// 						}`}
// 						onClick={onNextButtonClick}
// 					>
// 						<ChevronRightIcon className='size-4' />
// 					</div>
// 				</div>
// 			</div>
// 			<div className='embla'>
// 				<div className='embla__viewport' ref={emblaRef}>
// 					<div className='embla__container -ml-4'>
// 						{new Array(36).fill(0).map((_, index) => (
// 							<div
// 								className='embla__slide pl-4 select-none flex-[0_0_calc(100%/2)] md:flex-[0_0_calc(100%/4)] 2xl:flex-[0_0_calc(100%/8)]'
// 								key={index}
// 							>
// 								<div className='text-center border rounded-2xl overflow-hidden'>
// 									<Image
// 										src='/player-image.png'
// 										alt=''
// 										width={300}
// 										height={300}
// 										className='aspect-square object-cover object-top mx-auto bg-[#F8F8F8] p-4 pb-0'
// 									/>
// 									<div className='px-2 py-4'>
// 										<h1 className='text-xl leading-5 font-semibold'>
// 											Имя Фамилия
// 										</h1>
// 										<h3 className='uppercase text-xs mt-2'>Главный тренер</h3>
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
