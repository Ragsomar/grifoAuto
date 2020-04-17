import React from 'react'

class Homepage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='flex-column'>
				<a
					href='https://github.com/FortAwesome/react-fontawesome#features'
					className='flex-row space:inset-squish border:bottom background'
				>
					<div className='flex-justify:center space:inline main-page-image-container'>
						<img
							src='https://dvqlxo2m2q99q.cloudfront.net/000_clients/573244/page/5732449jS7QGVx.jpg'
							alt=''
							className='main-page-image'
						/>
					</div>
					<p className='space:inset-stretch'>Fiat 500 modele 1</p>
				</a>
				<a
					href='https://github.com/FortAwesome/react-fontawesome#features'
					className='flex-row space:inset-squish border:bottom background'
				>
					<div className='flex-justify:center space:inline main-page-image-container'>
						<img
							src='https://www.decisionatelier.com/IMG/arton9315.jpg?1486459554'
							alt=''
							className='main-page-image'
						/>
					</div>
					<p className='space:inset-stretch'>Fiat 500 modele 2</p>
				</a>
				<a
					href='https://github.com/FortAwesome/react-fontawesome#features'
					className='flex-row space:inset-squish background border:bottom'
				>
					<div className='flex-justify:center space:inline'>
						<img src='https://via.placeholder.com/150x105' alt='' />
					</div>
					<p className='space:inset-stretch'>Fiat 500 modele 3</p>
				</a>
				<a
					href='https://github.com/FortAwesome/react-fontawesome#features'
					className='flex-row space:inset-squish background border:bottom'
				>
					<div className='flex-justify:center space:inline'>
						<img src='https://via.placeholder.com/150x105' alt='' />
					</div>
					<p className='space:inset-stretch'>Vespa 1</p>
				</a>
				<a
					href='https://github.com/FortAwesome/react-fontawesome#features'
					className='flex-row space:inset-squish background border:bottom'
				>
					<div className='flex-justify:center space:inline'>
						<img src='https://via.placeholder.com/150x105' alt='' />
					</div>
					<p className='space:inset-stretch'>Vespa 2</p>
				</a>
			</div>
		)
	}
}

export default Homepage
