import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const VideoHeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="herovid.mp4" type="video/mp4" />
          {/* Fallback for when video doesn't load */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        </video>
        {/* Clean gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        {/* Subtle accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-10 animate-fade-in">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-2xl">
                Connecting the Dots
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 drop-shadow-xl">
                It's what we do. Always have.
              </h2>
            </div>
            
            {/* Descriptive Paragraph */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-lg">
                At <span className="text-blue-300 font-bold">QuantaGlobal</span>, we build the connections that drive real transformation.
              </p>
              <div className="space-y-2 text-lg md:text-xl text-white/95 leading-relaxed">
                <p>Between strategy and execution.</p>
                <p>Between AI and ROI.</p>
                <p>Between today's challenges and tomorrow's growth.</p>
              </div>
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-lg pt-4">
                We partner with ambitious leaders to solve the problems that matter with speed, scale, and precision.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-white/95 text-blue-700 font-semibold hover:bg-white px-8 py-3 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Who we are
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-white/95 text-blue-700 font-semibold hover:bg-white px-8 py-3 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                What we do
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-white/95 text-blue-700 font-semibold hover:bg-white px-8 py-3 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Careers
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Elements Overlay */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
      </div> */}
    </section>
  );
};

export default VideoHeroSection; 