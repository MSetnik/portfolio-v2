import React from 'react'
import './index.css'

interface Props {
  title: string;
  onPress: () => void
}

const BtnSecondary : React.FC<Props> = ({
	title = 'Secondary',
	onPress = () => {}
}) => {
	return (
	// <div className='btn-secondary-container'>
	//   <p>{title}</p>
	// </div>
		<button className="button-secondary" onClick={onPress}><p>{title}</p></button>
	)
}

export default BtnSecondary
