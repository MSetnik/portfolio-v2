import React from "react"

const CssSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
			<g clipPath="url(#clip0_92_1510)">
				<path
					d="M32.1676 75.0289L28 24.0957L77.7724 24.1981L73.3655 75.0289L53.0741 80.9045L32.1676 75.0289Z"
					fill="#1B73BA"
				/>
				<path
					d="M53.0742 75.9855V28.9465L73.5708 29.0148L69.9158 71.1005L53.0742 75.9855Z"
					fill="#1C88C7"
				/>
				<path
					d="M68.4806 34.9587H36.9502L37.8044 41.1072H52.7666L38.0436 47.4271L38.8973 53.3709H60.5897L59.8038 61.6717L52.4591 63.1066L45.798 61.3987L45.2855 56.6844H39.1707L39.9903 66.4888L53.1082 70.1438L65.6797 66.1472L67.2853 46.9828H53.996L68.4802 40.9708L68.4806 34.9587Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_92_1510">
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

export default CssSvg
