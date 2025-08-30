
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import ServicesSection from '@/components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className='mt-10'>
        {/* <HeroIntro />
        <ApproachSection />
        <ServiceBuckets />
        <ClosingCTA /> */}
        <ServicesSection />
       
      </main>
      <Footer />
    </div>
  );
}

export default Services