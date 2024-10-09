import { teamType } from './definitions'

// export const news: newsType[] = [
// 	{
// 		id: 1,
// 		title: 'Барселона обыграла Реал Мадрид со счетом 3:1',
// 		image:
// 			'https://sun9-12.userapi.com/impg/V7HlLaNLdL0DNzUOkNgKBf7ox-PpoGtHtqeh7Q/CD1pYBFBZ2I.jpg?size=2000x1331&quality=95&sign=210fc7f8541f7190ff3b68417a530c16&type=album',
// 		tag: 'Матч',
// 		date: '2023-08-10',
// 		views: 5000,
// 		content: `# **The standard Lorem Ipsum passage, used since the 1500s**

// "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// ## Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

// "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

// ### 1914 translation by H. Rackham

// "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

// ## Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

// "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

// ### 1914 translation by H. Rackham

// "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."`,
// 	},
// 	{
// 		id: 2,
// 		title: 'Лионель Месси получил награду лучшего игрока года',
// 		image:
// 			'https://sun9-65.userapi.com/impg/fqUVj40hsdMXpxZJioQx0vzmY8qQqSqapYqXNg/hKtOoLLtg2g.jpg?size=2000x1125&quality=95&sign=22e557437818aee4d84ad11175d1e357&type=album',
// 		tag: 'Награды',
// 		date: '2023-08-10',
// 		views: 3500,
// 		content:
// 			'Лионель Месси вновь доказал свое превосходство, получив награду лучшего игрока года. Это уже седьмая подобная награда для аргентинского форварда, что является рекордным показателем в истории футбола.',
// 	},
// 	{
// 		id: 3,
// 		title: 'Манчестер Юнайтед подписал контракт с новым нападающим',
// 		image:
// 			'https://sun9-43.userapi.com/impg/2IqOAQY2KyE81LoCoqcIKV9X8SPQmqodRZJF7A/gwF6eXFY38A.jpg?size=2000x1333&quality=95&sign=3d7c7c9166a7e57a039dd9d9736e038a&type=album',
// 		tag: 'Трансферы',
// 		date: '2023-08-10',
// 		views: 4200,
// 		content:
// 			'Манчестер Юнайтед объявил о подписании контракта с новым нападающим. Игрок, чье имя пока держится в секрете, присоединится к команде в ближайшие дни. Этот трансфер стал одним из самых ожидаемых в этом сезоне.',
// 	},
// 	{
// 		id: 4,
// 		title: 'Ливерпуль выиграл Лигу Чемпионов',
// 		image:
// 			'https://sun9-10.userapi.com/impg/WJrv9BqOhM5PeTaProPtsoQ8gP-MfWUQRV67Tg/HrHFURnFHOU.jpg?size=2000x1125&quality=95&sign=8b5c9ffe6191a6d16a3330723c711856&type=album',
// 		tag: 'Турниры',
// 		date: '2023-08-10',
// 		views: 6000,
// 		content:
// 			'Ливерпуль вновь доказал свое мастерство, выиграв Лигу Чемпионов. В финале они обыграли ПСЖ со счетом 2:1, забив победный гол на последних минутах матча. Это уже шестой титул Лиги Чемпионов для Ливерпуля.',
// 	},
// 	{
// 		id: 5,
// 		title: 'Криштиану Роналду вернулся в Реал Мадрид',
// 		image:
// 			'https://sun9-42.userapi.com/impg/zFeUxkQiFfdFD6Gl3kPDmBmBzYsZjoPRDj3-4A/fEhqH5AJsKI.jpg?size=2000x1333&quality=95&sign=38d19e96c26ef81cd2452f4c14f87aec&type=album',
// 		tag: 'Трансферы',
// 		date: '2023-08-10',
// 		views: 4800,
// 		content:
// 			'Криштиану Роналду вернулся в Реал Мадрид после нескольких лет выступлений за Ювентус. Португальский форвард подписал контракт на 3 года и сразу же стал ключевым игроком команды. Этот трансфер стал одним из самых громких в истории футбола.',
// 	},
// 	{
// 		id: 6,
// 		title: 'Арсенал объявил о новом спонсоре',
// 		image:
// 			'https://sun9-45.userapi.com/impg/USTHBbzI3T_1HEPma-tQ7Zgsp8XJuFKd43HxFw/T4dQUQ0CSPE.jpg?size=2000x1125&quality=95&sign=ae72993a8620c8de376ac9ef529089b7&type=album',
// 		tag: 'Спонсоры',
// 		date: '2023-08-10',
// 		views: 2800,
// 		content:
// 			'Арсенал объявил о новом главном спонсоре. Компания, чье имя пока держится в секрете, станет партнером клуба на ближайшие 5 лет. Этот контракт станет одним из самых дорогих в истории английского футбола.',
// 	},
// 	{
// 		id: 7,
// 		title: 'Ювентус выиграл Серию А',
// 		image:
// 			'https://sun9-62.userapi.com/impg/WjegPRYi6CK1c6tGSpx_NsBQjnJ5H6qJpoKNRQ/A0Exz4mYO2c.jpg?size=2000x1333&quality=95&sign=1e6d1f487082a52eb9a4508da6e723a3&type=album',
// 		tag: 'Турниры',
// 		date: '2023-08-10',
// 		views: 3700,
// 		content:
// 			'Ювентус вновь стал чемпионом Италии, выиграв Серию А. Это уже 36-й титул для туринского клуба, что является рекордным показателем в истории итальянского футбола. Криштиану Роналду сыграл ключевую роль в победе команды.',
// 	},
// 	{
// 		id: 8,
// 		title: 'ПСЖ подписал контракт с Неймаром',
// 		image:
// 			'https://sun9-67.userapi.com/impg/ZFTYg0cFzfyXGjVp52zvdpk_dAdy_xh7heEWNg/ObkkbTYnYO4.jpg?size=2000x1333&quality=95&sign=23a723087ef8f1604d1f2166788b713f&type=album',
// 		tag: 'Трансферы',
// 		date: '2023-08-10',
// 		views: 4500,
// 		content:
// 			'ПСЖ объявил о подписании контракта с Неймаром. Бразильский форвард вернулся в команду после нескольких лет выступлений за Барселону. Этот трансфер стал одним из самых ожидаемых в этом сезоне.',
// 	},
// 	{
// 		id: 9,
// 		title: 'Барселона обыграла Реал Мадрид со счетом 3:1',
// 		image:
// 			'https://sun9-12.userapi.com/impg/MshfbhYytQMjoVB1u3ODLAkYdZ46OOIXrcLj0Q/d5gHtctfpec.jpg?size=2000x1125&quality=95&sign=0cbc33a63523a9176ce8d7eff50d5efe&type=album',
// 		tag: 'Матч',
// 		date: '2023-08-10',
// 		views: 5000,
// 		content:
// 			'В очередном дерби Испанской Примеры Барселона одержала уверенную победу над Реал Мадрид со счетом 3:1. Голы забили Лионель Месси, Антони Гринвуд и Серхио Бускетс. Реал Мадрид смог ответить лишь одним голом от Карима Бензема.',
// 	},
// 	{
// 		id: 10,
// 		title: 'Лионель Месси получил награду лучшего игрока года',
// 		image:
// 			'https://sun9-22.userapi.com/impg/Tvd4hF5-HiqrQMjxyobScwVcoRK47OUNdvMHiQ/dLG4jcxLTfY.jpg?size=2000x1333&quality=95&sign=5263ab986aa9fe5ea70ced9d561f9fff&type=album',
// 		tag: 'Награды',
// 		date: '2023-08-10',
// 		views: 3500,
// 		content:
// 			'Лионель Месси вновь доказал свое превосходство, получив награду лучшего игрока года. Это уже седьмая подобная награда для аргентинского форварда, что является рекордным показателем в истории футбола.',
// 	},
// 	{
// 		id: 11,
// 		title: 'Манчестер Юнайтед подписал контракт с новым нападающим',
// 		image:
// 			'https://sun9-57.userapi.com/impg/G_VIYjIEJDx43-gIU3siIJzpQaUwPDr7H99_vA/uifz-E7ih8c.jpg?size=2000x1333&quality=95&sign=990869d23eb8bd3ae8dbe1a36d98c6bf&type=album',
// 		tag: 'Трансферы',
// 		date: '2023-08-10',
// 		views: 4200,
// 		content:
// 			'Манчестер Юнайтед объявил о подписании контракта с новым нападающим. Игрок, чье имя пока держится в секрете, присоединится к команде в ближайшие дни. Этот трансфер стал одним из самых ожидаемых в этом сезоне.',
// 	},
// 	{
// 		id: 12,
// 		title: 'Ливерпуль выиграл Лигу Чемпионов',
// 		image:
// 			'https://sun9-23.userapi.com/impg/dpv0S1_hRKRrKoCTcoTo554WGmc4h9Ez0Gw0AA/qhnbN63XVjc.jpg?size=2000x1333&quality=95&sign=fa4917cc28bd2eba887c79f86acade1a&type=album',
// 		tag: 'Турниры',
// 		date: '2023-08-10',
// 		views: 6000,
// 		content:
// 			'Ливерпуль вновь доказал свое мастерство, выиграв Лигу Чемпионов. В финале они обыграли ПСЖ со счетом 2:1, забив победный гол на последних минутах матча. Это уже шестой титул Лиги Чемпионов для Ливерпуля.',
// 	},
// 	{
// 		id: 13,
// 		title: 'Криштиану Роналду вернулся в Реал Мадрид',
// 		image:
// 			'https://sun9-47.userapi.com/impg/aACRYpCo2MWYp412Nn0tREDxh9NremBLdlnbdg/dTLDrN5XJlw.jpg?size=2000x1125&quality=95&sign=5d67963d17951ab21a8a3b4df3b17373&type=album',
// 		tag: 'Трансферы',
// 		date: '2023-08-10',
// 		views: 4800,
// 		content:
// 			'Криштиану Роналду вернулся в Реал Мадрид после нескольких лет выступлений за Ювентус. Португальский форвард подписал контракт на 3 года и сразу же стал ключевым игроком команды. Этот трансфер стал одним из самых громких в истории футбола.',
// 	},
// 	{
// 		id: 14,
// 		title: 'Арсенал объявил о новом спонсоре',
// 		image:
// 			'https://sun9-77.userapi.com/impg/WuiFb6Dv6cOS0GM6vrirMuQctZmjRbBiOw-R7w/zLcwCD_BXLQ.jpg?size=2000x1125&quality=95&sign=02ed68d5553c6df73bbe2faf4830f216&type=album',
// 		tag: 'Спонсоры',
// 		date: '2023-08-10',
// 		views: 2800,
// 		content:
// 			'Арсенал объявил о новом главном спонсоре. Компания, чье имя пока держится в секрете, станет партнером клуба на ближайшие 5 лет. Этот контракт станет одним из самых дорогих в истории английского футбола.',
// 	},
// 	{
// 		id: 15,
// 		title: 'Ювентус выиграл Серию А',
// 		image:
// 			'https://sun9-76.userapi.com/impg/7cvNIgUJ4DQ9OFVwU_95ZyTSMMWxq8-uR0sjoQ/knlkf1RtSeI.jpg?size=2000x1333&quality=95&sign=2c7a8aeb6663f4829c2cb45e0fb446ac&type=album',
// 		tag: 'Турниры',
// 		date: '2023-08-10',
// 		views: 3700,
// 		content:
// 			'Ювентус вновь стал чемпионом Италии, выиграв Серию А. Это уже 36-й титул для туринского клуба, что является рекордным показателем в истории итальянского футбола. Криштиану Роналду сыграл ключевую роль в победе команды.',
// 	},
// 	{
// 		id: 16,
// 		title: 'ПСЖ подписал контракт с Неймаром',
// 		image:
// 			'https://sun9-41.userapi.com/impg/KMHwwirZInYfTFod-uaxfFgnFyO7iwVh4mVAng/qgk_HPmylyg.jpg?size=2000x1333&quality=95&sign=1c0cb7fc8d9cc79e13f33a7d28e7b1be&type=album',
// 		tag: 'Трансферы',
// 		date: '2023-08-10',
// 		views: 4500,
// 		content:
// 			'ПСЖ объявил о подписании контракта с Неймаром. Бразильский форвард вернулся в команду после нескольких лет выступлений за Барселону. Этот трансфер стал одним из самых ожидаемых в этом сезоне.',
// 	},
// ]

export const team: teamType[] = [
	{
		id: 1,
		name: 'Имя Фамилия',
	},
	{
		id: 2,
		name: 'Имя Фамилия',
	},
	{
		id: 3,
		name: 'Имя Фамилия',
	},
	{
		id: 4,
		name: 'Имя Фамилия',
	},
	{
		id: 5,
		name: 'Имя Фамилия',
	},
	{
		id: 6,
		name: 'Имя Фамилия',
	},
]
