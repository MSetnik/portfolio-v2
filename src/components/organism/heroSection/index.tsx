import React, { HTMLProps } from "react"
import styles from "./Hero.module.css"
import sharedStyles from "../../../styles/SharedStyles.module.css"
import CustomButton from "../../atom/btn-primary/index.tsx"
import ArrowRight from "../../atom/arrowRightSvg/index.tsx"
import { scrollToSection } from "../../../helpers/index.tsx"

const HeroSection: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
	return (
		<section {...props} className={`${styles["hero-main-container"]} ${props.className}`}>
			<div className={styles["hero-content-container"]}>
				<p className={styles.infoText}>Welcome to my world!</p>
				<h1 className={styles["hero-main-title"]}>
					{`Hi, I'm Matko`} <br />
					<span className={sharedStyles.textColorSecondary}>
						Frontend Mobile Developer
					</span>{" "}
					<br />
					Based in Croatia
				</h1>

				<div className={styles.heroBtnsContainer}>
					<CustomButton
						title="Contact me"
						className={styles.contactMeButton}
						onPress={() => {
							scrollToSection("contact")
						}}
						icon={<ArrowRight />}
					/>

					{/* <CustomButton
						style="secondary"
						title="Download CV"
						onPress={() => {
							navigate("/price")
						}}
						icon={
							<div style={{ rotate: "90deg" }}>
								<ArrowRight />
							</div>
						}
					/> */}
				</div>

				<p className={styles.heroAboutMe}>
					{`When I’m not coding, I’m either hunting for a bug that “wasn’t there yesterday” or explaining my job to my family (spoiler: they still don’t get it). Take a scroll through my portfolio and check out the projects that keep me sane—well, mostly.`}
				</p>
			</div>
		</section>
	)
}

export default HeroSection
