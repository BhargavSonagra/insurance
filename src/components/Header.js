import React from 'react'
import '../index.css'
import '../assets/style.css'
import './Navbar.css'
const Header = () => {
	return (

		<header className="site-header">
			<div className="top-header ">
				<div className="container d-flex justify-content-between">
					<a href="index.html" id="branding">
						<img src="dummy/logo.png" alt="Company Name" className="logo" />
						<div className="logo-text">
							<h1 className="site-title">ABC</h1>
							<small className="description">This is ABC Company</small>
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