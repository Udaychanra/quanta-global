import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import AboutSection3 from '@/components/our-story/about-section';
import { FeatureSteps } from '@/components/our-story/features-section';
import { CTA } from '@/components/our-story/call-to-action';

const OurStory = () => {
  const identityFeatures = [
    { 
      step: 'Foresight', 
      title: 'Anticipating Shifts',
      content: 'We anticipate shifts in the environment to help you stay ahead of change and make proactive decisions.', 
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'AI-Driven Intelligence',
      title: 'Leveraging Technology',
      content: 'We harness AI and advanced analytics to provide insights that drive strategic transformation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Market Knowledge',
      title: 'Industry Expertise',
      content: 'Deep understanding of industry dynamics enables us to deliver contextually relevant solutions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Orchestration',
      title: 'Coordinated Execution',
      content: 'We coordinate transformation execution with discipline to ensure measurable outcomes.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  const purposeFeatures = [
    { 
      step: 'Clarity', 
      title: 'Complex Environments',
      content: 'We bring clarity when environments are complex, helping you navigate uncertainty with confidence.', 
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'Foresight',
      title: 'Unclear Paths',
      content: 'We provide foresight when the path ahead is unclear, enabling strategic decision-making.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Discipline',
      title: 'No Wasted Effort',
      content: 'We ensure transformation is never wasted through disciplined execution and measurable outcomes.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  const missionFeatures = [
    { 
      step: 'Scale', 
      title: 'With Confidence',
      content: 'Grow your organization strategically with proven methodologies and enterprise-grade solutions.', 
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'Adapt',
      title: 'With Resilience',
      content: 'Navigate change successfully with agile frameworks and adaptive strategies.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Lead',
      title: 'In Your Industry',
      content: 'Establish yourself as a leader in your industry through innovation and transformation excellence.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  const valuesFeatures = [
    { 
      step: 'Ambition', 
      title: 'Your Compass',
      content: 'Your boldest goals deserve more than advice — they deserve orchestration that helps you achieve them with confidence.', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'Success',
      title: 'Defines Our Journey',
      content: 'Every decision is guided by what matters most to you — outcomes that create real impact for your business and people.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Resilience',
      title: 'Strengthened Together',
      content: 'We help you stay strong through disruption, giving you foresight and tools to adapt and thrive.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Trust',
      title: 'Guided Transformation',
      content: 'We walk with you with discipline and clarity, enabling decisive movement while staying true to your vision.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container mt-10">
          {/* Hero Section */}
          <AboutSection3/>
          {/* <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
              Orchestrators of Clarity
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                QuantaGlobal was founded by industry leaders and former Big 4 professionals who saw a gap: enterprises were surrounded by tools, vendors, and reports but lacked orchestration. Ambition was high, yet outcomes lagged.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We built QuantaGlobal to be different. Not another consultancy, but a partner that combines the rigor of global firms with the agility of a boutique, grounded in real-world context and outcomes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We often describe our work like the craftsmanship of classic cars: built with care, designed to last, and engineered to perform. Transformation should be no different—not quick fixes or shiny dashboards, but durable systems that adapt and endure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Today, AI reshapes what’s possible. At QuantaGlobal, we embed AI into the heart of orchestration. Our role is to help leaders cut through complexity, align people, processes, and technology, and use intelligence like <span className="font-semibold text-blue-600">SARAH AI</span> to move with clarity, speed, and confidence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is simple: to bring clarity to complexity. We help enterprises and governments see further, act faster, and scale what works—so they can not only adapt, but thrive in a world of constant change.
              </p>
            </div>
          </div> */}

          {/* Our Identity Section */}
          <div className="bg-white rounded-2xl shadow-lg mb-16 mt-10">
            <FeatureSteps 
              features={identityFeatures}
              title="Our Identity"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Our Purpose Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={purposeFeatures}
              title="Our Purpose"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Our Mission Section */}
          <div className="bg-white rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={missionFeatures}
              title="Our Mission"
              autoPlayInterval={4000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Our Values Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={valuesFeatures}
              title="Our Values - Centered on You"
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

export default OurStory;