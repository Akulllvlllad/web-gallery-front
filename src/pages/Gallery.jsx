import React from 'react'
import { useSelector } from 'react-redux'

import { NameLoading } from '../common/preloaders/NameLoading'
import { Card_Gallery } from '../components/card_gallery/Card_Gallery'
import { useActions } from '../Hooks/useActions'
import { selectGalleryLoading } from '../store/slices/gallerySlice'

export const Gallery = () => {
	const { fetchGetGallery } = useActions()
	const state = useSelector(state => state.gallery.state)
	const [moderator, setModerator] = React.useState(true)
	const loading = useSelector(selectGalleryLoading)
	React.useEffect(() => {
		fetchGetGallery()

		
		setTimeout(() => setModerator(false), 1000)
		return () => setModerator(true)
	}, [])


	console.log(state)
	return (
		<div className='portfolio'>
			<div className='portfolio_container'>
				<div className='portfolio_inner'>
					{moderator || loading ? (
						<NameLoading />
					) : (
						state.map((obj, i) => <Card_Gallery {...obj} key={obj._id} />)
					)}
				</div>
			</div>
		</div>
	)
}
