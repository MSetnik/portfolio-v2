/* Storing user's device details in a variable */

export const checkIsMobile = (userAgent: string) => {
	// let details = navigator.userAgent;
	const regexp = /android|iphone|kindle|ipad|iPhone/i

	const isMobileDevice = regexp.test(userAgent)
	if (isMobileDevice) {
		return true
	}

	return false
}

// Scrolls to the specified element based on id
export const scrollToSection = (id: string) => {
	const section = document.getElementById(id)
	if (section) {
		section.scrollIntoView({ behavior: "smooth" }) // Smooth scrolling
	}
}
