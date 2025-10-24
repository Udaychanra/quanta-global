import React from 'react';

const EdgeConnectivity: React.FC = () => {
  return (
    <section
      className="relative py-80 h-screen overflow-hidden bg-white"
      style={{
        backgroundColor: '#ffffff',
      }}
    >
      {/* The image as an absolutely positioned <img> for reliable visibility */}
      <img
        src="/edgecity.jpg"
        alt="Edge City"
        className="absolute inset-0 w-full h-1/2 object-cover object-center z-0"
        style={{
          top: 0,
          left: 0,
        }}
        draggable={false}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end">
        <div className="w-full max-w-4xl mx-auto mb-20">
          <div className="bg-[#2F3C4B] p-8 rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
              On the Edge, Always Connected, Best Performance.
            </h2>
            <p className="text-lg text-white mb-8 max-w-3xl mx-auto leading-relaxed font-body">
              Our applications are specifically designed to run on a variety of edge devices.
              Edge devices offer high speed, security, scalability, versatility & reliability.
            </p>
            <a
              href="#story"
              className="inline-flex items-center bg-[#6B8E23] hover:bg-[#5A7A1F] text-white px-8 py-3 rounded-lg font-body-medium transition-colors"
            >
              Know More
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeConnectivity;
