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
import { useEffect, useMemo, useState } from 'react'
// import ReactMarkdown from 'react-markdown'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/core/fonts/inter.css'
import '@blocknote/mantine/style.css'
import { BlockNoteEditor, locales, PartialBlock } from '@blocknote/core'

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
				console.log(data)
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

	if (loading) {
		return <p>Loading...</p>
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
		<div className='w-full container p-8 mx-auto space-y-8'>
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
			<div className='flex items-center justify-between'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					{news.title}
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
				src={process.env.SERVER_URL + news.image_url}
				alt='news-background'
				width={1920}
				height={1080}
				className='w-full max-w-full object-cover aspect-video rounded-2xl'
			/>
			<div>
				<BlockNoteView editor={editor} editable={false} />
			</div>
		</div>
	)
}
