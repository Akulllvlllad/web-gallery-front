export const getForm = () => {
	const storedValues = localStorage.getItem('form')
	if (!storedValues)
		return {
			titleData: '',
			set: 0,
			fileData: {
				data:[]
			},
			current: [],
			titleIMG: [],
			text: ''
		}
	return JSON.parse(storedValues)
}


