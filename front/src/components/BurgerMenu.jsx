import React from 'react'
import { slide as Menu } from 'react-burger-menu'

function BurgerMenu() {
	return (
		<Menu
			className='flex-column'
			pageWrapId={'page-wrap'}
			outerContainerId={'outer-container'}
		>
			<a
				id='home'
				href='/'
				className='space:inset-squish border:bottom border:white'
			>
				Accueil
			</a>
			<a
				id='home'
				href='/'
				className='space:inset-squish border:bottom border:white'
			>
				Fiat 500 modele 1
			</a>
			<a
				id='about'
				href='/about'
				className='space:inset-squish border:bottom border:white'
			>
				Fiat 500 modele 2
			</a>
			<a
				id='contact'
				href='/contact'
				className='space:inset-squish border:bottom border:white'
			>
				Fiat 500 modele 3
			</a>
			<a
				id='contact'
				href='/'
				className='space:inset-squish border:bottom border:white'
			>
				Vespa 1
			</a>
			<a
				id='contact'
				href='/'
				className='space:inset-squish border:bottom border:white'
			>
				Vespa 2
			</a>
			<a id='home' href='/' className='space:inset-squish'>
				Contact
			</a>
		</Menu>
	)
}

export default BurgerMenu
