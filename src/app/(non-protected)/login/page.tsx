'use client'

import Link from 'next/link'
import Logotype from '@/components/logotype'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'
import { useRef } from 'react'

// import { authenticate } from '@/app/lib/actions'
// import { useFormState } from 'react-dom'
// import { signIn } from '@/auth'
// import { redirect } from 'next/navigation'
// import { AuthError } from 'next-auth'

export default function LoginPage() {
	// const form = useForm<z.infer<typeof formSchema>>({
	// 	resolver: zodResolver(formSchema),
	// 	defaultValues: {
	// 		login: '',
	// 		password: '',
	// 		remember_me: false,
	// 	},
	// })

	// const [errorMessage, formAction] = useFormState(authenticate, undefined)

	// async function onSubmit(values: z.infer<typeof formSchema>) {
	// 	console.log(
	// 		values,
	// 		JSON.stringify({
	// 			grant_type: 'password',
	// 			username: values.login,
	// 			password: values.password,
	// 		})
	// 	)
	//
	const login = useRef('')
	const password = useRef('')
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await signIn('credentials', {
			login: login.current,
			password: password.current,
			// redirect: false,
		})
	}
	return (
		<div className='min-w-64 max-w-96 p-8 mx-auto min-h-[calc(100svh-60px)] content-center space-y-8'>
			<div className='text-center space-y-8'>
				<Logotype size='short' />
				<h1 className='text-2xl font-semibold'>Вход в аккаунт</h1>
			</div>
			<div className='content-center text-center space-y-4'>
				{/* <Form {...form}>
					<form className='space-y-4' action={formAction}>
						<div className='space-y-4'>
							<FormField
								control={form.control}
								name='login'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder='Введите логин или e-mail'
												{...field}
											/>
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
										<FormControl>
											<Input
												placeholder='Введите пароль'
												type='password'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex justify-between items-center'>
							<FormField
								control={form.control}
								name='remember_me'
								render={({ field }) => (
									<FormItem {...field}>
										<FormControl>
											<div className='flex items-center space-x-2'>
												<Checkbox id='remember_me' />
												<Label htmlFor='remember_me'>Запомнить меня</Label>
											</div>
										</FormControl>
									</FormItem>
								)}
							/>

							<Button variant='link'>
								<Link href='/'>Забыли пароль?</Link>
							</Button>
						</div>
						<Button className='w-full' type='submit'>
							Войти
						</Button>
						<Button asChild variant='link'>
							<Link href='/register'>Нет аккаунта? Создать аккаунт</Link>
						</Button>
					</form>
				</Form> */}

				<form
					className='space-y-4'
					onSubmit={onSubmit}
					// onSubmit={async formData =>
					// await signIn('credentials', {
					// 	login: formData.login,
					// 	password: formData.password,
					// 	redirectTo: '/dashboard',
					// })
					// }
				>
					<div className='space-y-4'>
						<Input
							id='login'
							type='text'
							name='login'
							placeholder='Введите логин или e-mail'
							onChange={e => (login.current = e.target.value)}
						/>
						<Input
							id='password'
							type='password'
							name='password'
							placeholder='Введите пароль'
							onChange={e => (password.current = e.target.value)}
						/>
					</div>
					{/* <div className='flex justify-between items-center'>
						<div className='flex items-center space-x-2'>
							<Checkbox id='remember_me' />
							<Label htmlFor='remember_me'>Запомнить меня</Label>
						</div>

						<Button variant='link'>
							<Link href='/'>Забыли пароль?</Link>
						</Button>
					</div> */}
					<Button className='w-full' type='submit'>
						Войти
					</Button>
					{/* <div
						className='flex h-8 items-end space-x-1'
						aria-live='polite'
						aria-atomic='true'
					>
						{errorMessage && (
							<>
								<p className='text-sm text-red-500'>{errorMessage}</p>
							</>
						)}
					</div> */}
					<Button asChild variant='link'>
						<Link href='/register'>Нет аккаунта? Создать аккаунт</Link>
					</Button>
				</form>
			</div>
		</div>
	)
}
