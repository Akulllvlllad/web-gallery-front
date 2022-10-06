import React from 'react'
import Slider from 'react-slick'
import styles from './Carousel.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



export const Carousel = () => {
	const settings = {
		fade: true,
		className: 'slick-slider-promo',
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		pauseOnFocus: false,
		pauseOnHover: false,
	}
	return (
		<Slider {...settings}>
			<div className={styles.item}>
				<img src='https://img.freepik.com/free-photo/bluish-plant-leaves-textured-background_53876-107989.jpg?w=1380&t=st=1664455907~exp=1664456507~hmac=b3fe5c24c521c1f7764fe060a5c522249bb34c09eb0d39ab7efa769bbee6f2bb' />
			</div>

			<div className={styles.item}>
				<img src='https://images.wallpaperscraft.ru/image/single/prud_derevia_trava_383418_1920x1080.jpg' />
			</div>
			<div className={styles.item}>
				<img src='https://images.wallpaperscraft.ru/image/single/holm_zvezdnoe_nebo_mlechnyj_put_383328_1920x1080.jpg' />
			</div>
		</Slider>
	)
}
