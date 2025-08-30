import React from 'react';

const CloudJourneySteps = () => {
  const steps = [
    {
      number: '1',
      title: 'Advise – Build the Right Strategy',
      subtitle: 'Every transformation begins with clarity.',
      description: 'We start with a strategic assessment to align your SAP roadmap with your business priorities.',
      features: [
        'Define transformation goals and success metrics',
        'Identify critical processes and data to preserve',
        'Assess technical debt and opportunities for automation',
        'Design a tailored migration plan based on your timing and needs'
      ],
      sarahAIAdvantage: 'Intelligent analysis to identify redundant processes and unnecessary data before migration.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      number: '2',
      title: 'Implement – Move with Speed and Precision',
      subtitle: 'Our Brownfield-informed approach accelerates your move to the cloud—without unnecessary disruption.',
      features: [
        'Deploy SAP S/4HANA Public Cloud in as little as 12 to 16 weeks',
        'Automate migration of data, workflows, and configurations',
        'Integrate security, compliance, and extensions seamlessly',
        'Enable change management and workforce adoption'
      ],
      sarahAIAdvantage: 'Automated data cleanup and migration for accuracy, speed, and reduced manual effort.',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-200'
    },
    {
      number: '3',
      title: 'Operate – Optimize for the Future',
      subtitle: 'Transformation doesn\'t stop at go-live. We provide continuous support to keep your SAP environment resilient and adaptive.',
      features: [
        'Ongoing monitoring, optimization, and updates',
        'Extend into the full SAP cloud suite (finance, supply chain, HR, analytics)',
        'Drive continuous innovation with AI and cloud-native tools',
        'Ensure performance, scalability, and compliance as your enterprise grows'
      ],
      sarahAIAdvantage: 'Continuous automation to streamline repetitive tasks, surface real-time insights, and reduce future technical debt.',
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-50 to-violet-100',
      borderColor: 'border-violet-200'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connecting lines and arrows */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform -translate-y-1/2 z-0"></div>
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform -translate-y-1/2 z-20 shadow-lg"></div>
                </>
              )}
              
              <div className="relative">
                <div className={`relative bg-gradient-to-br ${step.bgColor} rounded-3xl p-10 shadow-xl border ${step.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105`}>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step number and title */}
                    <div className="flex items-center space-x-6 mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xl text-slate-600 font-medium">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="mb-8">
                      <ul className="space-y-3">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-5 h-5 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-slate-700 font-medium">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* SARAH AI Advantage */}
                    <div className="bg-white/60 rounded-2xl p-6 border border-white/40">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">🤖</span>
                        </div>
                        <span className="text-lg font-semibold text-slate-800">
                          SARAH AI advantage:
                        </span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {step.sarahAIAdvantage}
                      </p>
                    </div>
                  </div>
                </div>
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

export default CloudJourneySteps;
