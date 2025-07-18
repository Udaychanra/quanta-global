import { CheckCircle, Clock, Globe, TrendingUp, Shield, Star } from 'lucide-react';

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
    <section id="why-us" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Why Choose QuantaGlobal</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence, innovation, and client success sets us apart in the competitive 
            technology consulting landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                <advantage.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonial */}
        <div className="card-corporate bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="text-center">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl italic text-muted-foreground leading-relaxed">
                "QuantaGlobal transformed our business processes with their SAP implementation. 
                Their team's expertise and dedication resulted in a 40% improvement in operational efficiency."
              </blockquote>
            </div>
            <div>
              <p className="font-semibold text-primary">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">CTO, Global Manufacturing Corp</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can drive your digital transformation journey and 
            deliver measurable business results.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-corporate text-lg px-8 py-4"
          >
            Let's Build the Future Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;