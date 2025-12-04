import React from 'react';
import { ClipboardCheck, Rocket, LineChart, Network, RefreshCw } from 'lucide-react';

const DeploymentIntegration = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Assessment & Mapping',
      description: 'Analyze workflows, policies, operational structures and data readiness.'
    },
    {
      icon: Rocket,
      title: 'Guardrail-First Deployment',
      description: 'Activate SARAH AI for a targeted workflow under strict governance.'
    },
    {
      icon: LineChart,
      title: 'Measured Evaluation (60–90 days)',
      description: 'Assess impact on speed, decision quality, governance, operational load and customer experience.'
    },
    {
      icon: Network,
      title: 'Scaling Across Workflows',
      description: 'Expand intelligence and agentic capabilities across additional workflows and business lines.'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Learning',
      description: 'Iterate policies, guardrails, reasoning behaviors and agents over time.'
    }
  ];

  return (
    <section className="py-32 bg-slate-950/50 border-t border-white/5">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Safe, phased and governance-aligned adoption
          </h2>
          <div className="w-24 h-1.5 bg-teal-500 rounded-full mx-auto opacity-50" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal-500/0 via-teal-500/50 to-teal-500/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Icon Marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-slate-900 border-2 border-teal-500/50 shadow-[0_0_20px_-5px_rgba(45,212,191,0.5)] flex items-center justify-center z-10 group">
                  <step.icon className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content Box */}
                <div className="ml-20 md:ml-0 md:w-[42%] group">
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-teal-500/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                    {/* Number Watermark */}
                    <div className="absolute -top-4 -right-4 text-[80px] font-bold text-white/5 select-none leading-none">
                      0{index + 1}
                    </div>
                    
                    <div className="text-sm font-bold text-teal-400 mb-2 tracking-wider uppercase">Phase {index + 1}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
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

export default DeploymentIntegration;
