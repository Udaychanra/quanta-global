import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SupplyChainHero from '../components/SupplyChainHero';
import SupplyChainOverview from '../components/SupplyChainOverview';
import SupplyChainExpertise from '../components/SupplyChainExpertise';
import SupplyChainSolutions from '../components/SupplyChainSolutions';
import SupplyChainSarahAI from '../components/SupplyChainSarahAI';
import SupplyChainClosingCTA from '../components/SupplyChainClosingCTA';

const SupplyChainServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main>
        {/* Supply Chain Hero Section */}
        <SupplyChainHero />

        {/* Supply Chain Overview Section */}
        <SupplyChainOverview />

        {/* Supply Chain Expertise Section */}
        <SupplyChainExpertise />

        {/* Supply Chain Solutions Section */}
        <SupplyChainSolutions />

        {/* SARAH AI in Supply Chain Section */}
        <SupplyChainSarahAI />

        {/* Supply Chain Closing CTA Section */}
        <SupplyChainClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SupplyChainServices;