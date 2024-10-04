import Image from 'next/image'
import NewsCard from '../../components/news/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export default function NewsPage() {
	return (
		<div className='w-full px-4 py-2 lg:px-16 lg:py-8 xl:px-32 xl:py-16'>
			<div className='grid grid-cols-1 md:grid-cols-[1fr,auto] gap-6 justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Новости
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
					<Select defaultValue='all'>
						<SelectTrigger className='w-40'>
							<SelectValue placeholder='Категория' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value='all'>Все категории</SelectItem>
								<SelectItem value='articles'>Статьи</SelectItem>
								<SelectItem value='interviews'>Интервью</SelectItem>
								<SelectItem value='transfers'>Трансферы</SelectItem>
								<SelectItem value='press-releases'>Пресс-релизы</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Select defaultValue='october'>
						<SelectTrigger className='w-40'>
							<SelectValue placeholder='Месяц' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value='october'>Октябрь</SelectItem>
								<SelectItem value='september'>Сентябрь</SelectItem>
								<SelectItem value='august'>Август</SelectItem>
								<SelectItem value='july'>Июль</SelectItem>
								<SelectItem value='june'>Июнь</SelectItem>
								<SelectItem value='may'>Май</SelectItem>
								<SelectItem value='april'>Апрель</SelectItem>
								<SelectItem value='mart'>Март</SelectItem>
								<SelectItem value='february'>Февраль</SelectItem>
								<SelectItem value='january'>Январь</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Select defaultValue='2024'>
						<SelectTrigger className='w-40'>
							<SelectValue placeholder='Год' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value='2024'>2024</SelectItem>
								<SelectItem value='2023'>2023</SelectItem>
								<SelectItem value='2022'>2022</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
				{new Array(16).fill(0).map((_, index) => (
					<NewsCard key={index} />
				))}
			</div>
		</div>
	)
}
