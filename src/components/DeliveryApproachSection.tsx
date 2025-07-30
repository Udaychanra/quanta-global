import React from 'react';
import { Search, Palette, Code, Shield, Rocket, Users, ArrowRight } from 'lucide-react';

const DeliveryApproachSection = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery and Planning',
      subtitle: 'Understanding Your Needs',
      description: 'We begin by engaging with our clients to understand their business objectives, challenges, and specific requirements. This phase involves detailed discussions and workshops to gather all necessary information and to align our goals with those of our clients.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Solution Design',
      subtitle: 'Crafting the Perfect Solution',
      description: 'Based on the insights gathered during the discovery phase, our team of experts designs a customized solution that addresses the client\'s unique needs. We leverage our deep industry knowledge and technological expertise to create a robust and scalable architecture that ensures optimal performance.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      icon: Code,
      title: 'Agile Development',
      subtitle: 'Flexible and Iterative Development',
      description: 'We adopt an agile development methodology, allowing us to deliver solutions incrementally and iteratively. This approach ensures flexibility, continuous improvement, and the ability to adapt to changing requirements. Regular sprints and feedback loops enable us to refine the product continuously.',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '04',
      icon: Shield,
      title: 'Quality Assurance',
      subtitle: 'Ensuring Excellence',
      description: 'Quality is paramount at QuantaGlobal. Our comprehensive quality assurance process includes rigorous testing and validation at every stage of development. This ensures that the final product is reliable, secure, and performs as expected under various conditions.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Deployment and Integration',
      subtitle: 'Seamless Implementation',
      description: 'We manage the deployment and integration of our solutions with meticulous care, ensuring minimal disruption to the client\'s operations. Our team handles all aspects of the implementation, from setting up the environment to migrating data and configuring the system.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      number: '06',
      icon: Users,
      title: 'Empowering Your Team',
      subtitle: 'Flexible and Iterative Development',
      description: 'We provide thorough training sessions to ensure that our clients\' teams are fully equipped to use the new system effectively. Our ongoing support and maintenance services ensure that any issues are promptly addressed, and the system remains up-to-date and functional.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Delivery Approach</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive training approach includes structured lessons, hands-on exercises, regular assessments, 
            and real-time project work to ensure you are industry-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group"
            >
              <div className={`bg-gradient-to-r ${step.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold">{step.number}</div>
                  <step.icon className="h-8 w-8 text-white/80" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/90 text-sm font-medium">{step.subtitle}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Let's Discuss</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to start your digital transformation journey? Let's discuss how our delivery approach 
            can bring your vision to life.
          </p>
          <button 
            onClick={() => {
              window.location.href = '/contact';
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            Let's Discuss
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryApproachSection; 