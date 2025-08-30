import React from 'react';

const EOvsPMO = () => {
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
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">EO</span>, not PMO?
            </h2>
          </div>
          
          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional PMO Card */}
            <div className="group">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-gray-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-slate-400 to-gray-500 flex items-center justify-center text-2xl text-white shadow-lg mb-4">
                      📋
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Traditional PMO</h3>
                    <p className="text-slate-600 text-lg">Manages tasks and timelines</p>
                  </div>
                  
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <span className="text-slate-700">Focus on project delivery</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <span className="text-slate-700">Task-based management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <span className="text-slate-700">Timeline tracking</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <span className="text-slate-700">Resource allocation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* EO Card */}
            <div className="group">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-2xl text-white shadow-lg mb-4">
                      🎯
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise Orchestration</h3>
                    <p className="text-slate-600 text-lg">Guided by foresight, harmonized across functions</p>
                  </div>
                  
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">Strategic foresight and clarity</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">Cross-functional alignment</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">Transformation agility</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">Complexity into clarity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Message */}
          <div className="pt-8">
            <p className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto">
              EO ensures your transformation is guided by foresight, harmonized across functions, and delivered with agility — turning complexity into clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EOvsPMO;
