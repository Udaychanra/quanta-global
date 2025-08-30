import React from 'react';

const CloudCapabilities = () => {
  const capabilities = [
    {
      title: 'End-to-End Transformation Support',
      description: 'From vision and business case development to cloud deployment and ongoing support.'
    },
    {
      title: 'Industry-Focused Solutions',
      description: 'Preconfigured, sector-specific approaches that accelerate adoption and outcomes.'
    },
    {
      title: 'Deep SAP + AI Expertise',
      description: 'Combining ERP modernization with automation, analytics, and next-gen capabilities.'
    },
    {
      title: 'Integration Across the SAP Cloud Suite',
      description: 'Extend your core transformation seamlessly to finance, supply chain, HR, and beyond.'
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Capabilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full flex flex-col overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                    {capability.description}
                  </p>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full h-full bg-current rounded-full"></div>
                  </div>
                </div>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudCapabilities;
