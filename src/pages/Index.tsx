import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import VideoHeroSection from '../components/VideoHeroSection';
import WhyItMattersSection from '@/components/WhyItMattersSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import AboutSection from '../components/AboutSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import WhatSetsUsApartSection from '@/components/WhatSetsUsApartSection';
import ServicesSection from '../components/ServicesSection';
import DeliveryApproachSection from '@/components/DeliveryApproachSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import OfficeLocationsSection from '@/components/OfficeLocationsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ModelMonitor from '@/components/ModelMonitor';
import Header from '@/components/hometest/Header';

const Index = () => {
  return (
    <div className="min-h-screen">
   
      <Navigation />
      <HeroSection />
  
      {/* <VideoHeroSection /> */}
      {/* <WhyItMattersSection /> */}
      {/* <ValuePropositionSection /> */}
      <AboutSection />
      {/* <HowWeWorkSection /> */}
      {/* <WhatSetsUsApartSection /> */}
      <ServicesSection />
      {/* <DeliveryApproachSection /> */}
      <ModelMonitor />
      {/* <WhyItMattersSection /> */}
      <IndustriesSection />
      <TestimonialsSection />
      {/* <OfficeLocationsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
