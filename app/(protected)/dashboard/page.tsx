'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export default function Dashboard() {
	const { data: session } = useSession()
	const [date, setDate] = useState<Date | undefined>()
	const [title, setTitle] = useState<string>('')
	const [content, setContent] = useState<string>('')
	const [image, setImage] = useState<File | null>(null)
	const [tag, setTag] = useState<string>('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const formData = {
			title,
			news_date: date,
			content,
			image_url: image ? URL.createObjectURL(image) : null,
			category: tag,
		}

		console.log(formData, image)

		// 	try {
		// 		const response = await fetch(
		// 			'https://e4ce-91-218-92-2.ngrok-free.app/api/v1/news',
		// 			{
		// 				method: 'POST',
		// 				headers: {
		// 					'Content-Type': 'application/json',
		// 					Authorization: `Bearer ${session.access_token}`,
		// 				},
		// 				body: JSON.stringify(formData),
		// 			}
		// 		)

		// 		if (!response.ok) {
		// 			throw new Error('Network response was not ok')
		// 		}

		// 		const data = await response.json()
		// 		console.log('Success:', data)
		// 	} catch (error) {
		// 		console.error('Error:', error)
		// 	}
	}

	return (
		<div className='h-[calc(100svh-76px)] content-center'>
			{/* <p>Dashboard</p> */}
			{/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
			<div className='flex flex-col gap-2 max-w-md mx-auto'>
				<h1 className='text-2xl font-semibold mb-2'>Создание новости</h1>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<Label>Title</Label>
						<Input
							placeholder='print title'
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</div>

					<div>
						<Label>Content</Label>
						<Textarea
							placeholder='print content'
							value={content}
							onChange={e => setContent(e.target.value)}
						/>
					</div>

					<div>
						<Label>Image</Label>
						<Input
							placeholder='select an image'
							type='file'
							onChange={e => setImage(e.target.files?.[0] || null)}
						/>
					</div>

					<div className='flex flex-col'>
						<Label>Date</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={'outline'}
									className={cn(
										'justify-start text-left font-normal',
										!date && 'text-muted-foreground'
									)}
								>
									<CalendarIcon className='mr-2 h-4 w-4' />
									{date ? (
										format(date, 'PPP', { locale: ru })
									) : (
										<span>Pick a date</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className='w-auto p-0' align='start'>
								<Calendar
									mode='single'
									selected={date}
									onSelect={setDate}
									initialFocus
									locale={ru}
								/>
							</PopoverContent>
						</Popover>
					</div>

					<div>
						<Label>Tag</Label>
						<Select value={tag} onValueChange={setTag}>
							<SelectTrigger className=''>
								<SelectValue placeholder='Select a tag' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Tags</SelectLabel>
									<SelectItem value='match'>Матч</SelectItem>
									<SelectItem value='reward'>Награды</SelectItem>
									<SelectItem value='transfer'>Трансферы</SelectItem>
									<SelectItem value='tournament'>Турниры</SelectItem>
									<SelectItem value='sponsor'>Спонсоры</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<Button type='submit'>Создать новость</Button>
				</form>
			</div>
			<Button onClick={() => signOut()}>sign out</Button>
		</div>
	)
}
