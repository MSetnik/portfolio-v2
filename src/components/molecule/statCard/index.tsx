import React from "react"
import styles from "./index.module.css"

interface Props {
	statNumber: string
	statText: string
}

const StatCard: React.FC<Props> = ({ statNumber, statText }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.statNumber}>{statNumber}</h2>
			<h3 className={styles.statText}>{statText}</h3>
		</div>
	)
}

export default StatCard
