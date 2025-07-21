import React from 'react'
import '../index.css'
import '../components/Header.css'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Header = () => {
	return (

		<header className="m-3">
			<div className=" ">
				<div className="container d-flex justify-content-between">
					<a id="branding">
						<img src="dummy/logo.png" alt="Company Name" className="logo" />
						<div className="logo-text">
							<h1 className="site-title">EverSafe Insurance</h1>
							<small className="description">Ever Safe, Ever Secure</small>
						</div>
					</a>
					<div className="right-section pull-right">
						<a href="#" className="phone"><img src="dummy/icon-phone.png" className="icon" />+1 823 424 9134</a>

						<form action="#" className="search-form">
							<input type="text" placeholder="Search..." />
							<button type="submit"><img src="dummy/icon-search.png" alt="" /></button>
						</form>
					</div>
				</div>
			</div>

		</header>

		
	)
}

export default Header