import { IUser } from '../interface/index.ts'

const USER = '@user'

export const storeUserDataToStorage = (user: IUser) => {
	localStorage.setItem(USER, JSON.stringify(user))
}

export const getUserDataFromStorage = () => {
	const user = localStorage.getItem(USER)
	if (user) {
		return JSON.parse(user) as IUser
	} else {
		return null
	}
}

export const removeUserDataFromstorage = () => {
	localStorage.removeItem(USER)
}
