import React from "react"
import HeroSection from "../../components/organism/heroSection"
import HowCanIHelp from "../../components/organism/howCanIHelp"
import MyTechnologies from "../../components/organism/myTechnologies"
import AboutMe from "../../components/organism/aboutMe"
import MyStats from "../../components/organism/myStats"
import MyWork from "../../components/organism/myWork"
import ContactForm from "../../components/organism/contactForm"
import Footer from "../../components/organism/footer"


const Home: React.FC = () => {
	return (
		<>
			<HeroSection className="max-width-container"  />
			<HowCanIHelp className="max-width-container"  />
			<MyTechnologies />
			<AboutMe className="max-width-container"  />
			<MyStats />
			<MyWork id="my-work" className="max-width-container"/>
			<ContactForm
				className="max-width-container"
				title="Contact me"
				subtitle="Got a project in mind, need a developer for your team, or just want to say hi? I’m always up for a chat about creating sleek, user-friendly web and mobile experiences. Drop me a message—I’d love to hear from you!"
			/>
			<Footer className="max-width-container" />
		</>
	)
}

export default Home
