import React from 'react'

class Homepage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		console.log()
		return (
			<div className='flex-column'>
				{this.props.photos.map((photo) => (
					<a
						href='https://github.com/FortAwesome/react-fontawesome#features'
						className='flex-row space:inset-squish border:bottom background'
					>
						<div className='flex-justify:center space:inline main-page-image-container'>
							<img
								src={process.env.PUBLIC_URL + photo.photo}
								alt=''
								className='main-page-image'
							/>
						</div>
						<p className='space:inset-stretch'>Fiat 500 F</p>
					</a>
				))}
			</div>
		)
	}
}

export default Homepage
