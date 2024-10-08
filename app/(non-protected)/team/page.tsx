import { team } from '@/app/lib/placeholder-data'
import TeamCard from '@/components/team/card'

export default function TeamPage() {
	return (
		<div className='w-full container p-8 mx-auto space-y-8'>
			<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Команда</h1>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-4'>
					<p className='font-semibold'>Тренерский штаб</p>
					<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
						{team.map(item => (
							<TeamCard item={item} key={item.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
