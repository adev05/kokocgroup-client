import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AboutPage() {
	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>О клубе</h1>
			<div className='w-full min-w-64 rounded-2xl bg-secondary grid grid-rows-4 grid-cols-1 md:grid-cols-[repeat(3,auto),1fr] md:grid-rows-1 items-center gap-2 p-2'>
				<Select>
					<SelectTrigger className='w-full md:w-24 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Год' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='all'>Все</SelectItem>
							<SelectItem value='2024'>2024</SelectItem>
							<SelectItem value='2023'>2023</SelectItem>
							<SelectItem value='2022'>2022</SelectItem>
							<SelectItem value='2021'>2021</SelectItem>
							<SelectItem value='2020'>2020</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			{/* <Tabs defaultValue='2024' className='w-full'>
				<TabsList className='w-full'>
					<TabsTrigger value='2020'>2020</TabsTrigger>
					<TabsTrigger value='2021'>2021</TabsTrigger>
					<TabsTrigger value='2022'>2022</TabsTrigger>
					<TabsTrigger value='2023'>2023</TabsTrigger>
					<TabsTrigger value='2024'>2024</TabsTrigger>
				</TabsList>
				<TabsContent value='2020'>Информация за 2020 год</TabsContent>
				<TabsContent value='2021'>Информация за 2021 год</TabsContent>
				<TabsContent value='2022'>Информация за 2022 год</TabsContent>
				<TabsContent value='2023'>Информация за 2023 год</TabsContent>
				<TabsContent value='2024'>Информация за 2024 год</TabsContent>
			</Tabs> */}
		</div>
	)
}
