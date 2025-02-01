import React from 'react'
import './index.css'

interface Props {
  img: string;
  name: string;
  text: string;
}

const AboutEmployee : React.FC<Props> = ({
  img,
  name,
  text
}) => {
  return (
    <div className='about-employee-container col col-xs-12 col-md-6 col-sm-12 col-12 text-center'>
      <img className='about-employee-image' src={img} alt='wedding-camera' />
      <div className='about-employee-text-container'>
        <h3 className='subtitle'>
          {name}
        </h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

export default AboutEmployee
