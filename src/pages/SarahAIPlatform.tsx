import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/sarah-ai-platform/Hero';
import PlatformOverview from '@/components/sarah-ai-platform/PlatformOverview';
import CoreCapabilities from '@/components/sarah-ai-platform/CoreCapabilities';
import CrossIndustryUseCases from '@/components/sarah-ai-platform/CrossIndustryUseCases';
import IndustryEditions from '@/components/sarah-ai-platform/IndustryEditions';
import PlatformOrchestration from '@/components/sarah-ai-platform/PlatformOrchestration';
import DeploymentIntegration from '@/components/sarah-ai-platform/DeploymentIntegration';
import FinalCTA from '@/components/sarah-ai-platform/FinalCTA';

const SarahAIPlatform = () => {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Navigation />
      <main>
        <Hero />
        <PlatformOverview />
        <CoreCapabilities />
        <CrossIndustryUseCases />
        <IndustryEditions />
        <PlatformOrchestration />
        <DeploymentIntegration />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SarahAIPlatform;
