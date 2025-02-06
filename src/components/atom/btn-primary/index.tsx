import * as React from "react";
import "./index.css";

interface Props {
	title: string
	backgroundColor?: string
	disabled?: boolean
	className?: string
	onPress?: () => void
	type?: HTMLButtonElement["type"]
	icon?: React.ReactNode
	style?: "primary" | "secondary"
}

const CustomButton: React.FC<Props> = ({
	title = "primary",
	backgroundColor,
	disabled = false,
	className,
	icon,
	style = "primary",
	onPress = () => {}
}) => {
	return (
		<>
			<button
				disabled={disabled}
				className={`${
					disabled ? "button-disabled" : "button-primary"
				} ${className} ${style}`}
				style={{
					backgroundColor: backgroundColor || undefined,
					borderWidth: 0
				}}
				onClick={onPress}
			>
				<p>{title}</p>
				<div>{icon}</div>
			</button>
		</>
	)
}

export default CustomButton
