import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black text-white">
      {/* Background effects - Subtle top spotlight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/20 rounded-[100%] blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="flex justify-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/90 backdrop-blur-md shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-medium tracking-wide">Intelligence that connects your entire organization</span>
            </div>
          </div>

          {/* Headlines */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              SARAH AI — Unifying data, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                decisions and intelligence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              SARAH AI brings together identity, behavior, documents, transactions and policy understanding into a unified intelligence layer. Agentic orchestration and AI-driven reasoning support high-stakes decisions.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up delay-200">
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-12 px-8 bg-teal-400 hover:bg-teal-300 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_-5px_rgba(45,212,191,0.3)]"
              onClick={() => document.getElementById('platform-overview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore SARAH AI
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto h-12 px-8 border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full backdrop-blur-sm transition-all duration-300"
              onClick={() => document.getElementById('industry-editions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Industry Editions
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Visual Hint (matches the "card" look in the image bottom) */}
          {/* <div className="pt-16 relative animate-fade-in-up delay-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 h-full w-full" />
            <div className="bg-slate-900/50 border border-white/10 rounded-t-3xl p-4 max-w-4xl mx-auto backdrop-blur-sm transform translate-y-10 opacity-50 scale-95">
               Placeholder for the visual card interface shown in screenshot 
              <div className="h-20"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
