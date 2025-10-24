import React from 'react';
import Header from '../components/hometest/Header';
import Hero from '../components/hometest/Hero';
import OurVision from '../components/hometest/OurVision';
import OurSolutions from '../components/hometest/OurSolutions';
import Technology from '../components/hometest/Technology';
import EdgeDevices from '../components/hometest/EdgeDevices';
import EdgeConnectivity from '../components/hometest/EdgeConnectivity';
import TechSpecs from '../components/hometest/TechSpecs';
import CloudConnectivity from '../components/hometest/CloudConnectivity';
import Workforce from '../components/hometest/Workforce';
import Contact from '../components/hometest/Contact';
import Footer from '../components/hometest/Footer';

const HomeTest: React.FC = () => {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <OurVision />
        <OurSolutions />
        <Technology />
       
        <EdgeConnectivity />
        <EdgeDevices />
        <TechSpecs />
        <CloudConnectivity />
        <Workforce />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomeTest;