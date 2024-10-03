import Link from 'next/link'
import Footer from '../components/footer'
import Header from '../components/header'
import Logotype from '../components/logotype'

export default function LoginPage() {
	return (
		<>
			<Header />
			<div className='w-80 mx-auto h-[calc(100svh-76px)] content-center'>
				<div className='mb-9 text-center'>
					<Logotype variant='red' size='short' />
					<h1 className='text-2xl font-semibold mt-9'>Вход в аккаунт</h1>
				</div>
				<div className=''>
					<div className='border rounded-xl overflow-hidden mb-4'>
						<input
							className='w-full h-12 p-4 outline-none'
							type='text'
							placeholder='Введите адрес эл.почты'
						/>
						<hr />
						<input
							className='w-full h-12 p-4 outline-none'
							type='text'
							placeholder='Введите пароль'
						/>
					</div>
					<div className='flex justify-between mb-4'>
						<p>Запомнить меня</p>
					</div>
					<button className='rounded-xl bg-black text-white font-medium text-base h-10 content-center px-3 w-full text-center mb-4'>
						Войти
					</button>
					<div className='flex justify-between'>
						<p className='mx-auto'>Нет аккаунта? Создать аккаунт</p>
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</>
	)
}
