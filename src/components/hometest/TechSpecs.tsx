import React from 'react';
import { useFadeInOnScroll, useSlideInOnScroll } from '../../hooks/useScroll';

const TechSpecs: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeInOnScroll(0.2);
  const { ref: specsRef, transform: specsTransform } = useSlideInOnScroll('up', 0.1);

  const specs = [
    {
      title: "General",
      items: [
        "Model: Nvidia Jetson Series",
        "Shape: Typically Square",
        "Color: Multi",
        "Technical Feature: WiFi, Ethernet"
      ]
    },
    {
      title: "Image Audio",
      items: [
        "Camera Connections: 4 to 36",
        "Video Resolution: 1080P",
        "Resolution: 1280 x 720, 1920 × 1080",
        "Video Encode: 250MP/sec to 1000MP/sec",
        "Video Decode: 500MP/sec to 1500MP/sec"
      ]
    },
    {
      title: "Others",
      items: [
        "Memory: 4 GB 64-bit To 32 GB 256-bit",
        "Storage: 16 GB eMMC 5.1 To 32GB eMMC 5.1",
        "Power Consumption: 5W To 30W",
        "Product size: 69.6 mm x 45 mm to 100 mm x 87 mm"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h6 className="text-sm font-body-medium text-[#8B4513] uppercase tracking-wide mb-4">
            TECH SPECS
          </h6>
          <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-6">
            Specifications
          </h2>
          <p className="text-xl text-gray-600 font-body">
            Our Solutions built to run on variety of Hardware devices.
          </p>
        </div>

        <div 
          ref={specsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{
            transform: specsTransform,
            transition: 'transform 0.8s ease-out'
          }}
        >
          {specs.map((spec, index) => (
            <div key={index} className="text-center">
              <h4 className="text-xl font-subheading text-gray-900 mb-4 uppercase">
                {spec.title}
              </h4>
              
              {/* Horizontal line under heading */}
              <div className="w-full h-0.5 bg-gray-600 mb-6"></div>
              
              <ul className="space-y-0">
                {spec.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start py-3 border-b border-gray-200 last:border-b-0">
                    <svg className="w-4 h-4 text-[#4CAF50] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-left font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
