import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection3 from '@/components/our-story/about-section';
import { FeatureSteps } from '@/components/our-story/features-section';
import { CTA } from '@/components/our-story/call-to-action';

const Industries = () => {
  const financialServices = [
    {
      step: 'Core Systems Modernization',
      title: 'Modernize Banking Infrastructure',
      content: 'Transform legacy banking systems with cloud-native architecture and real-time processing capabilities.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Risk Management',
      title: 'Advanced Risk Analytics',
      content: 'Implement AI-powered risk assessment and regulatory compliance with real-time monitoring.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Digital Channels',
      title: 'Scale Digital Banking',
      content: 'Build scalable digital platforms for customer engagement and seamless omnichannel experiences.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Insurance Innovation',
      title: 'Next-Gen Insurance Platform',
      content: 'Leverage AI and IoT for personalized policies and automated claims processing.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const technologyMedia = [
    {
      step: 'Platform Scaling',
      title: 'Elastic Cloud Platforms',
      content: 'Build auto-scaling platforms that handle millions of users with intelligent resource management.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Subscription Management',
      title: 'Revenue Optimization',
      content: 'Optimize subscription models with data-driven pricing and customer lifecycle management.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Data Products',
      title: 'Monetize Data Assets',
      content: 'Transform data into valuable products with privacy-preserving analytics and insights.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Content Delivery',
      title: 'Global Content Networks',
      content: 'Deploy edge computing solutions for ultra-low latency content delivery worldwide.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const lifeSciencesHealthcare = [
    {
      step: 'R&D Acceleration',
      title: 'AI-Powered Drug Discovery',
      content: 'Accelerate research with machine learning models for molecular design and clinical trial optimization.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Regulatory Compliance',
      title: 'Automated Compliance',
      content: 'Ensure FDA compliance with automated documentation and audit trails for all processes.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Patient Services',
      title: 'Personalized Healthcare',
      content: 'Deliver personalized treatment plans with integrated patient data and predictive analytics.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Supply Chain',
      title: 'Cold Chain Management',
      content: 'Ensure product integrity with IoT-enabled temperature monitoring and blockchain traceability.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const manufacturingIndustrial = [
    {
      step: 'Smart Manufacturing',
      title: 'Digital Factory Transformation',
      content: 'Implement Industry 4.0 with connected machines, predictive maintenance, and autonomous quality control.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Supply Network',
      title: 'Resilient Supply Networks',
      content: 'Build adaptive supply chains with real-time visibility and intelligent demand forecasting.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Sustainability',
      title: 'Carbon Footprint Optimization',
      content: 'Achieve net-zero goals with energy management systems and circular economy practices.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Quality Excellence',
      title: 'Zero-Defect Manufacturing',
      content: 'Implement AI-driven quality control with real-time defect detection and prevention.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container mt-10">
          {/* Hero Section */}
          {/* <AboutSection3 /> */}

          {/* Financial Services */}
          <div className="bg-white rounded-2xl shadow-lg mb-16 mt-10">
            <FeatureSteps 
              features={financialServices}
              title="Financial Services & Insurance"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Technology Media Telecom */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={technologyMedia}
              title="Technology, Media & Telecom"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Life Sciences Healthcare */}
          <div className="bg-white rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={lifeSciencesHealthcare}
              title="Life Sciences & Healthcare"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Manufacturing Industrial */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={manufacturingIndustrial}
              title="Manufacturing & Industrial"
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

export default Industries;
