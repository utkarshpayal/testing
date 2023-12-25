// Home.jsx

import React from 'react';
import './Home.css'; // Create a corresponding CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>
          This is the place where you can find amazing content and explore interesting topics.
        </p>
      </div>
      <img
        src="https://3dbay.io/files/preview/1280x1067/11674070894vpgiwzytlin6avskffadghxeo3qquzk7sfckgj8rvpu9ticgushgbhfjwzbfeu4joq7uhv8gsbnycmdxrdyvlyis83xnrj4tpifd.png"
        alt="3D Image"
        className="home-image"
      />
    </div>
  );
};

export default Home;