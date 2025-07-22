
import '../index.css';
import '../components/aboutUs.css';
import data from './aboutdata';
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';

window.scrollTo({ top: 0, behavior: 'smooth' });

const AboutUs = () => {

  return (
    <div id="site-content">
      <div className="main-content">

        <div className="breadcrumbs">
          <div className="container">
            <Link to="/">Home</Link>
            <img src="dummy/arrow.png" />	&nbsp;
            <span>About Us</span>
          </div>
        </div>

        <div className="page feature">
          {data.siteContent.mainContent.page.fullwidthBlocks.map((block, index) => (
            <div key={index} className="fullwidth-block" data-bg-color={block.container.bgColor}>
              <div
                
                className="container">
                {block.container.title && <h1 className="section-title  text-center mb-5">{block.container.title} <strong className='text-primary '> EverSafe Insurance</strong></h1>}
                {block.container.paragraphs.map((paragraph, index) => (
                  <p className='fs-4' key={index}>{paragraph}</p>
                ))}
                {block.container.features && (
                  <div className="row d-flex p-3">
                    {block.container.features.map((feature, index) => (
                      <div
                        
                        key={index} className="col-md-4 mb-4 p-4 ">
                        <div className="card h-100 shadow-lg bg-white text-dark">
                          <div className="card-body">
                            <h5 className=" feature-title fs-5 mt-4">{feature.title}</h5>
                            <p className="card-text">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default AboutUs;

