'use client'

import { Button } from '@/components/ui/button'
import NewsCard from '../news/card'
import Link from 'next/link'

export interface newsType {
	id: number
	title: string
	image: string
	tag: string
	date: Date
	views: number
}

const news: newsType[] = [
	{
		id: 1,
		title: 'Барселона обыграла Реал Мадрид со счетом 3:1',
		image:
			'https://cdn4.cdn-telegram.org/file/Oj-4tfLnKPjdPkYZFW8MLhyQ0U8ppCBnbDCuCACy15uqUw__qb-cQedtVGDcn558pSP4orAipY2HIwHCwJFoA9Sd6MYAAwGnTqHuPUG01Fo3MGazUbgOHfxImFQpW7htPvCUdxMJw70fC9UiB8-NbXflPNgA_JyShsbtc4QrKy_iCbR6PH1cLRnvMRwDb6lVoMJyiBlCfZ37zAfYFYl2tt_6IpbyvGfuDSdHDE4ICwP3YrGG1MRwc-MTptiJDF8TiBaLdI3lnIVqhyOAMAYNm3FY8DzahRIsCHt56IKrTHHdTOw_8kEBipxbxM4Wa7Y3Trev9T_4i5o1l8jxNvTIJA.jpg',
		tag: 'Матч',
		date: new Date(Date.now()),
		views: 5000,
	},
	{
		id: 2,
		title: 'Лионель Месси получил награду лучшего игрока года',
		image:
			'https://cdn4.cdn-telegram.org/file/NLt5Tq8Uv-PYmn2Fzg8im65wgCHwvm4-b5I4uO_GSu3xSdj9v-w8uJzgaaIYRTA53GxCsmCGH0cwYccJrE_9oY-F_NauIn2TnJufhuboAhmoEjdGtN97Om5nztIwuZe_JIunm014glQlh4VnCUKzw0JMEY0WqFT2tNgioEr8cMUt6tJJsZYrTW6MAO2PFjV5oV5o_6o2AeOO5mtLDruEGY9gEuWLH-Zg4eFYe6SpPaiOIjo8vcfaQQ3yOdKazF27qRXiWu3YwrzCYgs52yoGh5qzWoY6n5cSad5wzCyL0KBI0TZU384HVBTJnAvynHSI7Abj_9x6tVk-GS_6AixKfA.jpg',
		tag: 'Награды',
		date: new Date(Date.now() - 2 * 3600 * 1000),
		views: 3500,
	},
	{
		id: 3,
		title: 'Манчестер Юнайтед подписал контракт с новым нападающим',
		image:
			'https://cdn4.cdn-telegram.org/file/pXP3SEAIDKl3ZVtNKypwERFdmy1L34YdgU1yN9rnpZPsQWaQAqYgUcTrpnGKZyUDJWbV5MU0e54ybcz3bTK_le7pLLDoLAMzzNika495ZYfu9TBat16lt0RWab-QXyaYCI506g5f_mCugaoOZHdRBEn0vQPIGjVO0ODp4ug3cTd8ldIG95Kwl7Op-JsfV0QDmlVq1JiJIIAcbAV3QseAVo6L1UqVpIgz_kn2SpnM9U53_kROt875mZuMTwJ0gTeEHFzvNpKMcG-RppgT2L69sn0exy5vbsM0ubeMOSCVMQOdRhX1nkjlSA1v54dfUgn0vXq21EjlbKlUcsldAUG1Xg.jpg',
		tag: 'Трансферы',
		date: new Date(Date.now() - 5 * 24 * 3600 * 1000),
		views: 4200,
	},
	{
		id: 4,
		title: 'Ливерпуль выиграл Лигу Чемпионов',
		image:
			'https://cdn4.cdn-telegram.org/file/Y2HQZi4sxYkWjF2alWpQxfF_WAXtghN2JmKdzbwEeJsK8N9CLQwJvLgeZOTDFdmg_yv8RLC3Pk9eh7UFWzftqBopXFRwn60I9rKNB9ZyvDaF6TJGOYvhSx9zIEapLEolbDkTjLkgfxMmPeUE3bx00b2KKipsa_pP7erddw5KfWRF1NVGT7IsF9qGkNRdOi1Bxh-L9B--GjUBeu3y33Jg8BCfWt_rHmDCq5NhY0Fpq_WhT2aWabUZ9l3cbLLAjVFV1X_7R9tov-soKxBBfqpUKlH5rJNXdW1ghfqK6J4DIyZr-1rMvmwpif7WHQ9KCzDXs--QXPicHphA1lTN0RAA1g.jpg',
		tag: 'Турниры',
		date: new Date(Date.now() - 20 * 24 * 3600 * 1000),
		views: 6000,
	},
	{
		id: 5,
		title: 'Криштиану Роналду вернулся в Реал Мадрид',
		image:
			'https://cdn4.cdn-telegram.org/file/EYFRO0yAEyY1k4jw03e_rZjeePnYzEv0ctoz-66UCQ_oLG-0CwApkWLYfOgQgCJLGD418oOgCqP9HdoCM8tIBm3RIA79QxO8qspq2g_WY2RO7JtaC1BHusuqcUR9gUyQh6WSa4GppPd6b7gEQLy8lvMLqmekaBGL916XT3gz9XvzThzI94vv1P-dIloqmCXwRRgpY974aqn33LGjjpgxM1SBL5tbgZLWcR356iSCWWx6smjX8IeQDaa7ZfQeN1HDqEFvdWHdK1BF_1nX9XQbJjxRRz1WSQUKd-l6Q20XJDjmqp3E3d_x8NH3ObG_UUKzNCHir_NPGrBFLQZipPi2ew.jpg',
		tag: 'Трансферы',
		date: new Date(Date.now() - 20 * 1000),
		views: 4800,
	},
	{
		id: 6,
		title: 'Арсенал объявил о новом спонсоре',
		image:
			'https://cdn4.cdn-telegram.org/file/VZdajdYpb87YG1qQP7lJ8HFPxe2gPjXacl1mALqmqbKmJfNRaHZvjpuWDMS_9GVsyBXfSAzolH-xpDA-umyemLL8xlm8XumvlcnsMpxAIw6__An7yw-CXzycB57ziEY5juURAcGEQMVuD15hEn8BCc06NumkYaP_Z6nXYygawKgMqktzjJDpBDeYk81KiipqLFnZAMXzsSHk0Wm2JHd6P8MOy8GHTcNZj7AR-Q9r9fPJ7EpjK7LcvsoPxi9P-B-kOnUzqJ1AZwh6rzXsuBr8tgfM9EgBMywEPJVKCh4O_oXQHzSFtrRRlN5ZkB_Ot6EcFmpyiBCWaCv4FAs1gckgCQ.jpg',
		tag: 'Спонсоры',
		date: new Date('2023-08-10'),
		views: 2800,
	},
	{
		id: 7,
		title: 'Ювентус выиграл Серию А',
		image:
			'https://cdn4.cdn-telegram.org/file/qk7oRJJlwBmVNBd2aWK6CbtLXkJfO4TGxU7-pQlT-pfrLGYYL4UmBuGagTZbY5WVflu1sUA0yQ7WCF3hs1I3amOHnNh9E9ZpMR2yyI6Elae8iEBqR_k4a54L2ZXs7k_xeLeEaYL_jYkirXwjFs5EnFJdWV7PCoaeo8q85LnMQrKccuqog_xeVguOiEthlCN1UHEcbMmmsJbG-OHkmd5U8i1WuBfKe-7BuKm2FlVj6EqvJDOzxySJU6Zz0NwNK61iUu4_gV-uNGpMYE0P5jGA1Fd8t9X_HknZ-GnYB4d1VvdbXlAxc05bt6DAGPjYLT-0kPgz4B4uyseuxSEx2rONlA.jpg',
		tag: 'Турниры',
		date: new Date(Date.now() - 90 * 24 * 3600 * 1000),
		views: 3700,
	},
	{
		id: 8,
		title: 'ПСЖ подписал контракт с Неймаром',
		image:
			'https://cdn4.cdn-telegram.org/file/YDrHq9IA7NslVR7x-RjXLoVUi_hompkSGDPZcP8IkmjJmRS4wSA1Xps90yif4BGBAlC5q7nvWmrfpij2BE5H-X3l7xT-LWpJ4eMufkDl7u_6VlxfE29EjnWuYfmOSZM980sdoekypKB3Ga2_AqodE-bcqjVYei5Y73R0nfuReleZZV4exymn3mWXkuhDLb5Wcpfkb4yFDSbOiKWS3EOp4ZK6OH7pfvyDo1tEpzyCgLYcmCoiiPDqngwxNM5WCkNqvzIpb3Kh10XpeiPQ89dX_yeinJbH18Oa4Hg6nJgf-KPD_msPXdXl6fdDf6c0ndXNbYnP-CpltkRhnYOOwBRugg.jpg',
		tag: 'Трансферы',
		date: new Date(Date.now() - 45 * 24 * 3600 * 1000),
		views: 4500,
	},
]

export default function News() {
	return (
		// <div className='w-full p-4 pt-8 pb-0 lg:p-16 lg:pb-0 xl:p-32 xl:pb-0'>
		// 	<div className='flex flex-col md:flex-row gap-2 justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
		// 		<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
		// 			Новости
		// 		</h1>
		// 		<div className='flex items-center gap-2'>
		// 			<Button asChild variant='outline'>
		// 				<Link href='/news'>Показать всё</Link>
		// 			</Button>
		// 		</div>
		// 	</div>
		// 	<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
		// 		{new Array(8).fill(0).map((_, index) => (
		// 			<NewsCard key={index} />
		// 		))}
		// 	</div>
		// </div>
		<div className='w-full container p-8 mx-auto'>
			<div className='flex flex-col md:flex-row gap-2 justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					Новости
				</h1>
				<div className='flex items-center gap-2'>
					<Button asChild variant='outline'>
						<Link href='/news'>Показать всё</Link>
					</Button>
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
				{/* {new Array(8).fill(0).map((_, index) => (
					<NewsCard key={index} />
				))} */}
				{news.map(item => (
					<NewsCard item={item} />
				))}
			</div>
		</div>
	)
}
