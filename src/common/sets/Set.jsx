import React from 'react'
import { NameLoading } from '../preloaders/NameLoading'
import { TextSets } from '../textSets/TextSets'
import { SetOne } from './SetOne'
import { SetThree } from './SetThree'
import { SetTwo } from './SetTwo'
export const Set = ({ state }) => {
	const set = state.sets
	const images = state.images
	const text = state.text
	const title = state.title
	console.log(state);
	if (set === 1) {
		return (
			<>
				<SetOne images={images} />
				<TextSets text={text} title={title} />
			</>
		)
	}
	if (set === 0) {
		return (
			<>
				<SetTwo images={images} />
				<TextSets text={text} title={title} />
			</>
		)
	}
	if (set === 2) {
		return (
			<>
				<SetThree images={images} />
				<TextSets text={text} title={title} />
			</>
		)
	}

	return <NameLoading />
}
