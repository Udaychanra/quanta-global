import React from 'react';
import { Check } from 'lucide-react';

const CrossIndustryUseCases = () => {
  const useCases = [
    'Onboarding & identity verification',
    'Document intelligence',
    'Invoicing & accounts payable intelligence',
    'Decision intelligence & contextual reasoning',
    'Suitability & policy compliance',
    'Collections & repayment guidance',
    'Claims & dispute resolution',
    'Customer service and contact center intelligence',
    'Advisor and RM copilots',
    'Vendor and partner validations',
    'Customer profile and trust scoring'
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden group">
          {/* Border Gradient Animation on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none" />

          <div className="relative z-10 text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A common intelligence layer for <span className="text-teal-400">trust-critical use cases</span>
            </h2>
            <p className="text-slate-400 text-lg">
              SARAH AI supports a wide range of cross-industry, high-stakes workflows through a unified intelligence foundation.
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-x-12 gap-y-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-4 group/item">
                <div className="mt-1 p-1 bg-teal-500/20 rounded-full border border-teal-500/30 group-hover/item:bg-teal-400 group-hover/item:border-teal-400 transition-all duration-300">
                  <Check className="w-3 h-3 text-teal-400 group-hover/item:text-black transition-colors" />
                </div>
                <span className="text-lg text-slate-300 group-hover/item:text-white transition-colors">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossIndustryUseCases;
