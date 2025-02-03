import React from "react"
import styles from "./index.module.css"
import MyExperties from "../../molecule/myExperties"
import MobilePhoneSvg from "../../atom/mobilePhoneSvg"
import LaptopSvg from "../../atom/laptopSvg"
import ShakingHandsSvg from "../../atom/shakingHandsSvg"

const HowCanIHelp: React.FC = () => {
	return (
		<section className={styles.container}>
			<h1>{`Here's how I can help you.`}</h1>

			<div className={styles.contentContainer}>
				<MyExperties
					icon={<MobilePhoneSvg style={{ marginTop: 3 }} />}
					title="Expertise in Mobile Development"
					text="I have a proven track record of building cross-platform mobile applications using React Native, as well as native solutions for Android and iOS. From feature development to debugging, I ensure smooth and engaging user experiences."
				/>
				<MyExperties
					icon={<LaptopSvg style={{ marginTop: 3 }} />}
					title="Full-Stack Problem Solver"
					text="While my focus is on mobile, I’m no stranger to the web and backend. I’ve worked with React for dynamic frontends and Node.js for scalable backend solutions. My experience with SaaS products ensures I understand both client and server-side demands."
				/>
				<MyExperties
					icon={<ShakingHandsSvg style={{ marginTop: 3 }} />}
					title="Team Collaboration"
					text="Fluent in tools like Git, Slack, and Jira, I excel in collaborative environments. Whether it's leading a feature rollout or supporting team members, I’m committed to delivering quality work on time."
				/>
			</div>
		</section>
	)
}

export default HowCanIHelp
