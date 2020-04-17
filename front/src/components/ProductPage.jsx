import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class ProductPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<Carousel>
					<div>
						<img src='https://images.ctfassets.net/rporu91m20dc/epGEe9WPkXh094uU9JS8p/95abba4923def0de93001b420815c4c4/DE_The_DOOM_Slayer_HERO_1920x870.jpg?q=70&fm=webp' />
						<p className='legend'>Legend 1</p>
					</div>
					<div>
						<img src='https://image.jeuxvideo.com/medias-md/158516/1585157140-3154-card.jpg' />
						<p className='legend'>Legend 2</p>
					</div>
				</Carousel>
			</div>
		)
	}
}

export default ProductPage
