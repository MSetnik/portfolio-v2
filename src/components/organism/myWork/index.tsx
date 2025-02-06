 
import React, { HTMLProps, useState } from "react"
import styles from "./index.module.css"
import MyWorkMenu from "../myWorkMenu"
import ProjectCard from "../../molecule/projectCard"
import { mobileProjects, webProjects } from "../../../constants"
import { useNavigate } from "react-router"

const MyWork: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
	const navigate = useNavigate()

	const [activeIndex, setActiveIndex] = useState<0 | 1 | 2>(0)

	const renderMobileProjects = () => {
		return mobileProjects.map((project) => {
			return (
				<ProjectCard
					onClick={() => navigate(`/project/mobile/${project.id}`)}
					key={project.id}
					image={project.image.default}
					title={project.title}
				/>
			)
		})
	}

	const renderWebProjects = () => {
		return webProjects.map((project) => {
			return (
				<ProjectCard
					onClick={() => navigate(`/project/web/${project.id}`)}
					key={project.id}
					image={project.image.default}
					title={project.title}
				/>
			)
		})
	}

	const renderMenuContent = () => {
		switch (activeIndex) {
			case 0:
				return renderMobileProjects()
			case 1:
				return renderWebProjects()
			case 2:
				return "Backend"
			default:
				return null
		}
	}

	return (
		<section
			{...props}
			className={`${styles.container} ${props.className}`}
		>
			<h1 className={styles.title}>My work</h1>

			<MyWorkMenu
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			/>

			<div className={styles.projectsContainer}>
				{renderMenuContent()}
			</div>
		</section>
	)
}

export default MyWork
