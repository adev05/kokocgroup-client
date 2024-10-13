export interface userType {
	id: string
	username: string
	email: string
	first_name: string
	last_name: string
	patronymic: string
	date_of_birth: string
	phone_number: string
	avatar_url: string
	permissions: string[]
}

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
	league: string
	tour: string
	start_date: string
	end_date: string
	first_team: {
		id: number
		name: string
		logo_url: string
		score: number
	}
	second_team: {
		id: number
		name: string
		logo_url: string
		score: number
	}
	location_name: string
	location_address: string
	stream_url: string
}

export interface shopType {
	id: number
}
