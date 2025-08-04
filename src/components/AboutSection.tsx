import { Users, Globe, Award } from 'lucide-react';

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
        {/* Hero/Intro Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="relative flex items-center justify-center mb-8" style={{height: '320px'}}>
            <img
              src="/abupd.jpg"
              alt="About QuantaGlobal Team"
              className="relative z-10 w-64 md:w-[340px] object-contain"
              style={{marginBottom: 0}}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-red-600 text-center">About Us</h2>
        </div>

        {/* Main About Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col bg-gray-50 rounded-xl p-6 shadow-sm h-full">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Transforming Challenges into Opportunities, Delivering Outcomes that Matter</h3>
            <div className="mb-2">
              <span className="font-bold text-gray-700">Our Commitment:</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <span className="font-semibold text-blue-700">Think Big:</span> We dream boldly and pursue your ambitious goals.
              </li>
              <li>
                <span className="font-semibold text-blue-700">Customer-Obsessed:</span> Prioritize your success at every step.
              </li>
              <li>
                <span className="font-semibold text-blue-700">Quality excellence:</span> Delivering results, not excuses, in challenging environments.
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col bg-gray-50 rounded-xl p-6 shadow-sm h-full">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">YOUR UNBIASED PARTNER</h3>
            <p className="text-sm text-gray-700 mb-4">
              With 50+ seasoned professionals and 350+ years of combined expertise, we’ve mastered delivering high-stakes projects under pressure.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Complex initiatives, tight deadlines, flawless execution: we deliver low-ego, results right the first time, every time.
            </p>
            <div className="mt-auto">
              <h4 className="font-semibold text-blue-700 mb-2">GLOBAL REACH</h4>
              <p className="text-sm text-gray-700">
                We operate globally, delivering services across Europe, Asia, Latin America, and the USA.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col bg-gray-50 rounded-xl p-6 shadow-sm h-full">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">BIG 4 VALUE, BOUTIQUE FEEL</h3>
            <p className="text-sm text-gray-700">
              We bring the rigor of a Big 4 but tailor our approach to fit your unique needs. We help you solve your toughest challenges, shaped by years of global and sector experience, and act accordingly.
            </p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col bg-gray-900 text-white rounded-xl p-6 shadow-sm h-full">
            <h3 className="text-lg font-semibold mb-4">At QuantaGlobal, your dedication to your clients’ success drives everything you do.</h3>
            <p className="text-sm mb-4">
              When you need a trusted partner to stand by your side, call Quanta.
            </p>
            <p className="text-sm mb-4">
              Wherever you are in the journey, we’re here to empower you with the tools, expertise, and support to help you achieve your goals.
            </p>
            <p className="text-sm">
              Let’s build success together—because your growth is our mission.
            </p>
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