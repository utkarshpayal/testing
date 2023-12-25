// Footer.jsx

import React from 'react';
import './Footer.css';

 const Footer = () => {
    return (
        <div className="footer-container">
            <ul className="footer-links">
                <li>
                    <a href="#about">About Us</a>
                </li>
                <li>
                    <a href="#services">Our Services</a>
                </li>
                <li>
                    <a href="#contact">Contact Us</a>
                </li>
                <li>
                    <a href="#privacy">Privacy Policy</a>
                </li>
            </ul>
        </div>
    );
};
export default Footer;