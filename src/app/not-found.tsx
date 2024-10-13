import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='w-full container p-8 mx-auto space-y-4 min-h-[calc(100svh-60px)] text-center flex flex-col justify-center items-center'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
				Ой! Мяч потерялся...
			</h1>
			<p className='text-muted-foreground'>
				Попробуйте еще раз или вернитесь на{' '}
				<Button variant='link' asChild className='px-0'>
					<Link href='/'>главную страницу</Link>
				</Button>
				.
			</p>
			{/* <Link href='/'>Return Home</Link> */}
		</div>
	)
}
