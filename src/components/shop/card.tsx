import { shopType } from '@/app/lib/definitions'
import Image from 'next/image'
import Link from 'next/link'

export default function ShopCard({ item }: { item?: shopType }) {
	return (
		<Link
			href={`shop/${item?.id}`}
			className='w-full min-w-64 flex flex-col justify-start overflow-hidden cursor-pointer border rounded-3xl relative hover:[transform:scale(1.025)] [transition:transform_0.25s] p-2 pb-4 space-y-2'
		>
			<Image
				src='https://store.cloud9.gg/cdn/shop/files/WindbreakerFront1000x1000_1ce8fb90-64ce-416d-9fa8-c8cd1f879fd1_1000x1000.png?v=1724365264'
				alt='shop-item image'
				width={1000}
				height={1000}
				className='w-full aspect-square object-cover rounded-2xl bg-secondary'
				unoptimized={true}
			/>
			<h3 className='line-clamp-2 text-base h-[2lh] px-2 font-medium'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</h3>
			<div className='flex justify-between items-center px-2'>
				<p className='line-clamp-1 text-sm text-muted-foreground'>
					S · M · L · XL · 2XL · 3XL
				</p>
				<h1 className='font-semibold text-xl line-clamp-2'>22 200₽</h1>
			</div>
		</Link>
	)
}
