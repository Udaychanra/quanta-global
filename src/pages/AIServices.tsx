import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroIntro from '@/components/HeroIntro';
import ApproachSection from '@/components/ApproachSection';
import ServiceBuckets from '@/components/ServiceBuckets';
import ClosingCTA from '@/components/ClosingCTA';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const AIServices = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main>
        <HeroIntro />
        <ApproachSection />
        <ServiceBuckets />
        <ClosingCTA />
        <div className="my-16" />
        {/* <TestimonialsSection /> */}
      </main>
      <Footer />
    </div>
  );
}

export default AIServices