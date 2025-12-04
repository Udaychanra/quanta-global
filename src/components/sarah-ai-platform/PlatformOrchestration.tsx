import React from 'react';

const PlatformOrchestration = () => {
  const systems = [
    'Identity and customer platforms',
    'Core business systems',
    'ERP & financial systems',
    'Risk and compliance engines',
    'CRM and service channels',
    'Payment infrastructures',
    'Data lakes and warehouses',
    'Partner and vendor ecosystems'
  ];

  return (
    <section className="py-32 bg-black overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
         <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Orbit Lines */}
            <div className="absolute inset-0 border border-white/5 rounded-full scale-150 opacity-20" />
            <div className="absolute inset-0 border border-white/5 rounded-full scale-125 opacity-20" />
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {systems.map((system, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:border-teal-500/50 hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1 text-center flex items-center justify-center min-h-[100px] group"
                >
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{system}</span>
                </div>
              ))}
              
              {/* Central Hub Visual */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full flex items-center justify-center z-20 animate-pulse">
                <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full shadow-[0_0_50px_-10px_rgba(45,212,191,0.5)]" />
                <div className="relative z-10 text-center">
                  <span className="block text-white font-bold text-xl leading-none">SARAH AI</span>
                  <span className="text-teal-100 text-sm">Core</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Enterprise orchestration <br/>
                powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">unified intelligence</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                SARAH AI acts as an enterprise intelligence backbone across your entire technology stack, breaking down silos and unifying data flow.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-1.5 h-12 bg-teal-500 rounded-full" />
                <p className="font-medium text-white">
                  Ensuring consistency, clarity and trust across business lines, functions and customer interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOrchestration;
