import { motion } from 'framer-motion';

export default function AboutSummary() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" alt="Office" />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-zinc-100 hidden md:block">
            <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-1">Established</p>
            <p className="text-5xl font-black text-brand-navy">2018</p>
            <p className="text-zinc-500 text-[10px] font-bold mt-1">Nairobi, Kenya</p>
          </div>
        </motion.div>

        <div>
          <span className="text-brand-orange font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Who We Are</span>
          <h2 className="text-5xl lg:text-7xl font-bold text-brand-navy tracking-tighter leading-tight mb-8">
            A Proudly African Company <br /> with Global Ambitions
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-10">Incorporated in 2018, Fravin Group LTD is a multi-service company with its roots in Nairobi, Kenya. We provide innovative and integrated solutions across multiple sectors.</p>
          <button className="text-brand-navy font-black text-xs uppercase tracking-widest border-b-2 border-brand-orange pb-2 hover:text-brand-orange transition-all">More About Us →</button>
        </div>
      </div>
    </section>
  );
}