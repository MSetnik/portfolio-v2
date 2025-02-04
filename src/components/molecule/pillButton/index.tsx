import React, { HTMLProps } from "react"
import styles from "./index.module.css"

interface Props extends HTMLProps<HTMLDivElement> {
	text: string
	isActive?: boolean
	textClassName?: string
}

const PillButton: React.FC<Props> = ({
	text,
	isActive = false,
	textClassName,
	...props
}) => {
	return (
		<div
			{...props}
			className={`${styles.container} ${
				isActive ? styles.itemActive : ""
			} ${props.className}`}
		>
			<p
				className={`${styles.menuText} ${
					isActive ? styles.textActive : ""
				} ${textClassName}`}
			>
				{text}
			</p>
		</div>
	)
}

export default PillButton
