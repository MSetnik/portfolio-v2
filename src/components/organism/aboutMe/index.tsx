import React from "react"
import styles from "./index.module.css"
import AboutMeMenu from "../aboutMeMenu"

const AboutMe: React.FC = () => {
	return (
		<section className={styles.container}>
			<h1>About me</h1>
			<div className={styles.aboutMeContainer}>
				<p className={styles.aboutMeText}>
					My name is Matko Setnik, and I come from Valpovo. I hold a
					{`bachelor's`} degree in Computer Science, specializing in
					Software Engineering, from Virovitica.
					<br />
					<br />I work as a Specialist in the Application Solutions
					Development Department at mStart plus d.o.o., holding the
					position of React Native Developer. Throughout my
					professional experience, I have developed more that 10
					projects. My primary area of interest lies in mobile
					applications.
				</p>

				<AboutMeMenu className={styles.aboutMeMenuContainer} />
			</div>
		</section>
	)
}

export default AboutMe
