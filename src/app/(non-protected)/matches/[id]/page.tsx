import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Image from 'next/image'

export default function Page({ params }: { params: { id: number } }) {
	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<Breadcrumb className='min-w-64'>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/matches'>Матчи</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>тайтл {params.id}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className='border rounded-3xl p-4 xl:p-8 space-y-8 xl:space-y-16 text-center min-w-64'>
				<div className='text-muted-foreground uppercase'>
					<p className='text-xs md:text-base'>Длинное название лиги</p>
					<p className='text-xs md:text-base'>Длинное название турнира</p>
				</div>
				<div className='w-full text-center grid grid-cols-[1fr,auto,1fr] gap-2 xl:gap-4'>
					<div className='flex flex-col gap-2 justify-center items-center'>
						<Image
							src='/pfc-cska-moscow-logo.png'
							alt='pfc-cska-moscow-logo'
							width={256}
							height={256}
							className='aspect-square object-contain size-10 md:size-16 lg:size-36 2xl:size-64'
							unoptimized={true}
						/>
						<h1 className='font-semibold text-sm lg:text-xl xl:text-4xl'>
							Кокос групп
						</h1>
					</div>
					<div className='space-y-6 xl:space-y-12'>
						<h1 className='font-semibold text-md md:text-xl xl:text-4xl'>
							3 октября, 19:00
						</h1>
						<h1 className='font-semibold text-2xl md:text-4xl xl:text-8xl'>
							3:0
						</h1>
						<p className='text-xs md:text-base'>Название арены</p>
					</div>
					<div className='flex flex-col gap-2 justify-center items-center'>
						<Image
							src='/fc-spartak-moscow-logo.png'
							alt='fc-spartak-moscow-logo.png'
							width={256}
							height={256}
							className='aspect-square object-contain size-10 md:size-16 lg:size-36 2xl:size-64'
							unoptimized={true}
						/>
						<h1 className='font-semibold text-sm lg:text-xl xl:text-4xl'>
							Кокос групп
						</h1>
					</div>
				</div>
				<iframe
					src='https://vk.com/video_ext.php?oid=-211437014&id=456244644&hd=2'
					allow='autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
					frameBorder='0'
					allowFullScreen
					className='rounded-2xl w-full aspect-video mx-auto'
				></iframe>
			</div>
		</div>
	)
}
