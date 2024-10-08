import Link from 'next/link'
import Logotype from '@/components/logotype'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function RegisterPage() {
	return (
		<div className='w-80 mx-auto h-[calc(100svh-60px)] content-center space-y-8'>
			<div className='text-center space-y-8'>
				<Logotype size='short' />
				<h1 className='text-2xl font-semibold'>Регистрация</h1>
			</div>
			<div className='content-center text-center space-y-4'>
				<div className=' space-y-4'>
					<Input type='email' placeholder='Введите адрес эл.почты' />
					<Input type='password' placeholder='Создайте пароль' />
				</div>
				<Button className='w-full'>Создать аккаунт</Button>
				<Button asChild variant='link'>
					<Link href='/login'>Уже есть аккаунт? Вход</Link>
				</Button>
			</div>
		</div>
	)
}
