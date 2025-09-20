import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection3 from '@/components/our-story/about-section';
import { FeatureSteps } from '@/components/our-story/features-section';
import { CTA } from '@/components/our-story/call-to-action';

const Leadership = () => {
  const leadershipTeam = [
    {
      step: 'Chief Executive Officer',
      title: 'Sarah Mitchell',
      content: 'Visionary leader with 20+ years in enterprise transformation. Former McKinsey partner specializing in AI-driven business strategy and digital orchestration.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2070&auto=format&fit=crop',
      credentials: 'MBA Harvard, Former McKinsey Partner',
      expertise: ['Strategic Leadership', 'AI Strategy', 'Enterprise Transformation']
    },
    {
      step: 'Chief Technology Officer',
      title: 'Dr. Michael Chen',
      content: 'AI pioneer and enterprise architect with deep expertise in machine learning, data orchestration, and scalable cloud platforms.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      credentials: 'PhD Computer Science MIT, Former Google AI Lead',
      expertise: ['Artificial Intelligence', 'Cloud Architecture', 'Machine Learning']
    },
    {
      step: 'Chief Operating Officer',
      title: 'Jennifer Rodriguez',
      content: 'Operations excellence leader with proven track record in large-scale enterprise implementations and program management.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
      credentials: 'MBA Stanford, Former Accenture Managing Director',
      expertise: ['Program Management', 'Operations Excellence', 'Change Management']
    },
    {
      step: 'Chief Innovation Officer',
      title: 'David Thompson',
      content: 'Innovation catalyst focused on emerging technologies, digital transformation, and next-generation enterprise solutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
      credentials: 'MS Engineering Caltech, Former Microsoft Innovation Lead',
      expertise: ['Innovation Strategy', 'Emerging Technologies', 'Digital Transformation']
    },
    {
      step: 'Head of Client Success',
      title: 'Lisa Park',
      content: 'Client success champion with deep understanding of enterprise challenges and proven ability to drive measurable outcomes.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop',
      credentials: 'MBA Wharton, Former Deloitte Principal',
      expertise: ['Client Success', 'Enterprise Solutions', 'Outcome Delivery']
    },
    {
      step: 'Head of AI & Data',
      title: 'Dr. Alex Kumar',
      content: 'Data science leader specializing in enterprise AI applications, predictive analytics, and intelligent automation solutions.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop',
      credentials: 'PhD Statistics Berkeley, Former Amazon ML Director',
      expertise: ['Data Science', 'Machine Learning', 'Predictive Analytics']
    }
  ];

  const leadershipPrinciples = [
    {
      step: 'Visionary Leadership',
      title: 'Future-Focused Strategy',
      content: 'Our leaders anticipate market trends and position QuantaGlobal at the forefront of enterprise transformation, driving innovation that shapes tomorrow\'s business landscape.',
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
          <div className="bg-white rounded-2xl shadow-lg mb-16 mt-10">
            <FeatureSteps 
              features={leadershipTeam}
              title="Meet Our Leadership Team"
              autoPlayInterval={6000}
              imageHeight="h-[600px]"
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
