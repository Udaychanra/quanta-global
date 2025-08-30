import React from 'react';

const PESValue = () => {
  const values = [
    {
      title: 'Independent',
      description: 'No hidden alliances, only client-first choices.',
      icon: '🎯',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Aligned',
      description: 'Partners fit the strategy and transformation roadmap.',
      icon: '🔗',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Orchestrated',
      description: 'Vendors integrated into EO execution, not bolted on.',
      icon: '🎼',
      color: 'from-violet-500 to-violet-600'
    }
  ];

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
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Value</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              QuantaGlobal ensures leaders don't just select a vendor, but build a partner ecosystem that is:
            </p>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-lg text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PESValue;
