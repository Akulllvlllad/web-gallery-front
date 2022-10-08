import React from 'react'
import styles from './TextSets.module.scss'
import ReactMarkdown from 'react-markdown'
export const TextSets = ({ text, title }) => {
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.editor}>
					<ReactMarkdown children={text} />
				</div>
			</div>
			<div className={styles.author}>
				<div className={styles.img}>
					<img
						src='https://cdn.trinixy.ru/pics5/20170524/beautiful_girls_01.jpg'
						alt='author'
					/>
				</div>
				<div className={styles.body}>
					<p className={styles.name}>Анастасия Глушкова</p>
					<p className={styles.quote}>{'"Красота в деталях"'}</p>
				</div>
			</div>
		</div>
	)
}
