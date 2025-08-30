import React from 'react';

const FinanceApproach = () => {
  const approaches = [
    {
      title: 'Advise',
      description: 'Define strategy & roadmap',
      icon: '🎯',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Implement',
      description: 'Modernize operations with SAP, AI, and data-driven platforms',
      icon: '⚡',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Operate',
      description: 'Ensure efficiency, adaptability, and sustained value',
      icon: '🔄',
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Finance Methodology</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our Approach: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Advise. Implement. Operate.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A proven methodology that transforms finance from a reporting function to a strategic driver of enterprise value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {approaches.map((approach, index) => (
            <div key={index} className="group relative">
              {/* Connecting lines and arrows */}
              {index < approaches.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform -translate-y-1/2 z-0"></div>
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform -translate-y-1/2 z-20 shadow-lg"></div>
                </>
              )}
              
              <div className="relative h-full">
                <div className={`relative bg-gradient-to-br ${approach.bgColor} rounded-3xl p-8 shadow-xl border ${approach.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full group-hover:scale-105`}>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${approach.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with enhanced styling */}
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${approach.color} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                        {approach.icon}
                      </div>
                      <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${approach.color} blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center group-hover:text-slate-800 transition-colors duration-300">
                      {approach.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-center group-hover:text-slate-700 transition-colors duration-300">
                      {approach.description}
                    </p>
                    
                    {/* Step indicator */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${approach.color} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="text-center mt-16">
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

export default FinanceApproach;
