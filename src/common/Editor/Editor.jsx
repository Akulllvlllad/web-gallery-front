import React from 'react'
import SimpleMDE from 'react-simplemde-editor'
import styles from './editor.module.scss'
import 'easymde/dist/easymde.min.css'

export const Editor = ({  values, setValues }) => {
	const onChange = React.useCallback(value => {
		setValues(prev => ({
			...prev,
			text: value
		}))
		
	})

	const options = React.useMemo(
		() => ({
			spellChecker: false,
			maxHeight: '600px',
			autofocus: true,
			placeholder: 'Введите текст...',
			status: false,

			autosave: {
				enabled: true,
				uniqueId: 'demo',
				delay: 1000,
			},
		}),
		[]
	)
	return (
		<SimpleMDE
			id='demo'
			className={styles.editor}
			value={values.text}
			options={options}
			onChange={onChange}
			
		/>
	)
}
