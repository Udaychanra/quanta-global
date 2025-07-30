import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import WhyUsSection from '../components/WhyUsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import VideoHeroSection from '../components/VideoHeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DeliveryApproachSection from '@/components/DeliveryApproachSection';
import OfficeLocationsSection from '@/components/OfficeLocationsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VideoHeroSection />
      <AboutSection />
      <ServicesSection />
      <DeliveryApproachSection/>
      <IndustriesSection />
      {/* <WhyUsSection /> */}
      <TestimonialsSection />
      <OfficeLocationsSection/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
