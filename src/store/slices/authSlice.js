import {createAsyncThunk,  createSlice } from '@reduxjs/toolkit'
import axios from '../../axios/axios'

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (param) => {
	const { data } = await axios.post('/auth/login', param)
	console.log(data)
	return data
})
export const fetchMe = createAsyncThunk('auth/fetchMe', async () => {
	const { data } = await axios.get('/auth/me')
	return data
})


export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		data: null,
		status: 'loading',
	},
	reducers: {
		logout: state => {
			if(window.confirm('Выйти из админки?')){
				state.data = null
				window.localStorage.removeItem('token')
			}
			
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchLogin.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = 'loaded'
			if ('token' in action.payload) {
				window.localStorage.setItem('token', action.payload.token)
			}
			
		})
		builder.addCase(fetchLogin.rejected, (state, action) => {
			state.data = null
			state.status = 'error'
		})
		builder.addCase(fetchLogin.pending, (state, action) => {
			state.status = 'loading'
			state.data = null
		})


		builder.addCase(fetchMe.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = 'loaded'
			
		})
		builder.addCase(fetchMe.rejected, (state, action) => {
			state.data = null
			state.status = 'error'
		})
		builder.addCase(fetchMe.pending, (state, action) => {
			state.status = 'loading'
			state.data = null
		})
	},
})


export const { logout } = authSlice.actions

export const selectAuth = state => Boolean(state.auth.data)
export default authSlice.reducer
