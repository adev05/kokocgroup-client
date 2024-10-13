import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function DashboardMatchesPage() {
	return (
		<Tabs defaultValue='account' className='w-full h-full'>
			<TabsList className='w-full'>
				<TabsTrigger value='account'>История посещения</TabsTrigger>
				<TabsTrigger value='password'>История просмотра</TabsTrigger>
			</TabsList>
			<TabsContent value='account' className='w-full h-full content-center'>
				<div className='text-center p-8 bg-secondary rounded-2xl'>
					<h1 className='text-xl font-medium'>Ничего не найдено</h1>
					<h3 className='text-base text-muted-foreground'>
						Вы еще не посетили ни одного матча
					</h3>
				</div>
			</TabsContent>
			<TabsContent value='password'>
				<div className='text-center p-8 bg-secondary rounded-2xl'>
					<h1 className='text-xl font-medium'>Ничего не найдено</h1>
					<h3 className='text-base text-muted-foreground'>
						Вы еще не смотрели ни одного матча
					</h3>
				</div>
			</TabsContent>
		</Tabs>
	)
}
