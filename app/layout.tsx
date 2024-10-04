import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/footer'
import Header from '@/components/header'

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
		<html lang='en' suppressHydrationWarning>
			<body className={`${montserrat.className} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
