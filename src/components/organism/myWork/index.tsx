/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useState } from "react"
import styles from "./index.module.css"
import MyWorkMenu from "../myWorkMenu"
import ProjectCard from "../../molecule/projectCard"

import rvh from "../../../assets/projects/Mobile/rvh.png"
const MyWork: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<0 | 1 | 2>(0)

	console.log(activeIndex)

	return (
		<section className={styles.container}>
			<h1 className={styles.title}>My work</h1>

			<MyWorkMenu
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			/>

			<div>
				<ProjectCard image={rvh} title="Raspored vlakova hrvatske" />
			</div>
		</section>
	)
}

export default MyWork
