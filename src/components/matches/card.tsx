import Image from 'next/image'
import { matchesType } from '@/app/lib/definitions'
import Link from 'next/link'

export default function MatchesCard({ item }: { item: matchesType }) {
	// Функция для определения статуса
	const getStatus = (startDate: Date, endDate?: Date): string => {
		const currentDate = new Date()

		if (endDate) {
			return 'ended'
		} else if (startDate > currentDate) {
			return 'future'
		} else if (startDate < currentDate) {
			return 'live'
		}

		return ''
	}

	const status = getStatus(
		new Date(item.start_date),
		item.end_date ? new Date(item.end_date) : undefined
	)

	function getTimeFromISOString(isoString: string): string {
		// Создаем объект Date из строки
		const date = new Date(isoString)

		// Получаем часы и минуты
		const hours = date.getHours().toString().padStart(2, '0')
		const minutes = date.getMinutes().toString().padStart(2, '0')

		// Возвращаем время в формате HH:MM
		return `${hours}:${minutes}`
	}

	function getFormattedDate(isoString: string): string {
		// Создаем объект Date из строки
		const date = new Date(isoString)

		// Массив с названиями месяцев на русском языке
		const months = [
			'янв',
			'фев',
			'мар',
			'апр',
			'май',
			'июн',
			'июл',
			'авг',
			'сен',
			'окт',
			'ноя',
			'дек',
		]

		// Получаем день, месяц и год
		const day = date.getDate().toString().padStart(2, '0')
		const month = months[date.getMonth()]
		const year = date.getFullYear()

		// Возвращаем строку в формате "день месяц год"
		return `${day} ${month} ${year}`
	}

	return (
		<Link
			href={`matches/${item?.id}`}
			className='w-full min-w-64 flex flex-col justify-start overflow-hidden cursor-pointer border rounded-3xl relative hover:[transform:scale(1.025)] [transition:transform_0.25s] p-4 space-y-2'
		>
			<div className='flex items-center justify-between mb-2'>
				<div className='flex flex-col gap-1'>
					<p className='text-base leading-4 font-medium'>{item.league}</p>
					<p className='text-sm leading-[14px] font-medium text-muted-foreground'>
						{item.tour}
					</p>
				</div>
				{status == 'live' ? (
					<div className='bg-red-600 text-white px-3 py-1 rounded-xl text-sm font-medium'>
						LIVE
					</div>
				) : (
					<div className='flex flex-col text-end gap-1'>
						<p className='text-base leading-[14px]'>
							{status == 'ended'
								? getTimeFromISOString(item.end_date)
								: getTimeFromISOString(item.start_date)}
						</p>
						<p className='text-sm leading-[14px] text-muted-foreground'>
							{status == 'ended'
								? getFormattedDate(item.end_date)
								: getFormattedDate(item.start_date)}
						</p>
					</div>
				)}
			</div>
			<div className='flex flex-col space-y-2'>
				<div className='flex items-center gap-2'>
					{item.first_team.logo_url && (
						<Image
							src={process.env.SERVER_URL + item.first_team.logo_url}
							alt={item.first_team.name}
							width={48}
							height={48}
							className='aspect-square object-contain'
							unoptimized={true}
						/>
					)}

					<p className=''>{item.first_team.name}</p>
					<p className='ml-auto font-semibold text-lg'>
						{item.first_team.score}
					</p>
				</div>
				<hr />
				<div className='flex items-center gap-2'>
					{item.second_team.logo_url && (
						<Image
							src={process.env.SERVER_URL + item.second_team.logo_url}
							alt={item.second_team.name}
							width={48}
							height={48}
							className='aspect-square object-contain'
							unoptimized={true}
						/>
					)}

					<p className=''>{item.second_team.name}</p>
					<p className='ml-auto font-semibold text-lg'>
						{item.second_team.score}
					</p>
				</div>
			</div>
		</Link>
	)
}
