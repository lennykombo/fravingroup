import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { securityServices } from '../../data/securityServices';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, CheckCircle2, ShieldCheck, Zap, Cpu, Smartphone, Layers, Globe, ArrowRight, Video, Timer, Navigation, ShieldAlert, Map as MapIcon, Radio, AlertCircle, Terminal, Dog, Search, UserCheck, Target } from 'lucide-react';

export default function SecurityServiceDetail() {
  const { id } = useParams();
  const service = securityServices.find(s => s.id === id);

  if (!service) return <div className="py-40 text-center">Service Not Found</div>;

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="mb-20">
          {/*<motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-[#f58220] font-black text-[10px] tracking-[0.3em] uppercase mb-6"
          >
            <Zap size={14} fill="currentColor"/> Service Excellence
          </motion.div>*/}

{id === 'k9-services' ? (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#051124] text-white font-black text-[9px] tracking-[0.3em] uppercase mb-8 shadow-lg"
  >
    <Target size={14} className="animate-pulse" /> Specialized Tactical Unit
  </motion.div>
) : (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-3 text-[#f58220] font-black text-[10px] tracking-[0.3em] uppercase mb-6"
  >
    <Zap size={14} fill="currentColor"/> Service Excellence
  </motion.div>
)}
          
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-[#051124] leading-[0.9] mb-8">
                {service.title.split(' & ')[0]} <br/>
                <span className="text-[#f58220]">{service.title.split(' & ')[1] || ""}</span>
              </h1>
              <p className="text-xl text-zinc-500 leading-relaxed max-w-xl">
                {service.description}
              </p>
            </div>
            <div className="hidden lg:flex justify-end">
               <div className="bg-zinc-50 p-12 rounded-[3rem] border-b-8 border-[#f58220] shadow-xl">
                  <div className="text-6xl font-black text-[#051124] mb-2">24/7</div>
                  <div className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Uninterrupted Deployment</div>
               </div>
            </div>
          </div>
        </div>
<div className="flex gap-4 items-center pt-4">
   {['Audit', 'Design', 'Install', 'Maintain'].map((step, i) => (
     <React.Fragment key={i}>
      <span className="text-[10px] font-black text-[#051124] uppercase">{step}</span>
      {i < 3 && <div className="h-px w-6 bg-zinc-200"/>}
     </React.Fragment>
   ))}
</div>
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-20">


            {/* NEW SECTION ADDED BEFORE CORE PILLARS */}
{service.k9Highlights && (
  <div className="grid md:grid-cols-2 gap-6 mb-16">
    {service.k9Highlights.map((k9, i) => (
      <motion.div 
        key={i} whileHover={{ y: -5 }}
        className="p-10 rounded-[3rem] bg-[#051124] text-white group hover:bg-[#f58220] transition-all duration-500"
      >
        <div className="text-[#f58220] group-hover:text-white mb-6 transition-colors">
          {k9.icon}
        </div>
        <h3 className="text-lg font-black mb-3 uppercase tracking-tight">{k9.title}</h3>
        <p className="text-sm text-zinc-400 group-hover:text-white/80 leading-relaxed transition-colors">
          {k9.desc}
        </p>
      </motion.div>
    ))}
  </div>
)}
            
            {/* 2. CORE PILLARS (The "Cool" Design Part) */}
            {service.pillars && (
              <section>
                <h2 className="text-sm font-black text-[#051124] uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
                   <div className="h-px w-12 bg-zinc-200"/> Core Competencies
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.pillars.map((pillar, i) => (
                    <motion.div 
                      whileHover={{ y: -5 }}
                      key={i} className="group p-8 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-[#051124] transition-all duration-500"
                    >
                      <div className="text-[#f58220] mb-6 group-hover:scale-110 transition-transform">
                        {pillar.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#051124] group-hover:text-white mb-3 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed transition-colors">
                        {pillar.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* 3. SECTOR SPECIALIZATION */}
            {service.sectors && (
              <section>
                <h2 className="text-sm font-black text-[#051124] uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
                   <div className="h-px w-12 bg-zinc-200"/> Sector Solutions
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.sectors.map((sector, i) => (
                    <div key={i} className="flex gap-4 p-6 border border-zinc-100 rounded-2xl items-start">
                      <div className="mt-1 text-[#f58220]"><ShieldCheck size={18}/></div>
                      <div>
                        <h4 className="font-bold text-[#051124] mb-1">{sector.name}</h4>
                        <p className="text-xs text-zinc-400">{sector.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. OLD DATA FORMAT COMPATIBILITY (For the Equipment Lists) */}
            {service.sections && (
               <section className="grid md:grid-cols-2 gap-8">
                 {service.sections.map((section, idx) => (
                   <div key={idx} className="bg-white border-2 border-zinc-50 p-8 rounded-3xl shadow-sm">
                     <h3 className="text-xs font-black text-[#f58220] tracking-[0.3em] uppercase mb-6">{section.header}</h3>
                     <ul className="space-y-3">
                       {section.items.map((item, i) => (
                         <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 font-bold">
                           <CheckCircle2 size={16} className="text-[#f58220] mt-0.5 shrink-0" />
                           {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </section>
            )}

            {/* NEW SECTION */}
{service.techFeatures && (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {service.techFeatures.map((tech, i) => (
      <div key={i} className="p-6 rounded-3xl bg-zinc-50 ... flex flex-col items-center text-center">
        <div className="mb-4 text-[#051124] group-hover:text-[#f58220]">
          {tech.icon}
        </div>
        <h4 className="text-xs font-black ...">{tech.title}</h4>
        <p className="text-[10px] ...">{tech.desc}</p>
      </div>
    ))}
  </div>
)}
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-32 h-fit space-y-6">
            <div className="bg-[#f58220] p-10 rounded-[3rem] text-white shadow-2xl shadow-orange-500/20">
                 {id === 'k9-services' && (
     <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform">
       <Dog size={180}/>
     </div>
   )}
   
   <div className="relative z-10">
      <h3 className="text-3xl font-black leading-tight mb-6">
        {id === 'k9-services' ? "Need Superior Scent Detection?" : "Need Elite Protection?"}
      </h3>
      </div>
              <h3 className="text-3xl font-black leading-tight mb-6">Need Elite Protection?</h3>
              <p className="text-orange-100 mb-10 font-medium">Deploy Fravin's trained guards at your premises within 24 hours.</p>
              <button className="w-full bg-[#051124] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">
                Get a Quote Now
              </button>
            </div>
            
            <div className="p-8 border border-zinc-100 rounded-[2.5rem]">
               <h4 className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-6">Contact info</h4>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-bold text-zinc-500">
                    <Phone size={14} className="text-[#f58220]"/> +254 700 000 000
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-zinc-500">
                    <Zap size={14} className="text-[#f58220]"/> Response: 24/7
                  </div>
               </div>
            </div>

            {/* ADDED TO SIDEBAR */}
<div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100">
   <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">Support Status</h4>
   <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 w-fit px-3 py-1 rounded-full">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" /> Engineers Online
   </div>
</div>
          </aside>
        </div>
      </div>
    </div>
  );
}

