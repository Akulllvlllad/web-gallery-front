import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
 import { faFacebook, faInstagram, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'


export const Footer = ({ isNull }) => {
	if (isNull)
		return (
			<footer className={styles.footer}>
				<div className='footer_container'>
					<div className={styles.inner}>
						<Link to='/auth/login'>
							<p className={styles.text}>
								© Анастасия Глушкова, 2022. Все права защищены
							</p>
						</Link>
						<div className={styles.contacts}>
							<FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
							<FontAwesomeIcon icon={faFacebook} className={styles.icon} />
							<FontAwesomeIcon icon={faInstagram} className={styles.icon} />
							<FontAwesomeIcon icon={faTelegram} className={styles.icon} />
							<FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
						</div>
					</div>
				</div>
			</footer>
		)
}
