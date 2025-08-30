import React from 'react';

const CloudJourneyHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main Heading with enhanced typography */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              End-to-End Journey with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">SAP S/4HANA Public Cloud</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed font-medium max-w-4xl mx-auto">
              At QuantaGlobal, we cover the full spectrum of your transformation journey. From strategic planning to ongoing operations, our advise–implement–operate model ensures clarity, speed, and measurable value at every stage.
            </p>
            
            {/* Animated underline */}
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudJourneyHero;
