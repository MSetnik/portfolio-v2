import React from "react"

const JiraSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
			<path
				d="M75.8209 30.106H51.313C51.313 33.0401 52.4786 35.8541 54.5533 37.9289C56.6281 40.0036 59.4421 41.1692 62.3763 41.1692H66.8909V45.5282C66.8949 51.6327 71.8425 56.5805 77.947 56.5845V32.232C77.947 31.0582 76.9954 30.106 75.8209 30.106Z"
				fill="#2684FF"
			/>
			<path
				d="M63.6943 42.3174H39.1865C39.1903 48.4219 44.1379 53.3697 50.2426 53.3737H54.7573V57.7466C54.765 63.8511 59.716 68.7955 65.8205 68.7955V44.4438C65.8205 43.2696 64.8685 42.3174 63.6943 42.3174Z"
				fill="url(#paint0_linear_92_1572)"
			/>
			<path
				d="M51.5612 54.522H27.0532C27.0532 60.6321 32.0066 65.5852 38.1165 65.5852H42.6453V69.944C42.6493 76.043 47.5883 80.9886 53.6874 81.0001V56.6482C53.6874 55.474 52.7354 54.522 51.5612 54.522Z"
				fill="url(#paint1_linear_92_1572)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_92_1572"
					x1="6705.59"
					y1="54.5078"
					x2="4061.68"
					y2="3144.3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.18" stopColor="#0052CC" />
					<stop offset="1" stopColor="#2684FF" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_92_1572"
					x1="6872.63"
					y1="88.9728"
					x2="3814.31"
					y2="3458.97"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.18" stopColor="#0052CC" />
					<stop offset="1" stopColor="#2684FF" />
				</linearGradient>
			</defs>
		</svg>
	)
}

export default JiraSvg
