import { Skeleton } from '../ui/skeleton'

export default function MatchesLoadingCard() {
	return (
		<div
			className='w-full min-w-64 flex flex-col justify-start overflow-hidden cursor-pointer border rounded-3xl relative hover:[transform:scale(1.025)] [transition:transform_0.25s] p-4 space-y-2'
			draggable={false}
		>
			<div className='flex items-center justify-between mb-2 w-full'>
				<div className='flex flex-col gap-1.5 w-full'>
					<Skeleton className='w-2/3 h-4' />
					<Skeleton className='w-1/2 h-3' />
				</div>
				<div className='flex flex-col items-end text-end gap-1.5 w-full'>
					<Skeleton className='w-1/4 h-4' />
					<Skeleton className='w-1/2 h-3' />
				</div>
			</div>
			<div className='flex flex-col space-y-2'>
				<div className='flex items-center gap-2'>
					<Skeleton className='w-12 h-12' />
					<Skeleton className='w-1/3 h-3' />
					<Skeleton className='w-1/6 h-3 ml-auto' />
				</div>
				<hr />
				<div className='flex items-center gap-2'>
					<Skeleton className='w-12 h-12' />
					<Skeleton className='w-1/3 h-3' />
					<Skeleton className='w-1/6 h-3 ml-auto' />
				</div>
				{/* <div className='flex items-center gap-2'>
					{item.second_team.logo_url && (
						<Image
							src={process.env.SERVER_URL + item.second_team.logo_url}
							alt={item.second_team.name}
							width={48}
							height={48}
							className='aspect-square object-contain'
							unoptimized={true}
						/>
					)}

					<p className=''>{item.second_team.name}</p>
					<p className='ml-auto font-semibold text-lg'>
						{item.second_team.score}
					</p>
				</div> */}
			</div>
		</div>
	)
}
