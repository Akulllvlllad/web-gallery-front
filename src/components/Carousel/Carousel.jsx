import React from 'react'
import Slider from 'react-slick'
import styles from './Carousel.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel = () => {
	const settings = {
		className: styles.root,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 9000,
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<Slider {...settings}>
			<div className={styles.item}>
				<img src='https://www.theartnewspaper.ru/media/images/8b5af5b0-bed0-4552-826c-0fa5c4dd74a6.width-1290.jpg' />
			</div>
			<div className={styles.item}>
				<img src='https://fotogora.ru/img/blog/or/2017/12/17/10517.jpg' />
			</div>
		</Slider>
	)
}
