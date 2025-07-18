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

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward with scalability, 
            reliability, and enterprise-grade quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-corporate hover:shadow-lg transition-shadow group">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-lg p-3 mr-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;