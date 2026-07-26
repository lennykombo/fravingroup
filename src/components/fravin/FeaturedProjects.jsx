import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProjects() {
  const projects = [
    { 
      title: "Corporate Security Management", 
      category: "SECURITY SOLUTIONS", 
      img: "https://images.pexels.com/photos/2990765/pexels-photo-2990765.jpeg" 
    },
    { 
      title: "IT Infrastructure Upgrade for Enterprise", 
      category: "IT SOLUTIONS", 
      img: "https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg" 
    },
    { 
      title: "Fleet Management & Logistics Solution", 
      category: "LOGISTICS", 
      img: "https://images.pexels.com/photos/19908104/pexels-photo-19908104.jpeg" 
    },
    { 
      title: "Supply Chain Optimisation Project", 
      category: "SUPPLY CHAIN", 
      img: "https://images.pexels.com/photos/6169643/pexels-photo-6169643.jpeg" 
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* 
        Increased max-width to '7xl' or 'screen-2xl' 
        to give 4 columns more room to breathe 
      */}
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-[#f58220] font-black uppercase tracking-[0.3em] text-[10px] mb-3">
              FEATURED PROJECTS
            </p>
            <h2 className="text-4xl font-bold text-[#051124] tracking-tight">
              Delivering Impact That Matters
            </h2>
          </div>
          <button className="flex items-center gap-2 text-zinc-400 font-bold text-[10px] uppercase tracking-widest border-b border-zinc-200 pb-1 hover:text-[#f58220] hover:border-[#f58220] transition-all group">
            View All Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4-Column Grid Layout (sm:2, lg:4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              {/* The Image */}
              <img 
                src={p.img} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                alt={p.title}
              />
              
              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#051124] via-[#051124]/30 to-transparent transition-opacity group-hover:opacity-90" />
              
              {/* Content Container */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="max-w-[80%]">
                  <p className="text-[#f58220] text-[8px] font-black uppercase tracking-[0.2em] mb-2">
                    {p.category}
                  </p>
                  <h3 className="text-white text-base font-bold leading-tight tracking-tight">
                    {p.title}
                  </h3>
                </div>

                {/* Smaller Arrow Icon for 4-column layout */}
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#f58220] group-hover:border-[#f58220] transition-all duration-300 flex-shrink-0">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}