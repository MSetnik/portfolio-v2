import React from "react"
import styles from "./index.module.css"

interface Props {
	icon: React.ReactNode
	text: string
}

const TechnologyCard: React.FC<Props> = ({ icon, text }) => {
	return (
		<div className={styles.container}>
			{icon}
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default TechnologyCard
