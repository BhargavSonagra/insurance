
import '../index.css';
import { NavLink } from 'react-router-dom';

import insurancePlans from './insurancePlansData';

const categories = Object.keys(insurancePlans);
  console.log(categories); 
const FooterNav = () => {



	return (
		<div className="site-footer">
			<div className="mb-1">
				<div className="container">
					<div className="row d-flex flex-center justify-content-evenly">
						<div className="col-xs-12 col-sm-4 col-md-2">
							<div className="widget">
								<h3 className="widget-title fs-2">Contact</h3>
								<address className='fs-5'> Company Name INC. 523 Burt Street, Omaha
								</address>
								<ul>
									<li className='fs-5' href="#">Phone: +1 823 424 9134</li>
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

			<div className="bottom-footer">

				<div className='links fs-5'>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About us</NavLink>
					<NavLink to="/insurancePlans">Insurance plans</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</div>
				<div className="colophon">Copyright 2014 Company name. Designed by Themezy. All rights reserved.</div>
			</div>
		</div>
	)
}

export default FooterNav