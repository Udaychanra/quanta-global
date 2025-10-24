import React, { useState, useEffect } from 'react';
import { useSlideInOnScroll, useFadeInOnScroll } from '../../hooks/useScroll';

const OurVision: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref: imageRef, transform: imageTransform } = useSlideInOnScroll('left', 0.2);
  const { ref: textRef, transform: textTransform } = useSlideInOnScroll('right', 0.2);
  
  // Carousel images matching the reference design
  const carouselImages = [
    {
      src: '/mall-591337_640.jpg', 
      alt: 'Shopping mall with AI technology'
    },
    {
      src: '/supermarket-949912_640.jpg',
      alt: 'Smart retail environment'
    },
    {
      src: '/inside-2598319_640.jpg',
      alt: 'Indoor AI monitoring system'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white relative -mt-20 pt-20">
      {/* Create seamless connection with hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Carousel */}
          <div 
            ref={imageRef}
            className="relative"
            style={{
              transform: imageTransform,
              transition: 'transform 0.8s ease-out'
            }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="flex transition-transform duration-700 ease-in-out"
                   style={{ transform: `translateX(-${currentImageIndex * 60}%)` }}>
                {carouselImages.map((image, index) => (
                  <div key={index} className="w-[60%] flex-shrink-0 px-2">
                    <div className="relative group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`w-full h-96 lg:h-[28rem] object-cover rounded-lg transition-all duration-500 ${
                          index === currentImageIndex 
                            ? 'scale-100 opacity-100' 
                            : 'scale-95 opacity-80'
                        }`}
                      />
                      {index === currentImageIndex && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div 
            ref={textRef}
            className="space-y-8"
            style={{
              transform: textTransform,
              transition: 'transform 0.8s ease-out'
            }}
          >
            <div>
              <h6 className="text-sm font-body-medium text-gray-400 uppercase tracking-wide mb-3">
                AI TRANSFORMATION
              </h6>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-gray-900 mb-8">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-body">
              We solve high-impact problems by developing computationally efficient algorithms to enable pervasive artificial intelligence. 
              With our technology, every device – no matter how big or small – will have intelligence. In a more intelligent world, 
              people and businesses are free from manual tasks and can make better decisions much more quickly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
