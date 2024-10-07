import { news } from '@/app/lib/placeholder-data'
import NewsCard from '@/components/news/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function NewsPage() {
	return (
		<div className='w-full container p-8 mx-auto space-y-8'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Новости</h1>
			<div className='w-full rounded-2xl bg-secondary grid grid-rows-4 grid-cols-1 md:grid-cols-[repeat(3,auto),1fr] md:grid-rows-1 items-center gap-2 p-2 divide-x'>
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
					<SelectTrigger
						className='w-full md:w-36 shadow-none border-none !ring-0'
						disabled
					>
						<SelectValue placeholder='Месяц' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='all'>Все</SelectItem>
							<SelectItem value='january'>Январь</SelectItem>
							<SelectItem value='february'>Февраль</SelectItem>
							<SelectItem value='mart'>Март</SelectItem>
							<SelectItem value='april'>Апрель</SelectItem>
							<SelectItem value='may'>Май</SelectItem>
							<SelectItem value='june'>Июнь</SelectItem>
							<SelectItem value='july'>Июль</SelectItem>
							<SelectItem value='august'>Август</SelectItem>
							<SelectItem value='september'>Сентябрь</SelectItem>
							<SelectItem value='october'>Октябрь</SelectItem>
							<SelectItem value='november' disabled>
								Ноябрь
							</SelectItem>
							<SelectItem value='december' disabled>
								Декабрь
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className='w-full md:w-48 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Категория' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='apple'>Apple</SelectItem>
							<SelectItem value='banana'>Banana</SelectItem>
							<SelectItem value='blueberry'>Blueberry</SelectItem>
							<SelectItem value='grapes'>Grapes</SelectItem>
							<SelectItem value='pineapple'>Пресс-релиз</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<div className='flex'>
					<Input
						placeholder='Поиск по новостям'
						className='shadow-none border-none !ring-0'
					/>
					<Button variant='ghost'>
						<MagnifyingGlassIcon className='size-4' />
					</Button>
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
				{news.map(item => (
					<NewsCard item={item} key={item.id} />
				))}
			</div>
			<div className='flex'>
				<Button variant='outline' className='mx-auto w-full'>
					Показать еще
				</Button>
			</div>
		</div>
	)
}
