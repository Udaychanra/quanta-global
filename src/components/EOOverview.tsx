import React from 'react';

const EOOverview = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-medium max-w-4xl mx-auto">
              QuantaGlobal's EO service integrates advice, strategy, and transformation delivery into one decisive model. We help you chart the course, align the enterprise, and execute with precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EOOverview;
