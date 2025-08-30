import React from 'react';
import { Button } from './ui/button';

const ServiceBuckets = () => {
  const services = [
    {
      title: 'AI & Data',
      description: 'We unlock the power of AI and data to generate actionable insights, streamline decision-making, and fuel growth with measurable impact.',
      icon: '🤖',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      accentColor: 'text-blue-600'
    },
    {
      title: 'Cloud & Platforms',
      description: 'We integrate cloud, edge computing, and modern platforms for secure, scalable, and efficient operations that drive resilience.',
      icon: '☁️',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-200',
      accentColor: 'text-emerald-600'
    },
    {
      title: 'Transformation & Operations',
      description: 'We reimagine mission-critical systems and processes—modernizing legacy platforms and enabling innovation at scale.',
      icon: '🚀',
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-50 to-violet-100',
      borderColor: 'border-violet-200',
      accentColor: 'text-violet-600'
    },
    {
      title: 'Industry Solutions',
      description: 'We combine deep industry knowledge with next-gen technology to solve complex challenges across sectors and create measurable outcomes.',
      icon: '🏭',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      accentColor: 'text-orange-600'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Buckets</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to transform every aspect of your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className={`relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-xl border ${service.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full flex flex-col overflow-hidden`}>
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      {service.icon}
                    </div>
                    <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Button with enhanced styling */}
                  <div className="mt-auto">
                    <Button
                      className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 border-0 shadow-md hover:shadow-xl`}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Find out more</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className={`absolute top-4 right-4 w-3 h-3 ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className="w-full h-full bg-current rounded-full"></div>
                  </div>
                </div>
                
                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBuckets;
