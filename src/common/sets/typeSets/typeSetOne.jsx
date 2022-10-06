import React from 'react'
import styles from '../sets.module.scss'
import cn from 'classnames'
import style from './sets.module.scss'
export const TypeSetOne = ({ setCountPhotos, countPhotos, values }) => {
	const update = values.set
	const count = 10
	React.useEffect(() => {
		if (update === 1) setCountPhotos(count)
	}, [update])
	return (
		<div className={styles.root}>
			<div className={cn(styles.parent, style.cardParent)}>
				<div className={cn(styles.grid, styles.child_1, style.card)}></div>
				<div className={cn(styles.grid, styles.child_2, style.card)}></div>
				<div className={cn(styles.grid, styles.child_3, style.card)}></div>
				<div className={cn(styles.grid, styles.child_4, style.card)}></div>
				<div className={cn(styles.grid, styles.child_5, style.card)}></div>
				<div className={cn(styles.grid, styles.child_6, style.card)}></div>
				<div className={cn(styles.grid, styles.child_7, style.card)}></div>
				<div className={cn(styles.grid, styles.child_8, style.card)}></div>
				<div className={cn(styles.grid, styles.child_9, style.card)}></div>
				<div className={cn(styles.grid, styles.child_10, style.card)}></div>
				<h1 className={cn(styles.total)}>{count}</h1>
			</div>
		</div>
	)
}
