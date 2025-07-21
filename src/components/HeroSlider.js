import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const HeroSlider = () => {
  return (
    <div className="hero hero-slider">
      <motion.ul
        className="slides"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 1.5 },
          },
        }}
        viewport={{ once: false, amount: 0.3 }} // Trigger every time it's in view
      >
        <motion.li
          style={{
            width: "100%",
            height: "50%",
            float: "left",
            marginRight: "-100%",
            position: "relative",
            opacity: "0.6",
            display: "block",
            zIndex: "2",
            backgroundImage: "url('dummy/slide-3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 2 },
            },
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="container w-100 text-center text-dark"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { scale: 0.9, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              },
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="slide-content w-100">
              <motion.h2
                className="display-1"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1, delay: 1 },
                  },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Get your <strong className="text-primary">EverSafe</strong>
              </motion.h2>
              <motion.h4
                className="lead text-dark font-weight-normal display-5"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { x: -100, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 1, delay: 1.5 },
                  },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                We believe in securing your future. Our range of insurance products
                are designed to offer protection and peace of mind for you and your
                loved ones.
              </motion.h4>
            </div>
          </motion.div>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default HeroSlider;
