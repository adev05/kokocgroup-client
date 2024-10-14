'use client'

import CreateNews from '@/components/dashboard/news/create-news'
import { useSession } from 'next-auth/react'

export default function ManagementNewsPage() {
	const { data: session } = useSession()
	const permissions = session?.user.permissions

	return permissions?.map((item, index) => {
		if (item == 'create_news') {
			return <CreateNews key={index} />
		}
	})
}
