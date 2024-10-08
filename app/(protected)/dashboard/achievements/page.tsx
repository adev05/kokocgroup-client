import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function DashboardAchievementsPage() {
	return (
		<div className='flex flex-col gap-2'>
			{new Array(30).fill(0).map((_, index) => (
				<div
					className='w-full bg-secondary rounded-2xl p-2 flex justify-between items-center'
					key={index}
				>
					<div className='flex gap-4 items-center'>
						<div className='size-16 rounded-xl bg-black'></div>
						<div className='space-y-1'>
							<p className='text-base leading-4 font-medium'>
								Название достижения
							</p>
							<p className='text-sm leading-[14px] text-muted-foreground'>
								Какое-то описание достижения
							</p>
						</div>
					</div>
					<div className='mr-4'>
						<p className='text-sm'>сложность задания</p>
						<div className='flex gap-1 justify-center'>
							<StarIconSolid className='size-4 text-yellow-500' />
							<StarIconSolid className='size-4 text-yellow-500' />
							<StarIcon className='size-4 text-yellow-500' />
							<StarIcon className='size-4 text-yellow-500' />
							<StarIcon className='size-4 text-yellow-500' />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
