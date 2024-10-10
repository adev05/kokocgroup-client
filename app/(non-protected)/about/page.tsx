import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AboutPage() {
	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>О клубе</h1>
			<Tabs defaultValue='2024' className='w-full'>
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
			</Tabs>
		</div>
	)
}
