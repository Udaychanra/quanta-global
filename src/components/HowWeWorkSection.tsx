import { Users, Settings, Zap, Target, CheckCircle } from 'lucide-react';

const HowWeWorkSection = () => {
  return (
    <section id="how-we-work" className="section-padding bg-white text-black relative overflow-hidden">
      {/* Blue accent background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-50 rounded-full opacity-30"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-medium">
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            How We Work
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
              Designed for outcomes. Built for scale.
            </h3>
            <p className="text-lg text-gray-700">
              We don't show up with a playbook. We show up to solve.
            </p>
          </div>

          {/* What It Looks Like */}
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-8">
              <h4 className="text-xl md:text-2xl font-bold text-black mb-2">Here's what that looks like:</h4>
              <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Co-creation over handoffs",
                  desc: "We work with you, not just for you",
                  icon: <span className='text-blue-600'>🤝</span>
                },
                {
                  title: "Business-first tech",
                  desc: "Every tool and system must serve a real outcome",
                  icon: <span className='text-blue-600'>💼</span>
                },
                {
                  title: "Product mindset",
                  desc: "Whether it's ERP, AI, or internal platforms — we think long-term",
                  icon: <span className='text-blue-600'>🎯</span>
                },
                {
                  title: "Speed with substance",
                  desc: "Fast enough to move markets, deep enough to get it right",
                  icon: <span className='text-blue-600'>⚡</span>
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h5 className="font-semibold text-black text-sm mb-2">{item.title}</h5>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Statements */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-black">
                Every engagement is custom.
              </p>
              <p className="text-lg font-semibold text-black">
                Every solution is real.
              </p>
              <p className="text-lg font-semibold text-blue-600">
                Every win is shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection; 