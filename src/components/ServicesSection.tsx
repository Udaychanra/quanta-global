import { useRef, useLayoutEffect, useMemo } from 'react';
import { Cloud, Database, Brain, Users, Cpu, Zap } from 'lucide-react';

// GSAP imports (you'll need to install gsap: npm install gsap)
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Seamless cloud migration, cloud infrastructure management, cloud-native application development, and scalability and performance optimization.',
    features: ['Seamless cloud migration', 'Cloud infrastructure management', 'Cloud-native application development', 'Scalability and performance optimization'],
    image: 'wwa1.jpg'
  },
  {
    icon: Database,
    title: 'Enterprise Technology',
    description: 'SAP implementation and support, Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and performance analytics and optimization.',
    features: ['SAP implementation and support', 'Enterprise Resource Planning (ERP)', 'Customer Relationship Management (CRM)', 'Performance analytics and optimization'],
    image: 'wwa2.jpg'
  },
  {
    icon: Brain,
    title: 'Data & Artificial Intelligence',
    description: 'Advanced data analytics, machine learning model development, AI-driven business insights, and predictive analytics and forecasting.',
    features: ['Advanced data analytics', 'Machine learning model development', 'AI-driven business insights', 'Predictive analytics and forecasting'],
    image: 'wwa3.jpg'
  },
  {
    icon: Users,
    title: 'Business Consulting',
    description: 'Strategic business planning and advisory, change management and organizational development, process reengineering and optimization, and risk management and compliance consulting.',
    features: ['Strategic business planning and advisory', 'Change management and organizational development', 'Process reengineering and optimization', 'Risk management and compliance consulting'],
    image: 'wwa4.jpg'
  },
  {
    icon: Cpu,
    title: 'Digital Engineering and Manufacturing',
    description: 'Digital twin and simulation technologies, smart manufacturing solutions, IoT integration for manufacturing, and product lifecycle management (PLM).',
    features: ['Digital twin and simulation technologies', 'Smart manufacturing solutions', 'IoT integration for manufacturing', 'Product lifecycle management (PLM)'],
    image: 'wwa1.jpg'
  },
  {
    icon: Zap,
    title: 'Emerging Technology',
    description: 'Internet of Things (IoT) solutions, blockchain technology implementation, augmented reality (AR) and virtual reality (VR) applications, and quantum computing and advanced research initiatives.',
    features: ['Internet of Things (IoT) solutions', 'Blockchain technology implementation', 'Augmented reality (AR) and virtual reality (VR) applications', 'Quantum computing and advanced research initiatives'],
    image: 'wwa2.jpg'
  }
];

const ServicesSection = () => {
  // Duplicate first five at the end to ensure smooth scroll loop
  const renderServices = useMemo(() => {
    return [...services, ...services.slice(0, 5)];
  }, []);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRowRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cardsRow = cardsRowRef.current;
    if (!section || !cardsRow) return;

    let trigger: ScrollTrigger | null = null;

    const rebuild = () => {
      // Compute dynamic measurements based on current viewport and gap
      const cardCount = renderServices.length;
      const cardWidth = 900; // px (matches inline style flex-basis)
      const viewportWidth = window.innerWidth;
      const computed = window.getComputedStyle(cardsRow);
      const gapValue = computed.getPropertyValue('column-gap') || computed.getPropertyValue('gap') || '0px';
      const gapPx = parseFloat(gapValue) || 0; // horizontal gap

      // Ensure first and last card are centered: sidePadding = (viewportWidth - cardWidth) / 2
      const sidePadding = Math.max((viewportWidth - cardWidth) / 2, 0);
      const totalWidth = cardCount * cardWidth + (cardCount - 1) * gapPx + 2 * sidePadding;
      const scrollDistance = Math.max(totalWidth - viewportWidth, 0);

      // Apply paddings and width so content size matches our calculations
      (cardsRow as HTMLDivElement).style.paddingLeft = `${sidePadding}px`;
      (cardsRow as HTMLDivElement).style.paddingRight = `${sidePadding}px`;
      (cardsRow as HTMLDivElement).style.width = `${cardCount * cardWidth + (cardCount - 1) * gapPx + 2 * sidePadding}px`;

      // Calculate the vertical offset so the first card is centered in the viewport
      const cardHeight = 500; // px (matches minHeight below)
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      const sectionPaddingTop = Math.max((window.innerHeight - headerHeight - cardHeight) / 2, 0);
      section.style.paddingTop = `${sectionPaddingTop}px`;
      section.style.paddingBottom = `${sectionPaddingTop}px`;

      // Reset and create trigger
      if (trigger) {
        trigger.kill();
        trigger = null;
      }
      gsap.set(cardsRow, { x: 0 });

      // Pin until the last card is fully visible, then unpin and scroll to next section
      trigger = ScrollTrigger.create({
        trigger: section,
        start: () => `top+=${sectionPaddingTop}px top`,
        end: () => `+=${scrollDistance}px`,
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(cardsRow, {
            x: -progress * scrollDistance,
            duration: 0.1,
            overwrite: 'auto',
            ease: 'power1.inOut',
          });
        },
        onLeave: () => {
          // When the user scrolls past the last card, jump to the next section
          // Find the next section after this one
          const nextSection = document.querySelector('#after-services') as HTMLElement;
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'auto' });
          }
        },
      });
      ScrollTrigger.refresh();
    };

    // Initial build and on resize
    rebuild();
    window.addEventListener('resize', rebuild);

    return () => {
      window.removeEventListener('resize', rebuild);
      if (trigger) trigger.kill();
    };
  }, [renderServices]);

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      style={{ height: "100vh" }} 
      className="w-full flex flex-col items-center justify-center py-16 relative overflow-hidden bg-gray-200"
    >
      {/* Header */}
      <div ref={headerRef} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          At QuantaGlobal, we offer a wide range of services designed to meet the unique challenges and opportunities of modern enterprises. Our expertise spans across various domains to provide holistic and integrated solutions.
        </p>
      </div>

      {/* Cards Row */}
      <div
        ref={cardsRowRef}
        className="relative flex flex-row items-center justify-center z-10 gap-x-12 md:gap-x-24 overflow-x-hidden"
        style={{ minHeight: 500 }}
      >
        {renderServices.map((service, idx) => (
          <div
            key={idx}
            className="bg-transparent w-[90vw] max-w-[900px] h-[500px] flex flex-col md:flex-row justify-center items-center px-4 md:px-8 relative"
            style={{ flex: "0 0 900px", maxWidth: 900 }}
          >
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center items-start md:pr-8">
              <div className="mb-4">
                <service.icon className="w-10 h-10 text-blue-600 mb-2" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                {service.description}
              </p>
              <button className="bg-blue-600 text-white font-semibold rounded-full px-6 py-2 mt-2 hover:bg-blue-700 transition-colors w-fit">
                Read the full story
              </button>
            </div>
            {/* Image: show the image for every service */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg w-[320px] h-[240px] md:w-[400px] md:h-[300px] bg-gray-100 flex items-center justify-center">
                <img
                  src={`/${service.image}`}
                  alt={`Service ${service.title}`}
                  className="object-cover w-full h-full"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;