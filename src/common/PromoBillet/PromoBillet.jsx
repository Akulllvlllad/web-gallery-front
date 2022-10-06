import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './promo.module.scss'


export const PromoBillet = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>Лучшее для лучших</h1>
			<div className={styles.buttons}>
				<button onClick={() => navigate('/portfolio')} className={styles.button}>
					Портфолио
				</button>
				<button className={styles.button}>Заказать сьемку</button>
			</div>
		</div>
	)
}
