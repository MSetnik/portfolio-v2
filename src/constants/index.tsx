import { IProjects } from "../interfaces"
import {
	alPortfolio,
	cashless,
	gorillaGym,
	konzumeGift,
	mcodeWeb,
	rvh,
	weddingCamera,
	weddingCameraWeb
} from "../assets/projects"

export const WINDOW_WIDTH = window.innerWidth

export const mobileProjects: IProjects[] = [
	{
		id: "rvh",
		title: "Croatian Railway Schedule",
		image: rvh,
		details: `Raspored vlakova Hrvatske je mobilna aplikacija razvijena kako bi korisnicima HŽ-a omogućila jednostavno pretraživanje rasporeda polazaka vlakova, praćenje statusa i lokacije odabranog vlaka te kupovinu karata. Proces izrade prošao je kroz tri faze razvoja: <br/><br/>
			<strong>MVP verzija</strong> - Prvotna verzija napravljena je za testiranje ideje. Aplikacija je razvijena u suradnji s dizajnericom, koristeći Node.js (Express.js) za backend, hostan na AWS-u, dok je frontend napisan pomoću TypeScript-a i Recoil state managementa.<br/><br/>

			<strong>V1 verzija</strong> - Nakon uspješnog testiranja, aplikacija je redizajnirana i dovedena u produkcijsku fazu s poboljšanim dizajnom i boljim korisničkim iskustvom.<br/><br/>

			<strong>V2 verzija</strong> - Posljednja verzija uključuje dodatne funkcionalnosti poput kupovine karata putem web sučelja HŽ-a i njihovo spremanje u aplikaciju.`
	},
	{
		id: "cashless",
		title: "mStart Cashless",
		image: cashless
	},
	{
		id: "konzum-egift",
		title: "Konzum eGift",
		image: konzumeGift
	},
	{
		id: "wedding-camera",
		title: "Wedding Camera",
		image: weddingCamera
	}
]

export const webProjects: IProjects[] = [
	{
		id: "wedding-camera-web",
		title: "Wedding Camera - website",
		image: weddingCameraWeb
	},
	{
		id: "mcode",
		title: "MCODE Web",
		image: mcodeWeb
	},
	{
		id: "al-portfolio",
		title: "AL Portfolio",
		image: alPortfolio
	},
	{
		id: "gorilla-gym",
		title: "Gorilla gym",
		image: gorillaGym
	}
]
