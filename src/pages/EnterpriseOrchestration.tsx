import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const EnterpriseOrchestration = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise Orchestration (EO)
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
              QuantaGlobal's Strategic Anchor
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              EO is not a service, it's the overall strategy. It's the umbrella that governs all enterprise transformations — 
              ensuring foresight, orchestration, and measurable outcomes.
            </p>
          </div>

          {/* Strategic Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Strategic Framework
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                EO is your strategic anchor → all transformations (SAP, Finance, Supply Chain, Cloud) sit inside it. 
                Horizontal enablers (Program Planning, Vendor Selection, AI & Data) power those transformations.
              </p>
            </div>

            {/* EO Framework Visual */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Enterprise Orchestration (EO)</h3>
                <p className="text-blue-600 font-medium">Strategic Anchor & Governance</p>
              </div>
              
              {/* EO Core */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">SAP & ERP</h4>
                  <p className="text-sm text-gray-600">Enterprise resource planning transformation</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Finance</h4>
                  <p className="text-sm text-gray-600">Financial transformation & optimization</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Supply Chain</h4>
                  <p className="text-sm text-gray-600">Supply chain transformation</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Cloud</h4>
                  <p className="text-sm text-gray-600">Cloud platform transformation</p>
                </div>
              </div>

              {/* Horizontal Enablers */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-indigo-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Program Planning</h4>
                  <p className="text-sm text-gray-600">Strategic planning & governance</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-indigo-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Vendor Selection</h4>
                  <p className="text-sm text-gray-600">Partner ecosystem strategy</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-indigo-500">
                  <h4 className="font-semibold text-gray-900 mb-2">AI & Data</h4>
                  <p className="text-sm text-gray-600">Intelligent enterprise capabilities</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI & Data Sub-Pillars */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI & Data Capabilities
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                AI & Data is positioned as a broad capability, with sub-pillars that power all EO transformations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Insights</h3>
                <p className="text-gray-600">Reporting, forecasting, decision intelligence</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Applied AI</h3>
                <p className="text-gray-600">SARAH AI, automation, copilots</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emerging Tech</h3>
                <p className="text-gray-600">Computer vision, IoT, digital twins, AR/VR</p>
              </div>
            </div>
          </div>

          {/* Products Integration */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Where Products Fit
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Products like SARAH AI are not a separate layer inside EO — they're cross-cutting accelerators that embed across all EO offerings
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Cutting Accelerators</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>They embed across EO offerings (Finance, ERP, Supply Chain, Cloud)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>They are proprietary IP (a differentiator, not just a capability)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>You'll want to demo, market, and deep-dive SARAH independently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Clients may come looking specifically for SARAH AI</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">SARAH AI Integration</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Finance</span>
                    <span className="text-blue-600">→ automates reconciliations, reporting</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>ERP</span>
                    <span className="text-blue-600">→ cleans data, reduces technical debt</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Supply Chain</span>
                    <span className="text-blue-600">→ predictive AI, visibility</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cloud</span>
                    <span className="text-blue-600">→ accelerates clean core adoption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Mental Model */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visual Mental Model
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Think of it like this: Services = horizontal capabilities, Offerings = business transformations, 
                Products = proprietary accelerators that cut across both
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-6 mb-4">
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Services</h3>
                <p className="text-gray-600">Horizontal capabilities (EO enablers like AI & Data, Vendor Selection, Program Planning)</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-lg p-6 mb-4">
                  <svg className="w-12 h-12 text-green-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Offerings</h3>
                <p className="text-gray-600">Business transformations delivered under EO (SAP, Finance, Supply Chain, Cloud)</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-lg p-6 mb-4">
                  <svg className="w-12 h-12 text-purple-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Products</h3>
                <p className="text-gray-600">Proprietary accelerators that cut across both services and offerings</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Let QuantaGlobal orchestrate your transformation journey with strategic foresight and measurable outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnterpriseOrchestration;