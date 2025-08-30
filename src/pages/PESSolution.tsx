import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PESHero from '../components/PESHero';
import PESKeyFocusAreas from '../components/PESKeyFocusAreas';
import PESSarahAIEnhancement from '../components/PESSarahAIEnhancement';
import PESValue from '../components/PESValue';
import PESClosingCTA from '../components/PESClosingCTA';

const PESSolution: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main>
        {/* Partner Ecosystem Strategy Hero Section */}
        <PESHero />

        {/* Key Focus Areas Section */}
        <PESKeyFocusAreas />

        {/* SARAH AI Enhancement Section */}
        <PESSarahAIEnhancement />

        {/* The Value Section */}
        <PESValue />

        {/* PES Closing CTA Section */}
        <PESClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default PESSolution;