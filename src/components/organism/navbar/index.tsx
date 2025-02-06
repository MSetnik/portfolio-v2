 
/* eslint-disable promise/param-names */
import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./index.css"
import { scrollToSection } from "../../../helpers/index.tsx"
import { WINDOW_WIDTH } from "../../../constants/index.tsx"

interface Props {
	routePrefix?: string
}

const Navbar: React.FC<Props> = ({ routePrefix = "" }) => {
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
			window.addEventListener("scroll", () => {
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


	return (
		<div className="navbar-div">
			<div ref={containerRef} className="max-width-container navbar-container">
				{WINDOW_WIDTH <= 1220 ? (
					<div className="navbar-container-small">
						<div className="navbar-container-logo-small"></div>
						<div className="navbar-open-btn">
							<svg
								onClick={openNavMenu}
								width="57"
								height="41"
								viewBox="0 0 57 41"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.5"
									y="0.5"
									width="56"
									height="40"
									rx="4.5"
									stroke="white"
								/>
								<path
									d="M9.47 26V16.2H10.618L15.014 23.606H14.398L18.738 16.2H19.886L19.9 26H18.556L18.542 18.314H18.864L15 24.81H14.356L10.464 18.314H10.814V26H9.47ZM25.9491 26.084C25.1558 26.084 24.4558 25.9207 23.8491 25.594C23.2518 25.2673 22.7851 24.8193 22.4491 24.25C22.1224 23.6807 21.9591 23.0273 21.9591 22.29C21.9591 21.5527 22.1178 20.8993 22.4351 20.33C22.7618 19.7607 23.2051 19.3173 23.7651 19C24.3344 18.6733 24.9738 18.51 25.6831 18.51C26.4018 18.51 27.0364 18.6687 27.5871 18.986C28.1378 19.3033 28.5671 19.7513 28.8751 20.33C29.1924 20.8993 29.3511 21.5667 29.3511 22.332C29.3511 22.388 29.3464 22.4533 29.3371 22.528C29.3371 22.6027 29.3324 22.6727 29.3231 22.738H23.0091V21.772H28.6231L28.0771 22.108C28.0864 21.632 27.9884 21.2073 27.7831 20.834C27.5778 20.4607 27.2931 20.1713 26.9291 19.966C26.5744 19.7513 26.1591 19.644 25.6831 19.644C25.2164 19.644 24.8011 19.7513 24.4371 19.966C24.0731 20.1713 23.7884 20.4653 23.5831 20.848C23.3778 21.2213 23.2751 21.6507 23.2751 22.136V22.36C23.2751 22.8547 23.3871 23.298 23.6111 23.69C23.8444 24.0727 24.1664 24.3713 24.5771 24.586C24.9878 24.8007 25.4591 24.908 25.9911 24.908C26.4298 24.908 26.8264 24.8333 27.1811 24.684C27.5451 24.5347 27.8624 24.3107 28.1331 24.012L28.8751 24.88C28.5391 25.272 28.1191 25.5707 27.6151 25.776C27.1204 25.9813 26.5651 26.084 25.9491 26.084ZM35.1794 18.51C35.786 18.51 36.318 18.6267 36.7754 18.86C37.242 19.0933 37.606 19.448 37.8674 19.924C38.1287 20.4 38.2594 21.002 38.2594 21.73V26H36.9154V21.884C36.9154 21.1653 36.738 20.624 36.3834 20.26C36.038 19.896 35.548 19.714 34.9134 19.714C34.4374 19.714 34.022 19.8073 33.6674 19.994C33.3127 20.1807 33.0374 20.456 32.8414 20.82C32.6547 21.184 32.5614 21.6367 32.5614 22.178V26H31.2174V18.58H32.5054V20.582L32.2954 20.05C32.538 19.5647 32.9114 19.1867 33.4154 18.916C33.9194 18.6453 34.5074 18.51 35.1794 18.51ZM43.8687 26.084C43.234 26.084 42.674 25.9673 42.1887 25.734C41.7127 25.5007 41.3393 25.146 41.0687 24.67C40.8073 24.1847 40.6767 23.578 40.6767 22.85V18.58H42.0207V22.696C42.0207 23.424 42.1933 23.97 42.5387 24.334C42.8933 24.698 43.388 24.88 44.0227 24.88C44.4893 24.88 44.8953 24.7867 45.2407 24.6C45.586 24.404 45.852 24.124 46.0387 23.76C46.2253 23.3867 46.3187 22.9387 46.3187 22.416V18.58H47.6627V26H46.3887V23.998L46.5987 24.53C46.356 25.0247 45.992 25.4073 45.5067 25.678C45.0213 25.9487 44.4753 26.084 43.8687 26.084Z"
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
									width="55"
									height="41"
									viewBox="0 0 55 41"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="0.5"
										y="0.5"
										width="54"
										height="40"
										rx="4.5"
										stroke="#282828"
									/>
									<path
										d="M13.852 26.112C13.1053 26.112 12.4147 25.9907 11.78 25.748C11.1547 25.496 10.6087 25.146 10.142 24.698C9.68467 24.2407 9.32533 23.7087 9.064 23.102C8.80267 22.4953 8.672 21.828 8.672 21.1C8.672 20.372 8.80267 19.7047 9.064 19.098C9.32533 18.4913 9.68933 17.964 10.156 17.516C10.6227 17.0587 11.1687 16.7087 11.794 16.466C12.4287 16.214 13.1193 16.088 13.866 16.088C14.622 16.088 15.3173 16.2187 15.952 16.48C16.596 16.732 17.142 17.11 17.59 17.614L16.68 18.496C16.3067 18.104 15.8867 17.8147 15.42 17.628C14.9533 17.432 14.454 17.334 13.922 17.334C13.3713 17.334 12.858 17.4273 12.382 17.614C11.9153 17.8007 11.5093 18.062 11.164 18.398C10.8187 18.734 10.548 19.1353 10.352 19.602C10.1653 20.0593 10.072 20.5587 10.072 21.1C10.072 21.6413 10.1653 22.1453 10.352 22.612C10.548 23.0693 10.8187 23.466 11.164 23.802C11.5093 24.138 11.9153 24.3993 12.382 24.586C12.858 24.7727 13.3713 24.866 13.922 24.866C14.454 24.866 14.9533 24.7727 15.42 24.586C15.8867 24.39 16.3067 24.0913 16.68 23.69L17.59 24.572C17.142 25.076 16.596 25.4587 15.952 25.72C15.3173 25.9813 14.6173 26.112 13.852 26.112ZM19.3912 26V15.612H20.7352V26H19.3912ZM26.4793 26.084C25.7327 26.084 25.07 25.9207 24.4913 25.594C23.9127 25.2673 23.4553 24.8193 23.1193 24.25C22.7833 23.6713 22.6153 23.018 22.6153 22.29C22.6153 21.5527 22.7833 20.8993 23.1193 20.33C23.4553 19.7607 23.9127 19.3173 24.4913 19C25.07 18.6733 25.7327 18.51 26.4793 18.51C27.2167 18.51 27.8747 18.6733 28.4533 19C29.0413 19.3173 29.4987 19.7607 29.8253 20.33C30.1613 20.89 30.3293 21.5433 30.3293 22.29C30.3293 23.0273 30.1613 23.6807 29.8253 24.25C29.4987 24.8193 29.0413 25.2673 28.4533 25.594C27.8747 25.9207 27.2167 26.084 26.4793 26.084ZM26.4793 24.908C26.9553 24.908 27.38 24.8007 27.7533 24.586C28.136 24.3713 28.4347 24.068 28.6493 23.676C28.864 23.2747 28.9713 22.8127 28.9713 22.29C28.9713 21.758 28.864 21.3007 28.6493 20.918C28.4347 20.526 28.136 20.2227 27.7533 20.008C27.38 19.7933 26.9553 19.686 26.4793 19.686C26.0033 19.686 25.5787 19.7933 25.2053 20.008C24.832 20.2227 24.5333 20.526 24.3093 20.918C24.0853 21.3007 23.9733 21.758 23.9733 22.29C23.9733 22.8127 24.0853 23.2747 24.3093 23.676C24.5333 24.068 24.832 24.3713 25.2053 24.586C25.5787 24.8007 26.0033 24.908 26.4793 24.908ZM34.3161 26.084C33.7001 26.084 33.1121 26 32.5521 25.832C32.0014 25.664 31.5674 25.4587 31.2501 25.216L31.8101 24.152C32.1274 24.3667 32.5194 24.5487 32.9861 24.698C33.4527 24.8473 33.9287 24.922 34.4141 24.922C35.0394 24.922 35.4874 24.8333 35.7581 24.656C36.0381 24.4787 36.1781 24.2313 36.1781 23.914C36.1781 23.6807 36.0941 23.4987 35.9261 23.368C35.7581 23.2373 35.5341 23.1393 35.2541 23.074C34.9834 23.0087 34.6801 22.9527 34.3441 22.906C34.0081 22.85 33.6721 22.7847 33.3361 22.71C33.0001 22.626 32.6921 22.514 32.4121 22.374C32.1321 22.2247 31.9081 22.024 31.7401 21.772C31.5721 21.5107 31.4881 21.1653 31.4881 20.736C31.4881 20.288 31.6141 19.896 31.8661 19.56C32.1181 19.224 32.4727 18.9673 32.9301 18.79C33.3967 18.6033 33.9474 18.51 34.5821 18.51C35.0674 18.51 35.5574 18.5707 36.0521 18.692C36.5561 18.804 36.9667 18.9673 37.2841 19.182L36.7101 20.246C36.3741 20.022 36.0241 19.868 35.6601 19.784C35.2961 19.7 34.9321 19.658 34.5681 19.658C33.9801 19.658 33.5414 19.756 33.2521 19.952C32.9627 20.1387 32.8181 20.3813 32.8181 20.68C32.8181 20.932 32.9021 21.128 33.0701 21.268C33.2474 21.3987 33.4714 21.5013 33.7421 21.576C34.0221 21.6507 34.3301 21.716 34.6661 21.772C35.0021 21.8187 35.3381 21.884 35.6741 21.968C36.0101 22.0427 36.3134 22.15 36.5841 22.29C36.8641 22.43 37.0881 22.626 37.2561 22.878C37.4334 23.13 37.5221 23.466 37.5221 23.886C37.5221 24.334 37.3914 24.7213 37.1301 25.048C36.8687 25.3747 36.5001 25.6313 36.0241 25.818C35.5481 25.9953 34.9787 26.084 34.3161 26.084ZM42.5057 26.084C41.7124 26.084 41.0124 25.9207 40.4057 25.594C39.8084 25.2673 39.3417 24.8193 39.0057 24.25C38.6791 23.6807 38.5157 23.0273 38.5157 22.29C38.5157 21.5527 38.6744 20.8993 38.9917 20.33C39.3184 19.7607 39.7617 19.3173 40.3217 19C40.8911 18.6733 41.5304 18.51 42.2397 18.51C42.9584 18.51 43.5931 18.6687 44.1437 18.986C44.6944 19.3033 45.1237 19.7513 45.4317 20.33C45.7491 20.8993 45.9077 21.5667 45.9077 22.332C45.9077 22.388 45.9031 22.4533 45.8937 22.528C45.8937 22.6027 45.8891 22.6727 45.8797 22.738H39.5657V21.772H45.1797L44.6337 22.108C44.6431 21.632 44.5451 21.2073 44.3397 20.834C44.1344 20.4607 43.8497 20.1713 43.4857 19.966C43.1311 19.7513 42.7157 19.644 42.2397 19.644C41.7731 19.644 41.3577 19.7513 40.9937 19.966C40.6297 20.1713 40.3451 20.4653 40.1397 20.848C39.9344 21.2213 39.8317 21.6507 39.8317 22.136V22.36C39.8317 22.8547 39.9437 23.298 40.1677 23.69C40.4011 24.0727 40.7231 24.3713 41.1337 24.586C41.5444 24.8007 42.0157 24.908 42.5477 24.908C42.9864 24.908 43.3831 24.8333 43.7377 24.684C44.1017 24.5347 44.4191 24.3107 44.6897 24.012L45.4317 24.88C45.0957 25.272 44.6757 25.5707 44.1717 25.776C43.6771 25.9813 43.1217 26.084 42.5057 26.084Z"
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
										to={""}
										onClick={() => {
											navigate(`/${routePrefix}`)

											setTimeout(() => {
												scrollToSection("my-work")
											}, 400)

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
									onClick={() => {
										navigate(`/${routePrefix}`)

										setTimeout(() => {
											scrollToSection("my-work")
										}, 400)
									}}
									to={""}
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
