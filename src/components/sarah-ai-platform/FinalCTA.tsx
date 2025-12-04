import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-screen saturate-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-950/50 border border-teal-500/20 text-teal-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Ready to transform?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Build your trust foundation with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">SARAH AI</span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            SARAH AI brings clarity, intelligence and governance to the operations that matter most. Start with one workflow and scale across your organization.
          </p>
          
          <div className="flex justify-center pt-8">
            <Button 
              size="lg" 
              className="h-14 px-10 text-lg bg-teal-400 hover:bg-teal-300 text-black rounded-full shadow-[0_0_30px_-10px_rgba(45,212,191,0.6)] hover:scale-105 transition-all duration-300 font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              Talk to a Digital Trust Architect
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
