import React from 'react'
import styles from './CardInfo.module.scss'

const img = 'https://sun9-west.userapi.com/sun9-16/s/v1/if1/gjltYleMQGXr4YJD32rhRBw7j6h57nVVUYI5LtCmRWZutcJsih9PqluOpV_Skb0X0lg9WsU-.jpg?size=1280x960&quality=96&type=album'

export const CardInfo = () => {
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.img}>
					<img src={img} />
				</div>
				<div className={styles.info}>
					<h3>Фотограф:<span> Анастасия</span></h3>
				</div>
				<div className={styles.title}></div>
			</div>
		</div>
	)
}
