import React, { useRef, useState } from 'react'
import './index.css'
import { debounce } from 'lodash'
import WhyChooseUsScrollItem from '../../molecule/whyChooseUsScrollItem/index.tsx'
import {
	FAQ_DATA, FAQ_DATA_EN
	//  WHY_CHOOSE_US_DATA, WHY_CHOOSE_US_DATA_EN
} from '../../../constants/index.tsx'
import AccordionItem from '../../molecule/accordionItem/index.tsx'
import BtnPrimary from '../../atom/btn-primary/index.tsx'
import { scrollToSection } from '../../../helpers/index.tsx'

interface Props {
  viewType?: 1 | 2 | 3,
  title?: string,
  subtitle?: string,
  lang?: 'en' | 'hr'
}

const InfoContent : React.FC<Props> = ({
	viewType = 1,
	title = 'Fotkajte, preuzmite i sačuvajte uspomene.',
	subtitle = 'Wedding camera omogućuje vašim gostima da zabilježe nezaboravne trenutke, te da ih odmah podijele i preuzmu među sobom. Sve te dragocjene uspomene bit će vam dostupne na dohvat ruke.',
	lang = 'hr'
}) => {
	const scrollRef = useRef(null)

	const [openIndex, setOpenIndex] = useState(null) // Track which item is open

	const handleScroll = debounce(() => {
		const scrollContainer = scrollRef.current
		// @ts-ignore
		const scrollPosition = scrollContainer.scrollLeft
		const itemWidth = 320 // Assuming item width + gap

		// Calculate the nearest item position and snap smoothly
		const snapPosition = Math.round(scrollPosition / itemWidth) * itemWidth
		// @ts-ignore
		scrollContainer.scrollTo({ left: snapPosition, behavior: 'smooth' })
	}, 100) // Adjust debounce timing if necessary (e.g., 100ms)

	const handleClick = (index) => {
		setOpenIndex(openIndex === index ? null : index) // Toggle open/close for each item
	}

	if (viewType === 1) {
		return (
			<section className='info-content-main-container'>
				<img className='info-content-image' src={require('../../../assets/weddingCamera/usecase-image.png')} alt='Prikupljanje uspomena s vjenčanja putem aplikacije Wedding Camera'/>

				<div className='info-content-text-container'>
					<h2 className='info-content-title'>
						{title}
					</h2>

					<p className='info-content-text'>
						{subtitle}
					</p>
				</div>

			</section>
		)
	}

	if (viewType === 2) {
		return (
			<section className='item-container-main-container'>
				<div className='item-container-text-title-container why-choose-us-container'>
					<h2 className='item-container-title'>{title}</h2>
				</div>

				<div className='why-us-image' />
				{/* <div className="scroll-container"
					ref={scrollRef}
					onScroll={handleScroll}>
					{
						lang === 'hr'
							? WHY_CHOOSE_US_DATA.map((item, index) => {
								return <WhyChooseUsScrollItem key={index} title={item.title} text={item.text} />
							})
							: WHY_CHOOSE_US_DATA_EN.map((item, index) => {
								return <WhyChooseUsScrollItem key={index} title={item.title} text={item.text} />
							})
					}
				</div> */}
			</section>
		)
	}

	if (viewType === 3) {
		return (
			<section id='faq' className='item-container-main-container faq-main-container'>
				<div className='item-container-text-title-container faq-text-title-container'>
					<h2 className='item-container-title faq-container-title'>{title}</h2>
					<BtnPrimary className='faq-btn-question' title='Imate li drugo pitanje' onPress={() => {
						scrollToSection('contact')
					}} />
				</div>

				<div className="scroll-faq"
					ref={scrollRef}
					onScroll={handleScroll}>
					{
						lang === 'hr'
							? FAQ_DATA.map((item, index) => {
								// if (window.innerWidth > 1024 && window.innerWidth < 1920) {
								return <AccordionItem
									key={index}
									index={index}
									item={item}
									isOpen={openIndex === index}
									onClick={() => handleClick(index)}
								/>
								// } else {
								// 	return <WhyChooseUsScrollItem className="faq-item" key={index} title={item.title} text={item.text} />
								// }
							})
							: FAQ_DATA_EN.map((item, index) => {
								if (window.innerWidth > 1024 && window.innerWidth < 1920) {
									return <AccordionItem
										key={index}
										index={index}
										item={item}
										isOpen={openIndex === index}
										onClick={() => handleClick(index)}
									/>
								} else {
									return <WhyChooseUsScrollItem className="faq-item" key={index} title={item.title} text={item.text} />
								}
							})
					}

					<BtnPrimary className='faq-btn-question faq-data-btn' title='Imate li drugo pitanje' onPress={() => {
						scrollToSection('contact')
					}} />
				</div>

			</section>
		)
	}
}

export default InfoContent
