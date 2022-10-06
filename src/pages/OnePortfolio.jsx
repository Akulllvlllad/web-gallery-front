import React from 'react'
import { useParams } from 'react-router-dom'

import { Set } from '../common/sets/Set.jsx'
import { useActions } from '../Hooks/useActions.js'
import { useSelector } from 'react-redux'
import { selectSet, selectSetLoading } from '../store/slices/setSlice.js'
import { CardInfo } from '../common/cardInfo/CardInfo.jsx'
import { NameLoading } from '../common/preloaders/NameLoading.jsx'
import { ToOrder } from '../components/ToOrder/ToOrder.jsx'
import { GoBack } from '../common/goBack/GoBack.jsx'

export const OnePortfolio = () => {
	const { id } = useParams()
	const { fetchGetSet } = useActions()
	const state = useSelector(selectSet)
	const loading = useSelector(selectSetLoading)
	const [moderator, setModerator] = React.useState(true)

	React.useEffect(() => {
		fetchGetSet(id)
		
		setTimeout(() => setModerator(false), 1000)
		return () => setModerator(true)
	}, [])
	
	console.log(moderator)
	
	return (
		<div className='sets'>
			<div className='sets_container'>
				{moderator || loading ? <NameLoading /> : <Set state={state} />}

				<ToOrder />
			</div>
			<GoBack />
		</div>
	)
}
