import React from 'react'
import Homepage from './components/Homepage'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import './style/layout.css'
import './style/space.css'
import './style/separation.css'
import './style/color.css'
import './style/burger.css'
import './style/image.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
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
