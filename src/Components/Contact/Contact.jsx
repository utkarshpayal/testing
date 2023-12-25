// Contact.js

import React, { useState } from 'react';
import './Contact.css'; // Make sure to create a corresponding CSS file for styling
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';

 const Contact = () => {
  const [action, setAction] = useState('Send Message');

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="input">
          <textarea placeholder="Your Message" rows="4"></textarea>
        </div>
        <div className="submit-container">
          <div
            className={action === 'Send Message' ? 'submit' : 'submit gray'}
            onClick={() => {
              // Handle form submission logic here
              // You can add your logic to send the contact form data
              // For simplicity, let's just console log the data for now
              console.log('Form submitted:', {
                name: document.querySelector('input[type="text"]').value,
                email: document.querySelector('input[type="email"]').value,
                message: document.querySelector('textarea').value,
              });
            }}
          >
            Send Message
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;