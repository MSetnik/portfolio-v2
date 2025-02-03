import React from "react"
import styles from "./index.module.css"

interface Props {
	icon: React.ReactNode
	title: string
	text: string
}

const MyExperties: React.FC<Props> = ({ icon, title, text }) => {
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				{icon}
				<h3>{title}</h3>
			</div>

			<p>{text}</p>
		</div>
	)
}

export default MyExperties
