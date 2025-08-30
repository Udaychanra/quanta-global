import React from 'react';

const AIDataExpandedCapabilities = () => {
  const capabilities = [
    {
      title: 'Data Governance & Stewardship',
      description: 'Establish clear policies, roles, and responsibilities for ownership and accountability. Build trust in data quality and lineage across finance, supply chain, and operations. Ensure compliance with industry and regulatory standards.',
      icon: '🛡️',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Predictive Analytics',
      description: 'Use forecasting models to anticipate business outcomes. Support scenario planning for finance, risk, and supply chain management. Embed predictive KPIs into the EO Control Tower for proactive action.',
      icon: '🔮',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Critical Process Optimization',
      description: 'Map and document critical processes across the enterprise. Define ownership and accountability to prevent bottlenecks. Link optimized processes to measurable efficiency and cost savings.',
      icon: '⚙️',
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-50 to-violet-100',
      borderColor: 'border-violet-200'
    },
    {
      title: 'GenAI Analytics',
      description: 'Leverage natural language queries and copilots for real-time analysis. Detect anomalies, personalize experiences, and uncover hidden risks or fraud. Use SARAH AI to automate reconciliation, reporting, and insights delivery.',
      icon: '🤖',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Data Archiving & Retention',
      description: 'Establish governance for compliant data archiving. Balance regulatory needs with lean, efficient storage. Reduce technical debt by cleaning unnecessary, duplicate, or stale data.',
      icon: '📦',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100',
      borderColor: 'border-pink-200'
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expanded Capabilities</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Five core areas that transform your enterprise into an intelligent, data-driven organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full flex flex-col overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${capability.color} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      {capability.icon}
                    </div>
                    <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${capability.color} blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center group-hover:text-slate-800 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300 text-sm">
                    {capability.description}
                  </p>
                  
                  {/* Decorative corner element */}
                  <div className={`absolute top-4 right-4 w-3 h-3 ${capability.color.replace('from-', 'text-').replace('to-', '')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className="w-full h-full bg-current rounded-full"></div>
                  </div>
                </div>
                
                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 ${capability.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDataExpandedCapabilities;
