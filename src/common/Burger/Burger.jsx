import React from 'react'
import styles from './burger.module.scss'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../store/slices/authSlice'
import { useActions } from '../../Hooks/useActions'


export const Burger = ({
	setOpening,
	opening,
	burgerRef,
	dark,
	
}) => {

	
	return (
		<div
			ref={burgerRef}
			onClick={() => {
				setOpening(prev => !prev)
				
			}}
			className={cn(styles.root, { active_burger: opening, darkBurger: dark })}
		>
			<div className={cn(styles.burger, { darkBurgerMid: dark })}></div>
		</div>
	)
}

export const BurgerList = React.memo(
	({
		burgerRef,
		listRef,
		opening,
		nav = ['Портфолио', 'Контакты', 'Услуги', 'Информация'],
		setOpening,
		links = ['portfolio', 'contacts', 'services', 'info'],
	}) => {
		const navigate = useNavigate()
		const {logout} = useActions()
		React.useEffect(() => {
			const handleClickOutside = event => {
				if (
					listRef.current &&
					!event.composedPath().includes(listRef.current) &&
					burgerRef.current &&
					!event.composedPath().includes(burgerRef.current)
				) {
					setOpening(false)
				}
			}

			document.body.addEventListener('click', handleClickOutside)
				document.body.addEventListener('scroll', handleClickOutside)

			return () =>
				document.body.removeEventListener('click', handleClickOutside)
				
		}, [])


		const isAuth = useSelector(selectAuth)
		
		return (
			<div
				ref={listRef}
				className={cn(styles.burgerList, { active_burgerList: opening })}
			>
				<ul className={styles.listContent}>
					{nav.map((item, index) => (
						<li
							key={index}
							onClick={() => {
								navigate(links[index])
								setOpening(false)
							}}
							className={cn(styles.item, 'active__underlline')}
						>
							{item}
						</li>
					))}
					{isAuth && (
						<>
							<li
								onClick={() => {
									setOpening(false)
									navigate('/admin')
								}}
								className={cn(styles.item, 'active__underlline')}
							>
								Добавить фотосессию
							</li>
							<li
								onClick={() => {
									setOpening(false)
									logout()
								}}
								className={cn(styles.item, 'active__underlline')}
							>
								Выйти
							</li>
						</>
					)}
				</ul>
				{opening && <Scroll setOpening={setOpening} />}
			</div>
		)
	}
)




export const Scroll = ({ setOpening }) => {
	const [scroll, setScroll] = React.useState(0)
	const handleScroll = () => {
		setScroll(window.scrollY)
		setOpening(false)
	}
	
	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return <></>
}
