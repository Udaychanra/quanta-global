import { Users, Globe, Award, Target, Zap, Shield, Rocket, ArrowRight, CheckCircle, Star } from 'lucide-react';

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
    <section id="about" className="section-padding bg-white text-black relative overflow-hidden">
      {/* Blue accent background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-50 rounded-full opacity-30"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Hero/Intro Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          {/* Minimal Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-medium">
              <span>Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Who We Are
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Main About Content - Blue Accent Design */}
        <div className="space-y-16 mb-16">
          {/* Who We Are Section */}
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                  Solving what matters.
                  <br />
                  <span className="text-blue-600">
                    Scaling what works.
                  </span>
                </h3>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  QuantaGlobal is a modern consulting and product innovation company.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  We combine sharp strategy, intelligent systems, and purpose-built solutions — designed to unlock speed, resilience, and ROI.
                </p>
              </div>
            </div>

            {/* Blue Accent What We Help With */}
            <div className="relative">
              <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
                <div className="text-center mb-8">
                  <h4 className="text-xl md:text-2xl font-bold text-black mb-2">We help businesses:</h4>
                  <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { text: "Simplify complexity", icon: "🔧" },
                    { text: "Accelerate decisions", icon: "⚡" },
                    { text: "Build systems that fuel performance", icon: "🚀" },
                    { text: "Launch products that solve real problems", icon: "💡" }
                  ].map((item, index) => (
                    <div key={index} className="group">
                      <div className="bg-white border border-blue-100 rounded-xl p-6 text-center shadow-sm group-hover:shadow-md transition-all duration-300">
                        <div className="text-2xl mb-3 text-blue-600">{item.icon}</div>
                        <span className="text-sm font-medium text-gray-800">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Blue Accent CTA Box */}
            <div className="group">
              <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                    <Rocket className="w-4 h-4 text-white" />
                    <span className="font-medium">We don't just advise. We build.</span>
                  </div>
                  <p className="text-lg md:text-xl font-bold">
                    We own outcomes, from design to delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Blue Accent What Sets Us Apart Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-black">
                What Sets Us Apart
              </h3>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Transforming Challenges */}
              <div className="group">
                <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-black">Transforming Challenges into Opportunities</h4>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-sm font-semibold text-blue-700 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Our Commitment:
                    </h5>
                    <div className="space-y-3">
                      {[
                        { title: "Think Big", desc: "We pursue ambitious goals with bold thinking" },
                        { title: "Customer-Obsessed", desc: "Your success is our North Star" },
                        { title: "Quality Excellence", desc: "We deliver results, not excuses" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-black text-sm">{item.title}:</span>
                            <span className="text-gray-600 text-sm ml-2">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Unbiased Partner */}
              <div className="group">
                <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-black">Your Unbiased Partner</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      "A glocalized community of seasoned experts",
                      "We thrive under pressure, execute without ego",
                      { title: "Global Reach", desc: "Europe, Asia, Latin America, USA" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          {typeof item === 'string' ? (
                            <span className="text-gray-600 text-sm">{item}</span>
                          ) : (
                            <>
                              <span className="font-medium text-black text-sm">{item.title}:</span>
                              <span className="text-gray-600 text-sm ml-2">{item.desc}</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Big 4 Value */}
              <div className="group">
                <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-black">Big 4 Value, Product-Builder Precision</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Rigor from top-tier consulting",
                      "Product thinking that delivers scalable IP",
                      "Built-in tech muscle with industry depth"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rooted in Purpose */}
              <div className="group">
                <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold">Rooted in Purpose</h4>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm leading-relaxed">
                      At QuantaGlobal, your goals drive everything we do.
                    </p>
                    <p className="text-sm leading-relaxed">
                      We stand beside you at every stage — as builders, thinkers, and committed allies.
                    </p>
                    <div className="pt-4 space-y-2">
                      <p className="text-base font-semibold">Let's build smarter.</p>
                      <p className="text-base font-semibold">Let's grow together.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Platforms (minimal) */}
        <div className="-mx-8 md:-mx-16 lg:-mx-32 xl:-mx-48">
          <div className="bg-blue-50 py-12 px-4 md:px-16 lg:px-32 xl:px-48 rounded-2xl border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Technology Platforms We Master</h3>
              <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="relative overflow-x-hidden w-full">
              <div className="flex whitespace-nowrap animate-tech-marquee will-change-transform items-center" style={{animationDuration: '18s'}}>
                {techLogos.concat(techLogos).map((logo, idx) => (
                  <div key={logo.alt + idx} className="mx-6 flex items-center justify-center min-w-[160px] h-[80px] group">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-16 md:h-20 object-contain max-w-[140px] group-hover:scale-105 transition-transform duration-300" 
                    />
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