import React from 'react';
import { useFadeInOnScroll, useSlideInOnScroll } from '../../hooks/useScroll';

const solutions = [
  {
    title: "Shelf Management",
    image: "/Shelf-Management.jpg",
    imageAlt: "Store shelf with various items for shelf management",
    description:
      "Computer vision can help retailers in core tasks such as shelf management. Computer vision can turn images and videos to actionable data. With cameras, retailers can receive critical information about their shelves in real-time. These cameras can spot when the shelves are empty and send alerts to store managers. With this, retailers can ensure that their shelves are never left empty.",
  },
  {
    title: "Compliance",
    image: "/supermarket-949912_640.jpg",
    imageAlt: "Smart retail environment with organized shelves for compliance monitoring",
    description:
      "Retailers spend countless hours to ensure that their stores comply with safety and merchandising standards. This process can be simplified with the help of computer vision. Computer vision can monitor retail stores and look for compliance errors. After finding any errors, such systems can alert retail employees and suggest ways to fix them. Hence, computer vision can help retailers in regulatory compliance.",
  },
  {
    title: "Theft prevention",
    image: "/shoplifting-TEASER_0.png",
    imageAlt: "Security camera footage monitoring for shoplifting prevention",
    description:
      "Our systems can monitor a store for suspicious activities with cameras. After spotting anyone shoplifting, these systems can alert the security staff. Also, these systems can be trained with video footage of previous thefts and other suspicious activities. With such data, computer vision can identify repeat offenders and potential risks.",
  },
  {
    title: "Employee Performance",
    image: "/inside-2598319_640.jpg",
    imageAlt: "Retail employees interacting with customers, monitored by vision AI",
    description:
      "Our solutions can help retailers in evaluating employee performance by monitoring how they work. For this, computer vision can use emotion identification techniques to understand customer satisfaction for every employee's interaction. Based on such evaluation, retailers can find out which employees deliver the best and the worst customer service. And, retailers can offer personalized training to employees who are struggling with customer service. As a result, retailers can enhance employee performance.",
  },
];

const OurSolutions: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeInOnScroll(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useSlideInOnScroll('up', 0.1);

  return (
    <section className="py-20 bg-[#eaf3fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Description */}
        <div 
          ref={titleRef}
          className="text-center mb-8 md:mb-14"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h2 className="text-xl md:text-2xl font-subheading text-[#222] mb-3 tracking-tight">
            Our Solutions
          </h2>
          <p className="text-[14px] md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed mb-1 font-body">
            SwiftAI provides perception solutions across a broad range of industries, from Retail and Smart Home to Government. 
            The SwiftAI platform is designed to be useful from the very start, from application-specific, out-of-the-box models to easy integration with edge devices and the cloud. The result is secure data, decreased data processing costs, and faster, more accurate insights.
          </p>
        </div>
        {/* Cards Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
          style={{
            opacity: cardsVisible ? 1 : 0,
            transform: cardsVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300"
              style={{ minHeight: 430 }}
            >
              {/* Image */}
              <div className="relative w-full h-56 bg-gray-200 flex-shrink-0">
                <img
                  src={solution.image}
                  alt={solution.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-t-lg"
                  loading="lazy"
                  style={{ minHeight: 180, maxHeight: 224 }}
                />
              </div>
              {/* Card Body */}
              <div className="flex flex-col flex-1 px-7 py-7 md:py-6">
                <h3 className="text-[15px] font-subheading text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-[13px] text-gray-700 leading-relaxed mb-4 font-body">{solution.description}</p>
                <a
                  href="#contact"
                  className="mt-auto text-[12px] text-[#4694dc] hover:text-[#27557d] font-body-medium transition-colors underline underline-offset-2"
                >
                  Request Demo &rsaquo;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
