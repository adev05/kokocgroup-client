import Image from 'next/image'

export default function NewsPage() {
	return (
		<div className='w-full px-4 py-2 lg:px-16 lg:py-8 xl:px-32 xl:py-16'>
			<div className='flex justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Новости
				</h1>
				<div className='text-sm lg:text-base xl:text-xl text-end'>фильтр</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
				{new Array(16).fill(0).map((_, index) => (
					<div
						className='w-full flex gap-2 flex-col justify-end overflow-hidden cursor-pointer'
						key={index}
					>
						<Image
							src='/main-background.png'
							alt='news-background'
							width={1920}
							height={1080}
							className='w-full max-w-full h-auto aspect-video rounded-3xl'
						/>
						<div className='text-xs'>22 сен 2024</div>
						<div className='flex justify-between items-center'>
							<h3 className='line-clamp-2 font-semibold text-sm xl:text-base'>
								Разгромная победа над «Альпикой» (12:1) по техническим причинам
								осталась незаслуженно обделена зрительским вниманием.
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
