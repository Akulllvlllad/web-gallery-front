import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../Hooks/useActions'
import { selectAuth } from '../store/slices/authSlice'


export const Login = () => {
	const {fetchLogin} = useActions()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data => {
		console.log(data);
		fetchLogin(data)
	}
	const navigate = useNavigate()
	const iaAuth = useSelector(selectAuth)

	React.useEffect(() => {
		if (iaAuth) navigate('/')
	}, [iaAuth])
	
		return (
			<div className='login'>
				<div className='login-inner'>
					<div className='login-board'>
						<h3 className='login-title'>Войти</h3>
						<form onSubmit={handleSubmit(onSubmit)} className='form'>
							<input placeholder='login' {...register('email')} />
							<input
								placeholder='Password'
								{...register('password', { required: true })}
							/>
							<button type='submit' className='login-submit'>
								Отправаить
							</button>
						</form>
					</div>
				</div>
			</div>
		)
}
