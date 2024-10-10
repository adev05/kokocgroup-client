'use client'

import { newsType } from '@/app/lib/definitions'
import NewsCard from '@/components/news/card'
import NewsLoadingCard from '@/components/news/loading-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function NewsPage() {
	const [news, setNews] = useState<newsType[]>([])
	const [year, setYear] = useState<string>()
	const [month, setMonth] = useState<string>()
	const [category, setCategory] = useState<string>()
	const [offset, setOffset] = useState<number>(0)
	const [search, setSearch] = useState<string>()
	const [canShowMore, setCanShowMore] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const LIMIT = 16
	const currentYear = new Date().getFullYear()
	const currentMonth = new Date().getMonth() + 1

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch(
					`${process.env.SERVER_URL}/v1/news?offset=${offset}&limit=${LIMIT}${
						year && year != 'all' ? '&year=' + year : ''
					}${month && month != 'all' ? '&month=' + month : ''}${
						category && category != 'all' ? '&category=' + category : ''
					}${search ? '&search=' + search : ''}`
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

				if (news.length < LIMIT) {
					setNews(data)
				} else {
					setNews(prevNews => [...prevNews, ...data])
				}
				setIsLoading(false)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
			}
		}

		fetchNews()
	}, [offset])

	useEffect(() => {
		setOffset(0)
		setNews([])
		setIsLoading(true)
		setCanShowMore(true)
		const fetchNews = async () => {
			try {
				const response = await fetch(
					`${process.env.SERVER_URL}/v1/news?offset=${offset}&limit=${LIMIT}${
						year && year != 'all' ? '&year=' + year : ''
					}${month && month != 'all' ? '&month=' + month : ''}${
						category && category != 'all' ? '&category=' + category : ''
					}${search ? '&search=' + search : ''}`
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

				if (news.length < LIMIT) {
					setNews(data)
				} else {
					setNews(prevNews => [...prevNews, ...data])
				}
				setIsLoading(false)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
			}
		}

		fetchNews()
	}, [year, month, category])

	async function handleSearch() {
		setOffset(0)
		setNews([])
		setIsLoading(true)
		setCanShowMore(true)
		try {
			const response = await fetch(
				`${process.env.SERVER_URL}/v1/news?offset=${offset}&limit=${LIMIT}${
					year && year != 'all' ? '&year=' + year : ''
				}${month && month != 'all' ? '&month=' + month : ''}${
					category && category != 'all' ? '&category=' + category : ''
				}${search ? '&search=' + search : ''}`
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

			if (news.length < LIMIT) {
				setNews(data)
			} else {
				setNews(prevNews => [...prevNews, ...data])
			}
			setIsLoading(false)
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error)
		}
	}

	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Новости</h1>
			<div className='w-full rounded-2xl bg-secondary grid grid-rows-4 grid-cols-1 md:grid-cols-[repeat(3,auto),1fr] md:grid-rows-1 items-center gap-2 p-2'>
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
							<SelectItem
								value='1'
								disabled={Number(year) == currentYear && 1 > currentMonth}
							>
								Январь
							</SelectItem>
							<SelectItem
								value='2'
								disabled={Number(year) == currentYear && 2 > currentMonth}
							>
								Февраль
							</SelectItem>
							<SelectItem
								value='3'
								disabled={Number(year) == currentYear && 3 > currentMonth}
							>
								Март
							</SelectItem>
							<SelectItem
								value='4'
								disabled={Number(year) == currentYear && 4 > currentMonth}
							>
								Апрель
							</SelectItem>
							<SelectItem
								value='5'
								disabled={Number(year) == currentYear && 5 > currentMonth}
							>
								Май
							</SelectItem>
							<SelectItem
								value='6'
								disabled={Number(year) == currentYear && 6 > currentMonth}
							>
								Июнь
							</SelectItem>
							<SelectItem
								value='7'
								disabled={Number(year) == currentYear && 7 > currentMonth}
							>
								Июль
							</SelectItem>
							<SelectItem
								value='8'
								disabled={Number(year) == currentYear && 8 > currentMonth}
							>
								Август
							</SelectItem>
							<SelectItem
								value='9'
								disabled={Number(year) == currentYear && 9 > currentMonth}
							>
								Сентябрь
							</SelectItem>
							<SelectItem
								value='10'
								disabled={Number(year) == currentYear && 10 > currentMonth}
							>
								Октябрь
							</SelectItem>
							<SelectItem
								value='11'
								disabled={Number(year) == currentYear && 11 > currentMonth}
							>
								Ноябрь
							</SelectItem>
							<SelectItem
								value='12'
								disabled={Number(year) == currentYear && 12 > currentMonth}
							>
								Декабрь
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Select
					value={category}
					onValueChange={value => {
						setCategory(value)
					}}
				>
					<SelectTrigger className='w-full md:w-48 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Категория' />
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
				</Select>
				<div className='flex'>
					<Input
						placeholder='Поиск по новостям'
						className='shadow-none border-none !ring-0'
						onChange={e => setSearch(e.target.value)}
						onKeyDown={e => {
							if (e.key === 'Enter') {
								handleSearch()
							}
						}}
					/>
					<Button variant='ghost' onClick={handleSearch}>
						<MagnifyingGlassIcon className='size-4' />
					</Button>
				</div>
			</div>
			{isLoading ? (
				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
					{new Array(16).fill(0).map((_, index) => (
						<NewsLoadingCard key={index} />
					))}
				</div>
			) : news.length > 0 ? (
				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
					{news.map(item => (
						<NewsCard item={item} key={item.id} />
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
			) : news.length > 0 ? (
				<Button variant='outline' disabled className='mx-auto w-full'>
					Все новости загружены
				</Button>
			) : null}
		</div>
	)
}
