import { createSlice } from '@reduxjs/toolkit'

export const appStateSlice = createSlice({
	name: 'appStateSlice',
	initialState: {
		header: true,
	},
	reducers: {
		setHeader: state => {
			state.header = !state.header
		},
	},
	extraReducers: builder => {},
})


export const selectHeader = state => state.appStateSlice.header

export const { setHeader } = appStateSlice.actions
export default appStateSlice.reducer
