import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
	title: 'ФК Кокос Групп — официальный сайт',
	description: 'Футбольный клуб Кокос Групп',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${montserrat.className} antialiased`}>{children}</body>
		</html>
	)
}
