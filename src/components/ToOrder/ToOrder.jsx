import React from 'react'
import { FormTG } from '../FormTG/FormTG'
import styles from './toOrder.module.scss'

export const ToOrder = () => {
	const [isOpen, setOpen] = React.useState(false)
	return (
		<div className={styles.root}>
			{isOpen ? (
				<FormTG />
			) : (
				<button onClick={() => setOpen(true)} className={styles.button}>
					Заказать сьемку 📸
				</button>
			)}
		</div>
	)
}
