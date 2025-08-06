import { ArrowRight, Code, Users, Cloud, Zap } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/hero.webp" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="section-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Section - Content */}
            <div className="animate-fade-in space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Welcome to QuantaGlobal - From digital to decisive.
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  You already know your business can be better
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Faster decisions. Smarter operations. More value from every investment.
                  You don’t need more dashboards or disconnected tools.
                  You need clarity.
                  You need systems that scale with you, not slow you down.<br />
                  That’s where we come in.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  At QuantaGlobal, we bring deep expertise in AI, ERP, and SAP to help you unlock what’s possible.
                </p>
              </div>
              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            {/* Right Section - Empty for now, can be used for additional content */}
            <div className="flex justify-center lg:justify-end">
              {/* This space can be used for additional content or kept empty */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;