import { useState, useEffect } from 'react';
import { Cloud, Database, Brain, Users, Cpu, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Seamless cloud migration, cloud infrastructure management, cloud-native application development, and scalability and performance optimization.',
      features: ['Seamless cloud migration', 'Cloud infrastructure management', 'Cloud-native application development', 'Scalability and performance optimization']
    },
    {
      icon: Database,
      title: 'Enterprise Technology',
      description: 'SAP implementation and support, Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and performance analytics and optimization.',
      features: ['SAP implementation and support', 'Enterprise Resource Planning (ERP)', 'Customer Relationship Management (CRM)', 'Performance analytics and optimization']
    },
    {
      icon: Brain,
      title: 'Data & Artificial Intelligence',
      description: 'Advanced data analytics, machine learning model development, AI-driven business insights, and predictive analytics and forecasting.',
      features: ['Advanced data analytics', 'Machine learning model development', 'AI-driven business insights', 'Predictive analytics and forecasting']
    },
    {
      icon: Users,
      title: 'Business Consulting',
      description: 'Strategic business planning and advisory, change management and organizational development, process reengineering and optimization, and risk management and compliance consulting.',
      features: ['Strategic business planning and advisory', 'Change management and organizational development', 'Process reengineering and optimization', 'Risk management and compliance consulting']
    },
    {
      icon: Cpu,
      title: 'Digital Engineering and Manufacturing',
      description: 'Digital twin and simulation technologies, smart manufacturing solutions, IoT integration for manufacturing, and product lifecycle management (PLM).',
      features: ['Digital twin and simulation technologies', 'Smart manufacturing solutions', 'IoT integration for manufacturing', 'Product lifecycle management (PLM)']
    },
    {
      icon: Zap,
      title: 'Emerging Technology',
      description: 'Internet of Things (IoT) solutions, blockchain technology implementation, augmented reality (AR) and virtual reality (VR) applications, and quantum computing and advanced research initiatives.',
      features: ['Internet of Things (IoT) solutions', 'Blockchain technology implementation', 'Augmented reality (AR) and virtual reality (VR) applications', 'Quantum computing and advanced research initiatives']
    }
  ];

  const [current, setCurrent] = useState(0);
  const total = services.length;

  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Auto-advance animation
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 2000); // Change service every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At QuantaGlobal, we offer a wide range of services designed to meet the unique challenges and opportunities of modern enterprises. Our expertise spans across various domains to provide holistic and integrated solutions.
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
                src="/abupd.jpg"
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
            <div className="h-1 bg-green-400 rounded-full transition-all duration-500" style={{ width: `${((current + 1) / total) * 100}%` }}></div>
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