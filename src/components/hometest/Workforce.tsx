import React from 'react';
import { useFadeInOnScroll, useSlideInOnScroll } from '../../hooks/useScroll';

const Workforce: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeInOnScroll(0.2);
  const { ref: faqsRef, transform: faqsTransform } = useSlideInOnScroll('up', 0.1);

  const faqs = [
    {
      question: "How this works?",
      answer: "We will assign a dedicated team whenever you made a request for feasibility study & customization or upgrade for an existing solution. Our engineers will help in fulfilling all possible requests."
    },
    {
      question: "What will be the pricing for the resources?",
      answer: "Pricing depends on each individual request. Please get in touch with sales team for more details..!"
    },
    {
      question: "Can we have dedicated support?",
      answer: "Each of our team will be assigned to one client at a time. You will have complete peace of mind & never need to wait to get your query addressed"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div 
            ref={titleRef}
            className="space-y-8"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <div>
              <h6 className="text-sm font-body-medium text-[#8B4513] uppercase tracking-wide mb-4">
                RETHINK WORKFORCE
              </h6>
              <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-6">
                Workforce On-Demand
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-body">
                Our workforce helps in every phase, Development, Deployment & Support.<br />
                We help you to better understand your requirement & developing the solution that best suits
              </p>
            </div>

            {/* FAQ Section */}
            <div 
              ref={faqsRef}
              className="space-y-0"
              style={{
                transform: faqsTransform,
                transition: 'transform 0.8s ease-out'
              }}
            >
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button className="w-full text-left py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <h4 className="text-lg font-body-medium text-gray-900">
                        {faq.question}
                      </h4>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div 
            ref={faqsRef}
            className="relative"
            style={{
              transform: faqsTransform,
              transition: 'transform 0.8s ease-out'
            }}
          >
            <div className="relative">
              {/* Image Frame */}
              <div className="relative bg-white p-4 shadow-lg">
                {/* Frame borders */}
                <div className="absolute left-0 bottom-0 w-4 h-32 bg-[#6B7C93]"></div>
                <div className="absolute top-0 right-0 w-32 h-4 bg-gray-200"></div>
                
                {/* Main Image */}
                <div className="relative overflow-hidden">
                  <img
                    src="/inside-2598319_640.jpg"
                    alt="Professional working at desk"
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* Overlay with "1.00" */}
                  <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded text-sm font-body-medium">
                    1.00
                  </div>
                </div>
                
                {/* Decorative dots on right border */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 space-y-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workforce;
