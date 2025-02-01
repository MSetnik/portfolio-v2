import React, { useEffect, useState } from 'react'
import './index.css'
import PriceCard from '../../molecule/priceCard/index.tsx'

interface Props {
  lang?: 'en' | 'hr',
  title?: string
}

const PriceSection : React.FC<Props> = ({
	lang = 'hr',
	title = 'Odaberite najbolji plan za sebe.'
}) => {
	const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
	const targetDate = new Date('2024-12-25T23:59:59') // Black Friday Date
	const startDate = new Date('2024-11-11T00:00:00')

	useEffect(() => {
		const updateTimer = () => {
			const now = new Date()
			const difference = targetDate - now

			if (startDate >= Date.now() || targetDate <= Date.now()) {
				return
			}

			if (difference <= 0) {
				clearInterval(timer)
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
			} else {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24))
				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
				const minutes = Math.floor((difference / (1000 * 60)) % 60)
				const seconds = Math.floor((difference / 1000) % 60)

				setTimeLeft({ days, hours, minutes, seconds })
			}
		}

		updateTimer() // Run the timer logic immediately

		const timer = setInterval(updateTimer, 1000)
		return () => clearInterval(timer)
	}, [])

	const isDiscountActive = () => {
		return !!(timeLeft.days !== 0 || timeLeft.hours !== 0 || timeLeft.minutes !== 0 || timeLeft.seconds !== 0)
	}

	// eslint-disable-next-line no-unused-vars
	const handleCheckout = async ({ productId, price }:{productId: number, price: number}) => {
		try {
			const response = await fetch('http://127.0.0.1:5001/wedding-94824/us-central1/testLemonSqueezy', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					productId,
					price
				})
			})

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()

			console.log(data, ' DATA')
			// Preusmjeri korisnika na checkout URL
			window.location.href = data.attributes.url
		} catch (error) {
			console.error('Checkout error:', error)
		}
	}

	return (
		<section className='price-section'>
			<div className='price-section-title-container'>
				{
					isDiscountActive() && lang === 'hr'
						? <div>
							<h1 className='price-section-title' style={{ color: 'green' }}>🎄BOŽIĆ DOLAZI!🎄</h1>
							<h1 className='price-section-title primary-price'><span className='discount-percent'>20% </span>popusta na sve pakete</h1>
						</div>
						: <h1 className='price-section-title'>{title}</h1>

				}
				{
					isDiscountActive() && lang === 'hr' &&
					<h2 className='price-section-title title-countdown'>{timeLeft.days}<p>dana</p>{timeLeft.hours} <p>sati</p> {timeLeft.minutes} <p>minuta</p> {timeLeft.seconds} <p>sekundi</p></h2>
				}
			</div>

			<div className='cards-container'>
				<PriceCard
					price={lang === 'hr' ? isDiscountActive() ? '64€' : '59€' : '59€'}
					discountedPrice={lang === 'hr' ? isDiscountActive() ? '59€' : null : null}
					cardStyle='secondary'
					title={lang === 'hr' ? 'Osnovni' : 'Basic'}
					info={lang === 'hr'
						? ['Do 100 ljudi', '20 slika po gostu', 'Online galerija', 'Dizajn letka', 'Priprema za print']
						: ['Up to 100 users', '20 pictures per user', 'Online gallery', 'Flyer design', 'Preparation for printing']
					}
					btnTitle={lang === 'hr' ? 'Rezerviraj' : 'Buy'}
					lang={lang}
					// DEMO
					// onClick={() => { window.open('https://buy.stripe.com/test_00geWLgY1aGE4GA9AA', '_blank') }}
					// PROD
					onClick={() => { window.open('https://buy.stripe.com/eVaaFtavPdGyago7su', '_blank') }}
				/>
				<PriceCard
					price={lang === 'hr' ? isDiscountActive() ? '79€' : '79€' : '79€'}
					discountedPrice={lang === 'hr' ? isDiscountActive() ? '79€' : null : null}
					cardStyle='primary'
					lang={lang}
					title='Premium'
					info={lang === 'hr'
						? ['Do 200 ljudi', '20 slika po gostu', 'Online galerija', 'Dizajn letka', 'Priprema za print']
						: ['Up to 200 users', '20 pictures per user', 'Online gallery', 'Flyer design', 'Preparation for printing']
					}
					btnTitle={lang === 'hr' ? 'Rezerviraj' : 'Buy'}
					// TEST
					// onClick={() => { window.open('https://buy.stripe.com/test_14k15VgY1eWU1uo8wx', '_blank') }}
					// PROD
					onClick={() => { window.open('https://buy.stripe.com/4gw6pdgUdaum1JS3cd', '_blank') }}
				/>
				<PriceCard
					price={lang === 'hr' ? isDiscountActive() ? '103€' : '99€' : '99€'}
					discountedPrice={lang === 'hr' ? isDiscountActive() ? '99€' : null : null}
					cardStyle='secondary'
					title={lang === 'hr' ? 'Ekskluzivni' : 'Exclusive'}
					info={lang === 'hr'
						? ['Do 350 ljudi', '30 slika po gostu', 'Online galerija', 'Dizajn letka', 'Priprema za print']
						: ['Up to 350 users', '30 pictures per user', 'Online gallery', 'Flyer design', 'Preparation for printing']
					}
					lang={lang}
					btnTitle={lang === 'hr' ? 'Rezerviraj' : 'Buy'}
					// TEST
					// onClick={() => { window.open('https://buy.stripe.com/test_aEU15VcHLbKI5KEaEG', '_blank') }}
					// PROD
					onClick={() => { window.open('https://buy.stripe.com/7sIfZN47rbyq4W4144', '_blank') }}

				/>
			</div>
		</section>
	)
}

export default PriceSection
