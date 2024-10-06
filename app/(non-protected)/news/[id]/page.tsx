export default function Page({ params }: { params: { id: string } }) {
	return <div>News id: {params.id}</div>
}
