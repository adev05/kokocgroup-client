import Logotype from './logotype'

export default function Footer() {
	return (
		<footer className='bg-black text-white p-[18px]'>
			<div className='flex mx-auto justify-between items-center gap-4 mb-4'>
				<div>
					<Logotype variant='white' size='long' />
					<p className='text-center mt-2 text-sm text-muted-foreground'>
						Официальный сайт
						<br /> Футбольного клуба
						<br /> «Кокос Групп»
					</p>
				</div>
				<div className='text-center'>
					<p className='text-center text-xs'>Разработано студией</p>
					<h1 className='text-4xl font-semibold'>SkyDevs</h1>
				</div>
			</div>
			<p className='text-sm'>© 2024 Футбольный клуб «Кокос Групп» </p>
		</footer>
	)
}
