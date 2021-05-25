import React, { Component } from 'react'
import Form from './components/Form'
import Information from './components/Information'
import Weather from './components/Weather'

const API_KEY = 'b21371427780d50642723790f91a662d';

export default class App extends Component {

	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		pressure: undefined,
		sunset: undefined,
		error: undefined,
	}

	gettingWeather = async (e) => {
		e.preventDefault()
		const city = e.target.elements.city.value




		if (city) {
			const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
			const data = await api_url.json()

			var celsius = Math.round(data.main.temp - 273)

			var sunset = data.sys.sunset
			var date = new Date()
			date.setTime(sunset)
			var sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

			this.setState({
				temp: celsius,
				city: data.name,
				country: data.sys.country,
				pressure: data.main.pressure,
				sunset: sunset_date,
				error: undefined,
			})
		} else {
			this.setState({
				temp: undefined,
				city: undefined,
				country: undefined,
				pressure: undefined,
				sunset: undefined,
				error: 'Введите название города',
			})
		}
	}

	render() {
		return (
			<div className="wrapper">
				<Information />
				<Form gettingWeather={this.gettingWeather} />
				<Weather
					temp={this.state.temp}
					city={this.state.city}
					country={this.state.country}
					pressure={this.state.pressure}
					sunset={this.state.sunset}
					error={this.state.error}
				/>
			</div>
		)
	}
}
