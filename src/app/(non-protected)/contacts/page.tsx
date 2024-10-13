import FeedbackForm from '@/components/contacts/feedbackForm'
import YandexMap from '@/components/main/yandex-map'
import Link from 'next/link'

export default function ContactsPage() {
	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
				Контакты
			</h1>
			<div className='grid grid-cols-1 grid-rows-[auto,auto] xl:grid-rows-1 xl:grid-cols-[1fr,25%] gap-8'>
				<YandexMap />
				<div className='flex flex-col gap-4'>
					<div className='grid gap-4 grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-1 xl:grid-rows-2'>
						<div className='flex flex-col'>
							<p>Звоните</p>
							<h1 className='text-2xl font-medium'>+7 (495) 30 80 110</h1>
						</div>
						<div className='flex flex-col'>
							<p>Пишите</p>
							<Link
								href='mailto:hello@kokocgroup.ru'
								className='text-2xl font-medium'
							>
								hello@kokocgroup.ru
							</Link>
						</div>
						<div className='flex flex-col'>
							<p>PR служба</p>
							<Link
								href='mailto:pr@kokocgroup.ru'
								className='text-2xl font-medium'
							>
								pr@kokocgroup.ru
							</Link>
						</div>
						<div className='flex flex-col'>
							<p>Телеграм-канал</p>
							<Link
								href='https://t.me/fckokocgroup'
								className='text-2xl font-medium'
							>
								@fckokocgroup
							</Link>
						</div>
					</div>

					<p>г. Москва, 127051, Цветной Бульвар, 30 стр.1</p>
				</div>
			</div>
			<FeedbackForm />
		</div>
	)
}
