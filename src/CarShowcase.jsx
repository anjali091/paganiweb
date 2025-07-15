import React, { useState, useEffect } from 'react';

const cars = [
  {
    name: 'Huayra BC',
    img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80',
    price: '$2.8M',
    hp: '730 HP',
    topSpeed: '238 MPH',
    transmission: '7-speed sequential',
    details: {
      overview: 'The Huayra BC is a masterpiece of performance and design, named after Benny Caiola, a close friend of Horacio Pagani. This track-focused hypercar represents the pinnacle of automotive engineering.',
      engine: 'AMG V12 Twin-Turbocharged engine producing 730 HP and 738 lb-ft of torque, delivering breathtaking performance.',
      acceleration: '3.0 seconds',
      interior: 'Luxurious Alcantara and carbon fiber finish with bespoke Italian craftsmanship throughout the cabin.'
    }
  },
  {
    name: 'Zonda HP Barchetta',
    img: 'https://wallpapercave.com/wp/wp8411355.jpg',
    price: '$17.5M',
    hp: '800 HP',
    topSpeed: '220 MPH',
    transmission: '6-speed manual',
    details: {
      overview: 'Ultra-rare Zonda with only 3 units produced worldwide. Features an open-top design that embodies pure driving emotion.',
      engine: 'AMG 7.3L V12 naturally aspirated engine with race-tuned output delivering an unforgettable soundtrack.',
      acceleration: '3.1 seconds',
      interior: 'Open cockpit design with blue leather appointments and carbon fiber, featuring a unique sculptural steering wheel.'
    }
  },
  {
    name: 'Utopia',
    img: 'https://news.dupontregistry.com/wp-content/uploads/2023/08/pagani-utopia-monterey-1-scaled.jpg',
    price: '$3.1M',
    hp: '864 HP',
    topSpeed: '230 MPH',
    transmission: '7-speed manual or automatic',
    details: {
      overview: 'Pagani\'s latest masterpiece combining timeless design philosophy with cutting-edge modern technology.',
      engine: 'Mercedes-AMG V12 naturally aspirated engine producing 864 HP, delivering pure atmospheric performance.',
      acceleration: '3.2 seconds',
      interior: 'Minimalist cabin featuring analog instrumentation, premium Italian leathers, and exposed metalwork detailing.'
    }
  }
];

const CarShowcase = ({ onSelectCar }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setVisibleCards(prev => [...prev, index]);
        }
      });
    });

    const cardElements = document.querySelectorAll('.car-card');
    cardElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="car-showcase" id="cars">
      <div className="showcase-header">
        <h2 className="showcase-title">Hypercar Collection</h2>
        <div className="title-underline"></div>
        <p className="showcase-subtitle">Discover the pinnacle of automotive artistry</p>
      </div>
      
      <div className="car-grid">
        {cars.map((car, idx) => (
          <div
            key={idx}
            data-index={idx}
            className={`car-card ${hoveredIndex === idx ? 'hovered' : ''} ${visibleCards.includes(idx) ? 'visible' : ''}`}
            onClick={() => onSelectCar(car)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="car-image-container">
                <img src={car.img} alt={car.name} className="car-image" />
                <div className="image-overlay"></div>
              </div>
              
              <div className="car-info">
                <h3 className="car-name">{car.name}</h3>
                <div className="car-specs">
                  <span className="spec-item">{car.hp}</span>
                  <span className="spec-divider">|</span>
                  <span className="spec-item">{car.topSpeed}</span>
                </div>
                <p className="car-price">{car.price}</p>
                <button className="explore-btn">
                  <span>Explore Details</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarShowcase;