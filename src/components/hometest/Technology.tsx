import React from 'react';
import { useFadeInOnScroll, useSlideInOnScroll } from '../../hooks/useScroll';

const Technology: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeInOnScroll(0.2);
  const { ref: contentRef, transform: contentTransform } = useSlideInOnScroll('up', 0.1);
  const { ref: featuresRef, transform: featuresTransform } = useSlideInOnScroll('up', 0.1);

  const features = [
    {
      title: "Technology Stack",
      description: "Hand Curated AI Algorithms / Efficient",
      image: (
        <img
          src="/technology-4816658_1280.jpg"
          alt="Technology stack illustration"
          className="w-full h-48 object-cover rounded-lg"
        />
      ),
    },
    {
      title: "Runs on Variety of Devices",
      description: "Embedded / CCTV Cameras / Mobile",
      image: (
        <img
          src="/processor-2217771_640 (1).jpg"
          alt="Embedded device and processor"
          className="w-full h-48 object-cover rounded-lg"
        />
      ),
    },
    {
      title: "Secured & Scalable",
      description: "We Built Our Solution to be Highly Scalable & Secure",
      image: (
        <img
          src="/cloud-computing-2001090_640 (1).jpg"
          alt="Secure and scalable cloud computing network"
          className="w-full h-48 object-cover rounded-lg"
        />
      ),
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div 
              ref={titleRef}
              className="flex-1"
              style={{
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <h6 className="text-sm font-body-medium text-[#ADFF2F] uppercase tracking-wide mb-4">
                DISRUPTIVE TECHNOLOGY
              </h6>
              <h2 className="text-4xl md:text-6xl font-heading text-white mb-8 leading-tight">
                We Built Our Solutions using State of the art AI Tools
              </h2>
              <button className="bg-gray-300 text-gray-800 px-6 py-2 text-sm font-body-medium hover:bg-gray-200 transition-colors">
                Know more
              </button>
            </div>
            
            <div 
              ref={contentRef}
              className="flex-1 space-y-6 text-right"
              style={{
                transform: contentTransform,
                transition: 'transform 0.8s ease-out'
              }}
            >
              <p className="text-lg text-white leading-relaxed font-body">
                Much of the recent innovation within machine learning has revolved around scaling up models. 
                These large models allow for more complex ideas and tasks to be captured at the cost of 
                massively increased hardware requirements.
              </p>
              <p className="text-lg text-white leading-relaxed font-body">
                SwiftAI has developed a suite of innovative algorithms that compress and optimize state of 
                the art models to work with hardware that is more than an order of magnitude smaller than 
                that used by competitors.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Feature Cards */}
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{
            transform: featuresTransform,
            transition: 'transform 0.8s ease-out'
          }}
        >
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="mb-6">
                {feature.image}
              </div>
              <h3 className="text-xl font-subheading text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center font-body">
                {feature.description.split(' / ').map((part, partIndex) => (
                  <span key={partIndex}>
                    {partIndex > 0 && ' / '}
                    <span className="underline cursor-pointer hover:text-white transition-colors">
                      {part}
                    </span>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
