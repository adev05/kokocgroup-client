import Image from 'next/image'
import { EyeIcon } from '@heroicons/react/24/outline'

export default function NewsCard() {
	return (
		<div className='w-full flex flex-col justify-end overflow-hidden cursor-pointer border rounded-3xl group/item hover:bg-secondary relative'>
			<div className='overflow-hidden'>
				<Image
					src='/main-background.png'
					alt='news-background'
					width={1920}
					height={1080}
					className='w-full max-w-full h-auto aspect-video group-hover/item:[transform:scale3d(1.05,1.05,1.05)] transition-transform'
				/>
			</div>

			<div className='px-3 py-1 bg-[rgba(21,21,21,0.75)] text-white absolute top-4 right-4 text-xs rounded-lg font-medium'>
				<p>Анонс</p>
			</div>

			<div className='px-4 pb-4 pt-2'>
				<div className='flex flex-col gap-2 justify-between items-center mb-2'>
					<h3 className='line-clamp-2 font-medium'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</h3>
				</div>
				<div className='flex justify-between'>
					<div className='text-xs font-light'>#пресс-релиз • 15 мин назад</div>
					<div className='flex gap-2'>
						<div className='flex gap-1 items-center'>
							<EyeIcon className='size-4 text-gray-400' />
							<div className='text-xs font-light'>150</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
