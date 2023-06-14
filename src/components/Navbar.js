import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import '../index.css'
const Navbar = () => {
  return (

    <div className='navbar_container'>
      <div className='links'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/insurancePlans">Insurance plans</NavLink>
        <NavLink to="/Resources">Resources</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      {/* <div className="social-links">
        <a href="#"><i className="fa-fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-google-plus"></i></a>
        <a href="#"><i className="fa fa-pinterest"></i></a>
      </div> */}
    </div>
  )
}

export default Navbar