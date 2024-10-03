'use client'

import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { usePrevNextButtons } from '../ui/EmblaCarouselArrowButtons'

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
		<div className='w-full p-4 pb-0 lg:p-16 lg:pb-0 xl:p-32 xl:pb-0'>
			<div className='flex justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Матчи</h1>
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
						href='/matches'
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
			{/* <div className='flex w-full gap-6 overflow-x-auto snap-x snap-mandatory'>
				{[...new Array(10)].map((_, index) => (
					<div
						className='bg-gray-100 rounded-3xl px-8 py-6 aspect-[3/4] flex flex-col snap-start min-w-[calc((100vw-1rem-1rem))] sm:min-w-[calc((100vw-1rem-1rem-1.5rem)/2)] lg:min-w-[calc((100vw-4rem-4rem-3rem)/3)] xl:min-w-[calc((100vw-8rem-8rem-3rem)/3)] 2xl:min-w-[calc((100vw-8rem-8rem-4.5rem)/4)]'
						key={index}
					>
						<div className='flex justify-between items-center'>
							<h1 className='font-bold text-3xl xl:text-4xl'>29.09</h1>
							<p className='font text-xl xl:text-2xl'>23:59</p>
						</div>

						<div className='flex flex-col justify-evenly flex-1'>
							<div className='text-center flex flex-col'>
								<p className='text-lg truncate' title='Fonbet Кубок России'>
									Fonbet Кубок России
								</p>
								<p className='text-lg truncate' title='Групповой этап. Тур 4'>
									Групповой этап. Тур 4
								</p>
							</div>

							<div className='flex items-center justify-around gap-4'>
								<div className='flex flex-col items-center gap-4'>
									<Image
										src='https://upload.wikimedia.org/wikipedia/ru/f/f4/FC_CSKA_Moscow_Logo.svg'
										alt='cska'
										width={100}
										height={100}
										className='w-24 max-w-full h-auto aspect-square object-contain'
									/>
									<p className='text-sm xl:text-base'>ЦСКА</p>
								</div>
								<h1 className='font-semibold text-2xl xl:text-4xl'>1:5</h1>
								<div className='flex flex-col items-center gap-4'>
									<Image
										src='https://upload.wikimedia.org/wikipedia/ru/3/3b/FC_Spartak_Moscow_Logotype.svg'
										alt='spartak'
										width={100}
										height={100}
										className='w-24 max-w-full h-auto aspect-square object-contain'
									/>
									<p className='text-sm xl:text-base'>Спартак</p>
								</div>
							</div>
						</div>

						<div className='flex w-full'>
							<Link
								href='/'
								className='bg-[#E32726] hover:bg-[#B61F1E] text-white font-semibold w-full p-2 text-center rounded-xl'
							>
								Матч-центр
							</Link>
						</div>
					</div>
				))}
			</div> */}

			<div className='embla'>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container'>
						{new Array(16).fill(0).map((_, index) => (
							<div
								className='embla__slide select-none flex-[0_0_100%] md:flex-[0_0_calc(100%/3)] 2xl:flex-[0_0_calc(100%/6)]'
								key={index}
							>
								<div className='border border-[#e5e7eb] rounded-2xl aspect-[0.975] hover:bg-[#F8F8F8] cursor-pointer transition-colors'>
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

			{/* <div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-4'>
					<p className='font-semibold'>Предыдущие матчи</p>
					{new Array(3).fill(0).map((_, index) => (
						<div
							className='w-full px-8 py-4 bg-gray-100 rounded-xl grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] items-center gap-4 justify-between'
							key={index}
						>
							<div className='flex gap-4 items-center justify-between lg:justify-start lg:w-60'>
								<h1 className='font-bold text-3xl xl:text-4xl'>29.09</h1>
								<div className='flex flex-col gap-1 text-end lg:text-start'>
									<p className='font text-base leading-4'>23:59</p>
									<p className='font text-base leading-4'>Воскресенье</p>
								</div>
							</div>
							<div className='flex gap-8 items-center justify-center'>
								<div className='flex flex-col-reverse sm:flex-row items-center gap-4'>
									<p>ЦСКА</p>
									<Image
										src='https://upload.wikimedia.org/wikipedia/ru/f/f4/FC_CSKA_Moscow_Logo.svg'
										alt='cska'
										width={50}
										height={50}
										className='w-12 max-w-full h-auto aspect-square object-contain'
									/>
								</div>
								<h1 className='font-semibold text-2xl xl:text-4xl'>1:5</h1>
								<div className='flex flex-col-reverse sm:flex-row-reverse items-center gap-4'>
									<p>Спартак</p>
									<Image
										src='https://upload.wikimedia.org/wikipedia/ru/3/3b/FC_Spartak_Moscow_Logotype.svg'
										alt='cska'
										width={50}
										height={50}
										className='w-12 max-w-full h-auto aspect-square object-contain'
									/>
								</div>
							</div>
							<Link
								href='/'
								className='bg-[#000] text-white font-semibold p-2 text-center rounded-xl w-full lg:w-56'
							>
								Матч-центр
							</Link>
						</div>
					))}
					<p className='font-semibold mt-8'>Будущие матчи</p>
					{new Array(3).fill(0).map((_, index) => (
						<div
							className='w-full px-8 py-4 bg-gray-100 rounded-xl grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] items-center gap-4 justify-between'
							key={index}
						>
							<div className='flex gap-4 items-center justify-between lg:justify-start lg:w-60'>
								<h1 className='font-bold text-3xl xl:text-4xl'>18.10</h1>
								<div className='flex flex-col gap-1 text-end lg:text-start'>
									<p className='font text-base leading-4'>16:00</p>
									<p className='font text-base leading-4'>Пятница</p>
								</div>
							</div>
							<div className='flex gap-8 items-center justify-center'>
								<div className='flex flex-col-reverse sm:flex-row items-center gap-4'>
									<p>ЦСКА</p>
									<Image
										src='https://upload.wikimedia.org/wikipedia/ru/f/f4/FC_CSKA_Moscow_Logo.svg'
										alt='cska'
										width={50}
										height={50}
										className='w-12 max-w-full h-auto aspect-square object-contain'
									/>
								</div>
								<h1 className='font-semibold text-2xl xl:text-4xl'>0:0</h1>
								<div className='flex flex-col-reverse sm:flex-row-reverse items-center gap-4'>
									<p>Спартак</p>
									<Image
										src='https://upload.wikimedia.org/wikipedia/ru/3/3b/FC_Spartak_Moscow_Logotype.svg'
										alt='cska'
										width={50}
										height={50}
										className='w-12 max-w-full h-auto aspect-square object-contain'
									/>
								</div>
							</div>
							<Link
								href='/'
								className='bg-[#E32726] text-white font-semibold p-2 text-center rounded-xl w-full lg:w-56'
							>
								Купить билеты
							</Link>
						</div>
					))}
				</div>
			</div> */}
		</div>
	)
}
