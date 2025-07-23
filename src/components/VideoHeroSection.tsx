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
        {/* Green leafy background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br ">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.3),transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(22,163,74,0.3),transparent_50%)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_40%_80%,rgba(21,128,61,0.3),transparent_50%)]"></div>
          </div>
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
              Connecting the dots.<br />
              <span className="text-blue-500 drop-shadow-lg">It's what we do.</span>
            </h1>
            {/* Descriptive Paragraph */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Since the beginning, <span className="text-blue-400 font-bold">QuantaGlobal</span> has been about creating connections. With our clients, our talent, and our communities. Connecting with leaders far and wide, we are changing the world—<br className="hidden md:inline"/>making an impact that matters.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-white text-blue-600 font-bold hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Who we are
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-white text-blue-600 font-bold hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                What we do
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 font-bold hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-400"
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