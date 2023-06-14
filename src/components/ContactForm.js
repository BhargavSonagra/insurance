import React from 'react'

import '../index.css';
const ContactForm = () => {
    return (
        <div>
            <div className="col-md-12 col-lg-6 pt-5">
                <h2 className="section-title text-left">Contact form</h2>
                <form action="#" className="contact-form">
                    <div className="row">
                        <div className="col-md-4"><input type="text" placeholder="Your name..." /></div>
                        <div className="col-md-4"><input type="text" placeholder="Email..." /></div>
                        <div className="col-md-4"><input type="text" placeholder="Website..." /></div>
                    </div>

                    <textarea placeholder="Message..."></textarea>

                    <p className="text-right">
                        <input type="submit" value="Send message" />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ContactForm