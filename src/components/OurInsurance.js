import { useEffect } from 'react';
import '../index.css';
import Data from './Pages';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const OurInsurance = () => {
  const features = Data[0].PageHome[0].features;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="shadow-lg p-3 mb-5 rounded">
      <div className="container-fluid px-3 px-sm-4 px-md-5 text-center mt-5 pt-5">

        {/* Heading */}
        <motion.h2
          className="section-title mb-5"
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariant}
          viewport={{ once: false, amount: 0.3 }} // <-- Animation re-triggers
        >
          <strong className="text-primary">EverSafe Insurance</strong> offers
        </motion.h2>

        {/* Features Grid */}
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeUpVariant}
              viewport={{ once: false, amount: 0.2 }} // <-- Triggers on every scroll into view
            >
              <div className="feature border border-dark rounded shadow-lg bg-white h-100 p-3">
                <h3 className="feature-title">{feature?.feature_title}</h3>
                <p className="text-dark">{feature?.feature_description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => navigate('/InsurancePlans')}
          className="btn btn-primary btn-lg mt-4 mb-5"
          style={{ fontSize: '18px', padding: '15px 50px' }}
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariant}
          viewport={{ once: false, amount: 0.2 }} // <-- Animate each scroll
        >
          See Plans
        </motion.button>
      </div>
    </div>
  );
};

export default OurInsurance;
