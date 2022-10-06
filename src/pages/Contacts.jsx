import React from 'react'
import { FormTG } from '../components/FormTG/FormTG'

export const Contacts = () => {
	return (
		<div className='contacts'>
			<div className='_container'>
				<div className='contacts_inner'>
					<div className='contacts_info'>
						<h3>Контакты</h3>
						<div className='contacts_main'>
							<div className='info'>
								<div className='part'>
									<h5>Email:</h5>
									<p>Hello@gid.group</p>
								</div>
								<div className='part'>
									<h5>Email:</h5>
									<p>+7 (929) 759 64 55</p>
									<p>+7 (929) 759 64 55</p>
									<p>+7 (929) 759 64 55</p>
								</div>
							</div>
							<div className='place'>
								<div className='part'>
									<h5>Офис</h5>
									<p>ул. Электрозаводская 21, к. 41, 107023, Москва, Россия</p>
								</div>
							</div>
						</div>
					</div>
					<div className='contacts_form'>
						<div className='contacts_info'>
							<h3>Свяжитесь с нами</h3>
							<FormTG />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
