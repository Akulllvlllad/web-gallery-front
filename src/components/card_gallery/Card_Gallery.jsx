import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card_Gallery.module.scss'

import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../store/slices/authSlice'
import { useActions } from '../../Hooks/useActions'

const URL = 'https://192.168.0.6:3001'
const Links = '/portfolio/'

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

export const Card_Gallery = ({ _id, title, titleIMG, text }) => {
	const isAuth = useSelector(selectAuth)
	const settings = {
		className: 'card_click',
		fade: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: getRandomInt(2000, 3000),
		arrows: false,
		dots: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		LazyLoad: 'ondemand',
		pauseOnFocus: false,
		pauseOnHover: false,
	}

	return (
		<div className={styles.card}>
			<div className={styles.inner}>
				<figure className={styles.content}>
					<Link to={Links + _id} className={styles.photos}>
						<Slider {...settings}>
							{titleIMG.map((obj, index) => (
								<div key={obj._id} className={styles.item}>
									<img src={URL + obj.path} alt='photos' />
								</div>
							))}
						</Slider>
						<figcaption className={styles.figcaption}>
							<h2 className={styles.title}>{title}</h2>
							<button className={styles.button}>
								Посмотреть все фотографии
							</button>
						</figcaption>
					</Link>

					{isAuth && <DeleteCardGallery _id={_id} />}
				</figure>
			</div>
		</div>
	)
}

const DeleteCardGallery = ({ _id }) => {
	const { fetchDelete } = useActions()

	const onClick = () => {
		if (window.confirm('Удалить фотосессию?')) {
			fetchDelete(_id)
		}
	}
	return (
		<div className={styles.deleteWrapper} onClick={onClick}>
			<div className={styles.delete}>
				<span>+</span>
			</div>
		</div>
	)
}
