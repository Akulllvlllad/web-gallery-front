import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://95.188.91.140:25565',
})

instance.interceptors.request.use(config => {
	config.headers.Authorization = window.localStorage.getItem('token')
	return config
})

export default instance
//192.168.0.6:25565/promo
