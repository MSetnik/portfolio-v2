import React from 'react'
import './index.css'

interface Props {
}

const WhyChooseCard : React.FC<Props> = () => {
  return (
   <div className='why-choose-card-container'>
      <h3 className='why-choose-card-title'>Zabilježite svaki trenutak!</h3>
      <p className='why-choose-card-text'>Ne propustite nijedan osmijeh, suzu radosnicu ili spontani ples. Svaki gost može biti dio priče, stvarajući bogatu kolekciju autentičnih trenutaka.</p>
   </div>
  )
}

export default WhyChooseCard
