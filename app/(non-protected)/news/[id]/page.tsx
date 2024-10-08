import { news } from '@/app/lib/placeholder-data'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export default function Page({ params }: { params: { id: number } }) {
	const { id } = params
	const item = news.filter(item => item.id == id)[0]

	return (
		<div className='w-full container p-8 mx-auto space-y-8'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/news'>Новости</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{item.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className='flex items-center justify-between'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					{item.title}
				</h1>
				<div className='space-x-2'>
					<Button variant='outline' size='icon'>
						<HeartIcon className='size-4' />
					</Button>
					<Button variant='outline' size='icon'>
						<PaperAirplaneIcon className='size-4' />
					</Button>
				</div>
			</div>
			<Image
				src={item.image}
				alt='news-background'
				width={1920}
				height={1080}
				className='w-full max-w-full object-cover aspect-video rounded-2xl'
			/>
			<div>
				<ReactMarkdown>{item.content}</ReactMarkdown>
			</div>
		</div>
	)
}
