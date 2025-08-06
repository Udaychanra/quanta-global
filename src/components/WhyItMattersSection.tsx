import { ArrowRight, TrendingUp, Zap, Target, Shield } from 'lucide-react';

const WhyItMattersSection = () => {
  return (
    <section id="why-it-matters" className="section-padding bg-white text-black relative overflow-hidden">
      {/* Blue accent background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-50 rounded-full opacity-30"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-medium">
            <span>Why It Matters</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Why It Matters
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
              The future doesn't wait. Neither should you.
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg text-gray-700">
                Markets shift. Costs rise. Complexity multiplies.
              </p>
              <p className="text-lg text-gray-700">
                But with the right systems, you can stay ahead — not just afloat.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12">
            <div className="text-center space-y-4">
              <p className="text-lg md:text-xl font-bold">
                At QuantaGlobal, we don't just deliver projects.
              </p>
              <p className="text-lg md:text-xl font-bold">
                We help you build an advantage.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-8">
              <h4 className="text-xl md:text-2xl font-bold text-black mb-2">We deliver:</h4>
              <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { text: "Smarter systems", icon: <span className='text-blue-600'>🧠</span> },
                { text: "Faster execution", icon: <span className='text-blue-600'>⚡</span> },
                { text: "Clearer decisions", icon: <span className='text-blue-600'>🎯</span> },
                { text: "Stronger returns", icon: <span className='text-blue-600'>📈</span> }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white border border-blue-100 rounded-xl p-6 text-center shadow-sm group-hover:shadow-md transition-all duration-300">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <span className="text-sm font-medium text-gray-800">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Statement */}
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-700">
              Because in today's world, transformation isn't optional.
            </p>
            <p className="text-xl font-bold text-blue-600">
              It's the cost of relevance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection; 