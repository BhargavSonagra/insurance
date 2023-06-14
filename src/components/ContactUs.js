import React from 'react'

import '../index.css';
import Map from './Map';
import ContactForm from './ContactForm';
const ContactUs = () => {
  return (
    <div>
      <main className="main-content">
        <div className="breadcrumbs">
          <div className="container">
            <a href="index.html">Home</a>
            <img src="dummy/arrow.png"/>	&nbsp;
            <span>Contact</span>
          </div>
        </div>

        <Map />

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2 className="section-title text-left">Address</h2>
              <div className="contact-detail">
                <address>
                  <p>Company Name INC. <br />
                    523 Burt Street, Omaha</p>
                  <p>Phone: +1 823 424 9134
                    info@company.com</p>
                </address>
              </div>
            </div>

            <ContactForm />

          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactUs