import Footer from './components/footer'
import Header from './components/header'
import Matches from './components/main/matches'
import News from './components/main/news'
import Team from './components/main/team'
import Media from './components/main/media'
import Shop from './components/main/shop'
import TournamentTable from './components/main/tournament-table'
import Main from './components/main/main'
import About from './components/main/about'
import Contacts from './components/main/contacts'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Main />
				<News />
				{/* <Team /> */}
				<Matches />
				<Shop />
				<About />
				<Contacts />
				{/* <TournamentTable />
				<Media /> */}
			</main>
			<Footer />
		</>
	)
}
