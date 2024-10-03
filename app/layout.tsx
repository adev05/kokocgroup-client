import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

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
			<body className={`${montserrat.className} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
