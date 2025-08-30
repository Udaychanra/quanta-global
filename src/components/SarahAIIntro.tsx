import React from 'react';

const SarahAIIntro = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SARAH AI</span> – Intelligence That Clears the Path
            </h2>
          </div>
          
          {/* Main Content */}
          <div className="space-y-8 text-left max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Intro</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Transformation is demanding. Legacy systems weigh you down, technical debt piles up, and teams spend too much time on manual work instead of driving growth. Customers, markets, and regulators demand speed and clarity — all at once.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                That's where SARAH AI comes in. Quietly powerful, always present — SARAH simplifies what's complex, clears away what's unnecessary, and accelerates what matters most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SarahAIIntro;
