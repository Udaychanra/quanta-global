import React from 'react';

const TechnologyAccelerates = () => {
  const technologies = [
    'SARAH AI for intelligent automation, data cleanup, and technical debt reduction',
    'AI and analytics to surface insights and prioritize what matters most',
    'A clean core approach to simplify upgrades and reduce future complexity',
    'Cloud-ready platforms to unlock flexibility, scalability, and innovation'
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Technology That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Accelerates Results</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Brownfield transformation is more than migration—it's intelligent modernization.
            </p>
          </div>
          
          {/* Value Proposition */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 hover:shadow-blue-500/25 transition-all duration-500">
              <p className="text-xl text-slate-700 mb-8 font-semibold leading-relaxed">
                We leverage:
              </p>
              
              {/* Technologies List with enhanced styling */}
              <ul className="space-y-4 text-left max-w-3xl mx-auto">
                {technologies.map((technology, index) => (
                  <li key={index} className="flex items-center space-x-4 group/item">
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-50 group-hover/item:opacity-75 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-lg text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors duration-300">
                      {technology}
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

export default TechnologyAccelerates;
