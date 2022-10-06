import { configureStore } from '@reduxjs/toolkit'
import gallery from './slices/gallerySlice'
import set from './slices/setSlice'
import admin from './slices/adminSlice'
import appStateSlice from './slices/appStateSlice'
import auth from './slices/authSlice'
export const store = configureStore({
	reducer: {
		gallery,
		set,
		admin,
		appStateSlice,
		auth,
	},
})
