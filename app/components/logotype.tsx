import Link from 'next/link'
import Image from 'next/image'

export default function Logotype({
	variant,
	size,
}: {
	variant: 'white' | 'black' | 'red'
	size: 'long' | 'short'
}) {
	// if (variant === 'white') {
	// }

	// if (variant === 'black') {
	// }

	// if (variant === 'red') {

	// }
	return (
		// <Link href='/' className='flex gap-2 items-center'>
		// 	<Image
		// 		src='/logotype-red-fill-long.png'
		// 		alt='logo'
		// 		width={160}
		// 		height={32}
		// 		className='w-[10rem] max-w-full h-auto'
		// 	/>
		// </Link>
		<Link href='/' className='flex gap-2 items-center justify-center'>
			<Image
				src={`/logotype/${variant}-${size}.png`}
				alt='logo'
				width={size == 'long' ? 1600 : 400}
				height={size == 'long' ? 320 : 400}
				className={`max-w-full h-auto ${size == 'long' ? 'w-[10rem]' : 'w-10'}`}
			/>
		</Link>
	)
}
