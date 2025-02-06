import React, { useRef, useState } from "react"
import styles from "./index.module.css"

interface Props {
	className?: string
}

const AboutMeMenu: React.FC<Props> = ({ className }) => {
	const menuContainerRef = useRef<HTMLDivElement>(null)
	const [activeItemIndex, setActiveItemIndex] = useState<number>(0)

	const renderMenuItemContent = () => {
		switch (activeItemIndex) {
			case 0:
				return (
					<div>
						<p className={styles.menuContentItem}>
							<b>React Native</b> - Mobile app development
							(iOS/Android)
						</p>
						<p className={styles.menuContentItem}>
							<b>TypeScript & JavaScript</b> - Modern application
							development
						</p>
						<p className={styles.menuContentItem}>
							<b>React state managments</b> - Experience with
							multiple state managments such as Redux toolkit,
							Recoil, HookState and Context hook
						</p>
						<p className={styles.menuContentItem}>
							<b>Firebase Integration</b> - Successfully
							implemented many of the Firebase products -
							Firestore, Crashlytics, Analitycs, Firebase Cloud
							Messaging, Firebase functions and many more
						</p>
						<p className={styles.menuContentItem}>
							<b>REST APIs</b> - Working with APIs with Axios
							and/or fetch functions
						</p>
						<p className={styles.menuContentItem}>
							<b>Mobile UX/UI Design</b> - Knowledge of modern
							UX/UI principles of mobile app design
						</p>
						<p className={styles.menuContentItem}>
							<b>Performance Optimization</b> - Enhancing app
							performance
						</p>
						<p className={styles.menuContentItem}>
							<b>Frontend Development</b> - Created multiple
							websites and web applications using React
						</p>
						<p className={styles.menuContentItem}>
							<b>Backend Development</b> - Worked with backend
							using NodeJS and Firebase functions
						</p>
					</div>
				)
			case 1:
				return (
					<div>
						<div className={styles.experienceItem}>
							<p className={styles.menuContentItem}>
								<b>
									React Native Software Engineer <br />
									</b>
									at{" "}
									
									<a
										href="https://mstart.hr"
										target="_blank"
										rel="noreferrer"
									>
										mStart plus d.o.o.
									</a>
									<br /> 
									<strong>01.2021. – Present</strong>
							</p>
							<p className={styles.menuContentItem}>
								- Developed cross-platform mobile applications
								for iOS and Android using React Native
							</p>
							<p className={styles.menuContentItem}>
								- Optimized app performance (reducing bundle
								size, improving FPS, minimizing memory leaks)
							</p>
							<p className={styles.menuContentItem}>
								- Implemented custom native code to expose
								native functionalities
							</p>
							<p className={styles.menuContentItem}>
								- Ensured pixel-perfect UI by collaborating
								closely with designers and using Figma
							</p>
							<p className={styles.menuContentItem}>
								- Worked with offline-first architecture
							</p>
							<p className={styles.menuContentItem}>
								- Collaborated with backend teams to ensure
								smooth API integration
							</p>
							<p className={styles.menuContentItem}>
								- Published 10+ apps to the App Store & Google
								Play, handling the entire deployment process
							</p>
						</div>

						<div className={styles.experienceItem}>
							<p className={styles.menuContentItem}>
								<b>
									Business Owner <br />
									</b>
									at{" "}
									<a
										href="https://mcode.hr"
										target="_blank"
										rel="noreferrer"
									>
										MCODE.hr
									</a>
									<br /> 
									<strong>04.2024. – Present</strong>
							</p>
							<p className={styles.menuContentItem}>
								- Owner and developer
							</p>
							<p className={styles.menuContentItem}>
								{`- Responsible for multiple application lifespan (idea -> creation -> release)`}
							</p>
							<p className={styles.menuContentItem}>
								- Giving constructive impovements for app design
							</p>
							<p className={styles.menuContentItem}>
								- 5+ satisfied clients
							</p>
						</div>
					</div>
				)
			case 2:
				return (
					<div>
						<p className={styles.menuContentItem}>
							<b>PCI DSS v4 Certificate</b> - The Payment Card
							Industry Data Security Standard (PCI DSS) is a
							widely accepted set of policies and procedures
							intended to optimize the security of credit, debit
							and cash card transactions and protect cardholders
							against misuse of their personal information.
						</p>
						<p className={styles.menuContentItem}>
							<b>Bacc. Comp. Ing. Degree</b> - Degree from
							University of Applied Sciences at{" "}
							<a href="https://en.vuv.hr/">VUV.hr</a>
						</p>
					</div>
				)
			default:
				return null
		}
	}

	const selectMenu = (index: number) => {
		const menuDivElement = menuContainerRef.current
		if (menuDivElement && menuDivElement.children.length > 0) {
			setActiveItemIndex(index)

			const divChildren = Array.from(menuDivElement.children)

			divChildren.forEach((child) => {
				if (index === divChildren.indexOf(child)) {
					child.classList.add(styles.menuItemActive)
				} else {
					child.classList.remove(styles.menuItemActive)
				}
			})
		}
	}

	return (
		<div className={`${styles.container} ${className}`}>
			<div ref={menuContainerRef} className={styles.menuContainer}>
				<h3
					className={`${styles.menuItem} ${styles.menuItemActive}`}
					onClick={() => selectMenu(0)}
				>
					Main skills
				</h3>
				<h3 className={styles.menuItem} onClick={() => selectMenu(1)}>
					Experience
				</h3>
				<h3 className={styles.menuItem} onClick={() => selectMenu(2)}>
					Education
				</h3>
			</div>

			<div className={styles.menuContentContainer}>
				{renderMenuItemContent()}
			</div>
		</div>
	)
}

export default AboutMeMenu
