import React from 'react'
import '../index.css'
import HeroSlider from './HeroSlider'
import OurInsurance from './OurInsurance'
import LatestNews from './LatestNews'
import Partners from './Partners'
import Map from './Map'
import Data from './Pages'
const Home = () => {

    const [filter] = Data[0].PageHome.filter(
        (item) => item.section_title && item.section_subtitle
    );

    return (
        <div>
            <HeroSlider />

            <div className="fullwidth-block greet-section">
                <h1 className="section-title">{filter.section_title}</h1>
                <small className="section-subtitle">{filter.section_subtitle} </small>

                <div className="container">

                    <div className="row">
                        <div className="col-md-3">
                            <div className="feature">
                                <i className="icon-phone-24"></i>
                                <h3 className="feature-title">{filter.features[0].feature_title}</h3>
                                <p>{filter.features[0].feature_description} </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="feature">
                                <i className="icon-hotel"></i>
                                <h3 className="feature-title">{filter.features[1].feature_title}</h3>
                                <p>{filter.features[0].feature_description} </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="feature">
                                <i className="icon-luggage"></i>
                                <h3 className="feature-title">{filter.features[2].feature_title} </h3>
                                <p>{filter.features[0].feature_description} </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="feature">
                                <i className="icon-credit-card-hand"></i>
                                <h3 className="feature-title">{filter.features[3].feature_title}</h3>
                                <p>{filter.features[0].feature_description} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* our insurance */}
            <OurInsurance />

            {/* latest news */}
            <LatestNews />

            {/* partners */}
            <Partners />

            {/* Map */}
            <Map />
        </div>
    )
}

export default Home