import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'



export const FormTG = () => {

	const TOKEN = '5796937563:AAE45rMlnm6CXmDveDPq2PMG14HjZCQpbSE'
	const Name_bot = "BobolEVA"
	const CHAT_ID = '-1001692369224'
	const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
	React.useEffect(() => {
		document.getElementById('tg').addEventListener('submit', function (e)  {
			e.preventDefault()
			let massage = `<b>ЗАЯВКА С САЙТА</b> \n`
			massage += `Отправитель:  <b>${this.name.value}</b>\n`
			massage += `Номер телефона:  <b>${this.number.value}</b>\n`
			massage += `Тип услуги:  <b>${this.service.value}</b>\n`
			massage += `Комментарий:  <b>${this.comment.value}</b>`
			console.log(massage)
			axios.post(URL_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: massage
			
			}).then((res) => console.log(res))
		})
		
	}, [])



	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	return (
		<form id='tg'>
			<div className='form'>
				<div className='form-main'>
					<div className='form-field'>
						<p>Имя</p>
						<input
							type='text'
							name='name'
							{...register('name')}
							placeholder='Укажите ваше имя'
						/>
					</div>
					<div className='form-field'>
						<p>Номер телефона</p>
						<input
							type='text'
							name='number'
							{...register('text')}
							placeholder='Укажите номер телефона'
						/>
					</div>
					<div className='form-field'>
						<p>Тип фотосессии</p>
						<input
							type='text'
							name='service'
							placeholder='Укажите тип фотосессии'
						/>
					</div>
				</div>
				<div className='form-comment'>
					<div className='form-field comment-field'>
						<p>Комментарий</p>
						<div className='comment-input'>
							<input type='text' name='comment' placeholder='Введите текст' />
						</div>

						<button className='form-submit' type='form-submit'>
							Отправить
						</button>
					</div>
				</div>
			</div>
		</form>
	)
}
