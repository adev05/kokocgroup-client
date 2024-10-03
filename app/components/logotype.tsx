'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Logotype({
	variant,
	size,
}: {
	variant: 'white' | 'black' | 'red'
	size: 'long' | 'short'
}) {
	return (
		<Link
			href='/'
			className={`flex items-center ${
				size == 'long'
					? 'justify-between w-40 min-w-40'
					: 'justify-center w-8 mx-auto'
			}`}
		>
			<Image
				src={`/logotype/${variant}-short.png`}
				alt='КОКОС ГРУПП'
				width={320}
				height={320}
				className={`max-w-full h-auto w-8`}
			/>
			{size == 'long' && (
				<p className='font-semibold text-base leading-4 text-nowrap'>
					КОКОС ГРУПП
				</p>
			)}
		</Link>
	)
}
