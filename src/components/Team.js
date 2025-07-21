import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

window.scrollTo({ top: 0, behavior: 'smooth' });

const Team = () => {
  // Define the animation variants for the images
  const imageVariants = {
    hidden: { x: -250, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2, ease: 'easeOut' } }, // Slightly faster animation
  };

  return (
    <div className="shadow-lg">
      <div className="fullwidth-block">
        <div className="container">
          <h2 className="section-title text-center">Our Team</h2>

          <div className="row">
            {/* First Team Member */}
            <div className="col-xs-12 col-sm-6 col-md-3 shadow-lg">
              <div className="team">
                <motion.figure
                  className="team-image shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  variants={imageVariants}
                  viewport={{ amount: 0.3 }}  // Trigger when 20% of image is visible
                  transition={{ delay: 0.5 }}  // 0.5-second delay after visibility
                >
                  <img src="dummy/team-1@2x.jpg" alt="Jessica Brown" />
                </motion.figure>
                <h2 className="team-name">Jessica Brown</h2>
                <small className="team-title">CEO</small>
              </div>
            </div>

            {/* Second Team Member */}
            <div className="col-xs-12 col-sm-6 col-md-3 shadow-lg">
              <div className="team">
                <motion.figure
                  className="team-image shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  variants={imageVariants}
                  viewport={{ amount: 0.3 }}  // Trigger when 20% of image is visible
                  transition={{ delay: 1.5 }}  // 1.5-second delay after visibility
                >
                  <img src="dummy/team-2@2x.jpg" alt="Jeremy Stuart" />
                </motion.figure>
                <h2 className="team-name">Jeremy Stuart</h2>
                <small className="team-title">Managing Director</small>
              </div>
            </div>

            {/* Third Team Member */}
            <div className="col-xs-12 col-sm-6 col-md-3 shadow-lg">
              <div className="team">
                <motion.figure
                  className="team-image shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  variants={imageVariants}
                  viewport={{ amount: 0.3 }}  // Trigger when 20% of image is visible
                  transition={{ delay: 2.5 }}  // 2.5-second delay after visibility
                >
                  <img src="dummy/team-3@2x.jpg" alt="Sarah Johnson" />
                </motion.figure>
                <h2 className="team-name">Sarah Johnson</h2>
                <small className="team-title">Public Relations</small>
              </div>
            </div>

            {/* Fourth Team Member */}
            <div className="col-xs-12 col-sm-6 col-md-3 shadow-lg">
              <div className="team">
                <motion.figure
                  className="team-image shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  variants={imageVariants}
                  viewport={{ amount: 0.3 }}  // Trigger when 20% of image is visible
                  transition={{ delay: 3.5 }}  // 3.5-second delay after visibility
                >
                  <img src="dummy/team-4@2x.jpg" alt="Paul Ferguson" />
                </motion.figure>
                <h2 className="team-name">Paul Ferguson</h2>
                <small className="team-title">Consultant</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
