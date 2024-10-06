import Image from 'next/image'
import { EyeIcon } from '@heroicons/react/24/outline'
import { newsType } from '../main/news'

function formatDate(date: Date): string {
	const now = new Date()
	const diffMs = now.getTime() - date.getTime() // Разница в миллисекундах
	const diffSec = Math.floor(diffMs / 1000) // Разница в секундах
	const diffMin = Math.floor(diffSec / 60) // Разница в минутах
	const diffHours = Math.floor(diffMin / 60) // Разница в часах
	const diffDays = Math.floor(diffHours / 24) // Разница в днях
	const diffMonths = Math.floor(diffDays / 30) // Разница в месяцах
	const diffYears = Math.floor(diffDays / 365) // Разница в годах

	if (diffHours < 24) {
		// Меньше 24 часов
		if (diffMin < 60) {
			if (diffSec < 60) {
				if (diffSec == 0) {
					return 'только что'
				}
				return `${diffSec} сек назад`
			}
			return `${diffMin} мин назад`
		}
		return `${diffHours} ч назад`
	} else if (diffDays < 30) {
		// Меньше 30 дней
		return `${diffDays} дн назад`
	} else if (diffMonths < 6) {
		// Меньше 6 месяцев
		return `${diffMonths} мес назад`
	} else {
		// Больше полугода — форматируем дату
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0') // месяцы идут с 0
		const year = date.getFullYear()

		return `${day}.${month}.${year}`
	}
}

export default function NewsCard({ item }: { item: newsType }) {
	return (
		<div className='w-full flex flex-col justify-end overflow-hidden cursor-pointer border rounded-3xl group/item hover:bg-secondary relative hover:[transform:scale(1.025)] [transition:transform_0.25s]'>
			<Image
				src={item.image}
				alt='news-background'
				width={1920}
				height={1080}
				className='w-full max-w-full h-full object-cover'
			/>

			{/* <div className='px-3 py-1 bg-[rgba(21,21,21,0.75)] text-white absolute top-4 right-4 text-xs rounded-lg font-medium'>
				<p>Анонс</p>
			</div> */}

			<div className='px-4 pb-4 pt-2'>
				<h3 className='line-clamp-2 font-medium text-start h-[2lh] mb-2'>
					{item.title}
				</h3>
				<div className='flex justify-between'>
					<div className='text-xs font-light'>
						#{item.tag} • {formatDate(item.date)}
					</div>
					<div className='flex gap-2'>
						<div className='flex gap-1 items-center'>
							<EyeIcon className='size-4 text-gray-400' />
							<div className='text-xs font-light'>{item.views}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
