import Image from 'next/image'
import { matchesType } from '@/app/lib/definitions'
import Link from 'next/link'

export default function MatchesCard({ item }: { item?: matchesType }) {
	return (
		<Link
			href={`matches/${item?.id}`}
			className='w-full min-w-64 flex flex-col justify-start overflow-hidden cursor-pointer border rounded-3xl relative hover:[transform:scale(1.025)] [transition:transform_0.25s] p-4 space-y-2'
		>
			<div className='flex items-center justify-between mb-2'>
				<div className='flex flex-col gap-1'>
					<p className='text-base leading-4 font-medium'>Fonbet Кубок России</p>
					<p className='text-sm leading-[14px] font-medium text-muted-foreground'>
						Групповой этап. Тур 4
					</p>
				</div>
				<div className='flex flex-col text-end gap-1'>
					<p className='text-base leading-[14px]'>14:00</p>
					<p className='text-sm leading-[14px] text-muted-foreground'>
						12 авг 2024
					</p>
				</div>
			</div>
			<div className='flex flex-col divide-y space-y-2'>
				<div className='flex items-center gap-2'>
					<Image
						src='/pfc-cska-moscow-logo.png'
						alt='pfc-cska-moscow-logo'
						width={48}
						height={48}
						className='aspect-square object-contain'
					/>
					<p className=''>Кокос групп</p>
					<p className='ml-auto font-semibold text-lg'>5</p>
				</div>
				<div className='flex items-center gap-2'>
					<Image
						src='/fc-spartak-moscow-logo.png'
						alt='fc-spartak-moscow-logo.png'
						width={48}
						height={48}
						className='aspect-square object-contain'
					/>
					<p className=''>Нубы какие-то</p>
					<p className='ml-auto font-semibold text-lg'>0</p>
				</div>
			</div>
		</Link>
	)
}
