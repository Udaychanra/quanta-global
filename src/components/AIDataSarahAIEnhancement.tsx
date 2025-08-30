import React from 'react';

const AIDataSarahAIEnhancement = () => {
  const enhancements = [
    {
      title: 'Governance & Stewardship',
      description: 'Flags data quality issues automatically',
      icon: '🛡️',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Predictive Analytics',
      description: 'Runs accelerated scenario modeling and stress tests',
      icon: '🔮',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Process Optimization',
      description: 'Cleans redundant workflows and surfaces improvements',
      icon: '⚙️',
      color: 'from-violet-500 to-violet-600'
    },
    {
      title: 'GenAI Analytics',
      description: 'Copilots and natural language queries powered by SARAH',
      icon: '🤖',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Archiving & Retention',
      description: 'Automates classification, cleanup, and retention policies',
      icon: '📦',
      color: 'from-pink-500 to-pink-600'
    }
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SARAH AI</span> Embedded in Data & AI
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              SARAH enhances each capability, turning your data into intelligent action
            </p>
          </div>
          
          {/* Enhancements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {enhancements.map((enhancement, index) => (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${enhancement.color} flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {enhancement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                      {enhancement.title}
                    </h3>
                    <p className="text-lg text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      {enhancement.description}
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

export default AIDataSarahAIEnhancement;
