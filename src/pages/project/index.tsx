import React, { useEffect, useState } from "react"
import styles from "./index.module.css"
import { useLocation, useParams } from "react-router"
import path from "path"
import { IProjects } from "../../interfaces"
import { mobileProjects, webProjects } from "../../constants"

const Project: React.FC = () => {
	const { id } = useParams()
	const { pathname } = useLocation()

	const [projectData, setProjectData] = useState<IProjects>()

	console.log(pathname.includes("mobile"))

	useEffect(() => {
		getProjectData()
	}, [])

	const getProjectData = () => {
		if (pathname.includes("web")) {
			const selectedProject = webProjects.find(
				(project) => project.id === id
			)

			setProjectData(selectedProject)
			return
		}

		if (pathname.includes("mobile")) {
			const selectedProject = mobileProjects.find(
				(project) => project.id === id
			)

			setProjectData(selectedProject)
			return
		}
	}

	if (!projectData) {
		return <></>
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{projectData!.title}</h1>
			<img src={projectData.image.default} />

			<p className={styles.text}>{projectData.details}</p>
		</div>
	)
}

export default Project
