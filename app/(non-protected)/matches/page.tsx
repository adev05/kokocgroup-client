import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function MatchesPage() {
	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Матчи</h1>
			<div className='w-full min-w-64 rounded-2xl bg-secondary grid grid-rows-4 grid-cols-1 md:grid-cols-[repeat(3,auto),1fr] md:grid-rows-1 items-center gap-2 p-2'>
				<Select>
					<SelectTrigger className='w-full md:w-24 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Год' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='all'>Все</SelectItem>
							<SelectItem value='2024'>2024</SelectItem>
							<SelectItem value='2023'>2023</SelectItem>
							<SelectItem value='2022'>2022</SelectItem>
							<SelectItem value='2021'>2021</SelectItem>
							<SelectItem value='2020'>2020</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className='w-full md:w-36 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Месяц' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='all'>Все</SelectItem>
							<SelectItem value='1'>Январь</SelectItem>
							<SelectItem value='2'>Февраль</SelectItem>
							<SelectItem value='3'>Март</SelectItem>
							<SelectItem value='4'>Апрель</SelectItem>
							<SelectItem value='5'>Май</SelectItem>
							<SelectItem value='6'>Июнь</SelectItem>
							<SelectItem value='7'>Июль</SelectItem>
							<SelectItem value='8'>Август</SelectItem>
							<SelectItem value='9'>Сентябрь</SelectItem>
							<SelectItem value='10'>Октябрь</SelectItem>
							<SelectItem value='11'>Ноябрь</SelectItem>
							<SelectItem value='12'>Декабрь</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className='w-full md:w-48 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Оппонент' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='all'>Все</SelectItem>
							<SelectItem value='Пресс-релиз'>Пресс-релиз</SelectItem>
							<SelectItem value='Статья'>Статья</SelectItem>
							<SelectItem value='Трансфер'>Трансфер</SelectItem>
							<SelectItem value='Интервью'>Интервью</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<div className='flex'>
					<Input
						placeholder='Поиск по матчам'
						className='shadow-none border-none !ring-0'
					/>
					<Button variant='ghost'>
						<MagnifyingGlassIcon className='size-4' />
					</Button>
				</div>
			</div>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-4'>
					<p className='font-semibold'>Август, 2024</p>
					{new Array(3).fill(0).map((_, index) => (
						<div
							className='w-full min-w-64 p-4 sm:px-8 sm:py-4 bg-secondary rounded-2xl grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] items-center gap-4 justify-between'
							key={index}
						>
							<div className='flex flex-col justify-between'>
								<h1 className='font-bold text-xl xl:text-2xl'>14:00</h1>
								<p className='font text-base leading-4'>12 апр, вс</p>
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
								<h1 className='font-semibold text-2xl xl:text-3xl'>1:5</h1>
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
							<Button asChild>
								<Link href='/'>Матч-центр</Link>
							</Button>
						</div>
					))}
				</div>
				<div className='flex flex-col gap-4'>
					<p className='font-semibold'>Сентябрь, 2024</p>
					{new Array(5).fill(0).map((_, index) => (
						<div
							className='w-full px-8 py-4 bg-secondary rounded-xl grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] items-center gap-4 justify-between'
							key={index}
						>
							<div className='flex flex-col justify-between'>
								<h1 className='font-bold text-xl xl:text-2xl'>14:00</h1>
								<p className='font text-base leading-4'>12 апр, вс</p>
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
							<Button asChild>
								<Link href='/'>Матч-центр</Link>
							</Button>
						</div>
					))}
				</div>
				<div className='flex flex-col gap-4'>
					<p className='font-semibold'>Октябрь, 2024</p>
					{new Array(3).fill(0).map((_, index) => (
						<div
							className='w-full px-8 py-4 bg-secondary rounded-xl grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] items-center gap-4 justify-between'
							key={index}
						>
							<div className='flex flex-col justify-between'>
								<h1 className='font-bold text-xl xl:text-2xl'>14:00</h1>
								<p className='font text-base leading-4'>12 апр, вс</p>
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
							<Button asChild>
								<Link href='/'>Матч-центр</Link>
							</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
