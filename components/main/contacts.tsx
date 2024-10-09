'use client'

import FeedbackForm from '../contacts/feedbackForm'
import YandexMap from './yandex-map'

export default function Contacts() {
	return (
		<div className='w-full container p-8 mx-auto space-y-8'>
			<div className='flex justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Контакты
				</h1>
			</div>
			<FeedbackForm />
			<YandexMap />
		</div>
	)
}
