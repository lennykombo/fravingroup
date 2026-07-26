import React from 'react';
// Changed to a named import which is more stable in Vite/React 19
import { CountUp } from 'react-countup'; 
import { useInView } from 'react-intersection-observer';

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "Years of Excellence", value: 8, suffix: "+" },
    { label: "Projects Completed", value: 350, suffix: "+" },
    { label: "Satisfied Clients", value: 250, suffix: "+" },
    { label: "Skilled Professionals", value: 500, suffix: "+" },
    { label: "Core Solutions", value: 7, suffix: "" },
  ];

  return (
    <section ref={ref} className="bg-[#051124] py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">
                {/* 
                  Safety Check: Ensure CountUp is a valid component 
                  before rendering it to prevent the 'object' error.
                */}
                {inView && typeof CountUp !== 'undefined' ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  <span>{inView ? stat.value : "0"}</span>
                )}
                {stat.suffix}
              </div>
              <p className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] max-w-[120px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}