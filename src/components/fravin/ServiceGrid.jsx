import { Shield, Monitor, Wind, Truck, Printer, ShoppingCart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceGrid() {
  const items = [
    { n: "Security Solutions", i: <Shield size={32}/> },
    { n: "Information Technology", i: <Monitor size={32}/> },
    { n: "Cleaning Services", i: <Wind size={32}/> },
    { n: "Logistics", i: <Truck size={32}/> },
    { n: "Printing Solutions", i: <Printer size={32}/> },
    { n: "Procurement", i: <ShoppingCart size={32}/> },
    { n: "Supply Chain Management", i: <Activity size={32}/> },
  ];

  return (
    <section className="py-24 bg-[#051124]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#f58220] uppercase tracking-[0.4em] font-bold text-[10px] mb-4">Integrated Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">Complete Solutions. One Trusted Partner.</h2>
        </div>

        {/* The Grid with thin borders like the design */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border border-white/10">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="p-10 border-r border-b border-white/10 flex flex-col items-center text-center group hover:bg-white/5 transition-all cursor-pointer"
            >
              <div className="text-[#f58220] mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.i}
              </div>
              <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-tight mb-4 min-h-[30px]">
                {item.n}
              </p>
              <span className="text-[#f58220] text-[9px] font-black uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                Explore →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}








/*import { Shield, Monitor, Wind, Truck, Printer, ShoppingCart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { name: "Security", icon: <Shield size={30}/> },
  { name: "IT Solutions", icon: <Monitor size={30}/> },
  { name: "Cleaning", icon: <Wind size={30}/> },
  { name: "Logistics", icon: <Truck size={30}/> },
  { name: "Printing", icon: <Printer size={30}/> },
  { name: "Procurement", icon: <ShoppingCart size={30}/> },
  { name: "Supply Chain", icon: <Activity size={30}/> },
];

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-orange uppercase tracking-[0.4em] font-black text-[10px] mb-4">Integrated Solutions</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-none">Complete Solutions. One Trusted Partner.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border border-white/5">
          {services.map((s, i) => (
            <motion.div key={i} whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }} className="p-10 border-r border-b border-white/5 flex flex-col items-center text-center group transition-all cursor-pointer">
              <div className="text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
              <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-tight">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}*/