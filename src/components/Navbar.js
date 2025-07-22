// src/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">EverSafe</div>

      {/* Menu Items */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/insurancePlans" 
            className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Insurance Plans
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '×' : '☰'} {/* Hamburger icon changes to "×" when the menu is open */}
      </div>
    </nav>
  );
};

export default Navbar;
