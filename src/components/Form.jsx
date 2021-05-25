import React from 'react'

const Form = (props) => {
	return (
		<div className="form">
			<form onSubmit={props.gettingWeather}>
				<input type="text" name="city" placeholder="Город" />
				<button className="button">Получить</button>
			</form>
			</div>
	)
}
export default Form;