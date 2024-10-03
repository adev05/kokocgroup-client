import Image from 'next/image'

export default function Main() {
	return (
		<>
			<div className='mx-auto text-center content-center w-full h-[calc(100svh-76px)] bg-[linear-gradient(to_bottom,white,transparent),linear-gradient(to_top,white,transparent),url("/main-background.png")] bg-center bg-no-repeat bg-cover'>
				<div className='mx-auto px-4'>
					<p className='font-light text-[clamp(0rem,4vw,4rem)] tracking-[clamp(0rem,4vw,4rem)] mb-[1rem] md:text-[1.5rem] md:tracking-[1rem] md:mb-[1rem] xl:text-[2rem] xl:tracking-[1.5rem] xl:mb-[1.5rem]'>
						ФУТБОЛЬНЫЙ КЛУБ
					</p>
					<div className='font-bold flex items-center justify-center text-[clamp(0rem,20vw,20rem)] leading-[clamp(0rem,20vw,20rem)] md:text-[10rem] md:leading-[10rem] xl:text-[16rem] xl:leading-[16rem]'>
						<p>К</p>
						<Image
							src='/main-coconut.png'
							alt='Coconut image'
							width={1000}
							height={1000}
							className='size-[clamp(0rem,20vw,20rem)] md:size-[10rem] xl:size-[16rem]'
							quality={100}
							priority={true}
						/>
						<p>К</p>
						<Image
							src='/main-ball.png'
							alt='Ball image'
							width={1000}
							height={1000}
							className='size-[clamp(0rem,20vw,20rem)] md:size-[10rem] xl:size-[16rem]'
							quality={100}
							priority={true}
						/>
						<p>С</p>
					</div>
					<p className='flex justify-center font-bold text-center text-[clamp(0rem,20vw,20rem)] leading-[clamp(0rem,20vw,20rem)] md:text-[10rem] md:leading-[10rem] xl:text-[16rem] xl:leading-[16rem]'>
						ГРУПП
					</p>
				</div>
			</div>
		</>
	)
}
