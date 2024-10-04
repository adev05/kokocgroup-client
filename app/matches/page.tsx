import Link from 'next/link'
import Image from 'next/image'

export default function MatchesPage() {
	return (
		<div className='w-full px-4 py-2 lg:px-16 lg:py-8 xl:px-32 xl:py-16'>
			<div className='flex justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Матчи</h1>
				<div className='text-sm lg:text-base xl:text-xl text-end'>фильтр</div>
			</div>

			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-4'>
					<p className='font-semibold'>Август</p>
					{new Array(3).fill(0).map((_, index) => (
						<div
							className='w-full px-8 py-4 bg-gray-100 rounded-xl grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] items-center gap-4 justify-between'
							key={index}
						>
							<div className='flex flex-col justify-between'>
								<h1 className='font-bold text-xl xl:text-2xl'>14:00</h1>
								<p className='font text-base leading-4'>12 апр</p>
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
					<p className='font-semibold'>Сентябрь</p>
					{new Array(6).fill(0).map((_, index) => (
						<div
							className='w-full px-8 py-4 bg-gray-100 rounded-xl grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] items-center gap-4 justify-between'
							key={index}
						>
							<div className='flex gap-4 items-center justify-between'>
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
					<p className='font-semibold mt-8'>Октябрь</p>
					{new Array(5).fill(0).map((_, index) => (
						<div
							className='w-full px-8 py-4 bg-gray-100 rounded-xl grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] items-center gap-4 justify-between'
							key={index}
						>
							<div className='flex gap-4 items-center justify-between'>
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
			</div>
		</div>
	)
}
