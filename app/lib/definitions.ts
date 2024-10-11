export interface newsType {
	id: number
	title: string
	image_url: string
	category_name: string
	news_date: string
	content: string
}

export interface playerType {
	user_id: number
	avatar_url?: string
	date_of_birth: Date
	first_name: string
	last_name: string
	height?: string
	weight?: string
	position: string
}

export interface teamType {
	trainers: playerType[]
	goalkeepers: playerType[]
	defenders: playerType[]
	midfielders: playerType[]
	strikers: playerType[]
	admins: playerType[]
}

export interface matchesType {
	id: number
	opponent: {
		id: number
		name: string
		count: number
	}
	count: number
	status: 'past' | 'current' | 'future'
	// if current it will be url to stream else url to video:
	video_url?: string
	date: string
	players: [
		{
			id: number
			name: string
			// info about player... like /api/v1/team
		}
	]
}
