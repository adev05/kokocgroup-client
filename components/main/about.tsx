'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

export default function About() {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
			watchDrag: false,
			align: 'start',
		},
		[AutoScroll({ playOnInit: true, startDelay: 0 })]
	)

	return (
		<div className='w-full container p-8 mx-auto'>
			<div className='flex justify-between items-center mb-8 lg:mb-12 xl:mb-16'>
				<h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>
					О клубе
				</h1>
			</div>
			<Accordion type='single' collapsible className='w-full mb-8'>
				{new Array(10).fill(0).map((_, index) => (
					<AccordionItem value={`item-${index}`} key={index}>
						<AccordionTrigger>
							Какой-то интересующий болельщиков вопрос?
						</AccordionTrigger>
						<AccordionContent>
							Какой то ответ на интересующий вопрос
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<div className='embla'>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container'>
						{new Array(24).fill(0).map((_, index) => (
							<div
								className='embla__slide select-none flex-[0_0_calc(100%/2)] xs:flex-[0_0_calc(100%/4)] md:flex-[0_0_calc(100%/6)] 2xl:flex-[0_0_calc(100%/10)] min-w-72 xs:min-w-0'
								key={index}
							>
								<h1 className='font-medium text-lg'>Партнер {index + 1}</h1>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
