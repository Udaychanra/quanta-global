import React from 'react';

const TCTWhatItDelivers = () => {
  const capabilities = [
    {
      title: 'Enterprise Operating Model Design',
      description: 'Align enterprise performance, efficiency, and process integration. Build resilience, synergy, and business continuity into the backbone.',
      icon: '🏗️',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Value Engineering',
      description: 'Create strong, insight-driven business cases. Track outcomes and ROI to ensure technology delivers measurable value.',
      icon: '💰',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Strategic Vision & Stakeholder Alignment',
      description: 'Define the transformation vision with clarity. Build alignment across executives and cross-functional teams.',
      icon: '🎯',
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-50 to-violet-100',
      borderColor: 'border-violet-200'
    },
    {
      title: 'Process Design Thinking & Innovation',
      description: 'Reimagine workflows with user-centric design. Apply innovation to solve problems and deliver better outcomes.',
      icon: '💡',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Intelligent Automation & AI Strategy',
      description: 'Embed SARAH AI and automation to enhance performance. Streamline operations and create sustained competitive advantage.',
      icon: '🤖',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100',
      borderColor: 'border-pink-200'
    },
    {
      title: 'Accelerated Planning',
      description: 'Adaptive roadmaps powered by foresight and SARAH AI scenario stress-testing. Beyond static plans → responsive, living blueprints.',
      icon: '⚡',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
      borderColor: 'border-indigo-200'
    },
    {
      title: 'Intelligent Testing & QA Automation',
      description: 'Automated testing and anomaly detection for faster, safer rollouts.',
      icon: '🔍',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
      borderColor: 'border-teal-200'
    },
    {
      title: 'Cloud Modernization & Platforms',
      description: 'Ensure platforms are ready to host change at scale. Reduce technical debt and connect execution to enterprise cloud strategy.',
      icon: '☁️',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100',
      borderColor: 'border-cyan-200'
    },
    {
      title: 'Change Enablement & Adoption',
      description: 'Clear narratives, training, and adoption support. Turn resistance into alignment and ensure value sticks.',
      icon: '🚀',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200'
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            What the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Control Tower</span> Delivers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nine key areas that transform how you orchestrate enterprise change
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full flex flex-col overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${capability.color} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      {capability.icon}
                    </div>
                    <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${capability.color} blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center group-hover:text-slate-800 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300 text-sm">
                    {capability.description}
                  </p>
                  
                  {/* Decorative corner element */}
                  <div className={`absolute top-4 right-4 w-3 h-3 ${capability.color.replace('from-', 'text-').replace('to-', '')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className="w-full h-full bg-current rounded-full"></div>
                  </div>
                </div>
                
                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 ${capability.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TCTWhatItDelivers;
