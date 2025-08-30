import React from 'react';

const SupplyChainExpertise = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Value Proposition with enhanced card design */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 shadow-2xl border border-slate-200 hover:shadow-blue-500/25 transition-all duration-500">
              <p className="text-2xl text-slate-700 leading-relaxed font-semibold">
                With proven expertise in SAP transformation and SARAH AI as an intelligent automation layer, we help clients adapt quickly, reduce complexity, and create supply chains that are not only efficient but also adaptive and competitive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainExpertise;
