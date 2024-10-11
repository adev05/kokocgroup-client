'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { signIn } from 'next-auth/react'

const formSchema = z
	.object({
		username: z
			.string()
			.min(4, { message: 'Логин должен содержать минимум 4 символа.' })
			.max(64, { message: 'Логин должен содержать максимум 64 символа.' }),
		email: z
			.string()
			.email({ message: 'Неверный формат электронной почты.' })
			.min(4, {
				message: 'Электронная почта должна содержать минимум 4 символа.',
			})
			.max(256, {
				message: 'Электронная почта должна содержать максимум 256 символов.',
			}),
		first_name: z
			.string()
			.min(1, { message: 'Имя должно содержать минимум 1 символ.' })
			.max(64, { message: 'Имя должно содержать максимум 64 символа.' })
			.refine(value => !/\d/.test(value), {
				message: 'Имя не должно содержать цифры.',
			}),
		last_name: z
			.string()
			.min(1, { message: 'Фамилия должна содержать минимум 1 символ.' })
			.max(64, { message: 'Фамилия должна содержать максимум 64 символа.' })
			.refine(value => !/\d/.test(value), {
				message: 'Фамилия не должна содержать цифры.',
			}),
		patronymic: z
			.string()
			.min(1, { message: 'Отчество должно содержать минимум 1 символ.' })
			.max(64, { message: 'Отчество должно содержать максимум 64 символа.' })
			.refine(value => !/\d/.test(value), {
				message: 'Отчество не должно содержать цифры.',
			}),
		date_of_birth: z
			.date({
				required_error: 'Дата рождения обязательна.',
				invalid_type_error: 'Неверный формат даты.',
			})
			.refine(value => value <= new Date(), {
				message: 'Дата рождения не может быть в будущем.',
			})
			.refine(
				value => {
					const currentDate = new Date()
					const minDate = new Date(
						currentDate.getFullYear() - 100,
						currentDate.getMonth(),
						currentDate.getDate()
					)
					const maxDate = new Date(
						currentDate.getFullYear() - 12,
						currentDate.getMonth(),
						currentDate.getDate()
					)
					return value >= minDate && value <= maxDate
				},
				{
					message: 'Вам должно быть от 12 до 100 лет.',
				}
			),
		phone_number: z
			.string()
			.min(11, {
				message: 'Номер телефона должен содержать минимум 11 символов.',
			})
			.max(12, {
				message: 'Номер телефона должен содержать максимум 12 символов.',
			})
			.refine(value => /^(\+7|8)\d{10}$/.test(value), {
				message:
					'Номер телефона должен быть в формате +7XXXXXXXXXX или 8XXXXXXXXXX.',
			}),
		password: z
			.string()
			.min(8, { message: 'Пароль должен содержать минимум 8 символов.' })
			.max(64, { message: 'Пароль должен содержать максимум 64 символа.' }),
		confirm: z
			.string()
			.min(8, { message: 'Пароль должен содержать минимум 8 символов.' })
			.max(64, { message: 'Пароль должен содержать максимум 64 символа.' }),
	})
	.refine(data => data.password === data.confirm, {
		path: ['confirm'],
		message: 'Пароли не совпадают.',
	})

export default function RegisterPage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
			first_name: '',
			last_name: '',
			patronymic: '',
			phone_number: '',
			password: '',
			confirm: '',
		},
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const userData = {
				username: values.username,
				email: values.email,
				first_name: values.first_name,
				last_name: values.last_name,
				patronymic: values.patronymic,
				date_of_birth: values.date_of_birth.toISOString().split('T')[0],
				phone_number: values.phone_number,
				password: values.password,
			}

			console.log(userData)
			const url = process.env.SERVER_URL + '/v1/users/auth/register'
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			}

			const response = await fetch(url, options)
			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(errorData.message || 'Ошибка регистрации')
			}
			const data = await response.json()

			await signIn('credentials', {
				login: values.username,
				password: values.password,
				// redirect: false,
			})
			console.log('Регистрация успешна:', data)
		} catch (error) {
			if (error instanceof Error) {
				console.error('Ошибка при регистрации:', error.message)
			}
			// Здесь можно добавить логику для обработки ошибки, например, отображение сообщения об ошибке пользователю
		}
	}

	return (
		<div className='min-w-64 max-w-96 p-8 mx-auto min-h-[calc(100svh-60px)] content-center space-y-8'>
			<div className='text-center space-y-8'>
				<h1 className='text-2xl font-semibold'>Регистрация</h1>
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Логин</FormLabel>
								<FormControl>
									<Input placeholder='Логин' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Адрес эл.почты</FormLabel>
								<FormControl>
									<Input placeholder='Адрес эл.почты' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='first_name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input placeholder='Имя' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='last_name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Фамилия</FormLabel>
								<FormControl>
									<Input placeholder='Фамилия' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='patronymic'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Отчество</FormLabel>
								<FormControl>
									<Input placeholder='Отчество' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='date_of_birth'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Дата рождения</FormLabel>
								<FormControl>
									<Input
										type='date'
										placeholder='Дата рождения'
										{...field}
										value={
											field.value instanceof Date
												? field.value.toISOString().split('T')[0]
												: ''
										}
										onChange={e => {
											const newValue = e.target.value
												? new Date(e.target.value)
												: null
											field.onChange(newValue)
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone_number'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Номер телефона</FormLabel>
								<FormControl>
									<Input placeholder='Номер телефона' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Пароль</FormLabel>
								<FormControl>
									<Input type='password' placeholder='Пароль' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='confirm'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Повторите пароль</FormLabel>
								<FormControl>
									<Input
										type='password'
										placeholder='Повторите пароль'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' className='w-full'>
						Создать аккаунт
					</Button>
					<div className='w-full text-center'>
						<Button asChild variant='link'>
							<Link href='/login'>Уже есть аккаунт? Вход</Link>
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}
