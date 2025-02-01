import React from 'react'
import './index.css'

interface Props {
  index: number,
  isOpen: boolean,
  item: {text: string, title: string}
  onClick: () => void
}

const AccordionItem : React.FC<Props> = ({ index, isOpen, item, onClick }) => {
	return (
		<div key={index} className={`accordion-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
			<div className="accordion-title">
				<h3>{item.title}</h3>
				{
					isOpen
						? (
							<svg className='svg-arrow' width="24" height="24" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.65625 22.7598L17.5 12.916L27.3438 22.7598" stroke="#282828" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>)
						: (
							<svg className='svg-arrow' width="24" height="24" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.65625 12.916L17.5 22.7598L27.3438 12.916" stroke="#282828" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						)
				}
			</div>
			<div className={`accordion-content  ${isOpen ? 'accordion-content-open' : ''}`}>
				<p>{item.text}</p>
			</div>
		</div>
	)
}

export default AccordionItem
