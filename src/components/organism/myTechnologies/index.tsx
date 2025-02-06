import React, { HTMLProps } from "react"
import TechnologyCard from "../../molecule/technologyCard"
import ReactNativeSvg from "../../atom/reactNativeSvg"
import styles from "./index.module.css"
import AndroidSvg from "../../atom/androidSvg"
import AppleSvg from "../../atom/appleSvg"
import ReactSvg from "../../atom/ReactSvg"
import FirebaseSvg from "../../atom/firebaseSvg"
import TsSvg from "../../atom/tsSvg"
import JsSvg from "../../atom/jsSvg"
import HtmlSvg from "../../atom/htmlSvg"
import CssSvg from "../../atom/cssSvg"
import JiraSvg from "../../atom/jiraSvg"
import NodeSvg from "../../atom/nodeSvg"
import GitSvg from "../../atom/gitSvg"
import SlackSvg from "../../atom/slackSvg"

const MyTechnologies: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
	return (
		<div {...props} className={`${styles.container} ${props.className}`}>
			<div className={styles.slider}>
				<TechnologyCard icon={<ReactNativeSvg />} text="React Native" />
				<TechnologyCard icon={<AndroidSvg />} text="Android" />
				<TechnologyCard icon={<AppleSvg />} text="iOS" />
				<TechnologyCard icon={<ReactSvg />} text="React" />
				<TechnologyCard icon={<FirebaseSvg />} text="Firebase" />
				<TechnologyCard icon={<TsSvg />} text="Typescript" />
				<TechnologyCard icon={<JsSvg />} text="Javascript" />
				<TechnologyCard icon={<HtmlSvg />} text="HTML" />
				<TechnologyCard icon={<CssSvg />} text="CSS" />
				<TechnologyCard icon={<JiraSvg />} text="Jira" />
				<TechnologyCard icon={<NodeSvg />} text="NodeJS" />
				<TechnologyCard icon={<GitSvg />} text="Git" />
				<TechnologyCard icon={<SlackSvg />} text="Slack" />

				<TechnologyCard icon={<ReactNativeSvg />} text="React Native" />
				<TechnologyCard icon={<AndroidSvg />} text="Android" />
				<TechnologyCard icon={<AppleSvg />} text="iOS" />
				<TechnologyCard icon={<ReactSvg />} text="React" />
				<TechnologyCard icon={<FirebaseSvg />} text="Firebase" />
				<TechnologyCard icon={<TsSvg />} text="Typescript" />
				<TechnologyCard icon={<JsSvg />} text="Javascript" />
				<TechnologyCard icon={<HtmlSvg />} text="HTML" />
				<TechnologyCard icon={<CssSvg />} text="CSS" />
				<TechnologyCard icon={<JiraSvg />} text="Jira" />
				<TechnologyCard icon={<NodeSvg />} text="NodeJS" />
				<TechnologyCard icon={<GitSvg />} text="Git" />
				<TechnologyCard icon={<SlackSvg />} text="Slack" />
			</div>
		</div>
	)
}

export default MyTechnologies
