import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container">
          {/* Hero Section */}
          <div className="text-center mb-16">
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
          </div>

          {/* Our Identity Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Identity
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are not just advisors, we are <span className="font-semibold text-blue-600">orchestrators of clarity</span>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We combine foresight, AI-driven intelligence, deep market knowledge, and orchestration discipline 
                to help leaders cut through complexity and deliver transformation with confidence. By grounding 
                strategy in real-world dynamics and anticipating shifts in the environment, we help organizations 
                not only adapt but thrive in a world of constant change.
              </p>

              {/* Identity Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center p-4">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Foresight</h3>
                  <p className="text-sm text-gray-600">Anticipating shifts in the environment</p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Driven Intelligence</h3>
                  <p className="text-sm text-gray-600">Leveraging technology for insights</p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deep Market Knowledge</h3>
                  <p className="text-sm text-gray-600">Understanding industry dynamics</p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Orchestration Discipline</h3>
                  <p className="text-sm text-gray-600">Coordinated transformation execution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Purpose Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Purpose
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-800 leading-relaxed mb-8">
                To help organizations navigate uncertainty, sustain what matters, and thrive in a world of constant change. 
                We bring clarity when environments are complex, foresight when the path ahead is unclear, and discipline 
                so transformation is never wasted.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                At the core, we enable leaders to make decisions that are good for their people, their stakeholders, and the future.
              </p>

              {/* Purpose Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Clarity</h3>
                  <p className="text-sm text-gray-600">When environments are complex</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Foresight</h3>
                  <p className="text-sm text-gray-600">When the path ahead is unclear</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Discipline</h3>
                  <p className="text-sm text-gray-600">So transformation is never wasted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To empower enterprises and governments to move with clarity and speed by embedding AI and orchestration 
                into the heart of transformation, turning ambition into measurable outcomes.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We help organizations scale with confidence, adapt with resilience, and establish themselves as leaders in their industries.
              </p>

              {/* Mission Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scale with Confidence</h3>
                  <p className="text-sm text-gray-600">Grow your organization strategically</p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Adapt with Resilience</h3>
                  <p className="text-sm text-gray-600">Navigate change successfully</p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Establish Leadership</h3>
                  <p className="text-sm text-gray-600">Become industry leaders</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-2">
                Centered on You
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Your Ambition, Our Compass
                    </h3>
                    <p className="text-gray-700">
                      We believe your boldest goals deserve more than advice — they deserve orchestration that helps 
                      you achieve them with confidence.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Your Success Defines the Journey
                    </h3>
                    <p className="text-gray-700">
                      Every decision, every step, is guided by what matters most to you — outcomes that create real 
                      impact for your business and your people.
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Your Resilience, Strengthened
                    </h3>
                    <p className="text-gray-700">
                      We help you stay strong through disruption, giving you the foresight and tools to adapt and 
                      thrive when environments change.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Your Transformation, Guided with Trust
                    </h3>
                    <p className="text-gray-700">
                      We walk with you with discipline and clarity, enabling you to move decisively while staying 
                      true to your vision.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="mt-8 text-center">
                <div className="bg-white rounded-lg p-6 shadow-md max-w-3xl mx-auto">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You get the depth and discipline of large-scale expertise, with the agility and focus of a partner 
                    who tailors everything to your <span className="font-semibold text-blue-600">unique context</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the QuantaGlobal Difference?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Let us orchestrate your transformation journey with clarity, foresight, and measurable outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;