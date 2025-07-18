import { Target, Users, Globe, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About QuantaGlobal</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering transformation with the right expertise, delivering value with speed, agility, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At QuantaGlobal, we bridge the gap between technology and business success. Our mission is to 
              empower organizations with cutting-edge solutions and expert talent that drive digital transformation 
              and sustainable growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine deep technical expertise with a people-first culture, delivering solutions that 
              not only meet today's challenges but also prepare our clients for tomorrow's opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="card-corporate text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Mission-Driven</h4>
              <p className="text-sm text-muted-foreground">Focused on delivering exceptional value</p>
            </div>
            
            <div className="card-corporate text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">People-First</h4>
              <p className="text-sm text-muted-foreground">Building lasting relationships</p>
            </div>
            
            <div className="card-corporate text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Global Reach</h4>
              <p className="text-sm text-muted-foreground">Local expertise, worldwide delivery</p>
            </div>
            
            <div className="card-corporate text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Excellence</h4>
              <p className="text-sm text-muted-foreground">Committed to quality and innovation</p>
            </div>
          </div>
        </div>

        {/* Technology Platforms */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technology Platforms We Master</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['SAP', 'Microsoft', 'AWS', 'ServiceNow', 'Oracle', 'Salesforce'].map((tech) => (
              <div key={tech} className="card-corporate text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold text-primary">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;