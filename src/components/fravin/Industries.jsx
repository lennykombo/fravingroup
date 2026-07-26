// src/components/fravin/Industries.jsx

import { Landmark, Building2, HeartPulse, GraduationCap, Coffee, Factory, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { name: "Government", icon: <Landmark size={28}/> },
  { name: "Corporate", icon: <Building2 size={28}/> },
  { name: "Healthcare", icon: <HeartPulse size={28}/> },
  { name: "Education", icon: <GraduationCap size={28}/> },
  { name: "Hospitality", icon: <Coffee size={28}/> },
  { name: "Manufacturing", icon: <Factory size={28}/> },
  { name: "NGOs", icon: <Globe size={28}/> },
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header matching the design layout */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
             <p className="text-[#f58220] font-black text-[10px] uppercase tracking-[0.4em] mb-4">Industries We Serve</p>
             <h2 className="text-4xl md:text-5xl font-bold text-[#051124] tracking-tighter leading-tight">
               Empowering Organizations Across Diverse Sectors
             </h2>
          </div>
          <button className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest border-b border-zinc-200 pb-1 hover:text-[#f58220] hover:border-[#f58220] transition-all">
            View All Industries →
          </button>
        </div>

        {/* Row of Icons with hover-up effect */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20">
          {industries.map((ind, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="p-6 bg-zinc-50 rounded-2xl text-zinc-400 group-hover:bg-[#f58220] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-orange-500/20">
                {ind.icon}
              </div>
              <span className="text-[10px] font-black text-[#051124] uppercase tracking-widest">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}














/*import { Landmark, Building2, HeartPulse, GraduationCap, Coffee, Factory, Globe } from 'lucide-react';

const industries = [
  { name: "Government", icon: <Landmark size={28}/> },
  { name: "Corporate", icon: <Building2 size={28}/> },
  { name: "Healthcare", icon: <HeartPulse size={28}/> },
  { name: "Education", icon: <GraduationCap size={28}/> },
  { name: "Hospitality", icon: <Coffee size={28}/> },
  { name: "Manufacturing", icon: <Factory size={28}/> },
  { name: "NGOs", icon: <Globe size={28}/> },
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
             <p className="text-brand-orange font-black text-[10px] uppercase tracking-[0.4em] mb-4">Industries We Serve</p>
             <h2 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tighter leading-tight">Empowering Organizations Across Diverse Sectors</h2>
          </div>
          <button className="text-zinc-400 font-bold text-xs uppercase tracking-widest border-b border-zinc-200 pb-1 hover:text-brand-orange hover:border-brand-orange transition">
            View All Industries →
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {industries.map((ind, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="p-5 bg-zinc-50 rounded-2xl text-zinc-400 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
                {ind.icon}
              </div>
              <span className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}*/