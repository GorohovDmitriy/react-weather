import React, { Component } from 'react'
import Form from './components/Form'
import Information from './components/Information'


export default class App extends Component {
	render() {
		return (
			<div>
				<h1> hello </h1>
				<Information />
				<Form />
			</div>
		)
	}
}
