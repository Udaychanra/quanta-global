import { CheckCircle, Clock, Globe, TrendingUp, Shield, Star } from 'lucide-react';
import TestimonialsSection from './TestimonialsSection';

const WhyUsSection = () => {
  const advantages = [
    {
      icon: Clock,
      title: 'Agile Delivery',
      description: 'Rapid deployment with iterative development methodologies ensuring faster time-to-market.'
    },
    {
      icon: Globe,
      title: 'Global-Local Approach',
      description: 'International expertise combined with local market understanding and cultural sensitivity.'
    },
    {
      icon: TrendingUp,
      title: 'Flexible Engagement Models',
      description: 'Tailored engagement models including fixed-price, time & material, and dedicated teams.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security practices with industry compliance and data protection standards.'
    },
    {
      icon: Star,
      title: 'Proven Track Record',
      description: 'Successful project delivery across industries with measurable business outcomes.'
    },
    {
      icon: CheckCircle,
      title: '24/7 Support',
      description: 'Round-the-clock support and maintenance ensuring maximum uptime and performance.'
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose QuantaGlobal</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our commitment to excellence, innovation, and client success sets us apart in the competitive 
            technology consulting landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full border-l-4 border-green-500"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-400/10 rounded-lg p-3 flex-shrink-0 mr-3">
                  <advantage.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-0">{advantage.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-1">{advantage.description}</p>
              <a href="#" className="text-blue-600 font-semibold hover:underline mt-auto flex items-center gap-1 w-fit">
                Find out more <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Client Testimonial */}
        {/* <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <div className="text-center">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
                "QuantaGlobal transformed our business processes with their SAP implementation. 
                Their team's expertise and dedication resulted in a 40% improvement in operational efficiency."
              </blockquote>
            </div>
            <div>
              <p className="font-semibold text-blue-400">Sarah Johnson</p>
              <p className="text-sm text-gray-500">CTO, Global Manufacturing Corp</p>
            </div>
          </div>
        </div> */}

        <TestimonialsSection />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Transform Your Business?</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can drive your digital transformation journey and 
            deliver measurable business results.
          </p>
          <button 
            onClick={() => {
              window.location.href = '/contact';
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Let's Build the Future Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;