import {TypeSetOne} from './typeSetOne.jsx'
import {TypeSetTwo} from './typeSetTwo'
import React from 'react'
import styles from './sets.module.scss'
import cn from 'classnames'
import { TypeSetThree } from './typeSetThree.jsx'


export const AllSet = ({ values, setValues, setCountPhotos, countPhotos }) => {
	const typeSets = [
		<TypeSetTwo
			setCountPhotos={setCountPhotos}
			countPhotos={countPhotos}
			values={values}
		/>,
		<TypeSetOne
			setCountPhotos={setCountPhotos}
			countPhotos={countPhotos}
			values={values}
		/>,
		<TypeSetThree
			setCountPhotos={setCountPhotos}
			countPhotos={countPhotos}
			values={values}
		/>,
	]
	return (
		<div className={styles.root}>
			{typeSets.map((set, i) => (
				<span
					key={i}
					onClick={e => {
						window.localStorage.setItem('set', i)
						setValues(prev => ({
							...prev,
							set: i,
						}))
					}}
					className={cn({ setsActive: values.set === i })}
				>
					{set}
				</span>
			))}
		</div>
	)
}
