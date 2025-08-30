import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CloudJourneyHero from '@/components/CloudJourneyHero';
import CloudJourneySteps from '@/components/CloudJourneySteps';
import CloudSAPHero from '@/components/CloudSAPHero';
import WhyCloudSAP from '@/components/WhyCloudSAP';
import CloudCapabilities from '@/components/CloudCapabilities';
import CloudSarahAIAdvantage from '@/components/CloudSarahAIAdvantage';
import CloudClosingCTA from '@/components/CloudClosingCTA';
import CloudServicesClosingCTA from '@/components/CloudServicesClosingCTA';

const CloudServices = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main>
        {/* Cloud Journey Section */}
        <CloudJourneyHero />
        <CloudJourneySteps />
        
        {/* SAP S/4HANA Public Cloud Section */}
        <CloudSAPHero />
        <WhyCloudSAP />
        <CloudCapabilities />
        <CloudSarahAIAdvantage />
        <CloudClosingCTA />
        
        {/* Final Cloud Services CTA */}
        <CloudServicesClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default CloudServices;
