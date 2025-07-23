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
                  QuantaGlobal and Digital Innovation
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  Taking your business to the next level.
                </h2>
                
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  By combining our industry knowledge with emerging technologies and innovative strategies, 
                  QuantaGlobal is helping organizations grow, engage with more customers, and transform 
                  their business operations to elevate their digital presence.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Learn more 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Core Services Highlights */}
                {/* <div className="grid grid-cols-2 gap-6 pt-8 animate-slide-up">
                  <div className="group text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 mb-3 inline-block shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-1">SAP Consulting</h3>
                    <p className="text-xs text-white/80">End-to-end SAP solutions</p>
                  </div>
                  
                  <div className="group text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 mb-3 inline-block shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-1">Staff Augmentation</h3>
                    <p className="text-xs text-white/80">Expert talent on-demand</p>
                  </div>
                  
                  <div className="group text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 mb-3 inline-block shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                      <Cloud className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-1">Cloud Solutions</h3>
                    <p className="text-xs text-white/80">AWS, Azure, cloud strategy</p>
                  </div>
                  
                  <div className="group text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-3 mb-3 inline-block shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-1">Digital Transformation</h3>
                    <p className="text-xs text-white/80">AI/ML, RPA, automation</p>
                  </div>
                </div> */}
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