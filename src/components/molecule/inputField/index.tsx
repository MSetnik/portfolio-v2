import React, { ChangeEventHandler } from 'react'
import './index.css'

interface Props {
  label: string,
  inputType?: 'text' | 'email' | 'textarea'
  onChangeText: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  name?: string
}

const InputField : React.FC<Props> = ({ label, onChangeText, inputType = 'text', name = '' }) => {
	return (
		<div className='input-field-container'>
			<p className='input-field-label'>{label}</p>
			{
				inputType === 'textarea'
					? <textarea name={name} className='input-field-input' rows={5} onChange={onChangeText} />
					: <input name={name} className='input-field-input' type={inputType} onChange={onChangeText} />

			}
		</div>
	)
}

export default InputField
