'use client'

import { useEffect, useState } from 'react'
import TeamCard from '@/components/team/card'
import { teamType } from '@/app/lib/definitions'
import TeamLoadingCard from '@/components/team/loading-card'

const translations: Record<string, string> = {
	trainers: 'Тренеры',
	goalkeepers: 'Вратари',
	defenders: 'Защитники',
	midfielders: 'Полузащитники',
	strikers: 'Нападающие',
	admins: 'Администраторы',
}

export default function TeamPage() {
	const [team, setTeam] = useState<teamType>({
		trainers: [],
		goalkeepers: [],
		defenders: [],
		midfielders: [],
		strikers: [],
		admins: [],
	})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchTeam = async () => {
			try {
				const response = await fetch(
					`${process.env.SERVER_URL}/v1/teams/kokoc/members`
				)

				console.log({ response })

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}

				const data = await response.json()

				console.log({ data })

				setTeam(data)
				setIsLoading(false)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
				setIsLoading(false)
			}
		}

		fetchTeam()
	}, [])

	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Команда</h1>

			{isLoading
				? Object.keys(team).map(key => (
						<div key={key} className='space-y-4'>
							<p className='font-semibold'>{translations[key]}</p>
							<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
								{new Array(4).fill(0).map((item, index) => (
									<TeamLoadingCard key={index} />
								))}
							</div>
						</div>
				  ))
				: Object.keys(team).map(key => (
						<div key={key} className='space-y-4'>
							<p className='font-semibold'>{translations[key]}</p>
							<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
								{team[key as keyof teamType].map((item, index) => (
									<TeamCard item={item} key={index} />
								))}
							</div>
						</div>
				  ))}
		</div>
	)
}
