import About from '@/components/main/about'
import Contacts from '@/components/main/contacts'
import Main from '@/components/main/main'
import Matches from '@/components/main/matches'
import News from '@/components/main/news'
import Shop from '@/components/main/shop'

export default function Home() {
	return (
		<main>
			<Main />
			<News />
			<Matches />
			<Shop />
			<About />
			<Contacts />
		</main>
	)
}
