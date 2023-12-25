// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import user_icon from '../Assets/person.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <img src={user_icon} alt="Logo" className="logo" />
      <div className="header-data">
        <ul className="all-pages-name">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};


export default Header;