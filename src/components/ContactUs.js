
import '../index.css';
import Map from './Map';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

window.scrollTo({ top: 0, behavior: 'smooth' });
const ContactUs = () => {
  return (
    <div>
      <main className="main-content">
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/">Home</Link>
            <img src="dummy/arrow.png" />	&nbsp;
            <span>Contact</span>
          </div>
        </div>


        <div className="container md-3">
          <div className="col pt-5">
            <div className="col-md-5">
              <div className="contact-detail">
                <address>
                  <h2 className="section-title text-left my-1 md-2" >Address</h2>
                  <div className="my-4">
                    <p>Company Name INC.<br />
                      523 Burt Street,<br />
                      Omaha<br />
                      Phone: +1 823 424 9134<br />
                      info@company.com</p>
                  </div>
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