import React from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    handle: 'CTO, FinEdge Solutions',
    avatar: '/avatar1.png',
    text: "QuantaGlobal's SAP consulting team helped us migrate to S/4HANA with zero downtime. Their expertise and support were outstanding."
  },
  {
    name: 'Michael Chen',
    handle: 'Head of IT, HealthSync',
    avatar: '/avatar2.png',
    text: "The cloud migration project was seamless. We reduced costs and improved reliability thanks to QuantaGlobal's cloud specialists."
  },
  {
    name: 'Fatima Al-Farsi',
    handle: 'COO, RetailX',
    avatar: '/avatar3.png',
    text: "Their staff augmentation service provided us with top-tier developers on short notice. We met our launch deadline with confidence."
  },
  {
    name: 'Lucas Müller',
    handle: 'CIO, ManuTech AG',
    avatar: '/avatar4.png',
    text: "QuantaGlobal's digital transformation strategy helped us automate key processes and boost productivity by 40%. Highly recommended!"
  },
  {
    name: 'Sophie Dubois',
    handle: 'Director of Operations, GovConnect',
    avatar: '/avatar5.png',
    text: "Their application management team is responsive and proactive. We've seen a significant drop in support tickets since partnering with QuantaGlobal."
  },
  {
    name: 'Rajesh Iyer',
    handle: 'VP Technology, EnergyGrid',
    avatar: '/avatar6.png',
    text: "From integration to security, QuantaGlobal delivered on every promise. Our systems are more connected and secure than ever."
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