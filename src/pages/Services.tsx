import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="section-container py-16">
        <ServicesSection />
        <div className="my-16" />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default Services