import { Button } from '@/components/ui/button'
import { DateTimePicker } from '@/components/ui/DateTimePicker'
import Editor from '@/components/ui/editor'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ru } from 'date-fns/locale'
import { useState } from 'react'

export default function CreateNews() {
	const [date, setDate] = useState<Date | undefined>(undefined)
	const [title, setTitle] = useState<string>('')
	const [content, setContent] = useState<string>('')
	const [image, setImage] = useState<File | null>(null)
	const [tag, setTag] = useState<string>('')
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const formData = {
			title,
			news_date: date?.toISOString(),
			content,
			image_url: 'image_url', // image ? URL.createObjectURL(image) : null,
			category_name: tag,
		}

		console.log(formData, image)

		// 	try {
		// 		const response = await fetch(
		// 			'https://2f5c-91-218-92-2.ngrok-free.app/api/v1/news',
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
		<div className='container flex flex-col gap-2 mx-auto'>
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
					{/* <Textarea
							placeholder='print content'
							value={content}
							onChange={e => setContent(e.target.value)}
						/> */}
					<Editor />
				</div>

				<div>
					<Label>Image</Label>
					<Input
						placeholder='select an image'
						type='file'
						accept='image/png, image/jpeg'
						onChange={e => setImage(e.target.files?.[0] || null)}
					/>
				</div>

				<div className='flex flex-col'>
					<Label>Date</Label>
					<DateTimePicker
						locale={ru}
						value={date}
						onChange={setDate}
						className='w-full'
					/>
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
	)
}
