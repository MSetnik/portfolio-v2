import React, { Dispatch, SetStateAction } from "react"
import styles from "./index.module.css"
import PillButton from "../../molecule/pillButton"

interface Props {
	activeIndex: 0 | 1 | 2
	setActiveIndex: Dispatch<SetStateAction<0 | 1 | 2>>
}

const MyWorkMenu: React.FC<Props> = ({ activeIndex, setActiveIndex }) => {
	return (
		<menu className={styles.container}>
			<PillButton
				onClick={() => setActiveIndex(0)}
				isActive={activeIndex === 0}
				text="Mobile"
			/>
			<PillButton
				onClick={() => setActiveIndex(1)}
				isActive={activeIndex === 1}
				text="Web"
			/>
			<PillButton
				onClick={() => setActiveIndex(2)}
				isActive={activeIndex === 2}
				text="Backend"
			/>
		</menu>
	)
}

export default MyWorkMenu
