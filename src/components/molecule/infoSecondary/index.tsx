import React from 'react'
import './index.css'

interface Props {
  title: string;
  text: string
}

const InfoSecondary : React.FC<Props> = ({
  title = 'Individualni pristup',
  text = 'Svaki klijent je jedinstven, stoga prilagođavamo naš pristup prema individualnim potrebama i ciljevima.'
}) => {
  return (
    <div className='info-secondary-container col'>
      <h2 className='info-secondary-title'>{title}</h2>
      <p className='info-secondary-text'>
        {text}
      </p>
    </div>
  )
}

export default InfoSecondary
