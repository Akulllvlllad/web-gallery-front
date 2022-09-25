import React from 'react'

export const Header = ({nav=['Портфолио','Контакты','Услуги']}) => {
	return (
		<header className='header'>
			<div className='header_container _container'>
				<div className='logo'>Boboleva Nastia</div>
				<nav>
					<ul className='nav'>
						{nav.map((item, index) => (
							<li className='nav-item'>{item}</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
