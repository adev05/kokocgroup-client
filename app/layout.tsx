import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/footer'
import Header from '@/components/header'
import AuthProvider from '@/context/AuthProvider'
import { Toaster } from '@/components/ui/toaster'

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
				<AuthProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						{children}
						<Toaster />
						<Footer />
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
