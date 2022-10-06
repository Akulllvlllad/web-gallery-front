import React from 'react'
import styles from './contact.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { useActions } from '../../Hooks/useActions'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../store/slices/authSlice'

export const Contacts = () => {
	const { logout } = useActions()
	const isAuth = useSelector(selectAuth)

	return (
		<div className={cn(styles.root)}>
			<Link to='/portfolio'>
				<p className={styles.item}>Портфолио</p>
			</Link>
			<Link to='/contacts'>
				<p className={styles.item}>Контакты</p>
			</Link>
			<Link to='/services'>
				<p className={styles.item}>Услуги</p>
			</Link>
			<Link to='/info'>
				<p className={styles.item}>Информация</p>
			</Link>
			{isAuth && (
				<>
					<Link to='/admin'>
						<p className={styles.item}>📝</p>
					</Link>
					<Link to='/'>
						<p onClick={() => logout()} className={styles.item}>
							🔏
						</p>
					</Link>
				</>
			)}
		</div>
	)
}
