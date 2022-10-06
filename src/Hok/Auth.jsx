import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAuth } from '../store/slices/authSlice'

export const IsAuth = ({ children }) => {
	const isAuth = useSelector(selectAuth)
	const navigate = useNavigate()
	React.useEffect(() => {
		if (!isAuth) navigate('/')
	},[])
	

	return <>{children}</>
}
