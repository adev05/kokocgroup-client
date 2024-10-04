import { auth } from '@/auth'
import { SignOut } from '@/components/signout-button'

export default async function Dashboard() {
	const session = await auth()

	if (!session) return <div>Not authenticated</div>

	return (
		<>
			<p>Dashboard</p>
			<pre>{JSON.stringify(session, null, 2)}</pre>
			<SignOut />
		</>
	)
}
