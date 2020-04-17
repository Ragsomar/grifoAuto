import React from 'react'
import Homepage from './components/Homepage'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import axios from 'axios'
import './style/layout.css'
import './style/space.css'
import './style/separation.css'
import './style/color.css'
import './style/burger.css'
import './style/image.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: null,
			isLoaded: false,
		}
	}

	componentDidMount() {
		const url = 'http://localhost:3000/home'
		axios
			.get(url)
			.then((data) =>
				this.setState({ name: data.data[0].modele, isLoaded: true })
			)
	}

	render() {
		return this.state.isLoaded !== true ? (
			<h2>Loading ...</h2>
		) : (
			<div className='height-max-100 flex-column' id='outer-container'>
				<Header />
				<main className='flex1 overflow height-max-100' id='page-wrap'>
					<Homepage />
					<ProductPage />
				</main>
			</div>
		)
	}
}

export default App
