import { playerType } from '@/app/lib/definitions'
import Image from 'next/image'
import Link from 'next/link'

export default function TeamCard({ item }: { item: playerType }) {
	return (
		<Link
			href={`/users/${item.user_id}`}
			className='text-center border rounded-2xl overflow-hidden p-2 space-y-4 pb-4 hover:[transform:scale(1.025)] [transition:transform_0.25s]'
		>
			{item.avatar_url && (
				<Image
					src={item.avatar_url}
					alt={`${item.first_name} ${item.last_name}`}
					width={450}
					height={450}
					className='rounded-xl aspect-square object-cover object-top mx-auto bg-[#FFFFFD] w-full'
				/>
			)}
			<h1 className='text-xl leading-5 font-semibold'>{`${item.first_name} ${item.last_name}`}</h1>
			<h3 className='uppercase text-xs mt-2'>{item.position}</h3>
		</Link>
	)
}
