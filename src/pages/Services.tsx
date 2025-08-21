import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-container mt-10">
        <ServicesSection />
        <div className="my-16" />
        {/* <TestimonialsSection /> */}
      </main>
      <Footer />
    </div>
  );
}

export default Services