import { useEffect, useRef, useState } from 'react';
import { Building2, Heart, Factory, Zap, ShoppingCart, Shield } from 'lucide-react';

// Optionally, you can replace these with image URLs for each industry
const industryImages = [
  '/industry1.jpg', // BFSI
  '/industry2.jpg', // Healthcare
  '/industry3.jpg', // Manufacturing
  '/industry4.jpg', // Energy & Utilities
  '/industry5.jpg', // Retail
  '/industry6.jpg', // Public Sector
];

const statsData = [
  { label: 'Projects Delivered', value: 500, suffix: '+' },
  { label: 'Enterprise Clients', value: 50, suffix: '+' },
  { label: 'Countries Served', value: 15, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
];

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: 'BFSI',
      subtitle: 'Perspective',
      description: 'Banking, Financial Services, and Insurance solutions with regulatory compliance and security focus.'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      subtitle: 'Perspective',
      description: 'Healthcare technology solutions that improve patient outcomes and operational efficiency.'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      subtitle: 'Perspective',
      description: 'Smart manufacturing solutions with IoT, automation, and supply chain optimization.'
    },
    {
      icon: Zap,
      title: 'Energy & Utilities',
      subtitle: 'Article',
      description: 'Energy sector solutions for grid management, renewable energy, and operational excellence.'
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      subtitle: 'Article',
      description: 'Digital commerce platforms, inventory management, and customer experience solutions.'
    },
    {
      icon: Shield,
      title: 'Public Sector',
      subtitle: 'Story',
      description: 'Government and public sector technology solutions with security and compliance focus.'
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
            Deep domain expertise across key industries, delivering tailored solutions that address 
            sector-specific challenges and requirements.
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
              {/* Card Image/Icon */}
              <div className="mt-auto pt-2">
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                  {/* Use about.webp for all industry images */}
                  <img src="/about.webp" alt={industry.title} className="object-cover w-full h-full" />
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