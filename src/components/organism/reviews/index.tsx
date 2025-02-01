import React
// , { useRef }
	from 'react'
import './index.css'
import BtnPrimary from '../../atom/btn-primary/index.tsx'
import { useNavigate } from 'react-router-dom'
// import { debounce } from 'lodash'
// import { REVIEWS_DATA, REVIEWS_DATA_EN } from '../../../constants/index.tsx'

interface Props {
  lang?: 'en' | 'hr',
  title?: string,
}

const Reviews : React.FC<Props> = ({
	lang = 'hr',
	title = 'Što kažu naši korisnici'
}) => {
	const navigate = useNavigate()

	const getReviewImage = () : string => {
		const viewportWidth = window.innerWidth
		if (viewportWidth <= 1024 && viewportWidth > 679) {
			return require('../../../assets/weddingCamera/reviews-image-tablet.png')
		}

		if (viewportWidth <= 679) {
			return require('../../../assets/weddingCamera/reviews-image.png')
		}

		return require('../../../assets/weddingCamera/reviews-image.png')
	}
	// const scrollRef = useRef(null)

	// const handleScroll = debounce(() => {
	// 	const scrollContainer = scrollRef.current
	// 	// @ts-ignore
	// 	const scrollPosition = scrollContainer.scrollLeft
	// 	const itemWidth = 320 // Assuming item width + gap

	// 	// Calculate the nearest item position and snap smoothly
	// 	const snapPosition = Math.round(scrollPosition / itemWidth) * itemWidth
	// 	// @ts-ignore
	// 	scrollContainer.scrollTo({ left: snapPosition, behavior: 'smooth' })
	// }, 100) // Adjust debounce timing if necessary (e.g., 100ms)

	// const scrollLeft = () => {
	// 	const scrollContainer = scrollRef.current
	// 	if (scrollContainer) {
	// 		// @ts-ignore
	// 		const itemWidth = window.innerWidth // Assuming item width + gap

	// 		// Calculate the nearest item position and snap smoothly

	// 		scrollContainer.scrollBy({ left: -itemWidth, behavior: 'smooth' }) // Scroll left by 320px (item width + gap)
	// 	}
	// }

	// const scrollRight = () => {
	// 	const scrollContainer = scrollRef.current
	// 	if (scrollContainer) {
	// 		// @ts-ignore
	// 		const itemWidth = window.innerWidth // Assuming item width + gap

	// 		// Calculate the nearest item position and snap smoothly

	// 		scrollContainer.scrollBy({ left: itemWidth, behavior: 'smooth' }) // Scroll right by 320px (item width + gap)
	// 	}
	// }

	return (
		<section className='reviews-container'>
			<div className='reviews-content-container'>
				<div className='reviews-title-container'>
					<h2 className='reviews-container-title'>{title}</h2>
					<img className='reviews-image' src={getReviewImage()} />
				</div>

				<div className='scroll-view-review-container'>
					<div className='review-item'>
						<p className='review-item-text'>Oduševljena sam aplikacijom. Jednostavna je za korištenje.
							Gosti su bez problema dijelili fotke, a mi smo na kraju imali sve uspomene na jednom mjestu, i to iz raznih kutova koje sami ne bismo uspjeli uhvatiti. 💕
						</p>
						<h3 className='review-item-title'>
							Anamarija
						</h3>
					</div>
					<div className='review-item'>
						<p className='review-item-text'>
							Wedding Camera je apsolutno genijalna ideja! Imali smo sve slike na jednom mjestu, bez potrebe da ih kasnije skupljamo od gostiju. Galerija je ispala predivna uspomena, a slike su bile prirodne i spontane. Preporučujem svakom paru koji želi nešto posebno za svoj dan!
						</p>
						<h3 className='review-item-title'>
							Lucija
						</h3>
					</div>
					<div className='review-item'>
						<p className='review-item-text'>
							Wedding Camera je bila pun pogodak! Jednostavna za korištenje, a galerija nam je ostala kao divna uspomena. Gosti su bili oduševljeni, a mi još više.
						</p>
						<h3 className='review-item-title'>
							Kristina
						</h3>
					</div>
				</div>
			</div>
			<div className='reviews-get-the-app-container'>
				<p className='reviews-get-the-app-text'>Pridružite se i vi zadovoljnim korisnicima!</p>
				<BtnPrimary className='reviews-get-the-app-btn' title='Nabavi aplikaciju' onPress={() => {
					navigate('/price')
				}} />
			</div>
		</section>
	)
}

export default Reviews
