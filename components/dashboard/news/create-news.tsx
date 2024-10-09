import { Button } from '@/components/ui/button'
import { DateTimePicker } from '@/components/ui/DateTimePicker'
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
import { Block, BlockNoteEditor, locales, PartialBlock } from '@blocknote/core'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { ru } from 'date-fns/locale'
import { useSession } from 'next-auth/react'
import { useEffect, useMemo, useState } from 'react'

async function saveToStorage(jsonBlocks: Block[]) {
	// Save contents to local storage. You might want to debounce this or replace
	// with a call to your API / database.
	localStorage.setItem('editorContent', JSON.stringify(jsonBlocks))
}

async function loadFromStorage() {
	// Gets the previously stored editor contents.
	const storageString = localStorage.getItem('editorContent')
	return storageString
		? (JSON.parse(storageString) as PartialBlock[])
		: undefined
}

export default function CreateNews() {
	const { data: session } = useSession()
	const [date, setDate] = useState<Date | undefined>(undefined)
	const [title, setTitle] = useState<string>('')
	const [image, setImage] = useState<File | null>(null)
	const [tag, setTag] = useState<string>('')
	const [initialContent, setInitialContent] = useState<
		PartialBlock[] | undefined | 'loading'
	>('loading')

	// Loads the previously stored editor contents.
	useEffect(() => {
		loadFromStorage().then(content => {
			setInitialContent(content)
		})
	}, [])

	async function uploadFile(image: File) {
		const formData = new FormData()
		formData.append('image', image)

		console.log('uploadFile', image, session)

		try {
			const response = await fetch(
				process.env.SERVER_URL + '/v1/files/images',
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${session.access_token}`,
					},
					body: formData,
				}
			)

			console.log({ response })

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			const image_url =
				process.env.SERVER_URL + '/v1/files/images' + (await response.json())

			console.log(image_url)

			return image_url
		} catch (error) {
			console.error('Error:', error)
		}
	}

	const editor = useMemo(() => {
		if (initialContent === 'loading') {
			return undefined
		}
		return BlockNoteEditor.create({
			initialContent,
			dictionary: locales.ru,
			uploadFile,
		})
	}, [initialContent])

	if (editor === undefined) {
		return 'Loading content...'
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		// const formData = {
		// 	title,
		// 	news_date: date?.toISOString(),
		// 	content,
		// 	image_url: 'image_url', // image ? URL.createObjectURL(image) : null,
		// 	category_name: tag,
		// }
		if (!image) {
			alert('Please select an image')
			return
		}

		const formData = new FormData()
		formData.append('image', image)

		console.log(formData, image)

		try {
			const response = await fetch(
				process.env.SERVER_URL + '/v1/files/images',
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${session.access_token}`,
					},
					body: formData,
				}
			)

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			const image_url = '/v1/files/images' + (await response.json())

			console.log('Success:', image_url)

			const body = {
				title,
				news_date: date?.toISOString(),
				content: JSON.stringify(editor.document),
				image_url, // image ? URL.createObjectURL(image) : null,
				category_name: tag,
			}
			try {
				const response = await fetch(process.env.SERVER_URL + '/v1/news', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${session.access_token}`,
					},
					body: JSON.stringify(body),
				})

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}

				const data = await response.json()
				// Удалять локалсторадж если создалась новость
				console.log('Success:', data)
			} catch (error) {
				console.error('Error:', error)
			}
		} catch (error) {
			console.error('Error:', error)
		}

		// 	try {
		// const response = await fetch(
		// 	'https://655a-91-218-92-2.ngrok-free.app/api/v1/news',
		// 	{
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Authorization: `Bearer ${session.access_token}`,
		// 		},
		// 		body: JSON.stringify(formData),
		// 	}
		// )

		// if (!response.ok) {
		// 	throw new Error('Network response was not ok')
		// }

		// const data = await response.json()
		// console.log('Success:', data)
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
					<BlockNoteView
						editor={editor}
						onChange={() => {
							saveToStorage(editor.document)
						}}
					/>
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
