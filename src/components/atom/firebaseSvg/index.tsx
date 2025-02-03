import React from "react"

const FirebaseSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
			<g clipPath="url(#clip0_92_1580)">
				<path
					d="M59.0212 44.5882L53.3208 49.8958L48.0293 39.2181L50.7628 33.0786C51.4537 31.854 52.5837 31.8378 53.2746 33.0786L59.0212 44.5882Z"
					fill="#FFA000"
				/>
				<path
					d="M53.323 49.8936L32 69.7263L48.0315 39.2183L53.323 49.8936Z"
					fill="#F57F17"
				/>
				<path
					d="M65.2716 36.4709C66.2929 35.4981 67.3442 35.8262 67.61 37.208L73.1533 69.4582L54.7672 80.4964C54.1225 80.8568 52.4126 80.9978 52.4126 80.9978C52.4126 80.9978 50.8575 80.8083 50.2613 80.4802L32 69.7263L65.2716 36.4709Z"
					fill="#FFCA28"
				/>
				<path
					d="M48.0315 39.2182L32 69.7262L39.1446 25.1346C39.4127 23.7528 40.196 23.6119 40.9031 24.8365L48.0315 39.2182Z"
					fill="#FFA000"
				/>
			</g>
			<defs>
				<clipPath id="clip0_92_1580">
					<rect
						width="41.1533"
						height="57"
						fill="white"
						transform="translate(32 24)"
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default FirebaseSvg
