import React from 'react'
import './index.css'

interface Props {
}

const Avatar : React.FC<Props> = ({}) => {
  return (
   <div className='avatar-container'>
    <img src={require('../../../assets/review-placeholder.png')} alt='wedding-camera-user-image' />
    <div className='avatar-details-container'>
      <h3 className='subtitle'>
        Jasmina Babić
      </h3>
      <p>
        CEO, Serengeti
      </p>
    </div>
   </div>
  )
}

export default Avatar
