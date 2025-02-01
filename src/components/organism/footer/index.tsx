import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

interface Props {
  routePrefix?: 'en' | 'hr'
}

const Footer : React.FC<Props> = ({
	routePrefix = 'hr'
}) => {
	return (
		<footer className='footer-container'>
			<div className='terms-container'>
				<p><Link to='/privacy-policy' target='_blank' rel="noreferrer">{routePrefix === 'hr' ? 'Pravila privatinosti' : 'Privacy policy'}</Link></p>
				<p><Link to='/terms-and-conditions' target='_blank' rel="noreferrer">{routePrefix === 'hr' ? 'Uvjeti korištenja' : 'Terms & Conditions'}</Link></p>
				<p><Link to={'/refund-policy'} target='_blank' rel="noreferrer">{routePrefix === 'hr' ? 'Pravila reklamacije' : 'Refund policy'}</Link></p>
			</div>
			<p><a href='https://antonijaluketic.com' target='_blank' rel="noreferrer">2024 Designed by Antonija Luketić</a> / <a href='https://mcode.hr/'target='_blank' rel="noreferrer">Powered by MCODE</a></p>
			<p>Crafted in Croatia</p>
		</footer>
	)
}

export default Footer
