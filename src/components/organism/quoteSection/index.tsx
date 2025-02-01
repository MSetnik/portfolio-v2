import React from 'react'
import './index.css'

interface Props {
  lang?: 'en' | 'hr',
  title?: string,
  text?: string
}

const QuoteSection : React.FC<Props> = ({
	text = 'Postoji čarolija u nezaboravnim trenucima života. U slavlju i smijehu koje dijelimo\nzajedno. U izgovaranju \'da\' novim avanturama i dostizanju novih prekretnica.\nŽivot je jednostavno ljepši kada ga dijelimo s drugima. \nNe propustite niti jedan trenutak!',
	title = 'Ne propustite niti jedan trenutak!',
	lang = 'hr'
}) => {
	return (
		<section className='quote-section-container'>
			<p className='quote-text'>
				{text}
			</p>

			{/* <h3 className='quote-title'>
				{title}
			</h3> */}
		</section>
	)
}

export default QuoteSection
