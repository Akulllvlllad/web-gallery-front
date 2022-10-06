import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/axios'

export const fetchGetSet = createAsyncThunk('gallery/fetchGetSet', async id => {
	const { data } = await axios.get(`/portfolio/${id}`)
	console.log(data)
	return data
})

export const fetchCreate = createAsyncThunk(
	'gallery/fetchCreate',
	async fields => {
		const { data } = await axios.post('/create', fields)
		if (data) {
			console.log(data)
		}
		return data
	}
)



export const setSlice = createSlice({
	name: 'set',
	initialState: {
		state: {},
		status: 'loading',
		dark: false,
		send: false
	},
	reducers: {
		setDark: state =>{ 
			state.dark = !state.dark
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchGetSet.fulfilled, (state, action) => {
			state.state = action.payload
			state.status = 'loaded'
		})

		builder.addCase(fetchGetSet.pending, (state, action) => {
			state.state = {}
			state.status = 'loading'
		})

		builder.addCase(fetchGetSet.rejected, (state, action) => {
			state.state = {}
			state.status = 'error'
		})


		builder.addCase(fetchCreate.fulfilled, (state, action) => {
			state.state = action.payload
			state.status = 'loaded'
			state.send = false
			localStorage.removeItem('form')
			
		})

		builder.addCase(fetchCreate.pending, (state, action) => {
			state.state = {}
			state.status = 'loading'
			state.send = true
		})

		builder.addCase(fetchCreate.rejected, (state, action) => {
			state.state = {}
			state.status = 'error'
			state.send = false
		})
		
	},
})

export const selectSet = state => state.set.state
export const selectSetLoading = state => Boolean(state.set.status === 'loading')
export const selectSetDark = state => state.set.dark
export const selectSetSend = state => state.set.send

export const { setDark } = setSlice.actions

export default setSlice.reducer

