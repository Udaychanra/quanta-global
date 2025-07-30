import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    handle: 'Vancouver',
    avatar: '/cl1.jpg',
    text: "QuantaGlobal's smart manufacturing solutions have revolutionized our production processes. By implementing IoT and AI-driven technologies, we have seen a significant improvement in operational efficiency and product quality. Their predictive maintenance system has minimized our downtime, saving us both time and money. QuantaGlobal's expertise and support have been invaluable in driving our success."
  },
  {
    name: 'Jessica Smith',
    handle: 'Toronto',
    avatar: '/cl2.jpg',
    text: "Partnering with QuantaGlobal has been a game-changer for our business. Their personalized customer experience solutions have transformed the way we engage with our customers, both online and in-store. The advanced inventory management system has optimized our stock levels, reducing costs and enhancing our profitability. The insights gained from their sales and marketing analytics have enabled us to implement more effective strategies, resulting in increased customer satisfaction and sales."
  },
  {
    name: 'Steve Rogers',
    handle: 'Montreal',
    avatar: '/cl3.jpg',
    text: "QuantaGlobal's healthcare solutions have significantly improved our patient care and operational efficiency. Their electronic health records system ensures that our patient data is managed securely and efficiently, allowing our healthcare professionals to access vital information quickly. The telemedicine solutions provided by QuantaGlobal have expanded our reach, making it easier for patients to receive care remotely. Their predictive analytics tools have optimized our treatment plans, enhancing the overall quality of care we provide."
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Trusted by customers worldwide</h2>
        <p className="text-lg text-gray-600 text-center mb-12 font-medium">
          Join thousands of businesses who are already building the future<br />with QuantaGlobal
        </p>
        <div className="relative overflow-x-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />
          {/* Marquee */}
          <div className="flex whitespace-nowrap animate-testimonials-marquee will-change-transform items-stretch">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-sm mx-4 min-w-[340px] max-w-md w-full p-8 flex flex-col justify-between flex-shrink-0"
                style={{ minHeight: '180px' }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 border border-gray-200"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 leading-tight">{t.name}</div>
                    <div className="text-gray-500 text-sm">{t.handle}</div>
                  </div>
                </div>
                <div className="text-gray-700 text-base leading-relaxed break-words whitespace-pre-line">
                  {t.text}
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.map((t, idx) => (
              <div
                key={idx + testimonials.length}
                className="bg-white border border-gray-200 rounded-xl shadow-sm mx-4 min-w-[340px] max-w-md w-full p-8 flex flex-col justify-between flex-shrink-0"
                style={{ minHeight: '180px' }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 border border-gray-200"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 leading-tight">{t.name}</div>
                    <div className="text-gray-500 text-sm">{t.handle}</div>
                  </div>
                </div>
                <div className="text-gray-700 text-base leading-relaxed break-words whitespace-pre-line">
                  {t.text}
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes testimonials-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-testimonials-marquee {
              animation: testimonials-marquee 32s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 