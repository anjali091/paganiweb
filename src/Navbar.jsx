import React, { useState, useEffect } from 'react';
import paganiLogo from './assets/pagani-logo.png'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

        {/* Logo Section */}
        <div className="logo-container" onClick={() => scrollTo('hero')} style={{ cursor: 'pointer' }}>
          <img src={paganiLogo} alt="Pagani Logo" className="logo-image" />
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><button onClick={() => scrollTo('hero')} className="nav-button">Home</button></li>
          <li><button onClick={() => scrollTo('cars')} className="nav-button">Cars</button></li>
          <li><button onClick={() => scrollTo('contact')} className="nav-button">Contact</button></li>
        </ul>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
