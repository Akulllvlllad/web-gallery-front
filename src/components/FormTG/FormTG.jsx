import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import cn from 'classnames'

export const FormTG = () => {
	const TOKEN = '5796937563:AAE45rMlnm6CXmDveDPq2PMG14HjZCQpbSE'
	const Name_bot = 'BobolEVA'
	const CHAT_ID = '-1001692369224'
	const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

	const onSubmit = e => {
		console.log(e);
		let massage = `<b>ЗАЯВКА С САЙТА</b> \n`
		massage += `Отправитель:  <b>${e.name}</b>\n`
		massage += `Номер телефона:  <b>${e.number}</b>\n`
		massage += `Тип услуги:  <b>${e.service}</b>\n`
		massage += `Комментарий:  <b>${e.comment}</b>`
		console.log(massage)
		axios
			.post(URL_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: massage,
			})
			.then(res => console.log(res))

		reset()
	}

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onSubmit',
	})

	console.log(errors)

	const nameErrors = Boolean(errors?.name)
	const numberErrors = Boolean(errors?.name)

	return (
		<form id='tg' onSubmit={handleSubmit(onSubmit)}>
			<div className='form'>
				<div className='form-main'>
					<div className={cn('form-field', { errorForm: nameErrors })}>
						<label>Имя</label>
						<input
							type='text'
							name='name'
							{...register('name', {
								required: 'Скажите ваше имя 🙃.',
							})}
							placeholder='Укажите ваше имя'
						/>
						<div>
							{nameErrors && (
								<p className='form-field-errors'>{errors.name.message}</p>
							)}
						</div>
					</div>
					<div className={cn('form-field', { errorForm: numberErrors })}>
						<label>Номер телефона</label>
						<input
							type='text'
							name='number'
							{...register('number', {
								required: 'Нужен телефон для связи😉.',
							})}
							placeholder='Укажите номер телефона'
						/>
						<div>
							{Boolean(errors?.name) && (
								<p className='form-field-errors'>{errors.number.message}</p>
							)}
						</div>
					</div>
					<div className='form-service'>
						<label>Тип фотосессии</label>

						<select
							name='service'
							{...register('service', {
								required: 'Please select service.',
							})}
						>
							<option value='Первая'>Первая</option>
							<option value='Вторая'>Вторая</option>
							<option value='Третья'>Третья</option>
							<option value='Четвертая'>Четвертая</option>
							<option value='Пятая'>Пятая</option>
							<option value='Другое'>Другое</option>
						</select>
					</div>
				</div>
				<div className='form-comment'>
					<div className='form-field comment-field'>
						<label>Комментарий</label>
						<div className='comment-input'>
							<textarea
								type='text'
								name='comment'
								{...register('comment', {
									required: 'Please enter your comment.',
								})}
								placeholder='Введите текст'
							/>
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
