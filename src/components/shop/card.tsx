import { shopType } from '@/app/lib/definitions'
import Image from 'next/image'
import Link from 'next/link'

export default function ShopCard({ item }: { item: shopType }) {
	const sizesParagraph = item.sizes
		.map((size, index) => {
			if (index === item.sizes.length - 1) {
				return size
			}
			return `${size} · `
		})
		.join('')

	return (
		<Link
			href={`shop/${item.id}`}
			className='w-full min-w-64 flex flex-col justify-start overflow-hidden cursor-pointer border rounded-3xl relative hover:[transform:scale(1.025)] [transition:transform_0.25s] p-2 pb-4 space-y-2'
		>
			<Image
				src={process.env.SERVER_URL + item.image_url}
				alt={item.title}
				width={1000}
				height={1000}
				className='w-full aspect-square object-cover rounded-2xl bg-secondary'
				unoptimized={true}
			/>
			<h3 className='line-clamp-2 text-base h-[2lh] px-2 font-medium'>
				{item.title}
			</h3>
			<div className='flex justify-between items-center px-2'>
				<p className='line-clamp-1 text-sm text-muted-foreground'>
					{sizesParagraph}
				</p>
				<h1 className='font-semibold text-xl line-clamp-2'>
					{item.price.toLocaleString('ru')}₽
				</h1>
			</div>
		</Link>
	)
}
