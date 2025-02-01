import React, { useState } from 'react'
import './index.css'
import InputField from '../../molecule/inputField/index.tsx'
import emailjs from 'emailjs-com'
import BtnPrimary from '../../atom/btn-primary/index.tsx'

interface Props {
  lang?: 'en' | 'hr',
  title?: string,
  subtitle?: string
}

const ContactForm : React.FC<Props> = ({
	lang = 'hr',
	title = 'Javite nam se!',
	subtitle = 'Ako želite koristit našu aplikaciju, ili saznati više slobodno nas kontaktirajte. Ispunite kontakt formu sa strane ili nam se javite na email, a mi ćemo vam odgovoriti što je brže moguće.'
}) => {
	const [form, setForm] = React.useState({
		name: '',
		email: '',
		message: ''
	})

	const [loading, setIsLoading] = useState<boolean>(false)

	const onSubmit = (e: any) => {
		setIsLoading(true)
		e.preventDefault() // This is important, i'm not sure why, but the email won't send without it

		if (form.name === '' || form.email === '' || form.message === '') {
			alert(lang === 'hr' ? 'Molimo vas unesite sve podatke' : 'Please fill in all fields')
			setIsLoading(false)
			return
		}

		emailjs.sendForm('service_dyohpos', 'template_7b2nhhk', e.target, 'MyQGY88hp7_8-vwvc')
			.then((result) => {
				alert(lang === 'hr' ? 'Zaprimili smo vašu poruku. Javit ćemo vam se prvom prilikom!' : 'We have received your message. We will get back to you shortly!')
				window.location.reload() // This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
			}, (error) => {
				alert(lang === 'hr' ? 'Greška prilikom slanja poruke. Pokušajte ponovno kasnije.' : 'Error sending message. Please try again later.')
				console.log(error.text)
				window.location.reload() // This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	return (
		<section id='contact' className='contact-us-container'>
			<div className='contact-us-title-container'>
				<h3 className='contact-us-title'>{title}</h3>
				<p className='contact-us-text'>
					{subtitle}
				</p>

				<div className='contact-email-container'>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M26.5 6H5.5C4.11929 6 3 7.11929 3 8.5V23.5C3 24.8807 4.11929 26 5.5 26H26.5C27.8807 26 29 24.8807 29 23.5V8.5C29 7.11929 27.8807 6 26.5 6Z" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M7 10L16 17L25 10" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>

					<a href='mailto:hello@mcode.hr'>hello@mcode.hr</a>
				</div>

				<div className='contact-follow-us-container'>
					Zapratite nas:
					<div className='contact-follow-us-links-contanier'>
						<a href='https://web.facebook.com/groups/1621637748136655/user/61566351972255/' target='_blank' rel="noreferrer">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_792_320)">
									<path fillRule="evenodd" clipRule="evenodd" d="M32 16.0967C32 7.20756 24.8357 0 16 0C7.16429 0 0 7.20756 0 16.0967C0 24.1306 5.85 30.7899 13.5 31.9986V20.751H9.43643V16.0967H13.5V12.5504C13.5 8.51685 15.8893 6.28704 19.5436 6.28704C21.2943 6.28704 23.1257 6.60178 23.1257 6.60178V10.5634H21.1071C19.1207 10.5634 18.4993 11.8037 18.4993 13.0785V16.0967H22.9364L22.2279 20.751H18.5V32C26.15 30.792 32 24.1328 32 16.0967Z" fill="#282828"/>
								</g>
								<defs>
									<clipPath id="clip0_792_320">
										<rect width="32" height="32" fill="white"/>
									</clipPath>
								</defs>
							</svg>

						</a>

						<a href='https://www.instagram.com/weddingcamera.app/' target='_blank' rel="noreferrer">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="16" cy="16" r="16" fill="#282828"/>
								<path d="M20.3748 7.24984C21.5342 7.25331 22.6451 7.71539 23.4648 8.53517C24.2846 9.35495 24.7467 10.4658 24.7502 11.6252V20.3748C24.7467 21.5342 24.2846 22.6451 23.4648 23.4648C22.6451 24.2846 21.5342 24.7467 20.3748 24.7502H11.6252C10.4658 24.7467 9.35495 24.2846 8.53517 23.4648C7.71539 22.6451 7.25331 21.5342 7.24984 20.3748V11.6252C7.25331 10.4658 7.71539 9.35495 8.53517 8.53517C9.35495 7.71539 10.4658 7.25331 11.6252 7.24984H20.3748ZM20.3748 5.5H11.6252C8.25625 5.5 5.5 8.25625 5.5 11.6252V20.3748C5.5 23.7437 8.25625 26.5 11.6252 26.5H20.3748C23.7437 26.5 26.5 23.7437 26.5 20.3748V11.6252C26.5 8.25625 23.7437 5.5 20.3748 5.5Z" fill="white"/>
								<path d="M21.6873 11.625C21.4278 11.625 21.174 11.548 20.9582 11.4038C20.7423 11.2596 20.5741 11.0546 20.4748 10.8148C20.3754 10.5749 20.3494 10.311 20.4001 10.0564C20.4507 9.80184 20.5757 9.56798 20.7593 9.38442C20.9428 9.20087 21.1767 9.07586 21.4313 9.02522C21.6859 8.97458 21.9498 9.00057 22.1896 9.09991C22.4294 9.19925 22.6344 9.36748 22.7786 9.58331C22.9229 9.79915 22.9998 10.0529 22.9998 10.3125C23.0002 10.485 22.9665 10.6558 22.9007 10.8152C22.8349 10.9746 22.7382 11.1195 22.6163 11.2414C22.4943 11.3634 22.3495 11.46 22.1901 11.5258C22.0306 11.5917 21.8598 11.6254 21.6873 11.625ZM16 12.4997C16.6923 12.4997 17.369 12.705 17.9446 13.0896C18.5202 13.4742 18.9688 14.0208 19.2337 14.6604C19.4986 15.3 19.568 16.0037 19.4329 16.6827C19.2978 17.3617 18.9645 17.9853 18.475 18.4748C17.9855 18.9643 17.3618 19.2977 16.6828 19.4327C16.0039 19.5678 15.3001 19.4985 14.6606 19.2336C14.021 18.9686 13.4743 18.52 13.0897 17.9444C12.7051 17.3688 12.4998 16.6921 12.4998 15.9998C12.5008 15.0718 12.8699 14.1821 13.5261 13.526C14.1823 12.8698 15.072 12.5007 16 12.4997ZM16 10.7498C14.9617 10.7498 13.9466 11.0578 13.0833 11.6346C12.2199 12.2115 11.547 13.0314 11.1496 13.9908C10.7523 14.9501 10.6483 16.0057 10.8509 17.0241C11.0535 18.0425 11.5535 18.9779 12.2877 19.7122C13.0219 20.4464 13.9574 20.9464 14.9758 21.149C15.9942 21.3515 17.0498 21.2476 18.0091 20.8502C18.9684 20.4529 19.7883 19.7799 20.3652 18.9166C20.9421 18.0532 21.25 17.0382 21.25 15.9998C21.25 14.6075 20.6969 13.2721 19.7123 12.2875C18.7277 11.303 17.3924 10.7498 16 10.7498Z" fill="white"/>
							</svg>

						</a>

						<a href='https://www.tiktok.com/@weddingcamera.app' target='_blank' rel="noreferrer">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="16" cy="16" r="16" fill="#282828"/>
								<path d="M14.3822 14.4159V13.65C14.0981 13.6124 13.8118 13.593 13.5251 13.5918C10.0193 13.5918 7.1665 16.2616 7.1665 19.5432C7.1665 21.5559 8.24165 23.3382 9.88117 24.4154C8.78334 23.3166 8.17258 21.8682 8.17361 20.3638C8.17361 17.1291 10.945 14.4912 14.3822 14.4159Z" fill="#A3A3A3"/>
								<path d="M14.551 22.8691C16.0333 22.8691 17.242 21.6976 17.2971 20.2369L17.3023 7.20115H19.6989C19.6476 6.92908 19.6216 6.65284 19.6211 6.37598L16.3482 6.37598L16.3426 19.4122C16.2879 20.8719 15.0783 22.0434 13.5965 22.0434C13.1519 22.0434 12.714 21.9355 12.3203 21.729C12.5754 22.082 12.9106 22.3694 13.2984 22.5676C13.6862 22.7658 14.1155 22.8691 14.551 22.8691ZM24.1747 11.6259V10.9013C23.2949 10.9023 22.4337 10.6478 21.6956 10.1689C22.3434 10.9093 23.2127 11.4204 24.1747 11.6259Z" fill="#828282"/>
								<path d="M21.598 10.3539C20.8783 9.5408 20.4809 8.49257 20.4806 7.40674H19.606C19.7204 8.00752 19.9561 8.57869 20.2986 9.08538C20.6411 9.59208 21.0832 10.0237 21.598 10.3539ZM13.519 16.7176C12.0037 16.7197 10.776 17.9345 10.7744 19.4338C10.776 19.9309 10.914 20.4179 11.1734 20.8419C11.4328 21.2659 11.8036 21.6105 12.2454 21.8382C11.9083 21.3789 11.7263 20.8241 11.7259 20.2544C11.7274 18.7545 12.9551 17.5392 14.4704 17.5376C14.7539 17.5376 15.0245 17.584 15.2806 17.6634V14.3648C15.0122 14.327 14.7415 14.3074 14.4704 14.306C14.423 14.306 14.3761 14.3091 14.3292 14.3096V16.8434C14.067 16.7608 13.7938 16.7184 13.519 16.7176Z" fill="#E4E4E4"/>
								<path d="M23.7386 12.0454V14.5627C22.1105 14.5651 20.5223 14.0585 19.1963 13.1139V19.6941C19.1963 22.9809 16.5007 25.6548 13.1876 25.6548C11.9068 25.6548 10.7193 25.2538 9.74365 24.574C10.3069 25.1753 10.9877 25.6545 11.7438 25.9818C12.4999 26.3092 13.3152 26.4777 14.1391 26.4769C17.4526 26.4769 20.1482 23.8029 20.1482 20.5167V13.9359C21.4743 14.8804 23.0625 15.3868 24.6905 15.3842V12.1459C24.3706 12.1458 24.0515 12.1121 23.7386 12.0454Z" fill="#D7D7D7"/>
								<path d="M19.5255 19.4776V12.8866C20.8901 13.8352 22.5131 14.3418 24.175 14.338V11.8176C23.1977 11.6154 22.3107 11.1061 21.6433 10.3642C20.5753 9.69052 19.8383 8.62207 19.6043 7.40674H17.1577L17.1525 20.4028C17.0958 21.8583 15.8614 23.0262 14.3487 23.0262C13.4447 23.0252 12.5973 22.6026 12.0706 21.8903C11.1459 21.4197 10.5661 20.4904 10.5656 19.4771C10.5671 17.9721 11.8232 16.7532 13.3746 16.7511C13.6632 16.7511 13.9405 16.7975 14.2033 16.8774V14.3349C10.8784 14.4106 8.19727 17.0562 8.19727 20.3002C8.19727 21.8697 8.82555 23.2979 9.84915 24.3642C10.8886 25.0715 12.1173 25.4486 13.3746 25.4461C16.766 25.4461 19.5255 22.7685 19.5255 19.4776Z" fill="white"/>
							</svg>

						</a>
					</div>
				</div>
			</div>

			<form onSubmit={onSubmit} className='contact-form-container'>
				<div id='form-content'>
					<InputField
						label={lang === 'hr' ? 'Ime i prezime' : 'First and last name' }
						name="from_name"
						onChangeText={(e) => {
							setForm({ ...form, name: e.target.value })
						}}
						inputType='text'
					/>
					<InputField
						name="reply_to"
						label={lang !== 'hr' ? 'Email' : 'Email' }
						onChangeText={(e) => {
							setForm({ ...form, email: e.target.value })
						}}
						inputType='email'
					/>

					<InputField
						name="message"
						label={lang === 'hr' ? 'Poruka' : 'Message'}
						onChangeText={(e) => {
							setForm({ ...form, message: e.target.value })
						}}
						inputType='textarea'
					/>

					{
						!loading &&
						<BtnPrimary className='send-message-btn' title='Pošalji poruku' type="submit" />
						// <input className='send-message-btn' type='submit' value={lang === 'hr' ? 'Pošalji' : 'Send'}/>
					}

				</div>

				{/* <div className='footer-image-container'>
					<img className='footer-image' src={require('../../../assets/weddingCamera/Mockup.png')} alt='Aplikacija za fotografije s vjenčanja - Wedding Camera'/>
				</div> */}
			</form>
		</section>
	)
}

export default ContactForm
