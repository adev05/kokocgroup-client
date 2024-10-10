'use client'

import { newsType } from '@/app/lib/definitions'
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
import { useEffect, useState } from 'react'
import { BlockNoteView } from '@blocknote/mantine'
import { BlockNoteEditor, locales, PartialBlock } from '@blocknote/core'
import { Skeleton } from '@/components/ui/skeleton'
import { formatDate } from '@/components/news/card'
import TelegramIcon from '@/components/social/telegram'
import YoutubeIcon from '@/components/social/youtube'
import VKIcon from '@/components/social/vk'

export default function Page({ params }: { params: { id: number } }) {
	const [news, setNews] = useState<newsType>()
	const [loading, setLoading] = useState(true)

	const [initialContent, setInitialContent] = useState<PartialBlock[]>()

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch(
					process.env.SERVER_URL + '/v1/news/' + params.id
				)

				console.log({ response })

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				setInitialContent(JSON.parse(data.content) as PartialBlock[])
				// console.log({ data })

				setNews(data)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchNews()
	}, [])

	function shareTelegram() {
		window.open(
			`https://telegram.me/share/url?url=${process.env.SERVER_URL}/news/${params.id}&text=${news?.title}`
		)
	}

	function shareVK() {
		window.open(
			`https://vk.com/share.php?url=${process.env.SERVER_URL}/news/${params.id}&title=${news?.title}`
		)
	}

	if (loading) {
		return (
			<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href='/news'>Новости</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<Skeleton className='h-4 w-64' />
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<Skeleton className='h-6 w-full my-2' />
				<Skeleton className='w-32 h-4' />
				<Skeleton className='w-3/4 aspect-video rounded-2xl mx-auto' />
				<Skeleton className='w-3/4 h-6' />
				<Skeleton className='w-1/2 h-4' />
				<Skeleton className='w-1/4 h-4' />
				<Skeleton className='w-full h-4' />
				<Skeleton className='w-1/5 h-4' />
			</div>
		)
	}

	if (!news) return <div>Ничего не найдено</div>

	const editor = BlockNoteEditor.create({
		initialContent,
		dictionary: locales.ru,
	})

	if (editor === undefined) {
		return 'Loading content...'
	}

	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/news'>Новости</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{news.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
				{news.title}
			</h1>
			<p className='text-muted-foreground'>{formatDate(news.news_date)}</p>
			<Image
				src={process.env.SERVER_URL + news.image_url}
				alt={news.title}
				width={1920}
				height={1080}
				className='h-full w-3/4 rounded-2xl object-cover mx-auto'
			/>
			<div>
				<BlockNoteView
					editor={editor}
					editable={false}
					formattingToolbar={false}
					linkToolbar={false}
					filePanel={false}
					sideMenu={false}
					slashMenu={false}
					tableHandles={false}
					className='p-0'
				/>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 sm:gap-16'>
				<div className='space-y-4'>
					<h3 className='text-xl font-medium'>Категория</h3>
					<p>#{news.category_name}</p>
				</div>
				<div className='space-y-4'>
					<h3 className='text-xl font-medium'>Поделиться</h3>
					<div className='space-x-2'>
						<Button onClick={shareTelegram}>
							<TelegramIcon />
						</Button>
						<Button onClick={shareVK}>
							<VKIcon />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
