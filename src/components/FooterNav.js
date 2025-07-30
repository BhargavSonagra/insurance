
import '../index.css';
import '../components/FooterNav.css'

import { Link, NavLink } from 'react-router-dom';


const FooterNav = () => {

	return (
		<div className="site-footer">
			<div className="p-3">
				<div className="container">
					<div className="row d-flex flex-center justify-content-evenly">
						<div className="col-xs-12 col-sm-4 col-md-2">
							<div className="widget">
								<h3 className="widget-title fs-2">Contact</h3>
								<address className='fs-5'> Company Name INC. 523 Burt Street, Omaha
								</address>
								<ul>
									<li className='fs-5' href="mailto:info@company.com">info@company.com</li>
								</ul>
							</div>
						</div>

						<div className="col-xs-12 col-sm-4 col-md-2">
							<div className="widget">
								<h3 className="widget-title fs-2">Sit Map</h3>
								<ul className="no-bullet fs-5 ">
									<li><NavLink to="/about">About us</NavLink></li>
									<li><NavLink to="/InsurancePlans">Join us</NavLink></li>
									<li><NavLink to="/">Home</NavLink></li>
									<li><NavLink to="/insurancePlans">Insurance plans</NavLink></li>
									<li><NavLink to="/contact">Contact</NavLink></li>

								</ul>
							</div>
						</div>

						<div className="col-xs-12 col-sm-4 col-md-2">
							<div className="widget">
								<h3 className="widget-title fs-2">Products</h3>
								<ul className="no-bullet fs-5">
									<li><NavLink to="/insurancePlans">Life insurance</NavLink></li>
									<li><NavLink to="/insurancePlans">Home insurance</NavLink></li>
									<li><NavLink to="/insurancePlans">Car insurance</NavLink></li>
									<li><NavLink to="/insurancePlans">Business insurance</NavLink></li>
								</ul>
							</div>
						</div>



					</div>
				</div>
			</div>

			<footer className="navbar ">
				<div className="container">
					<div className="navbar-content d-flex justify-content-center align-items-center  mx-auto p-3">
						<nav className="navbar-links d-flex gap-2 fs-4 flex-wrap">
							<Link to="/" className="navbar-link">Home</Link>
							<Link to="/about" className="navbar-link"> About</Link>
							<Link to="/insuranceplans" className="navbar-link"> Insurance Plans</Link>
							<Link to="/contact" className="navbar-link"> Contact</Link>
						</nav>
					</div>
				</div>
			<div className="colophon m-3  mx-auto">Copyright 2025 EverSafe Insurance. Designed by Bhargav. All rights reserved.</div>
			</footer>

		</div>
	)
}

export default FooterNav