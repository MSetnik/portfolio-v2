import { IProjects } from "../interfaces"
import {
	alPortfolio,
	BSBEvents,
	cashless,
	gorillaGym,
	konzumeGift,
	mcodeWeb,
	mProces,
	rvh,
	weddingCamera,
	weddingCameraWeb,
	xtra
} from "../assets/projects"

export const WINDOW_WIDTH = window.innerWidth

export const mobileProjects: IProjects[] = [
	{
		id: "rvh",
		title: "Croatian Railway Schedule",
		image: rvh,
		details: `<b>Croatian Railway Schedule</b> is a mobile application developed to provide HŽ (Croatian Railways) users with an <b>easy way to search train schedules, track the status and location of selected trains, and purchase tickets.</b> The development process went through three stages: <br/><br/>
		<strong>MVP Version</strong> – The initial version was created to test the idea. The app was developed in collaboration with a designer, using Node.js (Express.js) for the backend, hosted on AWS, while the frontend was built with TypeScript and Recoil state management.<br/><br/>
		<strong>V1 Version</strong> – After successful testing, the app was redesigned and brought into production with an improved design and enhanced user experience.<br/><br/>
		<strong>V2 Version</strong> – The latest version includes additional features such as ticket purchases through the HŽ web interface and saving QR tickets within the app. <br /><br/>
		Available on: <strong><a href='https://play.google.com/store/apps/details?id=com.hzppapp&hl=hr' target="_blank" rel="noopener">Android</a></strong> and <strong><a href='https://apps.apple.com/us/app/raspored-vlakova-hrvatske/id6504168712' target="_blank" rel="noopener">iOS</a></strong>.`
	},
	{
		id: "cashless",
		title: "mStart Cashless",
		image: cashless,
		details: `<b>mStart Cashless</b> is a mobile application developed as and extension to the mStart's Saas <a href="https://www.mstart.hr/services/ewallet-event" target="_blank" rel='no-refereer'>eWallet Event</a> to provide users with a <b>convenient and secure way to manage cashless payments.</b> The app allows users to view their payment history, balance and to topup their account via IPGW. 
		Cashless is mostly <b>used at Events where users can pay via contactless bracelets</b> which helps speed up the process of paying at the festivals. <br /><br />
		Cashless Biggest festival is <a href="https://ultraeurope.com/" target="_blank" rel="no-refereer">Ultra Europe</a> which is held in Split, Croatia.<br /><br />
		Available on: <strong><a href='https://play.google.com/store/apps/details?id=com.mstart.ewallet_cashless_demo&hl=hr' target="_blank" rel="noopener">Android</a></strong>.`
	},
	{
		id: "konzum-egift",
		title: "Konzum eGift",
		image: konzumeGift,
		details: `<b>Konzum eGift</b> is a mobile application developed for <a href="https://www.konzum.hr/" target="_blank" rel='no-refereer'>Konzum</a>, the biggest retail chain in Croatia for a digitalization of their <a href="https://www.konzum.hr/poklon-kartica" target="_blank" rel='no-refereer'>giftcard service</a>. <br/> <br />
		The serivce allows other business to create <b>electronic gift cards</b> for their employees as their Christmas, Easter and other bonuses. By using Konzum eGift application, Konzum have <b>reduced their global waist production</b> from creating plastic waste and contributed
		to the reduction of their carbon footprint. <br /><br />

		Available on: <strong><a href='https://play.google.com/store/apps/details?id=com.mstart.konzum_egift&hl=hr' target="_blank" rel="noopener">Android</a></strong> and <strong><a href='https://apps.apple.com/hr/app/konzum-egift/id1602124590?l=hr' target="_blank" rel="noopener">iOS</a></strong>.`
	},
	{
		id: "wedding-camera",
		title: "Wedding Camera",
		image: weddingCamera,
		details: `<b>Wedding Camera</b> is personal Saas product which works as a <b>disposable camera for wedding guests.</b> <br/><br/>
		It is a modern solution for capturing special moments at weddings. The app allows guests to contribute photos to a shared online gallery effortlessly. Guests can use their smartphones to upload images, providing a collective album of candid and unique perspectives from the event. <br />
		The app <b>simplifies the process of collecting photos</b>, requiring no additional equipment or complex steps. <br /><br />
		This type of app is ideal for weddings where hosts want to gather guest-taken photos without needing disposable cameras. It ensures <b>all memories are stored in one place</b> and provides a streamlined way to share these moments with attendees after the event.<br /><br />

		For more details, visit the official website at <a href="https://weddingcamera.app" target="_blank" rel="no-refereer">weddingcamera.app.`
	},
	{
		id: "xtra",
		title: "Xtra",
		image: xtra,
		details: `<b>Xtra</b> is a mobile application for <b>HR & Planning</b> developed for <a href="https://xpx.hr/" target="_blank" rel='no-refereer'>XPX Payroll experts</a> as their Saas extension.<br/><br/>
		
		Saas goal is to enable company's HR Department to <b>keep track of employees availability</b> (vacation days, sick days, business leaves, records of working hours ...) and to <b>easily calculate their salary for payout.</b><br/><br/>

		Mobile application successfully gives users a portal to see informations about their available free days, working schedule, payroll lists, their salary amout for the current month. It is also their company's news hub.</br><br/>

		Find out more: <strong><a href='https://app.xtra.hr/signin' target="_blank" rel="noopener">xtra.hr</a></strong>.`
	},
	{
		id: "mproces",
		title: "mProcess",
		image: mProces,
		details: `<b>mProces</b> is Document Managment Solution for managing business processes within the organization by switching to a digital form of document flow. Using mProces reduces costs while increasing the efficiency and speed of performing business processes within the organization. <br/><br />

		mProces mobile application enables mobile access to the platform. User can see his company's inbox, outbox and all of his documents.<br/>
		<b>Quickly and easily approve or reject documents.</b> You can even create new documents within the app.<br /> <br/>

		For more details, visit the official website at <a href="https://mstart.hr/services/mproces" target="_blank" rel="no-refereer">mProces.`
	},
	{
		id: "bsb-events",
		title: "BSB Events",
		image: BSBEvents,
		details: `<b>BSB Events</b> is a project built for company's client <a href="https://www.bsbevents.com/" target="_blank" rel="no-refereer">BSBEvents</a>.<br />
		It's a mobile application for <b>event management</b>. The app allows users to view <b>event informations</b> and access control.
		The app is an extension of a bigger Saas for event managment.<br />
		Users can register within the app and request to join to the specific event. Admin has to approve the request in the admin web pannel and then the whole party begins.<br />
		When approved, users have the option to see the lecturers, other users and their information, attend the event workshops, see the event calendar .. <br/><br />
		The app also has an <b>access control</b> which is restricted to Staff users only. When Staff user logs in into the app, he can see the additional scanner functionality. <br />
		With Scanner, he can select Event and the scanning zone where he is positioned at and start checking if the user has access to specific event or not. <br /><br />

		Available on: <strong><a href='https://play.google.com/store/apps/details?id=com.mstart.bsb.events&hl=en' target="_blank" rel="noopener">Android</a></strong> and <strong><a href='https://apps.apple.com/us/app/bsb-events/id1618913552' target="_blank" rel="noopener">iOS</a></strong>.`
	},
]

export const webProjects: IProjects[] = [
	{
		id: "wedding-camera-web",
		title: "Wedding Camera - website",
		image: weddingCameraWeb,
		details: `<b>Wedding Camera</b> is a website my personal Saas product. <br/>
		It has minimalist look with a modern twist. There are <b>informations about Wedding Camera app</b> and option for <b>purchasing the packages</b>. <br /><br/>
		Purchases are implemented with Stripe. After purchase, user gets its generated wedding data which includes wedding flyer and wedding pin on their email. <br /><br/>
		
		For more details, visit the official website at <a href="https://weddingcamera.app/" target="_blank" rel="no-refereer">weddingcamera.app.`
	},
	{
		id: "mcode",
		title: "MCODE Web",
		image: mcodeWeb,
		details: `<b>MCODE</b> is my Business website. <br/>
		It is representing me and my coleague designer and our journey as a freelancers. <br/>
		The goal was to show our work and to provide a platform for potential clients to contact us. <br /><br/>

		For more details, visit the official website at <a href="https://mcode.hr/en" target="_blank" rel="no-refereer">mcode.hr.`
	},
	{
		id: "al-portfolio",
		title: "AL Portfolio",
		image: alPortfolio,
		details: `<b>AL Portfolio</b> is a portfolio website for a fellow UX/UI Designer. <br/>
		Website shows Designers work in a beautifull and contrasty look that keeps your eyes peeled to the screen.<br />
		It has information about Designer, her work and contact information. <br />
		Portfolio also includes details about the work; Designers work, thought and design proces.<br /><br/>

		For more details, visit the portfolio at <a href="https://antonijaluketic.com" target="_blank" rel="no-refereer">antonijaluketic.com.`
	},
	{
		id: "gorilla-gym",
		title: "Gorilla gym",
		image: gorillaGym,
		details: `<b>Gorilla gym</b> is a conceptual website for an imaginary website.<br/>
		Website shows information about the gym, its gallery, price list and an interactive BMI calculator for visitors to check out.

		For more details, visit the portfolio at <a href="https://gym-example-c3617.web.app/" target="_blank" rel="no-refereer">Gorilla-gym.`
	}
]
