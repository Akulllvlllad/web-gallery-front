import React from 'react'
import styles from './NameLoading.module.scss'


export const NameLoading = () => {
	return (
		<div className={styles.root}>
			<div className={styles.loader}>
				<div className={styles.title}>Анастасия Глушкова</div>
			</div>
		</div>
	)
}
