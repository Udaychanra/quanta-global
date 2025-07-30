import { useEffect, useRef, useState } from 'react';
import { Factory, ShoppingCart, Heart, Building2, Wifi } from 'lucide-react';

// Optionally, you can replace these with image URLs for each industry
const industryImages = [
  '/manufacturing.jpeg', // Manufacturing
  '/retail.jpg', // Retail
  '/healthcare.jpg', // Healthcare
  '/finance.jpg', // Finance
  '/telecom.jpeg', // Telecom
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
    <section id="industries" className="section-padding bg-[#f5f6f7]">
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
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full max-w-md mx-auto group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-1">{industry.title}</h3>
              <div className="text-sm text-gray-600 mb-2 font-semibold">{industry.subtitle}</div>
              <p className="text-gray-700 mb-4 leading-relaxed text-base">
                {industry.description}
              </p>
              {/* Features List */}
              <div className="mb-4">
                {industry.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              {/* Card Image/Icon */}
              <div className="mt-auto pt-2">
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                  {/* Use about.webp for all industry images */}
                  <img src={industryImages[index]} alt={industry.title} className="object-cover w-full h-full" />
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
                <div className="text-3xl font-bold text-blue-400 mb-2">
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