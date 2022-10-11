import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'

import { OnePortfolio } from './pages/OnePortfolio'
import { Gallery } from './pages/Gallery'

import { Promo } from './pages/Promo'
import { Footer } from './components/footer/Footer'
import { Contacts } from './pages/Contacts'
import { Login } from './pages/Login'
import { useActions } from './Hooks/useActions'

import { Admin } from './pages/Admin'
import { Information } from './pages/Information'
import { Services } from './pages/Services'

function App() {
	console.log('http://95.188.91.140:25565')
	const [isNull, setNull] = React.useState(true)
	const { fetchMe } = useActions()
	React.useEffect(() => {
		fetchMe()
	}, [])
	return (
		<div className='wrapper overfolow-auto'>
			<Header />
			<Routes>
				<Route path='/' element={<Promo setNull={setNull} />} />
				<Route path='/portfolio' element={<Gallery />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/services' element={<Services />} />
				<Route path='/info' element={<Information />} />

				<Route path='/auth/login' element={<Login />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/portfolio/:id' element={<OnePortfolio />} />
			</Routes>
			<Footer isNull={isNull} />
		</div>
	)
}

export default App
