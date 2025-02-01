/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import { loginEndpoint } from '../../../endpoint/index.ts'
import { useAppDispatch } from '../../../store/index.ts'
import { setUserData } from '../../../store/userSlice.ts'

const Login : React.FC = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [usernameError, setusernameError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	const onButtonClick = async () => {
		// Set initial error values to empty
		setusernameError('')
		setPasswordError('')

		// Check if the user has entered both fields correctly
		if (username === '') {
			setusernameError('Molimo unesite svoje korisničko ime')
			return
		}

		if (password === '') {
			setPasswordError('Molimo unesite svoju lozinku')
		}

		const user = await loginEndpoint({ username, password })

		if (user && user.isActive) {
			dispatch(setUserData(user))
			navigate('/admin/dashboard')
		} else {
			setUsername('')
			setPassword('')
			alert('Pogrešni podaci')
		}
	}

	return (
		<div className={'mainContainer'}>
			<div className={'titleContainer'}>
				<div>Login</div>
			</div>
			<br />
			<div className={'inputContainer'}>
				<input
					value={username}
					placeholder="Korisničko ime"
					onChange={(ev) => setUsername(ev.target.value)}
					className={'inputBox'}
				/>
				<label className="errorLabel">{usernameError}</label>
			</div>
			<br />
			<div className={'inputContainer'}>
				<input
					value={password}
					placeholder="Lozinka"
					type='password'
					onChange={(ev) => setPassword(ev.target.value)}
					className={'inputBox'}
				/>
				<label className="errorLabel">{passwordError}</label>
			</div>
			<br />
			<div className={'inputContainer'}>
				<input className={'inputButton'} type="button" onClick={onButtonClick} value={'Prijavi se'} />
			</div>
		</div>
	)
}
export default Login
