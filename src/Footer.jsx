import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent! We will get back to you soon.');
      setFormData({ email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="contact-section">
            <h2 className="footer-title">Contact Pagani</h2>
            <p className="footer-subtitle">Ready to experience automotive artistry?</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="4"
                />
              </div>
              <button type="submit" className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}>
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <div className="btn-glow"></div>
              </button>
            </form>
          </div>

          <div className="info-section">
            <div className="info-item">
              <h3>Visit Us</h3>
              <p>Via dell'Artigianato, 5<br />41018 San Cesario sul Panaro<br />Modena, Italy</p>
            </div>
            <div className="info-item">
              <h3>Call Us</h3>
              <p>+39 059 685 765</p>
            </div>
            <div className="info-item">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo-text">PAGANI</span>
            <span className="logo-subtitle">Automobili Modena</span>
          </div>
          <p className="copyright">&copy; 2025 Pagani Automobili S.p.A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;