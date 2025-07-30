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
              src="/abupd.jpg"
              alt="About QuantaGlobal Team"
              className="relative z-10 w-64 md:w-[340px] object-contain"
              style={{marginBottom: 0}}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-red-600 text-center">About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-black">Who We Are</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              QuantaGlobal is a leading enterprise software company dedicated to delivering innovative solutions that leverage the power of SAP, Machine Learning, and Artificial Intelligence. Our mission is to empower businesses to achieve unprecedented levels of efficiency, productivity, and success through cutting-edge technology and expert consulting.
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

        {/* Our Vision Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-black">Our Vision</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              To be the global leader in enterprise technology solutions, driving digital transformation and delivering measurable value to our clients.
            </p>
          </div>
        </div>

        {/* Our Expertise Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-black">Our Expertise</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Our expertise includes implementation, customization, support & optimization, ensuring that your enterprise systems run efficiently & effectively to support business goals.
            </p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Tell Us Your Case
            </button>
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