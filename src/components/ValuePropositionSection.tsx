import { TrendingUp, Zap, Target, Shield, Brain, ArrowRight } from 'lucide-react';

const ValuePropositionSection = () => {
  return (
    <section id="value-proposition" className="section-padding bg-gray-50 text-black relative overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gray-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white rounded-full opacity-40"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-xs font-medium">
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            The New Rules
          </h2>
          <div className="w-16 h-px bg-black mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Opening Statement */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
              You've built a good organization.
            </h3>
            <p className="text-xl font-bold text-black">
              But now the rules have changed.
            </p>
          </div>

          {/* Challenge Description */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-lg text-gray-700">
                  Markets shift overnight. Margins shrink. Customers expect everything, everywhere, all at once.
                </p>
                <p className="text-lg text-gray-700">
                  You can't just keep up. You have to get ahead.
                </p>
                <p className="text-lg text-gray-700">
                  And for that, your systems need to think, not just process.
                </p>
                <p className="text-xl font-bold text-black">
                  That's where we come in.
                </p>
              </div>
            </div>
          </div>

          {/* QuantaGlobal Statement */}
          <div className="bg-black text-white rounded-2xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl font-bold">
                QuantaGlobal isn't here to sell software.
              </p>
              <p className="text-lg md:text-xl font-bold">
                We're here to help you build the kind of business that makes competitors nervous.
              </p>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-8">
              <h4 className="text-xl md:text-2xl font-bold text-black mb-2">We deliver:</h4>
              <div className="w-12 h-px bg-black mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "AI that cuts noise and gives you clarity", icon: "🧠" },
                { text: "ERP that flexes when the market doesn't", icon: "⚡" },
                { text: "SAP that doesn't just integrate, but transforms", icon: "🔄" }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm group-hover:shadow-md transition-all duration-300">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <span className="text-sm font-medium text-gray-800">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Statement */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-lg text-gray-700">
                  We've sat in the backroom.
                </p>
                <p className="text-lg text-gray-700">
                  We've seen the budgets bleed.
                </p>
                <p className="text-lg text-gray-700">
                  We know what works and what's just PowerPoint theater.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-700">
              You don't need more tools.
            </p>
            <p className="text-xl font-bold text-black">
              You need leverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection; 