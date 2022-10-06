import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
	fetchGetGallery,
	fetchDelete,
	
} from '../store/slices/gallerySlice'
import { fetchGetSet, setDark, fetchCreate } from '../store/slices/setSlice'
import { setHeader } from '../store/slices/appStateSlice'

import { fetchMe, fetchLogin, logout } from '../store/slices/authSlice'
const useAppDispatch = () => useDispatch()

const AllActions = {
	fetchGetGallery,
	setHeader,
	fetchGetSet,
	setDark,
	fetchMe,
	fetchLogin,
	logout,
	fetchDelete,
	fetchCreate,
}

export const useActions = () => {
	const appDispatch = useAppDispatch()
	return bindActionCreators(AllActions, appDispatch)
}
