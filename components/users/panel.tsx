'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import UsersNavbar from '@/components/users/users-navbar'
import { userType } from '@/app/lib/definitions'

export default function UsersPanel({ userId }: { userId: number }) {
	const [user, setUser] = useState<userType>()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchUser() {
			try {
				const response = await fetch(
					process.env.SERVER_URL + `/v1/users/${userId}`
				)
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				const userData = await response.json()
				setUser(userData)
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError('An unexpected error occurred')
				}
			} finally {
				setLoading(false)
			}
		}

		fetchUser()
	}, [userId])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	if (!user) {
		return <div>User data is not available</div>
	}
	return (
		<div className='w-full bg-secondary rounded-2xl p-2 space-y-2 min-w-64'>
			<div className='w-full h-32 sm:h-48 md:h-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-2'></div>

			<div className='grid gap-y-4 md:gap-y-0 grid-cols-1 grid-rows-[auto,auto] md:grid-cols-[auto,1fr] items-center'>
				<div className='grid justify-center text-center md:text-start grid-cols-1 md:grid-cols-[auto,auto] gap-4 items-center md:ml-8'>
					<Avatar className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto -mt-[56px] sm:-mt-[72px] md:-mt-[88px] outline-secondary outline-4 outline bg-secondary'>
						<AvatarImage src={user.avatar_url} />
						<AvatarFallback className='bg-background'>{`${user.first_name[0]} ${user.last_name[0]}`}</AvatarFallback>
					</Avatar>
					<div className='space-y-1'>
						<h1 className='text-xl leading-5 font-medium'>{`${user.first_name} ${user.last_name}`}</h1>
						<h3 className='text-base leading-4 text-muted-foreground'>
							Какая то информация
						</h3>
					</div>
				</div>

				<UsersNavbar userId={userId} />
			</div>
		</div>
	)
}
