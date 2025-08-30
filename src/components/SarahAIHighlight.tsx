import React from 'react';

const SarahAIHighlight = () => {
  const benefits = [
    'Automate invoices, reconciliations, and reporting',
    'Reduce errors and manual work',
    'Provide real-time visibility',
    'Free finance teams to focus on insight and forecasting'
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
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">AI-Powered Finance</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              SARAH AI in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Finance</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto font-medium">
              SARAH AI transforms finance operations and GBS with intelligent automation. It helps leaders:
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
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
                      {benefit}
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
          
          {/* Bottom decorative elements */}
          <div className="pt-12 space-y-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent mx-auto rounded-full"></div>
            
            <div className="flex justify-center items-center space-x-4">
              <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-blue-400/40 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-pulse delay-150"></div>
              <div className="w-1 h-1 bg-blue-400/40 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SarahAIHighlight;
