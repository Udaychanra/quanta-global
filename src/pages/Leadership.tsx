import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection3 from '@/components/our-story/about-section';
import { FeatureSteps } from '@/components/our-story/features-section';
import { CTA } from '@/components/our-story/call-to-action';

const Leadership = () => {
  const leadershipTeam = [
    {
      step: 'Founder & Chief Executive Officer',
      title: 'Smitha Dave',
      content: 'Smitha is the Founder and CEO of Quanta Global and an experienced enterprise transformation leader with a Big 4 consulting background. She works with C level executives in financial services, manufacturing, and other regulated industries to design AI powered operating models and enterprise blueprints that align strategy, core systems, and daily operations. At Quanta, she leads advisory and product teams that focus on the foundation, helping clients build the data, value, and integration fabric that AI products and agents need to operate safely and effectively at enterprise scale.',
      image: '/smitha2.jpeg',
      credentials: 'Big 4 Consulting Background, Enterprise Transformation Expert',
      expertise: ['AI Operating Models', 'Enterprise Blueprints', 'Regulated Industries']
    },
    {
      step: 'Chief Financial Officer',
      title: 'Mehul Dave',
      content: 'Mehul is the Chief Financial Officer of Quanta Global and is responsible for the company’s finance function end to end. He manages all finance operations, including planning, reporting, and controls, and partners with the leadership team to ensure that Quanta’s growth, investments, and product bets are grounded in clear financial discipline and long term sustainability.',
      image: '/mehul.jpeg',
      credentials: 'CFO, Finance Operations Expert',
      expertise: ['Financial Planning', 'Reporting & Controls', 'Strategic Finance', 'Business Sustainability']
    },
    {
      step: 'Chairman',
      title: 'Rama Challa',
      content: 'Remani is the Chairman of Quanta Global and brings over 30 years of experience as an operating executive, board member, investor, and chairman. He works closely with the CEO and leadership team to provide steady guidance, thoughtful challenge, and strategic oversight, helping Quanta grow in a way that serves both C level clients and the long term health of the business.',
      image: '/smitha.jpeg',
      credentials: '30+ Years Operating Executive, Board Member, Investor, Chairman',
      expertise: ['Strategic Oversight', 'Governance', 'Enterprise Transformation', 'AI Strategy']
    },
    {
      step: 'Software Developer',
      title: 'Sid  Nallella',
      content: 'Sid is Quanta Global\'s data science leader and AI architect, specialising in enterprise AI applications, predictive analytics, and intelligent automation solutions. He designs the models and systems that sit on top of Quanta\'s data, value, and integration fabric, turning complex datasets into practical AI products and agents that can operate safely and reliably at enterprise scale.',
      image: '/sid.jpeg',
      credentials: 'Full-Stack Development Specialist, Scalable Digital Solutions Expert',
      expertise: ['Full-Stack Development', 'Scalable Applications', 'Enterprise Operations Optimization', 'User Experience Enhancement']
    },
    
   
  ];


  const leadershipPrinciples = [
    {
      step: 'Foundation-First Approach',
      title: 'Building the AI Fabric',
      content: 'Most enterprises try to add AI on top of fragmented systems and data. At Quanta, our leadership focuses on the foundation, building the data, value, and integration fabric that AI products and agents need to operate safely and effectively in production. This fabric is the basis for Quanta\'s AI offerings, designed to let organizations move from isolated pilots to a true, enterprise-level AI operating layer.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Collaborative Excellence',
      title: 'Team-First Approach',
      content: 'We believe in the power of collaborative leadership, fostering an environment where diverse perspectives drive breakthrough solutions and exceptional client outcomes.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Client-Centric Innovation',
      title: 'Outcome-Driven Solutions',
      content: 'Every leadership decision is guided by our commitment to client success, ensuring that our innovations translate into measurable business value and competitive advantage.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const companyValues = [
    {
      step: 'Integrity First',
      title: 'Ethical Excellence',
      content: 'We maintain the highest standards of integrity in all our interactions, building trust through transparent communication and ethical business practices.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Continuous Learning',
      title: 'Growth Mindset',
      content: 'Our leadership team embodies a growth mindset, constantly evolving our expertise and staying ahead of industry trends to deliver cutting-edge solutions.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Innovation Excellence',
      title: 'Breakthrough Thinking',
      content: 'We foster a culture of innovation where creative thinking and breakthrough solutions drive enterprise transformation and competitive advantage.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container mt-10">
          {/* Hero Section */}
          {/* <AboutSection3 /> */}

          {/* Leadership Team */}
          <div className="bg-white rounded-2xl shadow-lg mb-6 mt-1">
            <FeatureSteps 
              features={leadershipTeam}
              title="Meet Our Leadership Team"
              autoPlayInterval={6000}
              imageHeight="h-auto"
            />
          </div>

          {/* Leadership Principles */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={leadershipPrinciples}
              title="Our Leadership Philosophy"
              autoPlayInterval={5000}
              imageHeight="h-[500px]"
            />
          </div>

          {/* Company Values */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl shadow-lg mb-16">
            <FeatureSteps 
              features={companyValues}
              title="Core Values & Principles"
              autoPlayInterval={4500}
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

export default Leadership;
