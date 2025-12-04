import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Bot, Cpu, MessageSquare, Workflow, Scale, Blocks } from 'lucide-react';

const CoreCapabilities = () => {
  const capabilities = [
    {
      icon: ShieldCheck,
      title: 'Unified Trust Intelligence',
      description: 'Consolidates identity, behavioral, transactional, document and policy data into a single trust layer.',
      color: 'text-teal-400',
      bg: 'bg-teal-400/10'
    },
    {
      icon: Bot,
      title: 'Agentic AI Framework',
      description: 'Multi-agent system for customer interactions, decision preparation, and context building within policy guardrails.',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      icon: Cpu,
      title: 'AI-Driven Reasoning',
      description: 'Contextual reasoning enabling clear decisions in environments with incomplete or real-time information.',
      color: 'text-violet-400',
      bg: 'bg-violet-400/10'
    },
    {
      icon: MessageSquare,
      title: 'Voice & Multimodal',
      description: 'Voice, chat and guided digital interactions for onboarding, verification, and service engagements.',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10'
    },
    {
      icon: Workflow,
      title: 'Intelligent Orchestration',
      description: 'End-to-end flow orchestration powered by agentic intelligence and human-in-the-loop oversight.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10'
    },
    {
      icon: Scale,
      title: 'Explainability & Governance',
      description: 'Transparent narratives, traceability, and policy-aligned reasoning designed for audit and compliance.',
      color: 'text-rose-400',
      bg: 'bg-rose-400/10'
    },
    {
      icon: Blocks,
      title: 'Integration Layer',
      description: 'Seamless integration with core apps, ERPs, LOS/LMS, CRMs, and data lakes. No core replacement required.',
      color: 'text-slate-400',
      bg: 'bg-slate-400/10',
      fullWidth: true
    }
  ];

  return (
    <section className="py-32 bg-slate-950/50 relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Core capabilities of SARAH AI
          </h2>
          <p className="text-lg text-slate-400">
            A comprehensive suite of intelligence tools designed to unify and secure your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className={`group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-teal-500/50 hover:to-blue-500/50 transition-all duration-500 ${cap.fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="relative h-full bg-black rounded-xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl -mr-10 -mt-10 group-hover:from-teal-500/20 transition-colors duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 group-hover:border-teal-500/50 transition-colors">
                    <cap.icon className={`w-6 h-6 ${cap.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{cap.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-4 flex-grow">
                    {cap.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
