import React, { useState } from 'react';
import '../index.css';
import Data from './Pages';

const InsurancePlans = () => {
  const [activeTab, setActiveTab] = useState('Category');

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const filteredData = Data[0].PageInsurance.filter(
    (item) => activeTab === 'Category' || item.catagory === activeTab
  );

  const [filter] = Data[0].PageInsurance.filter(
    (item) => item.pageinsuranceheading && item.subtitle
  );

  const uniqueCategories = [...new Set(Data[0].PageInsurance.map((item) => item.catagory))];

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <a href="index.html">Home</a>
          <img src="dummy/arrow.png" /> &nbsp;
          <span>Insurance</span>
        </div>
      </div>
      <div className="page">
        <div className="container">
          <main className="main-content">
            <h1 className="entry-title">Choose your own insurance plan</h1>
            <p>Nam posuere purus vitae est sollicitudin placerat. Praesent posuere porta dignissim. Phasellus viverra, urna a convallis tincidunt, ante mi tempor turpis, nec tempor mauris ligula ut sapien. Etiam euismod mi eu ante mollis commodo. Suspendisse porta nisi vitae dui hendrerit, eget ornare orci semper. Phasellus pharetra, erat sit amet rutrum porttitor, est eros consectetur elit, molestie consequat erat tellus in dui. Vestibulum a vehicula sem. Nullam commodo quis purus in volutpat. Integer semper lacus a lorem efficitur auctor curabitur tincidunt ligula non.</p>

            <div className="filter-links filterable-nav">
              <strong>Select Category: </strong>
              <button
                className={`wow fadeInRight ${activeTab === '' ? 'current' : ''}`}
                onClick={() => handleTabClick('Category')}
              >
                Show all
              </button>
              {uniqueCategories.map((category, id) => (
                <button
                  key={id}
                  className={`wow fadeInRight ${activeTab === category ? 'current' : ''}`}
                  onClick={() => handleTabClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="filterable-items d-flex flex-wrap">
              {filteredData.map((item, id) => (
                <div key={id} className={`insurance-item filterable-item ${item.catagory}`}>
                  <div className="insurance-content p-4">
                    <div className="insurance-icon">
                      <i className={item.icon}></i>
                    </div>
                    <h3 className="insurance-title">{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.link} className="button">
                      See details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default InsurancePlans;
