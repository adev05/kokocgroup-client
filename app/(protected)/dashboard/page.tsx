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
// import { SignOut } from '@/components/signout-button'
// import { useSession } from 'next-auth/react'

// export default function Dashboard() {
// 	const { data: session, status } = useSession()

// 	if (status === 'loading') return <div>Loading...</div>

// 	if (!session) return <div>{status}</div>

// 	return (
// 		<>
// 			<p>Dashboard</p>
// 			<pre>{JSON.stringify(session, null, 2)}</pre>
// 			<SignOut />
// 		</>
// 	)
// }

// import { auth } from '@/auth'
// import { SignOut } from '@/components/signout-button'

export default function Dashboard() {
	const { data: session } = useSession()
	const [date, setDate] = useState<Date>(new Date())

	return (
		<div className='h-[calc(100svh-76px)] content-center'>
			{/* <p>Dashboard</p> */}
			{/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
			<div className='flex flex-col gap-2 max-w-md mx-auto'>
				<h1 className='text-2xl font-semibold mb-2'>Создание новости</h1>

				<Label>Title</Label>
				<Input placeholder='print title' />

				<Label>Content</Label>
				<Textarea placeholder='print content' />

				<Label>Image</Label>
				<Input placeholder='select an image' type='file' />

				<Label>date</Label>
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

				<Label>Tag</Label>
				<Select>
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

				<Button>Создать новость</Button>
			</div>
			<Button onClick={() => signOut()}>sign out</Button>
		</div>
	)
}
