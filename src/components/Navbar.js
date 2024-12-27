import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import navigation hooks
import './Navbar.css';
import moreline from './moreline.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (id, path) => {
    toggleMenu();
    if (location.pathname === '/') {
      // If already on the home page, scroll to the section
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on the home page, navigate to the path
      navigate(path);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <span className="navbar-logo-soli">Soli</span>
          <span className="navbar-logo-connects">c o n n e c t s</span>
        </h1>
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <button onClick={() => handleNavigation('home', '/')}>Home</button>
        <button onClick={() => handleNavigation('services', '/Services')}>Services</button>
        <button onClick={() => handleNavigation('about', '/About')}>About</button>
        <button onClick={() => handleNavigation('contact', '/Contact')}>Contact</button>
      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <img src={moreline} alt="menu" className="navbar-toggle-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
