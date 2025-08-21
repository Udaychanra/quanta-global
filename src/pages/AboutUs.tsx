import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import WhyUsSection from '@/components/WhyUsSection';
import DeliveryApproachSection from '@/components/DeliveryApproachSection';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-container mt-10">
        <AboutSection />
        <div className="my-16" />
        {/* <WhyUsSection /> */}
        {/* <DeliveryApproachSection/> */}
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs