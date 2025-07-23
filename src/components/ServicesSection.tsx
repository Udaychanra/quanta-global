import { useState } from 'react';
import { Code, Users, Wrench, Cloud, Zap, Link } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'SAP Consulting',
      description: 'Comprehensive SAP solutions including S/4HANA, SuccessFactors, Ariba, and BTP implementations.',
      features: ['S/4HANA Migration', 'SuccessFactors HCM', 'SAP BTP', 'Custom Development']
    },
    {
      icon: Users,
      title: 'Technology Manpower Supply',
      description: 'On-demand access to skilled technology professionals for your critical projects.',
      features: ['Contract Staffing', 'Permanent Placement', 'Project Teams', 'Specialized Skills']
    },
    {
      icon: Wrench,
      title: 'Application Management Services',
      description: 'End-to-end post-implementation support and maintenance for your enterprise applications.',
      features: ['24/7 Support', 'Performance Optimization', 'Bug Fixes', 'Enhancement Requests']
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Cloud strategy, migration, and infrastructure management across AWS, Azure, and hybrid environments.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Security Management']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Accelerate your digital journey with RPA, AI/ML, data analytics, and automation solutions.',
      features: ['Process Automation', 'AI/ML Solutions', 'Data Analytics', 'Digital Strategy']
    },
    {
      icon: Link,
      title: 'Enterprise Integration',
      description: 'Seamless integration solutions using SAP PI/PO, APIs, and modern middleware platforms.',
      features: ['API Development', 'System Integration', 'Data Migration', 'Middleware Solutions']
    }
  ];

  const [current, setCurrent] = useState(0);
  const total = services.length;

  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward with scalability, 
            reliability, and enterprise-grade quality.
          </p>
        </div>

        <div className="flex flex-col gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row w-full max-w-5xl mx-auto overflow-hidden">
            {/* Left: Text */}
            <div className="flex-1 p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-light text-gray-900 mb-6 leading-tight">{services[current].title}</h3>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">{services[current].description}</p>
              <div className="mb-6">
                {services[current].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-blue-600 text-white font-semibold rounded-full px-6 py-2 mt-2 hover:bg-blue-700 transition-colors w-fit">
                Read the full story
              </button>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-center bg-gray-100 min-h-[320px]">
              <img
                src="/quantaabout.png"
                alt={services[current].title}
                className="object-cover w-full h-full max-h-[340px] rounded-none md:rounded-r-2xl"
                style={{ maxWidth: 420 }}
              />
            </div>
          </div>
        </div>

        {/* Progress bar and navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={goPrev}
            className="rounded-full p-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            {'<'}
          </button>
          <div className="flex-1 max-w-2xl h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-1 bg-green-400 rounded-full" style={{ width: `${((current + 1) / total) * 100}%` }}></div>
          </div>
          <button
            onClick={goNext}
            className="rounded-full p-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            {'>'}
          </button>
          <span className="text-gray-500 text-sm ml-4">
            {current + 1}/{total}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;