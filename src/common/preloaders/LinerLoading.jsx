import React from 'react'
import styles from './LinerLoading.module.scss'



export const LinerLoading = () => {
	return (
		<div className={styles.root}>
			<div className={styles.loader}>
				<div className={styles.linerLoading}>
					
				</div>
				<div className={styles.title}>Загрузка</div>
			</div>
		</div>
	)
}
