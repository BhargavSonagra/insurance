import React from 'react'

import '../index.css';
const FooterNav = () => {
	return (
		<div className="site-footer">
				<div className="widget-area">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-4 col-md-2">
								<div className="widget">
									<h3 className="widget-title">Contact</h3>
									<address> Company Name INC. 523 Burt Street, Omaha
									</address>
									<a href="#">Phone: +1 823 424 9134</a>
									<a href="mailto:info@company.com">info@company.com</a>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-2">
								<div className="widget">
									<h3 className="widget-title">Company</h3>
									<ul className="no-bullet">
										<li><a href="#">About us</a></li>
										<li><a href="#">Infoline</a></li>
										<li><a href="#">Team</a></li>
										<li><a href="#">Join us</a></li>
										<li><a href="#">Cooperation</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-2">
								<div className="widget">
									<h3 className="widget-title">Products</h3>
									<ul className="no-bullet">
										<li><a href="#">Life insurance</a></li>
										<li><a href="#">Home insurance</a></li>
										<li><a href="#">Car insurance</a></li>
										<li><a href="#">Business insurance</a></li>
										<li><a href="#">Investment insurance</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-2">
								<div className="widget">
									<h3 className="widget-title">Our Solutions</h3>
									<ul className="no-bullet">
										<li><a href="#">Presentation</a></li>
										<li><a href="#">Testimonials</a></li>
										<li><a href="#">Examples</a></li>
										<li><a href="#">Our experts</a></li>
										<li><a href="#">Resources</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-2">
								<div className="widget">
									<h3 className="widget-title">Press Room</h3>
									<ul className="no-bullet">
									<li><a href="#">Advertisement</a></li>
									<li><a href="#">Interviews</a></li>
									<li><a href="#">Hot news</a></li>
									<li><a href="#">Photos</a></li>
									<li><a href="#">Marketing</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-2">
								<div className="widget">
									<h3 className="widget-title">Resources</h3>
									<ul className="no-bullet">
										<li><a href="#">Sed imperdiet magna</a></li>
										<li><a href="#">Pellentesque molestie</a></li>
										<li><a href="#">Nulla luctus cursus</a></li>
										<li><a href="#">Ligula vel lacinia</a></li>
										<li><a href="#">Mauris scelerisque</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bottom-footer">
					<div className="container">
						<nav className="footer-navigation">
							<a href="#">Home</a>
							<a href="#">About us</a>
							<a href="#">Insurance plans</a>
							<a href="#">Resources</a>
							<a href="#">Contact</a>
						</nav>

						<div className="colophon">Copyright 2014 Company name. Designed by Themezy. All rights reserved.</div>
					</div>
				</div>
			</div>
	)
}

export default FooterNav