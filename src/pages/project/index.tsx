import React, { useEffect, useState } from "react"
import styles from "./index.module.css"
import { useLocation, useParams } from "react-router"
import { IProjects } from "../../interfaces"
import { mobileProjects, webProjects } from "../../constants"
import ContactForm from "../../components/organism/contactForm"
import Footer from "../../components/organism/footer"

const Project: React.FC = () => {
	const { id } = useParams()
	const { pathname } = useLocation()

	const [projectData, setProjectData] = useState<IProjects>()

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
		<div>
			<div className={styles.container}>
				<h1 className={styles.title}>{projectData!.title}</h1>
				<div className={styles.contentContainer}>
					<img src={projectData.image.default} />

					<p
						className={styles.text}
						dangerouslySetInnerHTML={{
							__html: projectData.details || ""
						}}
					/>
				</div>
			</div>
			<ContactForm />
			<Footer />
		</div>
	)
}

export default Project
