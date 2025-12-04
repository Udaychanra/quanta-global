import React from 'react';
import { Shield, Brain, Network, Mic, FileText, CheckCircle, Lock, Layers } from 'lucide-react';

const PlatformOverview = () => {
  const features = [
    { icon: Shield, label: 'Unified trust intelligence' },
    { icon: Brain, label: 'Agentic AI capabilities' },
    { icon: Network, label: 'AI-driven reasoning' },
    { icon: Mic, label: 'Voice and multimodal interactions' },
    { icon: Layers, label: 'Intelligent orchestration' },
    { icon: FileText, label: 'Explainable decisions' },
    { icon: Lock, label: 'Audit and governance controls' },
    { icon: CheckCircle, label: 'Integration-first architecture' },
  ];

  return (
    <section id="platform-overview" className="py-32 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                A platform designed for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                  trust-critical environments
                </span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                SARAH AI provides a single trust and intelligence foundation that strengthens decision-making, oversight and control across complex organizational workflows.
              </p>
              <p>
                The platform integrates with existing systems to create unified visibility and support agentic execution of high-stakes, policy-aligned processes.
              </p>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="font-medium text-white">
                  This architecture allows SARAH AI to operate across verticals and business lines while ensuring consistency, clarity and compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative group hover:border-teal-500/30 transition-colors duration-500">
            {/* Card Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xl font-semibold text-white mb-8 relative z-10">SARAH AI combines:</h3>
            <div className="grid sm:grid-cols-2 gap-4 relative z-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 group/item"
                >
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 group-hover/item:bg-teal-500/20 group-hover/item:text-teal-300 transition-colors">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-300 group-hover/item:text-white transition-colors">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
