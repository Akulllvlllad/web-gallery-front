import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './GoBack.module.scss'
export const GoBack = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	return (
		<div className={styles.root} onClick={goBack}>
			<span>👈</span>
		</div>
	)
}
