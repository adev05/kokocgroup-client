import Link from 'next/link'
import Logotype from '../components/logotype'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
	return (
		<div className='w-80 mx-auto h-[calc(100svh-76px)] content-center space-y-8'>
			<div className='text-center space-y-8'>
				<Logotype variant='red' size='short' />
				<h1 className='text-2xl font-semibold'>Вход в аккаунт</h1>
			</div>
			<div className='content-center text-center space-y-4'>
				<div className=' space-y-4'>
					<Input type='email' placeholder='Введите адрес эл.почты' />
					<Input type='password' placeholder='Введите пароль' />
				</div>
				<div className='flex justify-between'>
					<div className='flex items-center space-x-2'>
						<Checkbox id='terms' />
						<label
							htmlFor='terms'
							className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
						>
							Запомнить меня
						</label>
					</div>
					<Button asChild variant='link'>
						<Link href='/'>Забыли пароль?</Link>
					</Button>
				</div>
				<Button className='w-full'>Войти</Button>
				<Button asChild variant='link'>
					<Link href='/register'>Нет аккаунта? Создать аккаунт</Link>
				</Button>
			</div>
		</div>
	)
}
