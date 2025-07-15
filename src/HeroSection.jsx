import React, { useEffect, useState } from 'react';
import paganiVideo from './assets/pagani-driving.mp4';


const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToCars = () => {
    const element = document.getElementById('cars');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-video-container">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={paganiVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="hero-particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}></div>
        ))}
      </div>

      <div className={`hero-overlay ${loaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">ART</span>
            <span className="title-line">IN</span>
            <span className="title-line">MOTION</span>
          </h1>
          <p className="hero-subtitle">Experience Italian craftsmanship like never before</p>
          <button className="cta-button" onClick={scrollToCars}>
            <span>Explore Collection</span>
            <div className="button-glow"></div>
          </button>
        </div>

        <div className="hero-graphics">
          <svg className="hero-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="50" cy="50" r="35" fill="none" stroke="#FFD700" strokeWidth="0.3" opacity="0.5"/>
            <circle cx="50" cy="50" r="22" fill="none" stroke="#FFD700" strokeWidth="0.2" opacity="0.7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
