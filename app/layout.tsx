import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import '@blocknote/core/fonts/inter.css'
import '@blocknote/mantine/style.css'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/footer'
import Header from '@/components/header'
import AuthProvider from '@/context/AuthProvider'
import { Toaster } from '@/components/ui/toaster'
import localFont from 'next/font/local'

const montserrat = Montserrat({ subsets: ['cyrillic'] })

const museoSans = localFont({
	src: [
		{
			path: './fonts/MuseoSansCyrl-100.ttf',
			weight: '100',
			style: 'normal',
		},
		{
			path: './fonts/MuseoSansCyrl-100Italic.ttf',
			weight: '100',
			style: 'italic',
		},
		{
			path: './fonts/MuseoSansCyrl-300.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/MuseoSansCyrl-300Italic.ttf',
			weight: '300',
			style: 'italic',
		},
		{
			path: './fonts/MuseoSansCyrl-500.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/MuseoSansCyrl-500Italic.ttf',
			weight: '500',
			style: 'italic',
		},
		{
			path: './fonts/MuseoSansCyrl-700.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/MuseoSansCyrl-700Italic.ttf',
			weight: '700',
			style: 'italic',
		},
		{
			path: './fonts/MuseoSansCyrl-900.ttf',
			weight: '900',
			style: 'normal',
		},
		{
			path: './fonts/MuseoSansCyrl-900Italic.ttf',
			weight: '900',
			style: 'italic',
		},
	],
})

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
			<body className={`${museoSans.className} antialiased`}>
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
