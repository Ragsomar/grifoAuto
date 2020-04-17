import React from 'react'
import BurgerMenu from './BurgerMenu'

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<BurgerMenu />
				<div className='grey flex-row'>
					<p className='space-size:xl space:inset-squish'>
						Grifo Auto
					</p>
				</div>
			</div>
		)
	}
}
//react-burger-menu in node modules, overwirght some styles to prevent to use position: fixed
export default Header
