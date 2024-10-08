'use client'

import CreateNews from '@/components/dashboard/news/create-news'

export default function Dashboard() {
	// const { data: session } = useSession()

	return (
		<div>
			{/* Dashboard main */}
			<CreateNews />
		</div>
		// <div className='w-full container p-8 mx-auto space-y-2'>
		// 	{/* <p>Dashboard</p> */}
		// 	{/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
		// 	{/* <CreateNews /> */}

		// {/* <CreateNews /> */}
		// </div>
	)
}
