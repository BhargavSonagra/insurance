import React from "react";
import '../index.css';
import Team from "./Team";
import data from './aboutdata';
const AboutUs = () => {

  return (
    <div id="site-content">
      <div className="main-content">
        <div className="breadcrumbs">
          <div className="container">
            <a href="index.html">Home</a>
            <img src="dummy/arrow.png" /> &nbsp;
            <span>Insurance</span>
          </div>
        </div>
        <div className="page">
          {data.siteContent.mainContent.page.fullwidthBlocks.map((block, index) => (
            <div key={index} className="fullwidth-block" data-bg-color={block.container.bgColor}>
              <div className="container">
                {block.container.title && <h1 className="section-title">{block.container.title}</h1>}
                {block.container.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {block.container.features && (
                  <div className="features">
                    {block.container.features.map((feature, index) => (
                      <div key={index} className="feature-numbered">
                        <div className="num">{feature.number}</div>
                        <h2 className="feature-title">{feature.title}</h2>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Team />
    </div>
  );
}
export default AboutUs;

