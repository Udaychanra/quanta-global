import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection3 from '@/components/our-story/about-section';
import { FeatureSteps } from '@/components/our-story/features-section';
import { CTA } from '@/components/our-story/call-to-action';
import ProductsHero from '@/components/ProductsHero';
import SarahAIIntro from '@/components/SarahAIIntro';
import SarahAIWhatItDoes from '@/components/SarahAIWhatItDoes';
import SarahAICapabilities from '@/components/SarahAICapabilities';
import SarahAIEmbedded from '@/components/SarahAIEmbedded';
import SarahAIImpact from '@/components/SarahAIImpact';
import SarahAIClosing from '@/components/SarahAIClosing';

const Products = () => {
  const sarahFeatures = [
    {
      step: 'Productivity',
      title: 'AI-Powered Efficiency',
      content: 'Handles repetitive tasks and frees your team\'s time for strategic work that actually matters.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Personality',
      title: 'Adaptive Intelligence',
      content: 'Learns how your team works and adapts to your unique processes and preferences.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Precision',
      title: 'Anticipatory Insights',
      content: 'Surfaces insights before you even ask, anticipating your needs with intelligent automation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Integration',
      title: 'Seamless Connectivity',
      content: 'Connects ERP, CRM, and cloud systems natively for unified enterprise intelligence.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const sarahCapabilities = [
    {
      step: 'Enterprise Integration',
      title: 'Universal System Connectivity',
      content: 'Works across SAP S/4HANA, ECC, BTP, and any cloud system for comprehensive enterprise coverage.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'AI Orchestration',
      title: 'Intelligent Workflow Automation',
      content: 'Orchestrates complex business processes with AI-driven decision making and automation.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Data Intelligence',
      title: 'Real-Time Insights',
      content: 'Transforms data into actionable insights with real-time analytics and predictive capabilities.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Human-Centric Design',
      title: 'Empowering Leadership',
      content: 'Puts leaders back in control of their time, data, and decisions with intuitive AI assistance.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container mt-10">
          {/* Hero Section */}
          {/* <AboutSection3 /> */}

          {/* SARAH AI Core Features */}
          <div className="bg-white rounded-2xl shadow-lg mb-16 mt-10">
            <FeatureSteps 
              features={sarahFeatures}
              title="SARAH AI Core Features"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* SARAH AI Capabilities */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={sarahCapabilities}
              title="SARAH AI Capabilities"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>
      
      {/* SARAH AI Intro Section */}
          <div className="bg-white rounded-2xl shadow-lg mb-16">
      <SarahAIIntro />
          </div>
      
      {/* SARAH AI What It Does Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl shadow-lg mb-16">
      <SarahAIWhatItDoes />
          </div>
      
      {/* SARAH AI Capabilities Section */}
          <div className="bg-white rounded-2xl shadow-lg mb-16">
      <SarahAICapabilities />
          </div>
      
      {/* SARAH AI Embedded Across Transformation Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg mb-16">
      <SarahAIEmbedded />
          </div>
      
      {/* SARAH AI Impact Section */}
          <div className="bg-white rounded-2xl shadow-lg mb-16">
      <SarahAIImpact />
          </div>
      
      {/* SARAH AI Closing Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl shadow-lg mb-16">
      <SarahAIClosing />
          </div>
      
      {/* Embedded Verver AI App */}
          <div className="bg-white rounded-2xl shadow-lg mb-16">
            <section className="section-padding relative z-10">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">Try Verver AI (Beta)</h2>
          <div className="flex justify-center">
            <iframe
              src="https://verve-app.vercel.app"
              title="Verver AI App"
              className="w-full max-w-5xl h-[700px] rounded-2xl border-4 border-blue-600 shadow-xl bg-white"
              allow="clipboard-write; clipboard-read; microphone; camera"
            />
          </div>
        </div>
      </section>
          </div>

          {/* Call to Action */}
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;