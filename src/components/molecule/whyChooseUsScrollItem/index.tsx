import React from 'react'

interface Props {
  title: string,
  text: string,
  className?: string
}

const WhyChooseUsScrollItem : React.FC<Props> = ({
	title = 'Zabilježite svaki trenutak!',
	text = 'Ne propustite nijedan osmijeh, suzu radosnicu ili spontani ples. Svaki gost može biti dio priče, stvarajući bogatu kolekciju autentičnih trenutaka.',
	className = ''
}) => {
	return (
		<div className={`scroll-item ${className}`}>
			<h3 className='scroll-item-title'>{title}</h3>
			<p className='scroll-item-text'>{text}</p>
		</div>
	)
}

export default WhyChooseUsScrollItem
