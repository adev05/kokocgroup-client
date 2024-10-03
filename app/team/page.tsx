import Header from '../components/header'
import Image from 'next/image'

export default function TeamPage() {
	return (
		<>
			<Header />
			<div className='w-full px-4 py-2 lg:px-16 lg:py-8 xl:px-32 xl:py-16'>
				<div className='flex justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
					<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
						Команда
					</h1>
					<div className='text-sm lg:text-base xl:text-xl text-end'>фильтр</div>
				</div>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-4'>
						<p className='font-semibold'>Тренерский штаб</p>
						<div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
							{new Array(12).fill(0).map((_, index) => (
								<div
									className='embla__slide pl-4 select-none flex-[0_0_calc(100%/2)] md:flex-[0_0_calc(100%/4)] 2xl:flex-[0_0_calc(100%/8)]'
									key={index}
								>
									<div className='text-center border rounded-2xl overflow-hidden'>
										<Image
											src='/player-image.png'
											alt=''
											width={300}
											height={300}
											className='aspect-square object-cover object-top mx-auto bg-[#F8F8F8] p-4 pb-0 w-full'
										/>
										<div className='px-2 py-4'>
											<h1 className='text-xl leading-5 font-semibold'>
												Имя Фамилия
											</h1>
											<h3 className='uppercase text-xs mt-2'>Главный тренер</h3>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<p className='font-semibold'>Медицинский штаб</p>
						<div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
							{new Array(12).fill(0).map((_, index) => (
								<div
									className='embla__slide pl-4 select-none flex-[0_0_calc(100%/2)] md:flex-[0_0_calc(100%/4)] 2xl:flex-[0_0_calc(100%/8)]'
									key={index}
								>
									<div className='text-center border rounded-2xl overflow-hidden'>
										<Image
											src='/player-image.png'
											alt=''
											width={300}
											height={300}
											className='aspect-square object-cover object-top mx-auto bg-[#F8F8F8] p-4 pb-0 w-full'
										/>
										<div className='px-2 py-4'>
											<h1 className='text-xl leading-5 font-semibold'>
												Имя Фамилия
											</h1>
											<h3 className='uppercase text-xs mt-2'>Главный медик</h3>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
