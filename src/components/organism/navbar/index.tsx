/* eslint-disable no-unused-vars */
/* eslint-disable promise/param-names */
import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./index.css"
import { scrollToSection } from "../../../helpers/index.tsx"
import { WINDOW_WIDTH } from "../../../constants/index.tsx"

interface Props {
	routePrefix?: string
	scrollToContact?: () => void
}

const Navbar: React.FC<Props> = ({ routePrefix = "", scrollToContact }) => {
	const location = useLocation()
	const navigate = useNavigate()

	const navbarDiv = useRef<HTMLDivElement | null>(null)

	const [goToPath, setGoToPath] = useState<string | null>(null)

	const containerRef = useRef<HTMLDivElement>(null)

	const closeNavMenu = async () => {
		const navMenu = document.querySelector(".navbar-menu")
		if (navMenu) {
			navMenu.classList.add("navbar-menu-closed")
			navMenu.classList.remove("navbar-menu-opened")
			const navMenuLinks = document.querySelector(".navbar-menu-content")

			setTimeout(() => {
				if (navMenuLinks) {
					for (let i = 0; i < navMenuLinks.children.length; i++) {
						navMenuLinks.children[i].classList.remove(
							"link-nav-menu-visible"
						)
					}
				}
			}, 400)
		}
	}

	const openNavMenu = async () => {
		const navMenu = document.querySelector(".navbar-menu")

		if (navMenu) {
			navMenu.classList.remove("navbar-menu-closed")
			navMenu.classList.add("navbar-menu-opened")

			const navMenuLinks = document.querySelector(".navbar-menu-content")
			navMenu.classList.remove("navbar-menu-hidden")
			navMenu.classList.add("navbar-menu-visible")

			const timer = (ms: number) =>
				new Promise((res) => setTimeout(res, ms))

			if (navMenuLinks) {
				for (let i = 0; i < navMenuLinks.children.length; i++) {
					navMenuLinks.children[i].classList.add(
						"link-nav-menu-visible"
					)
					await timer(200)
				}
			}
		}
	}

	useEffect(() => {
		const navbar = document.querySelector(".navbar-div")

		const path = window.location.pathname

		if (path === "/") {
			window.addEventListener("scroll", (e) => {
				const lastKnownScrollPosition = window.scrollY

				if (lastKnownScrollPosition >= 100 && navbar) {
					navbar.classList.add("sticky")
				} else if (lastKnownScrollPosition <= 100 && navbar) {
					navbar.classList.remove("sticky")
				}
			})
		} else {
			if (navbar) {
				navbar.classList.add("nav-transparent")
			}
		}
	}, [])

	const isActive = (pathName: string) => {
		if (location.pathname === pathName) {
			closeNavMenu()
			window.scrollTo({ top: 0 })
			setGoToPath(null)
		}
	}

	useEffect(() => {
		if (goToPath) {
			isActive(goToPath)
		}
	}, [goToPath])

	useEffect(() => {
		setTimeout(() => {
			navItemActive(location.pathname)
		}, 20)
	}, [location])

	const navItemActive = (path: string) => {
		switch (path) {
			case "/":
				document.querySelector("#home")?.classList.add("active")
				break

			case "/en":
				document.querySelector("#home")?.classList.add("active")
				break

			case "/price":
				document.querySelector("#price")?.classList.add("active")
				break

			case "/en/price":
				document.querySelector("#price")?.classList.add("active")
				break

			case "/en/demo":
				document.querySelector("#demo")?.classList.add("active")
				break

			case "/demo":
				document.querySelector("#demo")?.classList.add("active")
				break
		}
	}

	const changeLanguage = () => {
		if (location.pathname.includes("/en")) {
			const newPath = location.pathname.replace("/en", "")
			navigate(newPath)
		} else {
			navigate(`/en${location.pathname}`)
		}
	}

	return (
		<div className="navbar-div">
			<div ref={containerRef} className="navbar-container">
				{WINDOW_WIDTH <= 1220 ? (
					<div className="navbar-container-small">
						<div className="navbar-container-logo-small"></div>
						<div className="navbar-open-btn">
							<svg
								onClick={openNavMenu}
								width="74"
								height="42"
								viewBox="0 0 74 42"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.5"
									y="1"
									width="73"
									height="40"
									rx="4.5"
									stroke="white"
								/>
								<path
									d="M9.47 26.5V16.7H10.87V26.5H9.47ZM12.894 26.5V25.632L17.654 19.724L17.92 20.186H12.978V19.08H18.998V19.962L14.238 25.856L13.93 25.394H19.11V26.5H12.894ZM24.8428 26.584C24.2081 26.584 23.6341 26.444 23.1208 26.164C22.6168 25.8747 22.2154 25.45 21.9168 24.89C21.6274 24.33 21.4828 23.63 21.4828 22.79C21.4828 21.95 21.6321 21.25 21.9308 20.69C22.2388 20.13 22.6448 19.71 23.1488 19.43C23.6621 19.15 24.2268 19.01 24.8428 19.01C25.5708 19.01 26.2148 19.1687 26.7748 19.486C27.3348 19.8033 27.7781 20.2467 28.1048 20.816C28.4314 21.376 28.5948 22.034 28.5948 22.79C28.5948 23.546 28.4314 24.2087 28.1048 24.778C27.7781 25.3473 27.3348 25.7907 26.7748 26.108C26.2148 26.4253 25.5708 26.584 24.8428 26.584ZM20.9088 26.5V16.112H22.2528V21.054L22.1128 22.776L22.1968 24.498V26.5H20.9088ZM24.7308 25.408C25.2068 25.408 25.6314 25.3007 26.0048 25.086C26.3874 24.8713 26.6861 24.568 26.9008 24.176C27.1248 23.7747 27.2368 23.3127 27.2368 22.79C27.2368 22.258 27.1248 21.8007 26.9008 21.418C26.6861 21.026 26.3874 20.7227 26.0048 20.508C25.6314 20.2933 25.2068 20.186 24.7308 20.186C24.2641 20.186 23.8394 20.2933 23.4568 20.508C23.0834 20.7227 22.7848 21.026 22.5608 21.418C22.3461 21.8007 22.2388 22.258 22.2388 22.79C22.2388 23.3127 22.3461 23.7747 22.5608 24.176C22.7848 24.568 23.0834 24.8713 23.4568 25.086C23.8394 25.3007 24.2641 25.408 24.7308 25.408ZM33.6297 26.584C32.8831 26.584 32.2204 26.4207 31.6417 26.094C31.0631 25.7673 30.6057 25.3193 30.2697 24.75C29.9337 24.1713 29.7657 23.518 29.7657 22.79C29.7657 22.0527 29.9337 21.3993 30.2697 20.83C30.6057 20.2607 31.0631 19.8173 31.6417 19.5C32.2204 19.1733 32.8831 19.01 33.6297 19.01C34.3671 19.01 35.0251 19.1733 35.6037 19.5C36.1917 19.8173 36.6491 20.2607 36.9757 20.83C37.3117 21.39 37.4797 22.0433 37.4797 22.79C37.4797 23.5273 37.3117 24.1807 36.9757 24.75C36.6491 25.3193 36.1917 25.7673 35.6037 26.094C35.0251 26.4207 34.3671 26.584 33.6297 26.584ZM33.6297 25.408C34.1057 25.408 34.5304 25.3007 34.9037 25.086C35.2864 24.8713 35.5851 24.568 35.7997 24.176C36.0144 23.7747 36.1217 23.3127 36.1217 22.79C36.1217 22.258 36.0144 21.8007 35.7997 21.418C35.5851 21.026 35.2864 20.7227 34.9037 20.508C34.5304 20.2933 34.1057 20.186 33.6297 20.186C33.1537 20.186 32.7291 20.2933 32.3557 20.508C31.9824 20.7227 31.6837 21.026 31.4597 21.418C31.2357 21.8007 31.1237 22.258 31.1237 22.79C31.1237 23.3127 31.2357 23.7747 31.4597 24.176C31.6837 24.568 31.9824 24.8713 32.3557 25.086C32.7291 25.3007 33.1537 25.408 33.6297 25.408ZM39.3385 26.5V19.08H40.6265V21.096L40.5005 20.592C40.7058 20.0787 41.0511 19.6867 41.5365 19.416C42.0218 19.1453 42.6191 19.01 43.3285 19.01V20.312C43.2725 20.3027 43.2165 20.298 43.1605 20.298C43.1138 20.298 43.0671 20.298 43.0205 20.298C42.3018 20.298 41.7325 20.5127 41.3125 20.942C40.8925 21.3713 40.6825 21.992 40.6825 22.804V26.5H39.3385ZM48.9469 19.01C49.5536 19.01 50.0856 19.1267 50.5429 19.36C51.0096 19.5933 51.3736 19.948 51.6349 20.424C51.8963 20.9 52.0269 21.502 52.0269 22.23V26.5H50.6829V22.384C50.6829 21.6653 50.5056 21.124 50.1509 20.76C49.8056 20.396 49.3156 20.214 48.6809 20.214C48.2049 20.214 47.7896 20.3073 47.4349 20.494C47.0803 20.6807 46.8049 20.956 46.6089 21.32C46.4223 21.684 46.3289 22.1367 46.3289 22.678V26.5H44.9849V19.08H46.2729V21.082L46.0629 20.55C46.3056 20.0647 46.6789 19.6867 47.1829 19.416C47.6869 19.1453 48.2749 19.01 48.9469 19.01ZM54.5142 26.5V19.08H55.8582V26.5H54.5142ZM55.1862 17.652C54.9249 17.652 54.7056 17.568 54.5282 17.4C54.3602 17.232 54.2762 17.0267 54.2762 16.784C54.2762 16.532 54.3602 16.322 54.5282 16.154C54.7056 15.986 54.9249 15.902 55.1862 15.902C55.4476 15.902 55.6622 15.986 55.8302 16.154C56.0076 16.3127 56.0962 16.5133 56.0962 16.756C56.0962 17.008 56.0122 17.2227 55.8442 17.4C55.6762 17.568 55.4569 17.652 55.1862 17.652ZM59.5164 24.708L59.5444 22.986L63.8144 19.08H65.4384L62.1624 22.3L61.4344 22.916L59.5164 24.708ZM58.4244 26.5V16.112H59.7684V26.5H58.4244ZM64.0944 26.5L61.1824 22.888L62.0504 21.81L65.7464 26.5H64.0944Z"
									fill="white"
								/>
							</svg>
						</div>

						<div className="navbar-menu navbar-menu-closed">
							<div
								className="navbar-menu-close"
								onClick={() => closeNavMenu()}
							>
								<svg
									width="66"
									height="41"
									viewBox="0 0 66 41"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="0.5"
										y="0.5"
										width="65"
										height="40"
										rx="4.5"
										stroke="#282828"
									/>
									<path
										d="M8.602 26V25.048L15.196 16.872L15.35 17.418H8.7V16.2H16.61V17.152L10.044 25.328L9.876 24.782H16.792V26H8.602ZM23.0812 26V24.432L23.0112 24.138V21.464C23.0112 20.8947 22.8432 20.456 22.5072 20.148C22.1805 19.8307 21.6858 19.672 21.0232 19.672C20.5845 19.672 20.1552 19.7467 19.7352 19.896C19.3152 20.036 18.9605 20.2273 18.6712 20.47L18.1112 19.462C18.4938 19.154 18.9512 18.9207 19.4832 18.762C20.0245 18.594 20.5892 18.51 21.1772 18.51C22.1945 18.51 22.9785 18.7573 23.5292 19.252C24.0798 19.7467 24.3552 20.5027 24.3552 21.52V26H23.0812ZM20.6452 26.084C20.0945 26.084 19.6092 25.9907 19.1892 25.804C18.7785 25.6173 18.4612 25.3607 18.2372 25.034C18.0132 24.698 17.9012 24.32 17.9012 23.9C17.9012 23.4987 17.9945 23.1347 18.1812 22.808C18.3772 22.4813 18.6898 22.22 19.1192 22.024C19.5578 21.828 20.1458 21.73 20.8832 21.73H23.2352V22.696H20.9392C20.2672 22.696 19.8145 22.808 19.5812 23.032C19.3478 23.256 19.2312 23.5267 19.2312 23.844C19.2312 24.208 19.3758 24.502 19.6652 24.726C19.9545 24.9407 20.3558 25.048 20.8692 25.048C21.3732 25.048 21.8118 24.936 22.1852 24.712C22.5678 24.488 22.8432 24.1613 23.0112 23.732L23.2772 24.656C23.0998 25.0947 22.7872 25.4447 22.3392 25.706C21.8912 25.958 21.3265 26.084 20.6452 26.084ZM29.3904 26.084C28.6437 26.084 28.065 25.8833 27.6544 25.482C27.2437 25.0807 27.0384 24.5067 27.0384 23.76V16.956H28.3824V23.704C28.3824 24.1053 28.4804 24.4133 28.6764 24.628C28.8817 24.8427 29.171 24.95 29.5444 24.95C29.9644 24.95 30.3144 24.8333 30.5944 24.6L31.0144 25.566C30.809 25.7433 30.5617 25.874 30.2724 25.958C29.9924 26.042 29.6984 26.084 29.3904 26.084ZM25.7784 19.686V18.58H30.5104V19.686H25.7784ZM34.4485 26L31.2005 18.58H32.6005L35.4845 25.3H34.8125L37.7525 18.58H39.0685L35.8205 26H34.4485ZM43.2958 26.084C42.5491 26.084 41.8864 25.9207 41.3078 25.594C40.7291 25.2673 40.2718 24.8193 39.9358 24.25C39.5998 23.6713 39.4318 23.018 39.4318 22.29C39.4318 21.5527 39.5998 20.8993 39.9358 20.33C40.2718 19.7607 40.7291 19.3173 41.3078 19C41.8864 18.6733 42.5491 18.51 43.2958 18.51C44.0331 18.51 44.6911 18.6733 45.2698 19C45.8578 19.3173 46.3151 19.7607 46.6418 20.33C46.9778 20.89 47.1458 21.5433 47.1458 22.29C47.1458 23.0273 46.9778 23.6807 46.6418 24.25C46.3151 24.8193 45.8578 25.2673 45.2698 25.594C44.6911 25.9207 44.0331 26.084 43.2958 26.084ZM43.2958 24.908C43.7718 24.908 44.1964 24.8007 44.5698 24.586C44.9524 24.3713 45.2511 24.068 45.4658 23.676C45.6804 23.2747 45.7878 22.8127 45.7878 22.29C45.7878 21.758 45.6804 21.3007 45.4658 20.918C45.2511 20.526 44.9524 20.2227 44.5698 20.008C44.1964 19.7933 43.7718 19.686 43.2958 19.686C42.8198 19.686 42.3951 19.7933 42.0218 20.008C41.6484 20.2227 41.3498 20.526 41.1258 20.918C40.9018 21.3007 40.7898 21.758 40.7898 22.29C40.7898 22.8127 40.9018 23.2747 41.1258 23.676C41.3498 24.068 41.6484 24.3713 42.0218 24.586C42.3951 24.8007 42.8198 24.908 43.2958 24.908ZM49.0045 26V18.58H50.2925V20.596L50.1665 20.092C50.3718 19.5787 50.7171 19.1867 51.2025 18.916C51.6878 18.6453 52.2851 18.51 52.9945 18.51V19.812C52.9385 19.8027 52.8825 19.798 52.8265 19.798C52.7798 19.798 52.7331 19.798 52.6865 19.798C51.9678 19.798 51.3985 20.0127 50.9785 20.442C50.5585 20.8713 50.3485 21.492 50.3485 22.304V26H49.0045ZM54.651 26V18.58H55.995V26H54.651ZM55.323 17.152C55.0616 17.152 54.8423 17.068 54.665 16.9C54.497 16.732 54.413 16.5267 54.413 16.284C54.413 16.032 54.497 15.822 54.665 15.654C54.8423 15.486 55.0616 15.402 55.323 15.402C55.5843 15.402 55.799 15.486 55.967 15.654C56.1443 15.8127 56.233 16.0133 56.233 16.256C56.233 16.508 56.149 16.7227 55.981 16.9C55.813 17.068 55.5936 17.152 55.323 17.152Z"
										fill="#282828"
									/>
								</svg>
							</div>

							<div className="navbar-menu-content">
								<div className="link link-nav-menu">
									<Link
										id="drawer-home"
										to={`/${routePrefix}`}
										onClick={() =>
											setGoToPath(`/${routePrefix}`)
										}
									>
										{/* {routePrefix === '' ? 'Početna' : 'Home'} */}
										About
									</Link>
								</div>

								<div className="link link-nav-menu">
									<Link
										id="drawer-price"
										to={
											routePrefix
												? `/${routePrefix}/price`
												: "/price"
										}
										onClick={() => {
											closeNavMenu()
										}}
									>
										Work
									</Link>
								</div>

								<div className="link link-nav-menu">
									<Link
										to=""
										onClick={() => {
											closeNavMenu()
											scrollToSection("contact")
										}}
									>
										Contact
									</Link>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div ref={navbarDiv} className="navbar-large">
						<div className="navbar-container-logo"></div>

						<div className="links-container">
							<div>
								<Link
									id="home"
									to={`/${routePrefix}`}
									onClick={() =>
										setGoToPath(`/${routePrefix}`)
									}
								>
									About
								</Link>
							</div>

							{/* <div>
									<Link id="about" to='' onClick={() => {
										location.pathname !== '/' && location.pathname !== '/en' && navigate(`/${routePrefix}`)
										setTimeout(() => {
											scrollToSection('how-work')
										}, 400)
									}}>
										{routePrefix === '' ? 'Kako radi?' : 'How does it work?'}
									</Link>
								</div> */}

							<div>
								<Link
									id="price"
									to={
										routePrefix
											? `/${routePrefix}/price`
											: "/price"
									}
								>
									Work
								</Link>
							</div>

							{/* <div>
									<Link id="faq-nav-item" to='' onClick={() => {
										location.pathname !== '/' && location.pathname !== '/en' && navigate(`/${routePrefix}`)
										setTimeout(() => {
											scrollToSection('faq')
										}, 400)
									}}>
										{routePrefix === '' ? 'Često postavljena pitanja' : 'FAQ'}
									</Link>
								</div> */}

							{/* <div>
									<Link id="demo" to={!routePrefix ? '/demo' : '/en/demo'} onClick={() => {
										location.pathname !== '/' && location.pathname !== '/en' && navigate(`/${routePrefix}`)
									}}>
										{routePrefix === '' ? 'Isprobajte aplikaciju' : 'Try it out'}
									</Link>
								</div> */}

							{/* <div>
                            <Link id="portfolio" to={`${routePrefix}/portfolio`} onClick={() => setGoToPath(`${routePrefix}/portfolio`)}>Usluge</Link>
                          </div> */}

							<div>
								<Link
									to=""
									onClick={() => {
										location.pathname !== "/" &&
											location.pathname !== "/en" &&
											navigate(`/${routePrefix}`)

										setTimeout(() => {
											scrollToSection("contact")
										}, 400)
									}}
								>
									Contact
								</Link>
							</div>
						</div>
					</div>
				)}

				{/* {
            windowWidth >= 768 &&
            <div className='navbar-language-container' onClick={() => changeLanguage()}>
              <p>
                {routePrefix === '' ? 'EN' : 'HR'}
              </p>
            </div>
          } */}
			</div>
		</div>
	)
}

export default Navbar
