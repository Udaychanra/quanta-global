import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection3 from '@/components/our-story/about-section';
import { FeatureSteps } from '@/components/our-story/features-section';
import { CTA } from '@/components/our-story/call-to-action';

const Offerings = () => {
  const sapOfferings = [
    {
      step: 'Brownfield Migration',
      title: 'Move to S/4HANA Quickly',
      content: 'Move to S/4HANA quickly while preserving proven processes and investments.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'S/4HANA Public Cloud',
      title: 'Modern Scalable ERP Core',
      content: 'Adopt a modern, scalable ERP core with clean-core guardrails.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'ERP Modernization',
      title: 'Unlock Agility and Resilience',
      content: 'Rationalize, simplify, and de-customize to unlock agility and resilience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Integration and Extensions',
      title: 'Build Composable Processes',
      content: 'Build composable processes with BTP, APIs, and event-driven patterns.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const financeOfferings = [
    {
      step: 'Central Finance',
      title: 'Single Source of Truth',
      content: 'Create a single source of truth across disparate ERPs.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Close and Reporting Automation',
      title: 'Shorten the Close',
      content: 'Shorten the close with automated reconciliations and controls.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Predictive Planning and FP&A',
      title: 'Improve Forecast Accuracy',
      content: 'Improve forecast accuracy with driver-based and AI-assisted models.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Finance Operate',
      title: 'Operate Finance as a Product',
      content: 'Operate finance as a product with reliable run, change, and insights.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const supplyChainOfferings = [
    {
      step: 'Connected Planning',
      title: 'Unify Demand and Supply',
      content: 'Unify demand, supply, and financial plans to align decisions.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Real-time Visibility',
      title: 'Sense and Respond Faster',
      content: 'Sense disruptions across the network and respond faster.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Digital Manufacturing',
      title: 'Digitize Plants with MES and IoT',
      content: 'Digitize plants with MES, IoT, and AI-assisted quality.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Sustainability and Traceability',
      title: 'Track Emissions and Provenance',
      content: 'Track emissions and provenance across the value chain.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const cloudOfferings = [
    {
      step: 'Cloud Migration',
      title: 'Zero-Trust Migration',
      content: 'Migrate workloads with zero-trust and landing zone best practices.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Clean Core Enablement',
      title: 'Refactor and Isolate Innovation',
      content: 'Refactor custom code and isolate innovation on platforms.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Platform Engineering',
      title: 'Productize Developer Experience',
      content: 'Productize developer experience with golden paths and self-service.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'DevSecOps and SRE',
      title: 'Automate Security and Reliability',
      content: 'Automate security and reliability from build to runtime.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container mt-10">
          {/* Hero Section */}
          {/* <AboutSection3 /> */}

          {/* SAP Offerings */}
          <div className="bg-white rounded-2xl shadow-lg mb-16 mt-10">
            <FeatureSteps 
              features={sapOfferings}
              title="SAP Services"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Finance Offerings */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={financeOfferings}
              title="Finance Solutions"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Supply Chain Offerings */}
          <div className="bg-white rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={supplyChainOfferings}
              title="Supply Chain Excellence"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Cloud Offerings */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={cloudOfferings}
              title="Cloud Transformation"
              autoPlayInterval={4000}
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

export default Offerings;
