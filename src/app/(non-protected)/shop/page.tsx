import ShopCard from '@/components/shop/card'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export default function ShopPage() {
	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Магазин</h1>
			<div className='w-full min-w-64 rounded-2xl bg-secondary grid grid-rows-2 grid-cols-1 md:grid-cols-[repeat(2,auto),1fr] md:grid-rows-1 items-center gap-2 p-2'>
				<Select defaultValue='all'>
					<SelectTrigger className='w-full md:w-48 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Фильтр' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='all'>Сначала новые</SelectItem>
							<SelectItem value='2024'>Сначала дороже</SelectItem>
							<SelectItem value='2023'>Сначала дешевле</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className='w-full md:w-64 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Категория' />
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

				{/* <Select>
					<SelectTrigger className='w-full md:w-32 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Размер' />
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
				</Select> */}
				{/* <div className='flex'>
					<Input
						placeholder='Поиск по матчам'
						className='shadow-none border-none !ring-0'
					/>
					<Button variant='ghost'>
						<MagnifyingGlassIcon className='size-4' />
					</Button>
				</div> */}
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
				{new Array(16).fill(0).map((_, index) => (
					<ShopCard key={index} />
				))}
			</div>
		</div>
	)
}
