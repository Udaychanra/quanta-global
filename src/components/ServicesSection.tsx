import { useState, useRef } from 'react';
import { Cloud, Database, Brain, Users, Cpu, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

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

const clampIndex = (idx: number, length: number) => {
  if (idx < 0) return length - 1;
  if (idx >= length) return 0;
  return idx;
};

const ServicesSection = () => {
  const [current, setCurrent] = useState(0);
  const total = services.length;

  // Touch/drag support
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) {
      setCurrent((prev) => clampIndex(prev - 1, total));
    } else if (deltaX < -50) {
      setCurrent((prev) => clampIndex(prev + 1, total));
    }
    touchStartX.current = null;
  };

  // Mouse drag support (desktop)
  const dragStartX = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const deltaX = e.clientX - dragStartX.current;
    if (deltaX > 50) {
      setCurrent((prev) => clampIndex(prev - 1, total));
    } else if (deltaX < -50) {
      setCurrent((prev) => clampIndex(prev + 1, total));
    }
    dragStartX.current = null;
  };

  // Get indices for left, center, right cards
  const getIndices = () => {
    const left = clampIndex(current - 1, total);
    const center = current;
    const right = clampIndex(current + 1, total);
    return [left, center, right];
  };

  const [leftIdx, centerIdx, rightIdx] = getIndices();

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At QuantaGlobal, we offer a wide range of services designed to meet the unique challenges and opportunities of modern enterprises. Our expertise spans across various domains to provide holistic and integrated solutions.
          </p>
        </div>

        {/* Carousel for desktop, single card for mobile */}
        <div
          className="w-full flex justify-center items-center select-none relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{ userSelect: 'none' }}
        >
          {/* Arrow Button - Left (hidden on mobile) */}
          <button
            onClick={() => setCurrent((prev) => clampIndex(prev - 1, total))}
            className="hidden md:flex items-center justify-center rounded-full p-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors absolute left-0 z-30"
            aria-label="Previous"
            style={{ left: '-48px' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Cards */}
          <div className="relative flex w-full max-w-5xl justify-center items-center gap-4">
            {/* Desktop: show 3 cards, Mobile: show only center card */}
            <div className="hidden md:flex w-full justify-center items-center gap-4">
              <ServiceCard
                service={services[leftIdx]}
                isActive={false}
              />
              <ServiceCard
                service={services[centerIdx]}
                isActive={true}
              />
              <ServiceCard
                service={services[rightIdx]}
                isActive={false}
              />
            </div>
            <div className="flex md:hidden w-full justify-center items-center">
              <ServiceCard
                service={services[centerIdx]}
                isActive={true}
              />
            </div>
          </div>
          {/* Arrow Button - Right (hidden on mobile) */}
          <button
            onClick={() => setCurrent((prev) => clampIndex(prev + 1, total))}
            className="hidden md:flex items-center justify-center rounded-full p-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors absolute right-0 z-30"
            aria-label="Next"
            style={{ right: '-48px' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setCurrent((prev) => clampIndex(prev - 1, total))}
            className="rounded-full p-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {services.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((prev) => clampIndex(prev + 1, total))}
            className="rounded-full p-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

type ServiceCardProps = {
  service: typeof services[number];
  isActive: boolean;
};

const ServiceCard = ({ service, isActive }: ServiceCardProps) => {
  const Icon = service.icon;
  // All cards same width, but allow height to grow with content
  return (
    <div
      className={`transition-all duration-500 flex flex-col items-stretch bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-[400px] min-h-[520px] mx-0 ${
        isActive
          ? 'z-20 ring-4 ring-blue-200 ring-opacity-60 shadow-xl'
          : 'z-10 opacity-80'
      }`}
      tabIndex={isActive ? 0 : -1}
      aria-hidden={!isActive}
      style={{
        filter: isActive ? 'drop-shadow(0 0 16px #3b82f6aa)' : 'none',
        height: 'auto'
      }}
    >
      {/* Top: Text */}
      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="mb-4">
          <Icon className="w-10 h-10 text-blue-600 mb-2" />
        </div>
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 leading-tight">{service.title}</h3>
        <p className="text-base text-gray-700 mb-4 leading-relaxed">{service.description}</p>
        <div className="mb-4">
          {service.features.map((feature, featureIndex) => (
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
      {/* Bottom: Image */}
      {/* <div className="flex-1 flex items-center justify-center bg-gray-100 min-h-[180px]">
        <img
          src="/abupd.jpg"
          alt={service.title}
          className="object-cover w-full h-full max-h-[220px] rounded-none md:rounded-b-2xl"
          style={{ maxWidth: 420 }}
        />
      </div> */}
    </div>
  );
};

export default ServicesSection;