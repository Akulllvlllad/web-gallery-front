import React from 'react'
import { PromoBillet } from '../common/PromoBillet/PromoBillet'
import { Carousel } from '../components/Carousel/Carousel'
import { useActions } from '../Hooks/useActions'

export const Promo = ({ setNull }) => {
	const {setHeader} = useActions()
	React.useEffect(()=>{
		setNull(false)
		setHeader(false)
		return () => {
			setNull(true)
			setHeader(true)
		}
	},[])
	return (
		<>
			<Carousel />
			<PromoBillet />
		</>
	)
}
