// Services.jsx

import React from 'react';
import { Fade } from 'react-reveal';
import './Service.css';

 const Service = () => {
  const servicesData = [
    {
      title: 'Web Development',
      description: 'Build modern and responsive websites tailored to your needs.',
    },
    {
      title: 'Mobile App Development',
      description: 'Create cross-platform mobile applications for iOS and Android.',
    },
    {
      title: 'UI/UX Design',
      description: 'Design visually appealing and user-friendly interfaces.',
    },
    // Add more services as needed
  ];

  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <Fade key={index} bottom>
            <div className="service-item">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};
export default Service;