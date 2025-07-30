import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import '../components/Header.css';
import './Navbar.css';

const Header = () => {
  return (
    <header className="m-3">
      <div className="container d-flex justify-content-between">
        <Link to="/" id="branding" className="d-flex align-items-center">
          <img src="dummy/logo.png" alt="EverSafe Insurance Logo" className="logo" />
          <div className="logo-text">
            <h1 className="site-title">EverSafe Insurance</h1>
            <small className="description">Ever Safe, Ever Secure</small>
          </div>
        </Link>
       
      </div>
    </header>
  );
};

export default Header;
