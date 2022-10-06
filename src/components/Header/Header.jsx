import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Burger, BurgerList } from '../../common/Burger/Burger'
import { Contacts } from '../../common/contacts/Contacts'
import { selectSetDark } from '../../store/slices/setSlice'
import cn from 'classnames'
import { selectHeader } from '../../store/slices/appStateSlice'


export const Header = () => {
	const listRef = React.useRef()
	const burgerRef = React.useRef()
	const [opening, setOpening] = React.useState(false)
	const header = useSelector(selectHeader)
	
	return (
		<header
			id='header'
			className={cn('header', { noPromo: header })}
		>
			<div className='header_container'>
				<Link to='/' className={cn('logo')}>
					<h1>Анастасия Глушкова</h1>
				</Link>
				<Contacts  />
				<Burger
					
					burgerRef={burgerRef}
					setOpening={setOpening}
					opening={opening}
				/>
			</div>

			<BurgerList
				burgerRef={burgerRef}
				listRef={listRef}
				setOpening={setOpening}
				opening={opening}
			/>
		</header>
	)
}
