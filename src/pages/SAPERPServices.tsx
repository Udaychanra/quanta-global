import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SAPERPHero from '@/components/SAPERPHero';
import BrownfieldMatters from '@/components/BrownfieldMatters';
import TransformationJourney from '@/components/TransformationJourney';
import TechnologyAccelerates from '@/components/TechnologyAccelerates';
import SAPERPServicesClosingCTA from '@/components/SAPERPServicesClosingCTA';
import CloudSAPHero from '@/components/CloudSAPHero';
import WhyCloudSAP from '@/components/WhyCloudSAP';
import CloudCapabilities from '@/components/CloudCapabilities';
import CloudSarahAIAdvantage from '@/components/CloudSarahAIAdvantage';
import CloudClosingCTA from '@/components/CloudClosingCTA';

const SAPERPServices = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main>
        {/* SAP ERP Transformation Section */}
        <SAPERPHero />
        <BrownfieldMatters />
        <TransformationJourney />
        <TechnologyAccelerates />
        <SAPERPServicesClosingCTA />
        
        {/* Cloud & SAP S/4HANA Public Cloud Section */}
        <CloudSAPHero />
        <WhyCloudSAP />
        <CloudCapabilities />
        <CloudSarahAIAdvantage />
        <CloudClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default SAPERPServices;
