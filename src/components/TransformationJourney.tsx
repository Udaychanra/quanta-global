import React from 'react';

const TransformationJourney = () => {
  const capabilities = [
    'See and understand your current SAP landscape clearly',
    'Identify the processes and data that truly matter to your business',
    'Leverage SARAH AI to automate cleanup of unnecessary data and technical debt',
    'Design a roadmap that balances speed, cost, and risk',
    'Move into SAP S/4HANA with agility, clarity, and confidence'
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Streamline Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Transformation Journey</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Our Brownfield approach is designed to fit your business—not force you into a rebuild.
            </p>
          </div>
          
          {/* Value Proposition */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 shadow-2xl border border-slate-200 hover:shadow-blue-500/25 transition-all duration-500">
              <p className="text-xl text-slate-700 mb-8 font-semibold leading-relaxed">
                We help you:
              </p>
              
              {/* Capabilities List with enhanced styling */}
              <ul className="space-y-4 text-left max-w-3xl mx-auto">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-center space-x-4 group/item">
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-50 group-hover/item:opacity-75 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-lg text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors duration-300">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationJourney;
