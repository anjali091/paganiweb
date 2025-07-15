import React, { useState, useEffect } from 'react';

const CarDetails = ({ car, goBack }) => {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'performance', label: 'Performance' },
    { id: 'interior', label: 'Interior' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <p className="overview-text">{car.details.overview}</p>
            <div className="key-specs">
              <div className="spec-card">
                <div className="spec-icon">⚡</div>
                <div className="spec-value">{car.hp}</div>
                <div className="spec-label">Power</div>
              </div>
              <div className="spec-card">
                <div className="spec-icon">🏎️</div>
                <div className="spec-value">{car.topSpeed}</div>
                <div className="spec-label">Top Speed</div>
              </div>
              <div className="spec-card">
                <div className="spec-icon">💰</div>
                <div className="spec-value">{car.price}</div>
                <div className="spec-label">Price</div>
              </div>
            </div>
          </div>
        );
      case 'performance':
        return (
          <div className="tab-content">
            <h3 className="section-title">Engine</h3>
            <p className="section-text">{car.details.engine}</p>
            <div className="performance-grid">
              <div className="perf-item">
                <span className="perf-label">Horsepower</span>
                <span className="perf-value">{car.hp}</span>
              </div>
              <div className="perf-item">
                <span className="perf-label">Top Speed</span>
                <span className="perf-value">{car.topSpeed}</span>
              </div>
              <div className="perf-item">
                <span className="perf-label">0-60 mph</span>
                <span className="perf-value">{car.details.acceleration}</span>
              </div>
              <div className="perf-item">
                <span className="perf-label">Transmission</span>
                <span className="perf-value">{car.transmission}</span>
              </div>
            </div>
          </div>
        );
      case 'interior':
        return (
          <div className="tab-content">
            <h3 className="section-title">Interior Design</h3>
            <p className="section-text">{car.details.interior}</p>
            <div className="interior-features">
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <div className="feature-text">Bespoke Italian Craftsmanship</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏁</div>
                <div className="feature-text">Carbon Fiber Detailing</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💎</div>
                <div className="feature-text">Premium Materials</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`car-details ${loaded ? 'loaded' : ''}`}>
      <div className="details-container">
        <button className="back-btn" onClick={goBack}>
          <svg className="back-icon" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to Collection</span>
        </button>

        <div className="details-content">
          <div className="car-visual">
            <div className="image-container">
              <img src={car.img} alt={car.name} className="car-image" />
              <div className="image-glow"></div>
            </div>
          </div>

          <div className="car-info">
            <h1 className="car-title">{car.name}</h1>
            <div className="price-tag">{car.price}</div>
            
            <div className="tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content-container">
              {renderTabContent()}
            </div>

            <div className="action-buttons">
              <button className="primary-btn">
                <span>Configure</span>
                <div className="btn-glow"></div>
              </button>
              <button className="secondary-btn">
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;