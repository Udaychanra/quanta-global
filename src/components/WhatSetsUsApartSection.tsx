import { Users, Settings, Zap, Target, CheckCircle, Shield, Award, Clock, Lightbulb, ArrowRight, Star } from 'lucide-react';

const WhatSetsUsApartSection = () => {
  const features = [
    {
      number: "01",
      title: "Deep Expertise",
      subtitle: "Our strength is in our people.",
      content: "QuantaGlobal is led by experienced professionals with 20+ years in SAP, ERP, AI, and enterprise software. We're ex-Big 4 advisors, enterprise architects, and transformation leads — grounded in delivery, not theory. We speak both business and technology, and we know how to turn complexity into action.",
      icon: <span className="text-blue-600">👥</span>
    },
    {
      number: "02",
      title: "Built Around You",
      subtitle: "We don't apply templates.",
      content: "We co-create solutions based on how your business actually runs. Whether you're scaling globally or modernizing locally, our team aligns to your goals, structure, and pace. Everything is tailored. Nothing is off the shelf.",
      icon: <span className="text-blue-600">🎯</span>
    },
    {
      number: "03",
      title: "Proven Delivery",
      subtitle: "We've delivered where it counts",
      content: "in high-stakes, high-complexity environments. Our leaders have led 100+ enterprise programs, working directly with CFOs, CIOs, and boards to drive measurable outcomes. Every project is handled with precision, accountability, and intent. No overrun. No excuses. Just results.",
      icon: <span className="text-blue-600">✅</span>
    },
    {
      number: "04",
      title: "Long-Term Partnership",
      subtitle: "We don't disappear after go-live.",
      content: "Our teams stay engaged, through change management, performance tuning, and iterative growth. Because sustainable impact needs sustained support.",
      icon: <span className="text-blue-600">🤝</span>
    },
    {
      number: "05",
      title: "Innovation with Intent",
      subtitle: "We use advanced tech",
      content: "AI, ML, automation, cloud — but only when it serves a clear purpose. No trends for trend's sake. Just smart, focused tools that drive better business decisions.",
      icon: <span className="text-blue-600">💡</span>
    },
    {
      number: "06",
      title: "End-to-End Execution",
      subtitle: "From idea to impact, we stay accountable.",
      content: "We manage roadmaps, integrate tech stacks, guide architecture, and drive adoption — all under one roof. No handoffs. Just ownership.",
      icon: <span className="text-blue-600">🔄</span>
    },
    {
      number: "07",
      title: "Relentless Quality",
      subtitle: "We hold ourselves to enterprise-grade standards.",
      content: "Security, scalability, usability, and performance aren't just deliverables — they're non-negotiables. Every solution is tested, hardened, and built to last.",
      icon: <span className="text-blue-600">🛡️</span>
    },
    {
      number: "08",
      title: "Powered by Ecosystems",
      subtitle: "We work across leading technology ecosystems",
      content: "from SAP and Microsoft to cloud, automation, and AI platforms. Our partnerships give you access to the best tools. Our teams make them deliver real business value.",
      icon: <span className="text-blue-600">🌐</span>
    }
  ];

  return (
    <section id="what-sets-us-apart" className="section-padding bg-white text-black relative overflow-hidden">
      {/* Blue accent background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-50 rounded-full opacity-30"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-medium">
            <span>What Sets Us Apart</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            What Sets Us Apart
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm group-hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-6">
                  {/* Number and Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-2xl font-bold text-blue-600">{feature.number}</div>
                      <div className="text-2xl">{feature.icon}</div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                      <p className="text-sm font-medium text-blue-700 mb-3">{feature.subtitle}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApartSection; 