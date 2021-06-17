import React from 'react'

const Weather = (props) => {
	return (
		<div className='info-list'>
			{props.city && (
				<div className='info'>
					<p>
						Местоположение: {props.city}, {props.country}
					</p>
					<p>Температура: {props.temp} &#176;C</p>
					<p>Давление: {props.pressure}</p>
				</div>
			)}
			<p> {props.error} </p>
		</div>
	)
}

export default Weather
