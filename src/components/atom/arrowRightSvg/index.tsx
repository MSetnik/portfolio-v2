import React, { SVGProps } from 'react';

const ArrowRight : React.FC<SVGProps<SVGSVGElement>> = (props) => { 
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path className={'svg-arrow-path'} d="M12.5625 5.25L19.3125 12L12.5625 18.75M18.375 12H4.6875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ArrowRight