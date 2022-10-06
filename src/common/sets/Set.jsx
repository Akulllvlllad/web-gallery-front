import React from 'react'
import { NameLoading } from '../preloaders/NameLoading'
import { SetOne } from './SetOne'
import { SetThree } from './SetThree'
import { SetTwo } from './SetTwo'
export const Set = ({ state }) => {
	const set = state.sets
	const images = state.images
	const text = state.text

	if (set === 1) {
		return <SetOne images={images} text={text} />
	}
	if (set === 0) {
		return <SetTwo images={images} text={text} />
	}
	if (set === 2) {
		return <SetThree images={images} text={text} />
	}

	return <NameLoading />
}
