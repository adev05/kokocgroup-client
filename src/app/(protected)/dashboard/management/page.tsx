'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function DashboardManagementPage() {
	const { data: session } = useSession()
	const router = useRouter()
	const permissions = session?.user.permissions

	if (!permissions?.includes('management')) {
		router.push('/dashboard')
	}

	return (
		<div className='flex justify-center items-center flex-col h-full'>
			<h1 className='font-medium text-2xl'>Панель правления</h1>
			<p className='text-muted-foreground text-sm'>Выберите один из пунктов</p>
		</div>
	)
}

/*
delete_news
view_sheduled_news
create_news
edit_news
view_deleted_news

delete_team
edit_team
create_team
edit_team_member
delete_team_member
add_team_member

create_event
edit_event

edit_store_item
delete_store_item
create_store_item

remove_role
delete_role
edit_role
create_role

delete_location
create_location
edit_location

management

upload_image
*/
