'use client' // Этот layout будет клиентским компонентом

import { useEffect } from 'react'
import useRefreshToken from '@/app/hooks/useRefreshToken'

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// useRefreshToken() // Хук обновления токена

	return <div>{children}</div>
}
