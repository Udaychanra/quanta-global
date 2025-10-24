import React, { useState, useEffect } from 'react';
import { useParallax, useFadeInOnScroll } from '../../hooks/useScroll';

const headlines = [
  {
    title: "Accelerating the AI age",
    subtitle: "Computer vision platform to solve real problems directly on compute-constrained embedded devices.",
  },
  {
    title: "Transforming Businesses with Advanced Computer Vision",
    subtitle: "Empowering cities with computer vision to create a smarter and safer environment.",
  }
];

const Hero: React.FC = () => {
  const [showPrimary, setShowPrimary] = useState(true);
  const { ref: parallaxRef, offsetY } = useParallax(0.3);
  const { ref: fadeRef, isVisible } = useFadeInOnScroll(0.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPrimary((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="relative flex items-center justify-center min-h-[320px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px] xl:min-h-[540px] 2xl:min-h-[600px] -mt-32 pt-40 overflow-hidden"
      style={{
        backgroundImage: 'url(/SwiftAI-1.png)',
        backgroundSize: 'cover',
        backgroundPosition: `center ${offsetY}px`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        ref={fadeRef}
        className="relative z-10 w-full flex flex-col items-center justify-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        {/* Headline */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center relative" style={{ minHeight: '90px' }}>
            {/* Animated Headline swap */}
            <div
              className="absolute left-0 right-0 top-0 transition-opacity duration-700 flex flex-col items-center"
              style={{
                opacity: showPrimary ? 1 : 0,
                pointerEvents: showPrimary ? "auto" : "none",
                transition: "opacity 0.7s",
              }}
            >
              <h1 className="text-white font-bold text-[2rem] md:text-[2.5rem] lg:text-[2.7rem] xl:text-[2.9rem] leading-tight mb-1"
                  style={{
                    fontFamily: "serif",
                    letterSpacing: "-.02em",
                  }}
              >
                {headlines[0].title}
              </h1>
              <p className="text-white text-base md:text-lg xl:text-lg mb-0 font-normal tracking-tight"
                style={{
                  fontFamily: "serif",
                  marginTop: '0px',
                  marginBottom: '0px',
                  opacity: 0.95,
                  lineHeight: 1.3,
                  maxWidth: '720px',
                }}
              >{headlines[0].subtitle}</p>
            </div>
            <div
              className="absolute left-0 right-0 top-0 transition-opacity duration-700 flex flex-col items-center"
              style={{
                opacity: showPrimary ? 0 : 1,
                pointerEvents: showPrimary ? "none" : "auto",
                transition: "opacity 0.7s",
              }}
            >
              <h2 className="text-white font-bold text-[2rem] md:text-[2.5rem] lg:text-[2.7rem] xl:text-[2.9rem] leading-tight mb-1"
                style={{
                  fontFamily: "serif",
                  letterSpacing: "-.02em",
                }}
              >
                {headlines[1].title}
              </h2>
              <p className="text-white text-base md:text-lg xl:text-lg mb-0 font-normal tracking-tight"
                style={{
                  fontFamily: "serif",
                  marginTop: '0px',
                  marginBottom: '0px',
                  opacity: 0.95,
                  lineHeight: 1.3,
                  maxWidth: '620px',
                }}
              >{headlines[1].subtitle}</p>
            </div>
          </div>
          {/* CTA Buttons - side by side, beneath subheading, orange and outlined white */}
          <div className="flex flex-row gap-4 mt-6">
            <a
              href="#studio"
              className="inline-flex items-center px-6 py-2.5 text-base font-semibold rounded bg-[#F18641] hover:bg-[#e2772f] text-white shadow transition-colors duration-200"
              style={{ minWidth: '170px', justifyContent: 'center' }}
            >
              Explore Solutions
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#edge"
              className="inline-flex items-center px-6 py-2.5 text-base font-semibold rounded border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#F18641] transition-colors duration-200"
              style={{ minWidth: '170px', justifyContent: 'center' }}
            >
              <svg className="mr-2 -ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Products
            </a>
          </div>
        </div>
        {/* Carousel Indicators (visually hidden to match the screenshot, but logic preserved for a11y/future use) */}
        <div className="flex justify-center mt-10 space-x-2" aria-hidden="true" style={{ opacity: 0, pointerEvents: 'none', height: 0 }}>
          <button className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            showPrimary ? 'bg-blue-600' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
          }`}></button>
          <button className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            !showPrimary ? 'bg-blue-600' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
          }`}></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
