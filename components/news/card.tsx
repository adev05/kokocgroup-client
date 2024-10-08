import Image from 'next/image'
import { newsType } from '@/app/lib/definitions'
import Link from 'next/link'

function formatDate(date: Date): string {
	const now = new Date()
	const diffMs = now.getTime() - date.getTime() // Разница в миллисекундах
	const diffSec = Math.floor(diffMs / 1000) // Разница в секундах
	const diffMin = Math.floor(diffSec / 60) // Разница в минутах
	const diffHours = Math.floor(diffMin / 60) // Разница в часах
	const diffDays = Math.floor(diffHours / 24) // Разница в днях
	const diffMonths = Math.floor(diffDays / 30) // Разница в месяцах

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
		// <Link
		// 	href={`/news/${item.id}`}
		// 	className='w-full flex flex-col justify-end overflow-hidden cursor-pointer border rounded-3xl relative hover:[transform:scale(1.025)] [transition:transform_0.25s]'
		// >
		// 	<Image
		// 		src={item.image}
		// 		alt='news-background'
		// 		width={1920}
		// 		height={1080}
		// 		className='w-full max-w-full h-full object-cover'
		// 	/>

		// 	{/* <div className='px-3 py-1 bg-[rgba(21,21,21,0.75)] text-white absolute top-4 right-4 text-xs rounded-lg font-medium'>
		// 		<p>Анонс</p>
		// 	</div> */}

		// 	<div className='px-4 pb-4 pt-2'>
		// 		<h3 className='line-clamp-2 font-medium text-start h-[2lh] mb-2 text-base'>
		// 			{item.title}
		// 		</h3>
		// 		<div className='flex justify-between'>
		// 			<div className='text-xs font-light'>
		// 				#{item.tag} • {formatDate(item.date)}
		// 			</div>
		// 			<div className='flex gap-2'>
		// 				<div className='flex gap-1 items-center'>
		// 					<EyeIcon className='size-4 text-gray-400' />
		// 					<div className='text-xs font-light'>
		// 						{item.views.toLocaleString('ru')}
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </Link>
		<Link
			href={`/news/${item.id}`}
			className='w-full flex flex-col justify-start overflow-hidden cursor-pointer border rounded-3xl relative hover:[transform:scale(1.025)] [transition:transform_0.25s] p-2 pb-4 space-y-2'
		>
			<Image
				src={process.env.SERVER_URL + item.image_url}
				alt='news-background'
				width={1920}
				height={1080}
				className='w-full max-w-full object-cover aspect-video rounded-2xl'
			/>

			<h3 className='line-clamp-1 text-base h-[1lh] px-2 font-medium'>
				{item.title}
			</h3>
			<p className='line-clamp-2 text-sm text-muted-foreground px-2'>
				{item.content}
			</p>
		</Link>
	)
}
