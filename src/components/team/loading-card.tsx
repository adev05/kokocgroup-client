import { Skeleton } from '../ui/skeleton'

export default function TeamLoadingCard() {
	return (
		<div className='text-center min-w-64 border rounded-2xl overflow-hidden p-2 space-y-5 pb-4 hover:[transform:scale(1.025)] [transition:transform_0.25s]'>
			<Skeleton className='w-full aspect-square rounded-xl' />
			<Skeleton className='w-48 h-4 mx-auto' />
			<Skeleton className='w-32 h-3 mx-auto' />
		</div>
	)
}
