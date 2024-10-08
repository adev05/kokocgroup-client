import { teamType } from '@/app/lib/definitions'
import Image from 'next/image'

export default function TeamCard({ item }: { item: teamType }) {
	return (
		<div className='text-center border rounded-2xl overflow-hidden'>
			<Image
				src='/player-image.png'
				alt=''
				width={300}
				height={300}
				className='aspect-square object-cover object-top mx-auto bg-[#F8F8F8] p-4 pb-0 w-full'
			/>
			<div className='px-2 py-4'>
				<h1 className='text-xl leading-5 font-semibold'>Имя Фамилия</h1>
				<h3 className='uppercase text-xs mt-2'>Главный тренер</h3>
			</div>
		</div>
	)
}
