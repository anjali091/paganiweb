import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CarShowcase from './CarShowcase';
import CarDetails from './CarDetails';
import Footer from './Footer';

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCarSelect = (car) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCar(car);
      setIsTransitioning(false);
    }, 500);
  };

  const handleGoBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCar(null);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className={`app ${isTransitioning ? 'transitioning' : ''}`}>
      <Navbar />
      <div className="main-content">
        {selectedCar ? (
          <CarDetails car={selectedCar} goBack={handleGoBack} />
        ) : (
          <>
            <HeroSection />
            <CarShowcase onSelectCar={handleCarSelect} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;