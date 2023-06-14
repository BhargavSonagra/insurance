import React from 'react'
import '../index.css';
const HeroSlider = () => {

	return (
		<div className="hero hero-slider">
			<ul className="slides">
				<li data-bg-image="dummy/slide-1.jpg" className="flex-active-slide" style={{
					backgroundImage:
						"url('dummy/slide-1.jpg')", "width": "100%", "float": "left", "marginRight": "-100%", "position": "relative", "opacity": "1", "display": "block", "zIndex": "1"
				}}>
					<div className="container">
						<div className="slide-content">
							<h2 className="slide-title">Get your <strong>Life Insurance</strong></h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quos cumque odio soluta harum error sequi laudantium, est nam perspiciatis eveniet maxime, esse possimus architecto sunt natus reprehenderit debitis fugit.</p>
							<a href="#" className="button">Get a quote</a>
						</div>
					</div>
				</li>
				<li data-bg-image="dummy/slide-2.jpg" style={{
					backgroundImage:
						"url('dummy/slide-2.jpg')", "width": "100%", "float": "left", "marginRight": "-100%", "position": "relative", "opacity": "1", "display": "block", "zIndex": "1"
				}}>
					<div className="container">
						<div className="slide-content">
							<h2 className="slide-title">Get your <strong>Life Insurance</strong></h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quos cumque odio soluta harum error sequi laudantium, est nam perspiciatis eveniet maxime, esse possimus architecto sunt natus reprehenderit debitis fugit.</p>
							<a href="#" className="button">Get a quote</a>
						</div>
					</div>
				</li>

				<li data-bg-image="dummy/slide-3.jpg" style={{
					backgroundImage:
						"url('dummy/slide-3.jpg')", "width": "100%", "float": "left", "marginRight": "-100%", "position": "relative", "opacity": "1", "display": "block", "zIndex": "2"
				}}>
					<div className="container">
						<div className="slide-content">
							<h2 className="slide-title">Get your <strong>Life Insurance</strong></h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quos cumque odio soluta harum error sequi laudantium, est nam perspiciatis eveniet maxime, esse possimus architecto sunt natus reprehenderit debitis fugit.</p>
							<a href="#" className="button">Get a quote</a>
						</div>
					</div>
				</li>
			</ul>
			</div>
	)
}

export default HeroSlider