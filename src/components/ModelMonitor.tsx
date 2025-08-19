'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    img: '/wwa1.jpg',
    number: '01',
    title: 'Discovery and Planning',
    subtitle: 'Understanding Your Needs',
    desc: `We begin by engaging with our clients to understand their business objectives, challenges, and specific requirements. This phase involves detailed discussions and workshops to gather all necessary information and to align our goals with those of our clients.`,
  },
  {
    img: '/wwa2.jpg',
    number: '02',
    title: 'Solution Design',
    subtitle: 'Crafting the Perfect Solution',
    desc: `Based on the insights gathered during the discovery phase, our team of experts designs a customized solution that addresses the client's unique needs. We leverage our deep industry knowledge and technological expertise to create a robust and scalable architecture that ensures optimal performance.`,
  },
  {
    img: '/wwa3.jpg',
    number: '03',
    title: 'Agile Development',
    subtitle: 'Flexible and Iterative Development',
    desc: `We adopt an agile development methodology, allowing us to deliver solutions incrementally and iteratively. This approach ensures flexibility, continuous improvement, and the ability to adapt to changing requirements. Regular sprints and feedback loops enable us to refine the product continuously.`,
  },
  {
    img: '/wwa4.jpg',
    number: '04',
    title: 'Quality Assurance',
    subtitle: 'Ensuring Excellence',
    desc: `Quality is paramount at QuantaGlobal. Our comprehensive quality assurance process includes rigorous testing and validation at every stage of development. This ensures that the final product is reliable, secure, and performs as expected under various conditions.`,
  },
  {
    img: '/wwa1.jpg',
    number: '05',
    title: 'Deployment and Integration',
    subtitle: 'Seamless Implementation',
    desc: `We manage the deployment and integration of our solutions with meticulous care, ensuring minimal disruption to the client's operations. Our team handles all aspects of the implementation, from setting up the environment to migrating data and configuring the system.`,
  },
  {
    img: '/wwa2.jpg',
    number: '06',
    title: 'Empowering Your Team',
    subtitle: 'Flexible and Iterative Development',
    desc: `We provide thorough training sessions to ensure that our clients' teams are fully equipped to use the new system effectively. Our ongoing support and maintenance services ensure that any issues are promptly addressed, and the system remains up-to-date and functional.`,
  },
];

const ANIMATION_DURATION = 3000;
const PAUSE_AFTER_CLICK = 4000;

export default function ModelMonitor() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // For syncing image height to right content
  const rightContentRef = useRef<HTMLDivElement | null>(null);
  const [imgHeight, setImgHeight] = useState<number | undefined>(undefined);

  // Always reset progress to 0 on step change
  useEffect(() => {
    setProgress(0);
  }, [active]);

  // Animate the orange line progress
  useEffect(() => {
    if (paused) return;
    const start = Date.now();
    function animate() {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / ANIMATION_DURATION) * 100, 100);
      setProgress(percent);
      if (percent < 100) {
        progressRef.current = setTimeout(animate, 16);
      }
    }
    animate();
    return () => {
      if (progressRef.current) clearTimeout(progressRef.current);
    };
  }, [active, paused]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, ANIMATION_DURATION);
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [active, paused]);

  // Handle click to select step and pause auto-advance
  const handleSelect = (idx: number) => {
    setActive(idx);
    setPaused(true);
    setProgress(0);
    if (intervalRef.current) clearTimeout(intervalRef.current);
    if (progressRef.current) clearTimeout(progressRef.current);
    setTimeout(() => setPaused(false), PAUSE_AFTER_CLICK);
  };

  // Sync image height to right content
  useEffect(() => {
    function updateHeight() {
      if (rightContentRef.current) {
        setImgHeight(rightContentRef.current.offsetHeight);
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [active]);

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 bg-gray-200">
      <div className="w-full max-w-7xl mx-auto bg-gray-200 rounded-3xl shadow-lg p-6 sm:p-12">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'Urbanist, "Urbanist Placeholder", sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: '38.4px',
            color: 'rgb(38, 38, 42)',
            letterSpacing: '-0.05em',
            wordBreak: 'break-word',
          }}
        >
          Our Delivery Approach
          <br className="hidden sm:block" />
          <span
            className="block mx-auto mt-4 text-lg font-normal text-gray-600"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 400,
              maxWidth: 800,
              lineHeight: '1.7',
              textAlign: 'center',
              display: 'block',
              letterSpacing: '0.02em',
            }}
          >
            We guide you through every stage, from discovery to empowering your team, ensuring excellence and seamless implementation.
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image */}
          <div
            className="flex-shrink-0 w-full md:w-[420px] lg:w-[480px] rounded-xl overflow-hidden bg-black transition-all duration-500"
            style={{
              height: imgHeight ? `${imgHeight}px` : '260px',
              minHeight: '180px',
              maxHeight: '700px',
            }}
          >
            {/* Use native img to avoid next/image error */}
            <img
              src={steps[active].img}
              alt={steps[active].title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'all 0.5s',
                display: 'block',
              }}
              loading="eager"
            />
          </div>
          {/* Steps */}
          <div className="flex-1 w-full max-w-xl" ref={rightContentRef}>
            {steps.map((step, idx) => (
              <div key={idx} className="mb-8 last:mb-0 cursor-pointer select-none" onClick={() => handleSelect(idx)}>
                <div className="flex items-end gap-3">
                  <span
                    style={{
                      fontFamily: 'Urbanist, "Urbanist Placeholder", sans-serif',
                      fontWeight: 600,
                      color: '#59595B',
                      fontSize: 'clamp(1.1rem, 2vw, 22px)',
                      opacity: active === idx ? 1 : 0.5,
                      transition: 'opacity 0.2s',
                      letterSpacing: '-0.03em',
                    }}
                  >{`${step.number}.`}</span>
                  <span
                    style={{
                      fontFamily: 'Urbanist, "Urbanist Placeholder", sans-serif',
                      fontWeight: 600,
                      color: '#59595B',
                      fontSize: 'clamp(1.1rem, 2vw, 22px)',
                      opacity: active === idx ? 1 : 0.5,
                      transition: 'opacity 0.2s',
                      letterSpacing: '-0.03em',
                    }}
                  >{step.title}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 mb-1">
                  {active === idx && (
                    <span
                      style={{
                        fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                        fontWeight: 500,
                        color: '#3a3a3a',
                        fontSize: 'clamp(0.95rem, 2vw, 17px)',
                        opacity: 0.85,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {step.subtitle}
                    </span>
                  )}
                </div>
                {/* Orange underline animation */}
                <div className="relative h-1 mt-1 mb-3">
                  <div className="w-full h-px bg-gray-200 absolute left-0 top-1/2 -translate-y-1/2" />
                  {active === idx && (
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-orange-400 rounded"
                      style={{
                        width: `${progress}%`,
                        transition: `width ${ANIMATION_DURATION}ms linear`,
                      }}
                    />
                  )}
                </div>
                {active === idx && (
                  <p
                    className="animate-fade-in"
                    style={{
                      fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      color: 'rgb(48, 48, 54)',
                      fontSize: 'clamp(1rem, 2.5vw, 18px)',
                      lineHeight: 'clamp(1.5rem, 3vw, 26px)',
                    }}
                  >
                    {step.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s;
        }
      `}</style>
    </section>
  );
}
