import { Skeleton } from '../ui/skeleton'

export default function NewsLoadingCard() {
	return (
		<div
			className='w-full min-w-64 flex flex-col justify-start overflow-hidden cursor-pointer border rounded-3xl relative hover:[transform:scale(1.025)] [transition:transform_0.25s] p-2 pb-4 space-y-4'
			draggable={false}
		>
			<Skeleton className='w-full max-w-full object-cover aspect-video rounded-2xl' />
			<Skeleton className='h-4 mx-2 w-1/2' />
			<Skeleton className='h-3 mx-2 w-3/4' />
		</div>
	)
}
