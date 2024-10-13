import Image from 'next/image'
import { newsType } from '@/app/lib/definitions'
import Link from 'next/link'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export function formatDate(dateString: string) {
	const date = new Date(dateString)
	return format(date, 'd MMMM yyyy', { locale: ru })
}

export default function NewsCard({ item }: { item: newsType }) {
	return (
		<Link
			href={`/news/${item.id}`}
			className='w-full min-w-64 flex flex-col justify-start overflow-hidden cursor-pointer border rounded-3xl relative hover:[transform:scale(1.025)] [transition:transform_0.25s] p-2 pb-4 space-y-2'
			draggable={false}
		>
			<Image
				src={process.env.SERVER_URL + item.image_url}
				alt='news-background'
				width={1920}
				height={1080}
				className='w-full max-w-full object-cover aspect-video rounded-2xl bg-secondary'
				loading='lazy'
			/>

			<h3 className='line-clamp-1 text-base h-[1lh] px-2 font-medium'>
				{item.title}
			</h3>
			<p className='line-clamp-1 text-sm text-muted-foreground px-2'>
				{`#${item.category_name} · ${formatDate(item.news_date)}`}
			</p>
		</Link>
	)
}
