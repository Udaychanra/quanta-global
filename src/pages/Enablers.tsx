import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection3 from '@/components/our-story/about-section';
import { FeatureSteps } from '@/components/our-story/features-section';
import { CTA } from '@/components/our-story/call-to-action';

const Enablers = () => {
  const enterpriseNavigation = [
    {
      step: 'Operating Model',
      title: 'Governance Excellence',
      content: 'Define roles, decision rights, and KPIs to guide enterprise-wide change with clear accountability.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Portfolio Control',
      title: 'Strategic Roadmap Alignment',
      content: 'Align initiatives to strategy with funding guardrails and benefits tracking for maximum ROI.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Value Engineering',
      title: 'Benefits Realization',
      content: 'Quantify value, track realization, and course-correct early to ensure transformation success.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Risk Management',
      title: 'Proactive Risk Mitigation',
      content: 'Identify cross-program risks and drive transparent mitigation strategies.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const programPlanning = [
    {
      step: 'Accelerated Planning',
      title: 'Rapid Blueprint Design',
      content: 'Blueprint rapidly with business-led playbacks and iterative design for faster time-to-value.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Intelligent Testing',
      title: 'Shift-Left Quality Assurance',
      content: 'Shift-left testing with automation and risk-based prioritization for higher quality delivery.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Cloud Platforms',
      title: 'Shared Platform Engineering',
      content: 'Build shared platforms and environments to speed delivery and reduce complexity.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Change Enablement',
      title: 'User Adoption Excellence',
      content: 'Activate leaders and frontline with targeted adoption programs for successful transformation.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const partnerEcosystem = [
    {
      step: 'Ecosystem Assessment',
      title: 'Partner Landscape Mapping',
      content: 'Map capabilities and constraints across your partner landscape for optimal collaboration.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Selection Process',
      title: 'Transparent Partner Selection',
      content: 'Run transparent selections focused on outcomes and accountability for better partnerships.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Integration Excellence',
      title: 'Seamless Solution Integration',
      content: 'Engineer interfaces and handoffs to avoid value leakage and ensure smooth operations.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Launch Readiness',
      title: 'Go-Live Excellence',
      content: 'Operationalize go-live with hypercare and success metrics for flawless deployment.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const aiDataIntelligence = [
    {
      step: 'Data Governance',
      title: 'Enterprise Data Stewardship',
      content: 'Establish ownership, policies, and quality controls for enterprise-wide data excellence.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Data Architecture',
      title: 'Scalable Data Infrastructure',
      content: 'Design scalable pipelines and semantic layers for unified data access and insights.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Decision Intelligence',
      title: 'AI-Powered Analytics',
      content: 'Deliver insight products and KPI services to teams for data-driven decision making.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Applied AI',
      title: 'Workflow Automation',
      content: 'Embed copilots and automation in critical workflows for enhanced productivity.',
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

          {/* Enterprise Navigation Office */}
          <div className="bg-white rounded-2xl shadow-lg mb-16 mt-10">
            <FeatureSteps 
              features={enterpriseNavigation}
              title="Enterprise Navigation Office"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Program Planning and Execution */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={programPlanning}
              title="Program Planning and Execution"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Partner Ecosystem Strategy */}
          <div className="bg-white rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={partnerEcosystem}
              title="Partner Ecosystem Strategy"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* AI and Data for Intelligent Enterprise */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={aiDataIntelligence}
              title="AI and Data for the Intelligent Enterprise"
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

export default Enablers;
