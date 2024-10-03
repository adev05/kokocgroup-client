import Link from 'next/link'
import Image from 'next/image'

export default function TournamentTable() {
	return (
		<div className='w-full p-4 pb-0 lg:p-16 lg:pb-0 xl:p-32 xl:pb-0'>
			<div className='flex justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Турнирная таблица
				</h1>
				{/* <Link href='/news' className='text-sm lg:text-base xl:text-xl text-end'>
					показать всё
				</Link> */}
			</div>
			<div className='w-full flex flex-col'>
				<div className='w-full bg-[#F8F8F8] rounded-xl flex items-center px-8 py-4 justify-between font-medium gap-8 text-center'>
					<p className='w-4 hidden lg:block'>#</p>
					<p className='lg:w-1/4 text-start lg:text-center'>Команда</p>
					<p>Очки</p>
					<p className='hidden lg:block'>И</p>
					<p className='hidden lg:block'>В</p>
					<p className='hidden lg:block'>Н</p>
					<p className='hidden lg:block'>П</p>
					<p className='hidden lg:block'>ГЗ</p>
					<p className='hidden lg:block'>ГП</p>
					<p className='hidden lg:block'>РГ</p>
				</div>
				{[...new Array(10)].map((_, index) => (
					<div
						className={`w-full rounded-xl flex items-center px-8 py-4 justify-between gap-8 text-center ${
							index % 2 != 0 && 'bg-[#F8F8F8]'
						}`}
						key={index}
					>
						<p className='w-4 hidden lg:block'>{index + 1}</p>
						<p className='lg:w-1/4 text-start lg:text-center'>
							Название команды
						</p>
						<p>Очки</p>
						<p className='hidden lg:block'>И</p>
						<p className='hidden lg:block'>В</p>
						<p className='hidden lg:block'>Н</p>
						<p className='hidden lg:block'>П</p>
						<p className='hidden lg:block'>ГЗ</p>
						<p className='hidden lg:block'>ГП</p>
						<p className='hidden lg:block'>РГ</p>
					</div>
				))}
			</div>
		</div>
	)
}
