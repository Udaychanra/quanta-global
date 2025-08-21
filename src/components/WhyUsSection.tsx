import { CheckCircle, Clock, Globe, TrendingUp, Shield, Star, Users, Zap, Target, HeadphonesIcon, ArrowDown } from 'lucide-react';
import TestimonialsSection from './TestimonialsSection';

const WhyUsSection = () => {
  const advantages = [
    {
      number: '01',
      icon: Users,
      title: 'Expertise and Experience',
      description: 'With 20+ years in enterprise software development, our expert team delivers tailored solutions across various industries.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '02',
      icon: Target,
      title: 'Client-Centric Approach',
      description: 'Our solutions are customized to align with your business goals, ensuring satisfaction and success.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      number: '03',
      icon: Star,
      title: 'Proven Track Record',
      description: 'We\'ve successfully delivered 100+ projects, consistently exceeding client expectations with on-time, on-budget solutions.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: '04',
      icon: HeadphonesIcon,
      title: 'Dedicated Support',
      description: 'We provide ongoing support and maintenance to ensure your software\'s smooth and effective operation.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      number: '05',
      icon: Zap,
      title: 'Innovative Solutions',
      description: 'We use the latest technologies to drive digital transformation, enhance efficiency, and provide a competitive edge.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      number: '06',
      icon: Globe,
      title: 'Comprehensive Services',
      description: 'From strategy to implementation and support, we offer end-to-end services for seamless software integration and performance.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '07',
      icon: Shield,
      title: 'Commitment to Quality',
      description: 'Our rigorous quality assurance guarantees top performance, security, and usability in every solution.',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '08',
      icon: TrendingUp,
      title: 'Strategic Partnerships',
      description: 'We partner with leading technology providers to offer the best tools and resources for superior solutions.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-200">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Choose Us?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At QuantaGlobal, We empower enterprises with innovative software solutions to drive growth, efficiency, and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className={`bg-gradient-to-r ${advantage.color} p-6 text-white`}>
                <div className="text-2xl font-bold mb-2">{advantage.number}.</div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <ArrowDown className="h-6 w-6 text-white" />
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {advantage.description}
                </p>
              </div>
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

        {/* <TestimonialsSection /> */}

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