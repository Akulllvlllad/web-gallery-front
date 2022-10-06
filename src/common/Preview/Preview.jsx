import React from 'react'
import styles from './preview.module.scss'
import cn from 'classnames'

export const Preview = ({
	values,
	setValues,
}) => {
	const addIMG = (name, i) => {
		setValues(prev => ({
			...prev,
			current: [...prev.current, i],
			titleIMG: [
				...prev.titleIMG,
				values.fileData.data.find(e => e.name === name),
			],
		}))

		
	}
	const removeIMG = (name, i) => {
		setValues(prev => ({
			...prev,
			current: prev.current.filter(e => e !== i),
			titleIMG: prev.titleIMG.filter(e => e.name !== name),
		}))

		
		
	}
	
	
	return (
		<div className={styles.root}>
			{Boolean(values.fileData.data.length > 0) ? (
				values.fileData.data.map((obj, i) => (
					<div key={obj._id} className={styles.item}>
						{values.current.includes(i) ? (
							<RemoveIMG
								values={values}
								obj={obj}
								i={i}
								removeIMG={removeIMG}
							/>
						) : (
							<AddIMG values={values} obj={obj} i={i} addIMG={addIMG} />
						)}
					</div>
				))
			) : (
				<p className={styles.placeholder}>Фотографии</p>
			)}
		</div>
	)
}

const RemoveIMG = ({ values, removeIMG, i, obj }) => {
	return (
		<div
			onClick={() => removeIMG(obj.name, i)}
			className={cn(styles.itemIbg, '_ibg', {
				currentING: values.current.includes(i),
			})}
		>
			<img src={`http://localhost:5000${obj.path}`} />
			<div className='currentING-deleteIcon'>
				<span>+</span>
			</div>
			<p className={styles.size}>{obj.size}</p>
		</div>
	)
}

const AddIMG = ({ values, addIMG, i, obj }) => {
	return (
		<div
			onClick={() => addIMG(obj.name, i)}
			className={cn(styles.itemIbg, '_ibg', {
				currentING: values.current.includes(i),
			})}
		>
			<img src={`http://localhost:5000${obj.path}`} />
			<p className={styles.size}>{obj.size}</p>
		</div>
	)
}
