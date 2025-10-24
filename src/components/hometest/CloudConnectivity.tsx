import React from 'react';

const CloudConnectivity: React.FC = () => {
  return (
    <section
      className="relative py-20 min-h-[500px] overflow-hidden"
      style={{
        backgroundImage: `url(/cloudhighspeed.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Text Content Box */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end h-full items-end">
        <div className="bg-[#28323C] bg-opacity-95 p-8 max-w-md text-left mb-20 rounded-lg shadow-xl">
          <h3 className="text-2xl font-heading text-white mb-4 uppercase">
            Cloud & High Speed Connectivity
          </h3>
          
          {/* Separator line */}
          <div className="w-16 h-0.5 bg-white mb-6"></div>
          
          <p className="text-white mb-4 leading-relaxed font-body">
            Bring new dimension to your business with Analytics Cloud & High Speed Connectivity (4G, 5G).
          </p>
          <p className="text-white leading-relaxed font-body">
            Our applications seamlessly integrate with your existing cloud infrastructure to generate powerful analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CloudConnectivity;
