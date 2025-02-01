import React from 'react'
import './index.css'
import { DemoBtn } from '../../atom/demo-buttom/index.tsx'
import { Link } from 'react-router-dom'

interface Props {
  lang?: 'en' | 'hr',
  subtitle?: string,
  title?: string,
  text?: string,

}

const HowDoesItWork : React.FC<Props> = ({
	lang = 'hr',
	subtitle = 'Kako radi?',
	title = 'Kako radi Wedding Camera?',
	text = 'Bez kompliciranih postavki, bez stresa. Samo čista zabava i mnoštvo prekrasnih fotografija.'
}) => {
	return (
		<section id='how-work' className='how-work-container'>
			<h2 className='item-container-title'>{title}</h2>
			<div className='how-work-content-container'>
				<div className='how-work-text-container'>
					{/* <p className='item-container-subtitle'><b>{subtitle}</b></p> */}
					{/* <p className='how-work-header-text'>
					{text}
				</p> */}

					<img className='how-work-image-large' src={require('../../../assets/weddingCamera/how-work-laptop.png')} alt='Wedding Camera - jednostavan prijenos fotografija gostiju'/>

					<div className='how-work-demo-container'>
						<Link to='/demo'>
							<DemoBtn theme='dark'/>
						</Link>
					</div>
				</div>

				<div className='how-work-description-container'>
					<div className='how-work-item-container'>
						<svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M26.012 37.144C25.028 37.144 24.146 36.892 23.366 36.388C22.598 35.884 21.986 35.152 21.53 34.192C21.086 33.232 20.864 32.068 20.864 30.7C20.864 29.332 21.086 28.168 21.53 27.208C21.986 26.248 22.598 25.516 23.366 25.012C24.146 24.508 25.028 24.256 26.012 24.256C26.984 24.256 27.86 24.508 28.64 25.012C29.42 25.516 30.032 26.248 30.476 27.208C30.92 28.168 31.142 29.332 31.142 30.7C31.142 32.068 30.92 33.232 30.476 34.192C30.032 35.152 29.42 35.884 28.64 36.388C27.86 36.892 26.984 37.144 26.012 37.144ZM26.012 35.542C26.672 35.542 27.248 35.362 27.74 35.002C28.244 34.642 28.634 34.102 28.91 33.382C29.198 32.662 29.342 31.768 29.342 30.7C29.342 29.632 29.198 28.738 28.91 28.018C28.634 27.298 28.244 26.758 27.74 26.398C27.248 26.038 26.672 25.858 26.012 25.858C25.352 25.858 24.77 26.038 24.266 26.398C23.762 26.758 23.366 27.298 23.078 28.018C22.802 28.738 22.664 29.632 22.664 30.7C22.664 31.768 22.802 32.662 23.078 33.382C23.366 34.102 23.762 34.642 24.266 35.002C24.77 35.362 25.352 35.542 26.012 35.542ZM34.9939 37V25.12L35.7679 25.966H32.1499V24.4H36.7759V37H34.9939Z" fill="#282828"/>
							<circle cx="30" cy="30.5" r="29.5" stroke="#282828"/>
						</svg>

						<h3 className='how-work-item-title'>
							{lang === 'hr' ? 'Preuzmite aplikaciju' : 'Download the App'}
						</h3>

						<p className='how-work-item-text'>
							{
								lang === 'hr'
									? 'Preuzmite aplikaciju putem qr koda i ulogirajte se pomoću pina koji će biti dostupan svim gostima na dan vjenčanja.'
									: 'Download the app via the QR code and log in using the PIN that will be provided to all your guests on the wedding day.'
							}

						</p>
					</div>

					<div className='how-work-item-container'>
						<svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M24.012 37.144C23.028 37.144 22.146 36.892 21.366 36.388C20.598 35.884 19.986 35.152 19.53 34.192C19.086 33.232 18.864 32.068 18.864 30.7C18.864 29.332 19.086 28.168 19.53 27.208C19.986 26.248 20.598 25.516 21.366 25.012C22.146 24.508 23.028 24.256 24.012 24.256C24.984 24.256 25.86 24.508 26.64 25.012C27.42 25.516 28.032 26.248 28.476 27.208C28.92 28.168 29.142 29.332 29.142 30.7C29.142 32.068 28.92 33.232 28.476 34.192C28.032 35.152 27.42 35.884 26.64 36.388C25.86 36.892 24.984 37.144 24.012 37.144ZM24.012 35.542C24.672 35.542 25.248 35.362 25.74 35.002C26.244 34.642 26.634 34.102 26.91 33.382C27.198 32.662 27.342 31.768 27.342 30.7C27.342 29.632 27.198 28.738 26.91 28.018C26.634 27.298 26.244 26.758 25.74 26.398C25.248 26.038 24.672 25.858 24.012 25.858C23.352 25.858 22.77 26.038 22.266 26.398C21.762 26.758 21.366 27.298 21.078 28.018C20.802 28.738 20.664 29.632 20.664 30.7C20.664 31.768 20.802 32.662 21.078 33.382C21.366 34.102 21.762 34.642 22.266 35.002C22.77 35.362 23.352 35.542 24.012 35.542ZM30.6719 37V35.776L35.8019 30.826C36.2579 30.394 36.5939 30.016 36.8099 29.692C37.0379 29.356 37.1879 29.05 37.2599 28.774C37.3439 28.486 37.3859 28.21 37.3859 27.946C37.3859 27.298 37.1579 26.788 36.7019 26.416C36.2459 26.044 35.5799 25.858 34.7039 25.858C34.0319 25.858 33.4259 25.972 32.8859 26.2C32.3459 26.416 31.8779 26.758 31.4819 27.226L30.2579 26.164C30.7379 25.552 31.3799 25.084 32.1839 24.76C32.9999 24.424 33.8939 24.256 34.8659 24.256C35.7419 24.256 36.5039 24.4 37.1519 24.688C37.7999 24.964 38.2979 25.366 38.6459 25.894C39.0059 26.422 39.1859 27.046 39.1859 27.766C39.1859 28.174 39.1319 28.576 39.0239 28.972C38.9159 29.368 38.7119 29.788 38.4119 30.232C38.1119 30.676 37.6799 31.174 37.1159 31.726L32.5439 36.136L32.1119 35.434H39.7259V37H30.6719Z" fill="#282828"/>
							<circle cx="30" cy="30.5" r="29.5" stroke="#282828"/>
						</svg>

						<h3 className='how-work-item-title'>
							{lang === 'hr' ? 'Fotografirajte' : 'Start Snapping'}
						</h3>

						<p className='how-work-item-text'>
							{lang === 'hr'
								? 'Nakon unosa PIN-a, kamera se odmah otvara i spremna je za fotografiranje. Bez dodatnih postavki, slike se automatski pohranjuju u vjenčani album.'
								: 'Capture all those magical moments, like when Dad busts out his legendary dance moves or when the maid of honor sings karaoke.'}
						</p>
					</div>

					<div className='how-work-item-container'>
						<svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M24.012 37.144C23.028 37.144 22.146 36.892 21.366 36.388C20.598 35.884 19.986 35.152 19.53 34.192C19.086 33.232 18.864 32.068 18.864 30.7C18.864 29.332 19.086 28.168 19.53 27.208C19.986 26.248 20.598 25.516 21.366 25.012C22.146 24.508 23.028 24.256 24.012 24.256C24.984 24.256 25.86 24.508 26.64 25.012C27.42 25.516 28.032 26.248 28.476 27.208C28.92 28.168 29.142 29.332 29.142 30.7C29.142 32.068 28.92 33.232 28.476 34.192C28.032 35.152 27.42 35.884 26.64 36.388C25.86 36.892 24.984 37.144 24.012 37.144ZM24.012 35.542C24.672 35.542 25.248 35.362 25.74 35.002C26.244 34.642 26.634 34.102 26.91 33.382C27.198 32.662 27.342 31.768 27.342 30.7C27.342 29.632 27.198 28.738 26.91 28.018C26.634 27.298 26.244 26.758 25.74 26.398C25.248 26.038 24.672 25.858 24.012 25.858C23.352 25.858 22.77 26.038 22.266 26.398C21.762 26.758 21.366 27.298 21.078 28.018C20.802 28.738 20.664 29.632 20.664 30.7C20.664 31.768 20.802 32.662 21.078 33.382C21.366 34.102 21.762 34.642 22.266 35.002C22.77 35.362 23.352 35.542 24.012 35.542ZM34.5461 37.144C33.6581 37.144 32.7941 37.006 31.9541 36.73C31.1261 36.454 30.4481 36.082 29.9201 35.614L30.7481 34.192C31.1681 34.588 31.7141 34.912 32.3861 35.164C33.0581 35.416 33.7781 35.542 34.5461 35.542C35.4821 35.542 36.2081 35.344 36.7241 34.948C37.2521 34.54 37.5161 33.994 37.5161 33.31C37.5161 32.65 37.2641 32.122 36.7601 31.726C36.2681 31.318 35.4821 31.114 34.4021 31.114H33.3941V29.854L37.1381 25.246L37.3901 25.966H30.4961V24.4H38.8121V25.624L35.0861 30.214L34.1501 29.656H34.7441C36.2681 29.656 37.4081 29.998 38.1641 30.682C38.9321 31.366 39.3161 32.236 39.3161 33.292C39.3161 34 39.1421 34.648 38.7941 35.236C38.4461 35.824 37.9181 36.292 37.2101 36.64C36.5141 36.976 35.6261 37.144 34.5461 37.144Z" fill="#282828"/>
							<circle cx="30" cy="30.5" r="29.5" stroke="#282828"/>
						</svg>

						<h3 className='how-work-item-title'>
							{ lang === 'hr' ? 'Spremite uspomene' : 'Your Memories'}
						</h3>

						<p className='how-work-item-text'>
							{lang === 'hr'
								? 'Iz zajedničke galerije možete jednostavno preuzeti fotografije na mobitel, a opcija "prenesi fotografiju" omogućuje gostima da dodaju slike iz svoje galerije u aplikaciju.'
								: 'Once the wedding is over, we’ll send you a link to your online gallery so you can relive every moment.'}
						</p>
					</div>
				</div>
			</div>

			{/* <img className='how-work-image' src={require('../../../assets/weddingCamera/how-work-laptop.png')} alt='Jednostavna aplikacija za preuzimanje fotografija s vjenčanja'/> */}

		</section>
	)
}

export default HowDoesItWork
