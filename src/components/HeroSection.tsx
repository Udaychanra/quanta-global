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
    <section id="home" className="hero-gradient text-white section-padding pt-32">
      <div className="section-container">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Digital
            <br />
            <span >Transformation</span>
            <br />
            with Expertise
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            We help organizations streamline operations, reduce costs, and accelerate innovation 
            through cutting-edge technology solutions and expert manpower.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-medium"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
          </div>

          {/* Core Services Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3 inline-block">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">SAP Consulting</h3>
              <p className="text-sm text-white/80">End-to-end SAP solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3 inline-block">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">Staff Augmentation</h3>
              <p className="text-sm text-white/80">Expert talent on-demand</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3 inline-block">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">Cloud Solutions</h3>
              <p className="text-sm text-white/80">AWS, Azure, cloud strategy</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3 inline-block">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">Digital Transformation</h3>
              <p className="text-sm text-white/80">AI/ML, RPA, automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;