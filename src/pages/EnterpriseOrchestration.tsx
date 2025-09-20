import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import AboutSection3 from '@/components/our-story/about-section';
import { FeatureSteps } from '@/components/our-story/features-section';
import { CTA } from '@/components/our-story/call-to-action';

const EnterpriseOrchestration = () => {
  const strategicFeatures = [
    { 
      step: 'SAP & ERP', 
      title: 'Enterprise Resource Planning',
      content: 'Transform your enterprise resource planning with modern SAP solutions and ERP optimization strategies.', 
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'Finance',
      title: 'Financial Transformation',
      content: 'Optimize financial processes and reporting with advanced finance transformation methodologies.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Supply Chain',
      title: 'Supply Chain Excellence',
      content: 'Modernize supply chain operations with intelligent planning and real-time visibility solutions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Cloud',
      title: 'Cloud Platform Strategy',
      content: 'Accelerate cloud adoption with platform engineering and clean core transformation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  const enablerFeatures = [
    { 
      step: 'Program Planning', 
      title: 'Strategic Governance',
      content: 'Strategic planning and governance frameworks that ensure transformation success and alignment.', 
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'Vendor Selection',
      title: 'Partner Ecosystem',
      content: 'Comprehensive partner ecosystem strategy to optimize vendor relationships and solution fit.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'AI & Data',
      title: 'Intelligent Enterprise',
      content: 'Build intelligent enterprise capabilities with AI, analytics, and data-driven decision making.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  const aiDataFeatures = [
    { 
      step: 'Analytics & Insights', 
      title: 'Decision Intelligence',
      content: 'Advanced reporting, forecasting, and decision intelligence capabilities for strategic advantage.', 
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'Applied AI',
      title: 'SARAH AI & Automation',
      content: 'Leverage SARAH AI, automation, and copilots to accelerate transformation and reduce manual effort.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Emerging Tech',
      title: 'Future-Ready Innovation',
      content: 'Computer vision, IoT, digital twins, AR/VR - cutting-edge technology for competitive advantage.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  const productsIntegrationFeatures = [
    { 
      step: 'Cross-Cutting Accelerators', 
      title: 'Embedded Across All Offerings',
      content: 'Products like SARAH AI embed across EO offerings (Finance, ERP, Supply Chain, Cloud) as proprietary IP and competitive differentiators.', 
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'SARAH AI Integration',
      title: 'Intelligent Automation',
      content: 'Finance automation, ERP data cleaning, supply chain predictions, and cloud acceleration through intelligent AI capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Strategic Positioning',
      title: 'Market Differentiation',
      content: 'Clients may come specifically for SARAH AI - a proprietary advantage that drives independent marketing and deep-dive capabilities.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  const mentalModelFeatures = [
    { 
      step: 'Services', 
      title: 'Horizontal Capabilities',
      content: 'EO enablers like AI & Data, Vendor Selection, and Program Planning provide foundational capabilities across all transformations.', 
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'Offerings',
      title: 'Business Transformations',
      content: 'SAP, Finance, Supply Chain, and Cloud transformations delivered under the EO umbrella with strategic governance.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Products',
      title: 'Proprietary Accelerators',
      content: 'Cross-cutting accelerators like SARAH AI that embed across both services and offerings for competitive advantage.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container mt-10">
          {/* Hero Section */}
          {/* <AboutSection3 /> */}

          {/* Strategic Framework */}
          <div className="bg-white rounded-2xl shadow-lg mb-16 mt-10">
            <FeatureSteps 
              features={strategicFeatures}
              title="Strategic Framework - Core Transformations"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Horizontal Enablers */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={enablerFeatures}
              title="Horizontal Enablers"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* AI & Data Capabilities */}
          <div className="bg-white rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={aiDataFeatures}
              title="AI & Data Capabilities"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Products Integration */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={productsIntegrationFeatures}
              title="Where Products Fit - Cross-Cutting Accelerators"
              autoPlayInterval={4500}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Visual Mental Model */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={mentalModelFeatures}
              title="Visual Mental Model - Strategic Architecture"
              autoPlayInterval={5000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Call to Action */}
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnterpriseOrchestration;