import React from 'react'

import { Editor } from '../common/Editor/Editor'
import { Preview } from '../common/Preview/Preview'
import { AllSet } from '../common/sets/typeSets/allSet'
import { getForm } from './getForm'
import cn from 'classnames'
import { useActions } from '../Hooks/useActions'
import { useSelector } from 'react-redux'
import { selectSet, selectSetSend } from '../store/slices/setSlice'
import { useNavigate } from 'react-router-dom'
import { Set } from '../common/sets/Set'
import { LinerLoading } from '../common/preloaders/LinerLoading'
export const Admin = () => {
	const [block, setBlock] = React.useState(false)
	const [values, setValues] = React.useState(getForm)
	const [countPhotos, setCountPhotos] = React.useState(9)

	React.useEffect(() => {
		localStorage.setItem('form', JSON.stringify(values))
	}, [values])

	const navigate = useNavigate()
	const set = useSelector(selectSet || null)

	const onSubmitHandler = e => {
		e.preventDefault()
		const formData = new FormData()
		const file = e.target.files

		for (let i = 0; i < file.length; i++) {
			formData.append('images', file[i])
		}

		fetch(`${'https://192.168.0.6:3001'}/multiple`, {
			method: 'POST',
			body: formData,
		})
			.then(res => res.json())
			.then(json => {
				setValues(prev => ({
					...prev,
					fileData: json,
				}))
			})
			.catch(err => {
				console.log(err.massage)
			})
	}

	const { fetchCreate } = useActions()
	const onSubmit = () => {
		if (block) {
			fetchCreate({
				title: values.titleData,
				images: values.fileData.data,
				text: values.text,
				sets: values.set,
				titleIMG: values.titleIMG,
			})
			navigate(`/portfolio/${set._id}`)
		} else {
			console.log('не заполнены поля')
		}
	}

	const isSending = useSelector(selectSetSend)

	const [open, setOpen] = React.useState(false)

	if (open) {
		return (
			<div className='Admin' id='top'>
				<div className='Admin_container _container'>
					<div className='setPreview'>
						<div className='setPreview_container'>
							<Set
								state={{
									sets: values.set,
									images: values.fileData.data,
									text: values.text,
									title: values.titleData,
								}}
							/>
						</div>
						<div className='Admin-submit'>
							<PreviewButton setOpen={setOpen} open={open} />
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='Admin'>
			<div className='Admin_container _container'>
				{/* {true && <LinerLoading />} */}
				<div className='Admin_title'>Панель для добавления фотосессии</div>
				<div className='Admin_body'>
					<Downloader
						values={values}
						setValues={setValues}
						onSubmitHandler={onSubmitHandler}
					/>
					<EditorText setValues={setValues} values={values} />

					<h2 className='Admin_title'>Выбор категории страницы</h2>
					<AllSet
						values={values}
						setValues={setValues}
						setCountPhotos={setCountPhotos}
						countPhotos={countPhotos}
					/>
					{Boolean(values) && (
						<Helper
							values={values}
							countPhotos={countPhotos}
							setBlock={setBlock}
						/>
					)}

					<div className='Admin-submit'>
						{block && <PreviewButton setOpen={setOpen} />}
						<SubmitButton
							isSending={isSending}
							block={block}
							onSubmit={onSubmit}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

const PreviewButton = ({ setOpen, open }) => {
	const value = open ? 'Назад' : 'Предпросмотр'
	return (
		<input
			onClick={() => {
				window.scrollTo(0, 0)
				setOpen(prev => !prev)
			}}
			type='submit'
			value={value}
			className={cn('Admin-submit-preview', { previewOpen: open })}
		/>
	)
}

const Downloader = ({ values, setValues, onSubmitHandler }) => {
	const filesRef = React.useRef(null)
	return (
		<>
			<Preview values={values} setValues={setValues} />
			<div>
				<button
					onClick={() => {
						setValues(prev => ({
							...prev,
							current: [],
							titleIMG: [],
						}))
						filesRef.current.click()
					}}
					className='upload_btn _btn'
				>
					Загрузить фотографии
				</button>
			</div>

			<input
				ref={filesRef}
				onChange={onSubmitHandler}
				type='file'
				multiple
				className='hidden'
			/>
		</>
	)
}

const Helper = ({ values, countPhotos, setBlock }) => {
	const blockFileData = values.fileData.data.length === countPhotos
	const blockTitleData = values.titleData.split('').length > 0
	const blockText = values.text.split('').length > 0
	const blockSet = values.set >= 0
	const blockTitleIMG = values.titleIMG.length >= 1
	const block = [
		blockFileData,
		blockTitleData,
		blockText,
		blockSet,
		blockTitleIMG,
	].every(e => e === true)
	React.useEffect(() => {
		setBlock(block)
	}, [block])
	return (
		<div className='helper'>
			<div className='helper-wrapper'>
				<ul className='helper-list'>
					<li className={cn('helper-list-item', { done: blockFileData })}>
						Загрузите {countPhotos} фотографий
					</li>
					<li className={cn('helper-list-item', { done: blockTitleIMG })}>
						Выберите титульные фотографии
					</li>
					<li className={cn('helper-list-item', { done: blockTitleData })}>
						Напишите титульное имя
					</li>
					<li className={cn('helper-list-item', { done: blockText })}>
						Придумайте описание
					</li>
					<li className={cn('helper-list-item', { done: blockSet })}>
						Выберите формат расположения фотографий
					</li>
				</ul>
			</div>
		</div>
	)
}

const SubmitButton = ({ isSending, block, onSubmit }) => {
	return (
		<>
			{isSending ? (
				<input
					type='submit'
					value='Отправка...'
					className='Admin-submit-submit'
				/>
			) : (
				<input
					className='Admin-submit-submit'
					disabled={!block}
					type='submit'
					value='Создать'
					onClick={onSubmit}
				/>
			)}
		</>
	)
}

const EditorText = ({ setValues, values }) => {
	return (
		<>
			<div className='field title_field'>
				<input
					onChange={e =>
						setValues(prev => ({
							...prev,
							titleData: e.target.value,
						}))
					}
					name='titleData'
					value={values.titleData}
					placeholder='Титульное имя'
				/>
			</div>

			<Editor values={values} setValues={setValues} />
		</>
	)
}
