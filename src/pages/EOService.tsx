import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EOHero from '../components/EOHero';
import EOOverview from '../components/EOOverview';
import EOKeyPillars from '../components/EOKeyPillars';
import EOvsPMO from '../components/EOvsPMO';
import EOClosingCTA from '../components/EOClosingCTA';

const EOService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main>
        {/* Enterprise Orchestration Hero Section */}
        <EOHero />
        
        {/* EO Overview Section */}
        <EOOverview />
        
        {/* EO Key Pillars Section */}
        <EOKeyPillars />
        
        {/* EO vs PMO Comparison Section */}
        <EOvsPMO />
        
        {/* EO Closing CTA Section */}
        <EOClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default EOService;