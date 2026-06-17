import { useState } from "react";
import {
  Users,
  Globe,
  Award,
  Target,
  Zap,
  Shield,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

const techLogos = [
  { src: '/oracle-removebg-preview.png', alt: 'Oracle' },
  { src: '/sap-removebg-preview.png', alt: 'SAP' },
  { src: '/salesforce-removebg-preview.png', alt: 'Salesforce' },
  { src: '/servicenow-removebg-preview.png', alt: 'ServiceNow' },
  { src: '/aws-removebg-preview.png', alt: 'AWS' },
  { src: '/microsoft-removebg-preview.png', alt: 'Microsoft' },
];

const AboutSection = () => {
  const leaders = [
    {
      name: "Smitha Dave",
      role: "Founder & Chief Executive Officer",
      description: "Smitha is the Founder and CEO of Quanta Global and an experienced enterprise transformation leader with a Big 4 consulting background.",
      image: "/smitha2.jpeg",
    },
    {
      name: "Mehul Dave",
      role: "Chief Financial Officer",
      description: "Mehul leads Quanta Global’s finance operations including planning, reporting and controls.",
      image: "/mehul.jpeg"
    },
    {
      name: "Rama Challa",
      role: "Chairman",
      description: "30+ years of executive leadership, governance and strategic oversight.",
      image: "/smitha.jpeg",
    },
    {
      name: "Sid  Nallella",
      role: "Chief Operations Officer",
      description: "Leading operational excellence.",
      image: "/sid.jpeg",
    },
  ];

  const [activeLeader, setActiveLeader] = useState(leaders[0]);

  return (
    <section id="about" className="section-padding bg-gray-200 text-black relative overflow-hidden">
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
            {/* <h2 className="text-3xl md:text-4xl font-bold text-black">
              Who We Are
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div> */}
          </div>
        </div>

        {/* Main About Content - Blue Accent Design */}
        <div className="space-y-16 mb-16">

          {/* Our Story: Mission, Values, Orchestrator of Clarity */}
          <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-0 h-[400px] md:h-[400px] w-full">
            {/* Left Side Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full flex justify-center items-center bg-transparent">
              <img
                src="/wwa1.jpg"
                alt="Our Story"
                className="rounded-2xl shadow-lg w-full h-full object-cover border-4 border-blue-100"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
            {/* Right Side Content */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full flex items-center bg-white">
              <div className="space-y-6 px-8 py-8 w-full">
                <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                  Our Story
                </h3>
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    At QuantaGlobal, our mission is to bring clarity to complexity. We believe in the power of orchestration—aligning people, processes, and technology to drive meaningful outcomes.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Our values are rooted in integrity, curiosity, and relentless pursuit of results. As the orchestrator of clarity, we help organizations see further, act faster, and scale what works.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Orchestration (EO): Navigate + Orchestrate Philosophy */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-0 md:gap-0 h-[400px] md:h-[400px] w-full">
            {/* Right Side Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full flex justify-center items-center bg-transparent">
              <img
                src="/wwa2.jpg"
                alt="Enterprise Orchestration"
                className="rounded-2xl shadow-lg w-full h-full object-cover border-4 border-blue-100"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
            {/* Left Side Content */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full flex items-center bg-blue-50">
              <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100 h-full w-full flex flex-col justify-center">
                <div className="mb-8">
                  <h4 className="text-xl md:text-2xl font-bold text-black mb-2">
                    Enterprise Orchestration (EO)
                  </h4>
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Our Navigate + Orchestrate philosophy is the anchor of our EO framework. We help enterprises chart the right course and orchestrate the moving parts—so strategy becomes action, and action becomes impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership: Executive Bios, Credibility */}
          <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-0 h-[400px] md:h-[400px] w-full">
            {/* Left Side Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full flex justify-center items-center bg-transparent group">
              <img
                key={activeLeader.image}
                src={activeLeader.image}
                alt="Leadership"
                
                className={`rounded-3xl shadow-xl w-[94%] h-[94%] object-cover object-top border border-blue-200 ring-1 ring-blue-100 leader-fade-300 transition-all duration-500 ease-in-out bg-white group-hover:shadow-2xl group-hover:scale-[1.02] ${
                  activeLeader.name === "Rama Challa"
                    ? "ring-2 ring-blue-300 border-blue-300"
                    : ""
                }`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectPosition:
                    activeLeader.name === "Rama Challa"
                      ? "center 30%"
                      : activeLeader.name === "Sid  Nallella"
                        ? "center 18%"
                        : undefined,
                }}
              />
            </div>
            {/* Right Side Content */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full flex items-center bg-white">
              <div className="bg-white border border-blue-100 rounded-2xl p-8 md:p-12 shadow-sm h-full w-full flex flex-col justify-center">
                <div className="mb-8">
                  <h4 className="text-xl md:text-2xl font-bold text-black mb-2">
                    Leadership
                  </h4>
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 gap-6 max-h-[220px] md:max-h-[240px] overflow-y-auto pr-2 scroll-smooth">
                  {leaders.map((leader) => (
                    <div
                      key={leader.name}
                      className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl hover:bg-blue-50/60 transition-colors"
                      onMouseEnter={() => setActiveLeader(leader)}
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-20 h-20 min-w-[80px] min-h-[80px] rounded-full object-cover border-2 border-blue-200 cursor-pointer"
                        style={{
                          objectPosition:
                            leader.name === "Rama Challa"
                              ? "center top"
                              : leader.name === "Sid  Nallella"
                                ? "center 20%"
                                : "center",
                        }}
                      />

                      <div className="text-center md:text-left">
                        <span className="font-bold text-black block">{leader.name}</span>
                        <span className="text-sm text-blue-700 font-medium block">
                          {leader.role}
                        </span>
                        <p className="text-sm text-gray-600">{leader.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Insights: Blogs + Thought Leadership */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-0 md:gap-0 h-[400px] md:h-[400px] w-full">
            {/* Right Side Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full flex justify-center items-center bg-transparent">
              <img
                src="/wwa4.jpg"
                alt="Insights"
                className="rounded-2xl shadow-lg w-full h-full object-cover border-4 border-blue-100"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
            {/* Left Side Content */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full flex items-center bg-blue-600">
              <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 h-full w-full flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                    <Star className="w-4 h-4 text-white" />
                    <span className="font-medium">Insights</span>
                  </div>
                  <p className="text-lg md:text-xl font-bold">
                    Explore our latest blogs and thought leadership on enterprise orchestration, technology, and business transformation.
                  </p>
                  <a
                    href="/blogs"
                    className="inline-flex items-center mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-blue-50 transition"
                  >
                    Read Insights
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Blue Accent What Sets Us Apart Section */}
          {/* "What Sets Us Apart" - Card Grid UI like attached image */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-black">
                What Sets Us Apart
              </h3>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            {/* Card grid, 1 column on mobile, 2 on md, 4 on lg+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg h-80 cursor-pointer">
                {/* Full height background image */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: "url('/wwa1.jpg')" }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold z-10 backdrop-blur-sm">
                  TRANSFORMING CHALLENGES
                </div>
                
                {/* Card heading overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h4 className="text-white font-bold text-lg leading-tight">
                    Transforming Challenges into Opportunities
                  </h4>
                </div>
                
                {/* Hover content with glass morphism */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 mx-4 text-center border border-white/30">
                    <h4 className="text-white font-bold text-lg mb-4">Our Commitment</h4>
                    <div className="space-y-3 text-sm text-white/90">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-200" />
                        <span>Think Big - We pursue ambitious goals</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-200" />
                        <span>Customer-Obsessed - Your success is our North Star</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-200" />
                        <span>Quality Excellence - We deliver results</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg h-80 cursor-pointer">
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: "url('/wwa2.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold z-10 backdrop-blur-sm">
                  UNBIASED PARTNER
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h4 className="text-white font-bold text-lg leading-tight">
                    Your Unbiased Partner
                  </h4>
                </div>
                
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 mx-4 text-center border border-white/30">
                    <h4 className="text-white font-bold text-lg mb-4">Global Expertise</h4>
                    <div className="space-y-3 text-sm text-white/90">
                      <div className="flex items-center justify-center gap-2">
                        <Globe className="w-4 h-4 text-blue-200" />
                        <span>Glocalized community of experts</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4 text-blue-200" />
                        <span>We thrive under pressure</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Users className="w-4 h-4 text-blue-200" />
                        <span>Global reach across continents</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg h-80 cursor-pointer">
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: "url('/wwa3.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold z-10 backdrop-blur-sm">
                  BIG 4 VALUE
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h4 className="text-white font-bold text-lg leading-tight">
                    Big 4 Value, Product-Builder Precision
                  </h4>
                </div>
                
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 mx-4 text-center border border-white/30">
                    <h4 className="text-white font-bold text-lg mb-4">Our Approach</h4>
                    <div className="space-y-3 text-sm text-white/90">
                      <div className="flex items-center justify-center gap-2">
                        <Award className="w-4 h-4 text-blue-200" />
                        <span>Rigor from top-tier consulting</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Target className="w-4 h-4 text-blue-200" />
                        <span>Product thinking for scalable IP</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4 text-blue-200" />
                        <span>Built-in tech muscle</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg h-80 cursor-pointer">
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: "url('/wwa4.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold z-10 backdrop-blur-sm border border-white/30">
                  ROOTED IN PURPOSE
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h4 className="text-white font-bold text-lg leading-tight">
                    Rooted in Purpose
                  </h4>
                </div>
                
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 mx-4 text-center border border-white/30">
                    <h4 className="text-white font-bold text-lg mb-4">Our Promise</h4>
                    <div className="space-y-3 text-sm text-white/90">
                      <p>At QuantaGlobal, your goals drive everything we do.</p>
                      <p>We stand beside you at every stage — as builders, thinkers, and committed allies.</p>
                      <div className="pt-2 space-y-1 font-semibold">
                        <p>Let's build smarter.</p>
                        <p>Let's grow together.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Platforms (minimal) */}
        <div className="-mx-8 md:-mx-16 lg:-mx-32 xl:-mx-48 mt-10">
          <div className="py-12 px-4 md:px-16 lg:px-32 xl:px-48 rounded-2xl border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                Technology Platforms We Master
              </h3>
              <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative overflow-x-hidden w-full">
              <div
                className="flex whitespace-nowrap animate-tech-marquee will-change-transform items-center"
                style={{ animationDuration: "18s" }}
              >
                {techLogos.concat(techLogos).map((logo, idx) => (
                  <div
                    key={logo.alt + idx}
                    className="mx-6 flex items-center justify-center min-w-[160px] h-[80px] group"
                  >
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

        {/* Close Main About Content */}
        </div>

      <style>{`
          @keyframes tech-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-tech-marquee {
            animation: tech-marquee linear infinite;
          }
          @keyframes leader-fade-300 {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .leader-fade-300 {
            animation: leader-fade-300 300ms ease-in-out;
          }
        `}</style>
      
    </section>
  );
};

export default AboutSection;