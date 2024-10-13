'use client'

import { shopType } from '@/app/lib/definitions'
import ShopCard from '@/components/shop/card'
import ShopLoadingCard from '@/components/shop/loading-card'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useEffect, useState } from 'react'

export default function ShopPage() {
	const [shop, setShop] = useState<shopType[]>([])
	const [filter, setFilter] = useState<string>('new')
	const [category, setCategory] = useState<string>()
	const [allCategories, setAllCategories] = useState<string[]>()
	const [offset, setOffset] = useState<number>(0)
	const [canShowMore, setCanShowMore] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const LIMIT = 16

	useEffect(() => {
		const fetchShop = async () => {
			try {
				const response = await fetch(
					`${process.env.SERVER_URL}/v1/store?offset=${offset}&limit=${LIMIT}${
						filter ? '&filter=' + filter : ''
					}${category && category != 'all' ? '&category=' + category : ''}`
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

				if (shop.length < LIMIT) {
					setShop(data)
				} else {
					setShop(prevShop => [...prevShop, ...data])
				}
				setIsLoading(false)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
			}
		}

		const fetchCategories = async () => {
			try {
				const response = await fetch(
					`${process.env.SERVER_URL}/v1/store/categories`
				)
				const data = await response.json()
				setAllCategories(data)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
			}
		}

		fetchShop()
		fetchCategories()
	}, [offset])

	useEffect(() => {
		setOffset(0)
		setShop([])
		setIsLoading(true)
		setCanShowMore(true)
		const fetchMatches = async () => {
			try {
				const response = await fetch(
					`${process.env.SERVER_URL}/v1/store?offset=${offset}&limit=${LIMIT}${
						filter ? '&filter=' + filter : ''
					}${category && category != 'all' ? '&category=' + category : ''}`
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

				if (shop.length < LIMIT) {
					setShop(data)
				} else {
					setShop(prevShop => [...prevShop, ...data])
				}
				setIsLoading(false)
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error)
			}
		}

		fetchMatches()
	}, [filter, category])

	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	return (
		<div className='w-full container p-8 mx-auto space-y-8 min-h-[calc(100svh-60px)]'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Магазин</h1>
			<div className='w-full min-w-64 rounded-2xl bg-secondary grid grid-rows-2 grid-cols-1 md:grid-cols-[repeat(2,auto),1fr] md:grid-rows-1 items-center gap-2 p-2'>
				<Select
					value={filter}
					onValueChange={value => {
						setFilter(value)
					}}
				>
					<SelectTrigger className='w-full md:w-48 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Фильтр' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='new'>Сначала новые</SelectItem>
							<SelectItem value='expensive'>Сначала дороже</SelectItem>
							<SelectItem value='cheap'>Сначала дешевле</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Select
					value={category}
					onValueChange={value => {
						setCategory(value)
					}}
				>
					<SelectTrigger className='w-full md:w-64 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Категория' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='all'>Все</SelectItem>
							{allCategories?.map((categoryName, index) => (
								<SelectItem value={categoryName} key={index}>
									{capitalizeFirstLetter(categoryName)}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>

				{/* <Select>
					<SelectTrigger className='w-full md:w-32 shadow-none border-none !ring-0'>
						<SelectValue placeholder='Размер' />
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
				{/* <div className='flex'>
					<Input
						placeholder='Поиск по матчам'
						className='shadow-none border-none !ring-0'
					/>
					<Button variant='ghost'>
						<MagnifyingGlassIcon className='size-4' />
					</Button>
				</div> */}
			</div>
			{isLoading ? (
				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
					{new Array(16).fill(0).map((_, index) => (
						<ShopLoadingCard key={index} />
					))}
				</div>
			) : shop.length > 0 ? (
				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
					{shop.map(item => (
						<ShopCard item={item} key={item.id} />
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
			) : shop.length > 0 ? (
				<Button variant='outline' disabled className='mx-auto w-full'>
					Все товары загружены
				</Button>
			) : null}
		</div>
	)
}
