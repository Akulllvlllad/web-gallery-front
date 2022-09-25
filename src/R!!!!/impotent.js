import React from 'react'

export const Impotent = () => {
const [fileData, setFileData] = React.useState(null)
console.log(fileData)

const onSubmitHandler = e => {
	e.preventDefault()
	const formData = new FormData()
	const file = e.target.files
	console.log(file)
	for (let i = 0; i < file.length; i++) {
		formData.append('images', file[i])
	}

	fetch('http://localhost:5000/multiple', {
		method: 'POST',
		body: formData,
	})
		.then(res => res.json())
		.then(json => setFileData(json))
		.catch(err => {
			console.log(err.massage)
		})
}


	return (
		<div className='App'>
			{Boolean(fileData) &&
				fileData.data.map((obj, i) => (
					<img key={i} src={`http://localhost:5000${obj.path}`} />
				))}
			<form>
				<input type='file' multiple onChange={onSubmitHandler} />
				<input type='submit' />
			</form>
		</div>
	)
}
