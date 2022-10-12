import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://192.168.0.6:3001',
})

instance.interceptors.request.use(config => {
	config.headers.Authorization = window.localStorage.getItem('token')
	return config
})

export default instance
//192.168.0.6:25565/promo
