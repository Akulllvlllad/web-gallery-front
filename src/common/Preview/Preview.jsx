import React from 'react'
import styles from './preview.module.scss'
import cn from 'classnames'

export const Preview = ({ values, setValues }) => {
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

	const [currentCard, setCurrentCard] = React.useState(null)
	const dragStartHandler = (e, card) => {
		setCurrentCard(card)
	}
	const dragEndHandler = e => {
		e.target.style.background = 'white'
	}
	const dragOverHandler = e => {
		e.preventDefault()
		e.target.style.background = 'red'
	}

	const sortCard = (a, b) => {
		if (a._id > b._id) {
			return 1
		} else {
			return -1
		}
	}

	const dropHandler = (e, card) => {
		e.preventDefault()

		setValues(prev => ({
			...prev,
			fileData: {
				...prev.fileData,
				data: prev.fileData.data.map(c => {
					if (card._id === c._id) {
						return { ...c, _id: currentCard._id }
					}
					if (c._id === currentCard._id) {
						return { ...c, _id: card._id }
					}
					return c
				}),
			},
		}))

		e.target.style.background = 'white'
	}

	console.log(values)

	return (
		<div className={styles.root}>
			{Boolean(values.fileData.data.length > 0) ? (
				values.fileData.data.sort(sortCard).map((obj, i) => (
					<div
						draggable={true}
						onDragStart={e => dragStartHandler(e, obj)}
						onDragLeave={e => dragEndHandler(e)}
						onDragEnd={e => dragEndHandler(e)}
						onDragOver={e => dragOverHandler(e)}
						onDrop={e => dropHandler(e, obj)}
						key={obj.name}
						className={styles.item}
					>
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
			<img src={`https://galleryappkrsc.herokuapp.com${obj.path}`} />
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
			<img src={`https://galleryappkrsc.herokuapp.com${obj.path}`} />
			<p className={styles.size}>{obj.size}</p>
		</div>
	)
}
