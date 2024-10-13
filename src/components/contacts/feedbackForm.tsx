import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function FeedbackForm() {
	return (
		<div className='border w-full rounded-2xl p-8 space-y-4'>
			<div className='space-y-2'>
				<h1 className='text-2xl font-medium'>Не пропусти ни одного матча!</h1>
				<p className='text-base text-muted-foreground'>
					Получай свежие новости, расписание и результаты матчей ФК &quot;Кокос
					Групп&quot; прямо на почту!
				</p>
			</div>

			<div className='grid grid-cols-1 grid-rows-2 xl:grid-rows-1 xl:grid-cols-[1fr,auto] gap-4'>
				<Input placeholder='Введите e-mail' />
				<Button>Подписаться</Button>
			</div>
		</div>
	)
}
