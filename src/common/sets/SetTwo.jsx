import React from 'react'
import styles from './sets.module.scss'
import cn from 'classnames'

export const SetTwo = ({ images, text }) => {
	const baseURL = 'https://95.188.91.140:3001'
	console.log(images)
	return (
		<div className={styles.root}>
			<div className={styles.parent}>
				<div className={cn(styles.grid, styles.child_1)}>
					<img src={baseURL + images[0].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_2)}>
					<img src={baseURL + images[1].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_3)}>
					<img src={baseURL + images[2].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_4)}>
					<img src={baseURL + images[3].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_5)}>
					<img src={baseURL + images[4].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_6)}>
					<img src={baseURL + images[5].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_7)}>
					<img src={baseURL + images[6].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_8)}>
					<img src={baseURL + images[7].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_9)}>
					<img src={baseURL + images[8].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_10)}>
					<img src={baseURL + images[9].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_11)}>
					<img src={baseURL + images[10].path} alt='' />
				</div>
				<div className={cn(styles.grid, styles.child_12)}>
					<img src={baseURL + images[11].path} alt='' />
				</div>
			</div>
		</div>
	)
}
