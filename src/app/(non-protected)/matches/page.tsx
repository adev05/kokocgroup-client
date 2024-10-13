'use client'

import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import MatchesCard from '@/components/matches/card'
import { useEffect, useState } from 'react'
import { matchesType } from '@/app/lib/definitions'
import MatchesLoadingCard from '@/components/matches/loading-card'

export default function MatchesPage() {
	const [matches, setMatches] = useState<matchesType[]>([])
	const [year, setYear] = useState<string>()
	const [month, setMonth] = useState<string>()
	// const [opponent, setOpponent] = useState<string>()
	const [offset, setOffset] = useState<number>(0)
	// const [search, setSearch] = useState<string>()
	const [canShowMore, setCanShowMore] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const LIMIT = 16
	const currentYear = new Date().getFullYear()
	const currentMonth = new Date().getMonth() + 1

	useEffect(() => {
		const fetchMatches = async () => {
			try {
				const response = await fetch(
					`${
						process.env.SERVER_URL
					}/v1/events?page=event&offset=${offset}&limit=${LIMIT}${
						year && year != 'all' ? '&year=' + year : ''
					}${month && month != 'all' ? '&month=' + month : ''}`
				)

				console.log({ response })

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()

				console.log({ data })

				if (data.length < LIMIT) {
					setCanShowMore(false)
				}

				if (matches.length < LIMIT) {
					setMatches(data)
				} else {
					setMatches(prevMatches => [...prevMatches, ...data])
				}
				setIsLoading(false)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
			}
		}

		fetchMatches()
	}, [offset])

	useEffect(() => {
		setOffset(0)
		setMatches([])
		setIsLoading(true)
		setCanShowMore(true)
		const fetchMatches = async () => {
			try {
				const response = await fetch(
					`${
						process.env.SERVER_URL
					}/v1/events?page=event&offset=${offset}&limit=${LIMIT}${
						year && year != 'all' ? '&year=' + year : ''
					}${month && month != 'all' ? '&month=' + month : ''}`
				)

				console.log({ response })

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()

				console.log({ data })

				if (data.length < LIMIT) {
					setCanShowMore(false)
				}

				if (matches.length < LIMIT) {
					setMatches(data)
				} else {
					setMatches(prevNews => [...prevNews, ...data])
				}
				setIsLoading(false)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
			}
		}

		fetchMatches()
	}, [year, month])

	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Матчи</h1>
			<div className='w-full min-w-64 rounded-2xl bg-secondary grid grid-rows-2 grid-cols-1 md:grid-cols-[repeat(2,auto),1fr] md:grid-rows-1 items-center gap-2 p-2'>
				<Select
					value={year}
					onValueChange={value => {
						setYear(value)
					}}
				>
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

				<Select
					value={month}
					onValueChange={value => {
						setMonth(value)
					}}
				>
					<SelectTrigger
						className='w-full md:w-36 shadow-none border-none !ring-0'
						disabled={!!!year}
					>
						<SelectValue placeholder='Месяц' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='all'>Все</SelectItem>
							<SelectItem value='1'>Январь</SelectItem>
							<SelectItem value='2'>Февраль</SelectItem>
							<SelectItem value='3'>Март</SelectItem>
							<SelectItem value='4'>Апрель</SelectItem>
							<SelectItem value='5'>Май</SelectItem>
							<SelectItem value='6'>Июнь</SelectItem>
							<SelectItem value='7'>Июль</SelectItem>
							<SelectItem value='8'>Август</SelectItem>
							<SelectItem value='9'>Сентябрь</SelectItem>
							<SelectItem value='10'>Октябрь</SelectItem>
							<SelectItem value='11'>Ноябрь</SelectItem>
							<SelectItem value='12'>Декабрь</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				{/* <Select>
					<SelectTrigger className='w-full md:w-48 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Оппонент' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='all'>Все</SelectItem>
							<SelectItem value='Пресс-релиз'>Пресс-релиз</SelectItem>
							<SelectItem value='Статья'>Статья</SelectItem>
							<SelectItem value='Трансфер'>Трансфер</SelectItem>
							<SelectItem value='Интервью'>Интервью</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select> */}
			</div>
			{isLoading ? (
				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
					{new Array(16).fill(0).map((_, index) => (
						<MatchesLoadingCard key={index} />
					))}
				</div>
			) : matches.length > 0 ? (
				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
					{matches.map(item => (
						<MatchesCard item={item} key={item.id} />
					))}
				</div>
			) : (
				<div>Ничего не найдено</div>
			)}
			{canShowMore ? (
				<Button
					variant='secondary'
					className='mx-auto w-full'
					onClick={() => setOffset(offset + LIMIT)}
				>
					Показать еще
				</Button>
			) : matches.length > 0 ? (
				<Button variant='outline' disabled className='mx-auto w-full'>
					Все новости загружены
				</Button>
			) : null}
		</div>
	)
}
