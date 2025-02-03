import React from "react"

const HtmlSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="106"
			height="106"
			viewBox="0 0 106 106"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx="53" cy="53" r="53" fill="#222222" />
			<g clipPath="url(#clip0_92_1589)">
				<path
					d="M32.1676 75.0292L28 24.0952L77.7724 24.1976L73.3655 75.0292L53.0741 80.9048L32.1676 75.0292Z"
					fill="#E34F26"
				/>
				<path
					d="M53.0742 75.9858V28.946L73.5708 29.0143L69.9158 71.1005L53.0742 75.9858Z"
					fill="#EF652A"
				/>
				<path
					d="M67.9344 40.6975L68.5148 34.48H36.9844L38.7264 53.542H60.487L59.6336 61.6722L52.6647 63.5507L45.5934 61.5012L45.2177 56.6504H38.9656L39.8198 66.5571L52.6643 70.1439L65.6111 66.5571L67.3532 47.2221H44.5L43.851 40.6975H67.9344Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_92_1589">
					<rect
						width="49.7724"
						height="57"
						fill="white"
						transform="translate(28 24)"
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default HtmlSvg
