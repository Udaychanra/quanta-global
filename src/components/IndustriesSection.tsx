import { useEffect, useRef, useState } from 'react';
import { Factory, ShoppingCart, Heart, Building2, Wifi } from 'lucide-react';

// Optionally, you can replace these with image URLs for each industry
const industryImages = [
  '/manu.jpg', // Manufacturing
  '/ret.jpg', // Retail
  '/heal.jpeg', // Healthcare
  '/fina.jpg', // Finance
  '/tel.jpeg', // Telecom
  '/wwa1.jpg', // Public Sector
];

const statsData = [
  { label: 'Projects Delivered', value: 50, suffix: '+' },
  { label: 'Happy Clients', value: 10, suffix: '+' },
  { label: 'Regional Offices', value: 4, suffix: '+' },
  { label: 'Employee Strength', value: 100, suffix: '+' },
];

const IndustriesSection = () => {
  const industries = [
    {
      icon: Factory,
      title: 'Manufacturing',
      subtitle: 'Enhance Operational Efficiency and Product Quality',
      description: 'Smart Manufacturing: Implement IoT and AI-driven solutions to monitor and optimize production processes in real-time. Predictive Maintenance: Use machine learning algorithms to predict equipment failures and schedule timely maintenance, reducing downtime and increasing productivity. Supply Chain Optimization: Improve supply chain visibility and management through advanced analytics and SAP solutions, ensuring efficient inventory control and logistics.',
      features: ['Smart Manufacturing', 'Predictive Maintenance', 'Supply Chain Optimization']
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      subtitle: 'Optimize Retail Operations and Improve Customer Experience',
      description: 'Personalized Customer Experience: Utilize AI and machine learning to analyze customer data and deliver personalized shopping experiences both online and in-store. Inventory Management: Implement automated inventory management systems to maintain optimal stock levels and reduce costs. Sales and Marketing Analytics: Leverage data analytics to gain insights into sales trends and customer preferences, enabling more effective marketing strategies.',
      features: ['Personalized Customer Experience', 'Inventory Management', 'Sales and Marketing Analytics']
    },
    {
      icon: Heart,
      title: 'Healthcare',
      subtitle: 'Improve Patient Care and Streamline Operations',
      description: 'Electronic Health Records (EHR): Enhance patient data management with secure and efficient EHR systems, ensuring quick and easy access to patient information. Telemedicine Solutions: Implement telehealth technologies to provide remote care and consultations, expanding access to healthcare services. Predictive Analytics: Use AI to predict patient outcomes and optimize treatment plans, improving overall patient care and operational efficiency.',
      features: ['Electronic Health Records (EHR)', 'Telemedicine Solutions', 'Predictive Analytics']
    },
    {
      icon: Building2,
      title: 'Finance',
      subtitle: 'Enhance Financial Management and Compliance',
      description: 'Risk Management: Utilize advanced analytics to identify and mitigate financial risks, ensuring stability and compliance. Fraud Detection: Implement machine learning algorithms to detect and prevent fraudulent activities in real-time. Financial Planning and Analysis: Use SAP and AI-driven solutions to improve financial forecasting, budgeting, and reporting, enhancing strategic decision-making.',
      features: ['Risk Management', 'Fraud Detection', 'Financial Planning and Analysis']
    },
    {
      icon: Wifi,
      title: 'Telecom',
      subtitle: 'Improve Connectivity and Service Delivery',
      description: 'Network Optimization: Leverage AI and machine learning to optimize network performance and reduce latency, ensuring high-quality service delivery. Customer Analytics: Analyze customer data to provide personalized service offerings and improve customer satisfaction. Automation Solutions: Implement automation technologies to streamline operations and reduce operational costs, enhancing overall efficiency.',
      features: ['Network Optimization', 'Customer Analytics', 'Automation Solutions']
    },
    {
      icon: Building2,
      title: 'Public Sector',
      subtitle: 'Drive Digital Transformation in Government and Public Services',
      description: 'E-Government Solutions: Implement digital platforms to streamline public service delivery and improve citizen engagement. Data-Driven Policy Making: Leverage analytics and AI to inform policy decisions and optimize resource allocation. Cybersecurity: Enhance the security and resilience of public sector IT infrastructure to protect sensitive data and ensure compliance.',
      features: ['E-Government Solutions', 'Data-Driven Policy Making', 'Cybersecurity']
    }
  ];

  // Animated stats state
  const [stats, setStats] = useState(statsData.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Intersection Observer to trigger animation on scroll into view
  useEffect(() => {
    let observer: IntersectionObserver;
    let start: number | null = null;
    const durations = [1200, 1200, 1200, 1200];

    function animateStats(ts: number) {
      if (start === null) start = ts;
      const elapsed = ts - start;
      setStats(prevStats =>
        prevStats.map((current, i) => {
          if (current < statsData[i].value) {
            const progress = Math.min(1, elapsed / durations[i]);
            const nextValue = Math.floor(progress * statsData[i].value);
            return nextValue > current ? nextValue : current;
          }
          return current;
        })
      );
      if (stats.some((val, i) => val < statsData[i].value)) {
        animationRef.current = requestAnimationFrame(animateStats);
      } else {
        setStats(statsData.map(stat => stat.value));
      }
    }

    function handleIntersection(entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting) {
        setStats(statsData.map(() => 0));
        start = null;
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        animationRef.current = requestAnimationFrame(animateStats);
      } else {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      }
    }

    if (statsRef.current) {
      observer = new window.IntersectionObserver(handleIntersection, {
        threshold: 0.4,
      });
      observer.observe(statsRef.current);
    }
    return () => {
      if (observer && statsRef.current) observer.unobserve(statsRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section id="industries" className="section-padding bg-gray-200">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Industries We Serve</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our expertise spans across various industries, enabling us to deliver industry-specific solutions that drive success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg h-80 cursor-pointer"
            >
              {/* Full height background image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${industryImages[index]}')` }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Category tag */}
              <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold z-10 backdrop-blur-sm">
                {industry.title}
              </div>

              {/* Card heading overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h4 className="text-white font-bold text-lg leading-tight">
                  {industry.subtitle}
                </h4>
              </div>

              {/* Hover content with glass morphism */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 mx-4 text-center border border-white/30">
                  <h4 className="text-white font-bold text-lg mb-3">{industry.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-2 text-sm text-white/90">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-200 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="mt-16 text-center" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, i) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gray-400 mb-2 ">
                  {stats[i]}{stat.suffix}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;