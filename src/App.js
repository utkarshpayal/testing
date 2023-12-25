// Import necessary components and modules
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignUp/LoginSignup';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Service from './Components/Service/Service';
import Home from './Components/Home/Home';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes for other pages */}
        </Routes>
          <LoginSignup />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
