import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios/axios'

export const fetchGetGallery = createAsyncThunk(
	'gallery/fetchGetGallery',
	async () => {
		const { data } = await axios.get('/promo')
		
		return data
	}
)
export const fetchDelete = createAsyncThunk('gallery/fetchDelete', async (id) => {
	const { data } = await axios.delete(`/posts/${id}`)
	window.location.reload()
	return data
})






export const gallerySlice = createSlice({
	name: 'gallery',
	initialState: {
		state: [],
		status: 'loading',
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchGetGallery.fulfilled, (state, action) => {
			state.state = [ ...action.payload]
			state.status = 'loaded'
		})

		builder.addCase(fetchGetGallery.pending, (state, action) => {
			state.status = 'loading'
		})

		builder.addCase(fetchGetGallery.rejected, (state, action) => {
			state.state = []
			state.status = 'error'
		})

		
	},
})

export const selectGallery = state => state.gallery.state
export const selectGalleryLoading = state => Boolean(state.gallery.status === 'loading')

export default gallerySlice.reducer


