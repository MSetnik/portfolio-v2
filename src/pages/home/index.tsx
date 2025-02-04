import React from "react"
import HeroSection from "../../components/organism/heroSection"
import HowCanIHelp from "../../components/organism/howCanIHelp"
import MyTechnologies from "../../components/organism/myTechnologies"
import AboutMe from "../../components/organism/aboutMe"
import MyStats from "../../components/organism/myStats"
import MyWork from "../../components/organism/myWork"

const Home: React.FC = () => {
	return (
		<>
			<HeroSection />
			<HowCanIHelp />
			<MyTechnologies />
			<AboutMe />
			<MyStats />
			<MyWork />
		</>
	)
}

export default Home
