import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';

import { OnePortfolio } from './pages/OnePortfolio';
import { Gallery } from './pages/Gallery'

import { Promo } from './pages/Promo';
import { Footer } from './components/footer/Footer';
import { Contacts } from './pages/Contacts';
import { Login } from './pages/Login';
import { useActions } from './Hooks/useActions';

import {Admin} from './pages/Admin'

function App() {
	const [isNull, setNull] = React.useState(true)
	const {fetchMe} = useActions()
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
				<Route path='/services' element={<h1>services</h1>} />
				<Route path='/auth/login' element={<Login/>} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/portfolio/:id' element={<OnePortfolio />} />
			</Routes>
			<Footer isNull={isNull} />
		</div>
	)
}

export default App
