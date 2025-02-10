import React from "react"
import StatCard from "../../molecule/statCard"
import styles from "./index.module.css"

const MyStats: React.FC = () => {
	return (
		<section className={styles.container}>
			<StatCard statNumber="4+" statText="Years of experience" />
			<StatCard statNumber="10+" statText="Completed Projects" />
			<StatCard statNumber="10+" statText="Satisfied Clients" />
			<StatCard statNumber="200k" statText="Lines of code" />
		</section>
	)
}

export default MyStats
