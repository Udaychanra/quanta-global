import { Building2, Heart, Factory, Zap, ShoppingCart, Shield, Users } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: 'BFSI',
      description: 'Banking, Financial Services, and Insurance solutions with regulatory compliance and security focus.'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Healthcare technology solutions that improve patient outcomes and operational efficiency.'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Smart manufacturing solutions with IoT, automation, and supply chain optimization.'
    },
    {
      icon: Zap,
      title: 'Energy & Utilities',
      description: 'Energy sector solutions for grid management, renewable energy, and operational excellence.'
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'Digital commerce platforms, inventory management, and customer experience solutions.'
    },
    {
      icon: Shield,
      title: 'Public Sector',
      description: 'Government and public sector technology solutions with security and compliance focus.'
    }
  ];

  return (
    <section id="industries" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep domain expertise across key industries, delivering tailored solutions that address 
            sector-specific challenges and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="card-corporate hover:shadow-lg transition-all group cursor-pointer">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="h-10 w-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;