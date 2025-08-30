import React from 'react';

const HeroIntro = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main Heading with enhanced typography */}
          <div className="space-y-6">
            {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 leading-tight tracking-tight">
              Hero Intro
            </h1> */}
            
            {/* Animated underline */}
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          {/* Subtitle with enhanced styling */}
          <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-medium max-w-4xl mx-auto">
            Transform the heart of your business across products, platforms, and operations.
          </p>
          
          {/* Challenge Statement with enhanced card design */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 hover:shadow-blue-500/25 transition-all duration-500">
              <p className="text-xl text-slate-700 mb-8 font-semibold leading-relaxed">
                Organizations face rapid disruption. With QuantaGlobal's AI & Transformation Services, you can:
              </p>
              
              {/* Benefits List with enhanced styling */}
              <ul className="space-y-4 text-left max-w-3xl mx-auto">
                {[
                  'Enhance products and services',
                  'Achieve efficiency and cost control',
                  'Improve financial performance',
                  'Accelerate speed to market'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-4 group/item">
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-50 group-hover/item:opacity-75 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-lg text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors duration-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Value Proposition with enhanced styling */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl blur-lg opacity-10"></div>
            <p className="relative text-2xl text-slate-800 font-bold leading-relaxed bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
              We don't just advise—we implement and operate solutions that scale with your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;
