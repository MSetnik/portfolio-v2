import React from "react"
import PillButton from "../pillButton"
import styles from "./index.module.css"

interface Props {
	image: string
	title: string
}

const ProjectCard: React.FC<Props> = ({ image, title }) => {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={image} />

			<div className={styles.projectFooterContainer}>
				<p>{title}</p>
				<PillButton
					className={styles.seeMoreBtn}
					text="See more"
					textClassName={styles.seeMoreBtnText}
				/>
			</div>
		</div>
	)
}

export default ProjectCard
