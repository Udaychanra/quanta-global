import React from 'react';

const WhyCloudSAP = () => {
  const benefits = [
    'Simplify complexity → Streamline your cloud journey with a single partner',
    'Reduce risk → Proven methodologies and automation ensure quality and compliance',
    'Accelerate value → Move to SAP S/4HANA Public Cloud in months, not years',
    'Tailored approach → Solutions designed around your specific industry and business needs',
    'Scalability → Platforms that grow with your enterprise, without added complexity',
    'Future-ready → A clean core and intelligent technologies that keep you flexible and adaptive'
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SAP S/4HANA Public Cloud</span> with QuantaGlobal
            </h2>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCloudSAP;
