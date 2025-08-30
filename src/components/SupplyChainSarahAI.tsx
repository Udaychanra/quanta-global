import React from 'react';

const SupplyChainSarahAI = () => {
  const aiCapabilities = [
    'Intelligent demand forecasting and planning',
    'Automated inventory optimization and replenishment',
    'Real-time supply chain monitoring and alerts',
    'Predictive analytics for risk management and mitigation'
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">AI-Powered Supply Chain</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">SARAH AI</span> in Supply Chain
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto font-medium">
              Transform your supply chain with intelligent automation and AI-driven insights that drive efficiency and resilience.
            </p>
          </div>
          
          {/* AI Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-white font-medium group-hover:text-blue-100 transition-colors duration-300">
                      {capability}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* AI Icon Highlight */}
          <div className="pt-8">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl flex items-center justify-center text-4xl shadow-2xl animate-pulse">
                🤖
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainSarahAI;
