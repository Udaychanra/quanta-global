import { Target, Users, Globe, Award } from 'lucide-react';

const techLogos = [
  { src: '/oracle-removebg-preview.png', alt: 'Oracle' },
  { src: '/sap-removebg-preview.png', alt: 'SAP' },
  { src: '/salesforce-removebg-preview.png', alt: 'Salesforce' },
  { src: '/servicenow-removebg-preview.png', alt: 'ServiceNow' },
  { src: '/aws-removebg-preview.png', alt: 'AWS' },
  { src: '/microsoft-removebg-preview.png', alt: 'Microsoft' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white text-black">
      <div className="section-container">
        {/* Deloitte-style Hero/Intro Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="relative flex items-center justify-center mb-8" style={{height: '320px'}}>
            {/* Removed green circle */}
            <img
              src="/quantaabout.png"
              alt="About QuantaGlobal Team"
              className="relative z-10 w-64 md:w-[340px] object-contain"
              style={{marginBottom: 0}}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-green-600 text-center">At QuantaGlobal, we make an impact that matters</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto text-center mb-4">
            For over a decade, we have worked with leaders around the world—from global enterprises to innovative startups—to help them build better futures. To support their people. To succeed. All while caring for our communities.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto text-center">
            With a workforce made up of the industry’s greatest minds, we continue to shape the future by delivering real, measurable results. We go beyond talk—we act.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-black">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At QuantaGlobal, we bridge the gap between technology and business success. Our mission is to 
              empower organizations with cutting-edge solutions and expert talent that drive digital transformation 
              and sustainable growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We combine deep technical expertise with a people-first culture, delivering solutions that 
              not only meet today's challenges but also prepare our clients for tomorrow's opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-200 transition-all duration-300">
              <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-black">Mission-Driven</h4>
              <p className="text-sm text-gray-600">Focused on delivering exceptional value</p>
            </div>
            
            <div className="bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-200 transition-all duration-300">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-black">People-First</h4>
              <p className="text-sm text-gray-600">Building lasting relationships</p>
            </div>
            
            <div className="bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-200 transition-all duration-300">
              <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-black">Global Reach</h4>
              <p className="text-sm text-gray-600">Local expertise, worldwide delivery</p>
            </div>
            
            <div className="bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-200 transition-all duration-300">
              <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-black">Excellence</h4>
              <p className="text-sm text-gray-600">Committed to quality and innovation</p>
            </div>
          </div>
        </div>

        {/* Technology Platforms (do not touch) */}
        <div className="-mx-8 md:-mx-16 lg:-mx-32 xl:-mx-48">
          <div className="bg-white py-10 px-4 md:px-16 lg:px-32 xl:px-48">
            <h3 className="text-2xl font-bold mb-8 text-black text-center">Technology Platforms We Master</h3>
            <div className="relative overflow-x-hidden w-full">
              <div className="flex whitespace-nowrap animate-tech-marquee will-change-transform items-center" style={{animationDuration: '18s'}}>
                {techLogos.concat(techLogos).map((logo, idx) => (
                  <div key={logo.alt + idx} className="mx-8 flex items-center justify-center min-w-[180px] h-[100px]">
                    <img src={logo.src} alt={logo.alt} className="h-20 md:h-24 object-contain max-w-[160px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes tech-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-tech-marquee {
            animation: tech-marquee linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default AboutSection;