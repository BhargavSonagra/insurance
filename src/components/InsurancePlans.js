import { useState } from 'react';
import { motion } from 'framer-motion';  // Import framer-motion
import insurancePlans from './insurancePlansData';

const InsurancePlans = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = Object.keys(insurancePlans);

  // Format the category name 
  const formatCategoryName = (categoryKey) => {
    const formatted = categoryKey
      .replace(/([A-Z])/g, ' $1') 
      .replace(/^./, (str) => str.toUpperCase());
    return formatted;
  };

  // Function to display category, or all plans
  const displayPlans = () => {
    if (activeTab === 'all') {
      // Return plans from all categories
      return Object.keys(insurancePlans).map((category) => (
        <motion.div
          key={category}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
          }}
        >
          <h3 className="text-center mt-5">{formatCategoryName(category)}</h3>
          <div className="row">
            {insurancePlans[category].map((plan, index) => (
              <motion.div
                key={index}
                className="col-md-4 mb-3"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="card h-100 shadow-lg mt-3 bg-white text-dark border-none rounded">
                  <div className="card-body">
                    <h5 className="card-title fs-5 feature-title fw-bold">{plan.title}</h5>
                    <p className="card-text fs-6"><i><b>{plan.description}</b></i></p>
                    <p className="card-text fs-6">{plan.detailedDescription}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ));
    } else {
      // Return plans for the selected category
      return (
        <motion.div
          className="row"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
          }}
        >
          {insurancePlans[activeTab].map((plan, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="card h-100 shadow-lg mt-3 bg-white text-dark rounded">
                <div className="card-body">
                  <h5 className="card-title fs-5 feature-title fw-bold">{plan.title}</h5>
                  <p className="card-text fs-6"><i><b>{plan.description}</b></i></p>
                  <p className="card-text fs-6">{plan.detailedDescription}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      );
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center section-title">Our Insurance Plans</h2>

      {/* Tab Buttons */}
      <motion.ul
        className="nav nav-tabs justify-content-center mb-4 "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
        }}
      >
        <li className="nav-item">
          <button
            className={`nav-link font-weight-bold ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')} // When 'All' is clicked, show all plans
          >
            <strong>All Plans</strong>
          </button>
        </li>
        {categories.map((category) => (
          <li className="nav-item" key={category}>
            <button
              className={`nav-link font-weight-bold ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)} 
            >
              <strong>{formatCategoryName(category)}</strong>
            </button>
          </li>
        ))}
      </motion.ul>

      {/* Display Plan Cards */}
      <motion.div
        key={activeTab} 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
        }}
      >
        <h5 className="card-title fs-1 text-center text-decoration-underline mt-5 fw-bold">
          {formatCategoryName(activeTab)}
        </h5>
        {displayPlans()}
      </motion.div>
    </div>
  );
};

export default InsurancePlans;
