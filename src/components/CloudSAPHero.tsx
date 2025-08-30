import React from 'react';

const CloudSAPHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Moving to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SAP S/4HANA Public Cloud</span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-medium max-w-4xl mx-auto">
              Full-service capabilities for end-to-end transformation and the built-to-evolve enterprise.
            </p>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Cloud has become essential to building a competitive edge. SAP S/4HANA Public Cloud enables enterprises to innovate rapidly, gain sharper insights, and increase transparency across the business.
            </p>
          </div>
          
          {/* Value Proposition with enhanced card design */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 hover:shadow-blue-500/25 transition-all duration-500">
              <p className="text-2xl text-slate-700 leading-relaxed font-semibold">
                At QuantaGlobal, we act as your single source of solutions and services to simplify the journey. From vision and strategy to implementation and ongoing operations, we cover the advise–implement–operate spectrum to deliver measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSAPHero;
