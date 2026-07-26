import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, HardHat, Truck } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Redefining Service,",
    highlight: "Integrity & Safety.",
    desc: "Fravin Group LTD delivers innovative products and integrated service solutions that empower businesses.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
  },
  {
    id: 2,
    title: "Innovative Integrated",
    highlight: "Security Solutions.",
    desc: "We provide comprehensive manned guarding and technical security systems tailored for your infrastructure.",
    image: "https://images.pexels.com/photos/2990765/pexels-photo-2990765.jpeg",
  },
  {
    id: 3,
    title: "Advanced Logistics &",
    highlight: "Supply Chain.",
    desc: "Streamlining your operations with expert fleet management and procurement services across the region.",
    image: "https://images.pexels.com/photos/19908104/pexels-photo-19908104.jpeg",
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const cards = [
    { icon: <Shield className="text-brand-orange" size={20}/>, t: "Integrity", d: "Highest ethics." },
    { icon: <HardHat className="text-brand-orange" size={20}/>, t: "Safety", d: "People first." },
    { icon: <Truck className="text-brand-orange" size={20}/>, t: "Delivery", d: "Exceeding goals." },
  ];

  return (
    <section className="relative min-h-screen bg-brand-navy pt-32 lg:pt-40 pb-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 z-10 w-full">
        
        {/* LEFT SIDE: Sliding Text */}
        {/* CHANGED: Removed fixed height h-[350px], added min-h-[450px] and relative positioning */}
        <div className="relative min-h-[400px] lg:min-h-[450px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              {/* CHANGED: text-4xl on mobile, 5xl on small laptops, 7xl on large desktops */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                {slides[current].title} <br /> 
                <span className="text-brand-orange">{slides[current].highlight}</span>
              </h1>
              
              {/* CHANGED: text-sm on mobile, text-lg on laptop */}
              <p className="text-zinc-400 text-base lg:text-lg mb-8 max-w-lg leading-relaxed">
                {slides[current].desc}
              </p>
              
              <div className="flex gap-4">
                <button className="bg-brand-orange text-white px-8 py-3.5 rounded-md font-bold text-xs lg:text-sm uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all duration-500 shadow-lg shadow-orange-500/20">
                  Explore Solutions →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE: Sliding Image + Cards */}
        <div className="relative h-[350px] lg:h-[500px]">
          <div className="w-full h-full rounded-[30px] lg:rounded-[40px] overflow-hidden border border-white/10 relative">
            <AnimatePresence mode="wait">
              <motion.img 
                key={current}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.4, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                src={slides[current].image} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </AnimatePresence>
          </div>

          {/* Floating Feature Cards */}
          <div className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 hidden md:flex flex-col gap-3 lg:gap-4 z-20">
            {cards.map((c, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.5 + i*0.1 }} 
                className="bg-brand-navy/90 backdrop-blur-xl border border-white/10 p-5 lg:p-6 rounded-xl lg:rounded-2xl w-56 lg:w-64 shadow-2xl"
              >
                <div className="flex items-center gap-3 lg:gap-4 mb-2">
                  {c.icon} <span className="text-white text-sm lg:text-base font-bold">{c.t}</span>
                </div>
                <p className="text-zinc-400 text-[10px] lg:text-xs">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              current === index ? "w-10 lg:w-12 bg-brand-orange" : "w-2 lg:w-3 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-[120px] rounded-full -z-0" />
    </section>
  );
}
















/*import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, HardHat, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Redefining Service, Integrity,",
    highlight: "Safety & Delivery.",
    desc: "Fravin Group LTD delivers innovative products and integrated service solutions that empower businesses and create lasting value.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
    cta: "Explore Our Solutions"
  },
  {
    id: 2,
    title: "Advanced Security &",
    highlight: "Manned Guarding.",
    desc: "Protecting your assets with state-of-the-art surveillance and highly trained personnel across all sectors.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000",
    cta: "Security Solutions"
  },
  {
    id: 3,
    title: "Next-Gen Technology &",
    highlight: "Digital Infrastructure.",
    desc: "From cybersecurity to software development, we provide the tech foundation your enterprise needs to excel.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000",
    cta: "IT Infrastructure"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-play slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000); // 7 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const cards = [
    { icon: <Shield className="text-[#f58220]" size={22}/>, t: "Integrity", d: "Highest ethics." },
    { icon: <HardHat className="text-[#f58220]" size={22}/>, t: "Safety", d: "People first." },
    { icon: <Truck className="text-[#f58220]" size={22}/>, t: "Delivery", d: "Exceeding goals." },
  ];

  return (
    <section className="relative min-h-screen bg-[#051124] overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* 1. BACKGROUND IMAGE (KEN BURNS EFFECT) *//*
          <motion.div 
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.35 }}
            transition={{ duration: 8, ease: "linear" }}
            className="absolute inset-0"
          >
            <img 
              src={slides[current].image} 
              alt="Slide" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          {/* Overlay Gradients *//*
          <div className="absolute inset-0 bg-gradient-to-r from-[#051124] via-[#051124]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051124] via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 z-10 w-full pt-20">
        
        {/* 2. TEXT CONTENT (LEFT SIDE) *//*
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl md:text-8xl font-bold text-white leading-[0.95] tracking-tighter mb-8">
                {slides[current].title} <br />
                <span className="text-[#f58220]">{slides[current].highlight}</span>
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                {slides[current].desc}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/solutions" className="bg-[#f58220] text-white px-10 py-5 rounded-sm font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-[#051124] transition-all duration-500 shadow-xl shadow-orange-500/20">
                  {slides[current].cta} →
                </Link>
                <Link to="/about" className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-sm font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white/20 transition-all">
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. CORE VALUE CARDS (RIGHT SIDE - STATIC OR DELAYED) *//*
        <div className="lg:col-span-5 flex flex-col gap-4 self-center">
          {cards.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + (i * 0.2) }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[24px] flex gap-6 hover:bg-white/10 transition-colors cursor-default"
            >
              <div className="mt-1">{c.icon}</div>
              <div>
                <h4 className="text-white font-bold mb-1 tracking-tight">{c.t}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{c.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. PROGRESS INDICATORS (APPLE STYLE) *//*
      <div className="absolute bottom-12 left-6 md:left-12 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="h-1 transition-all duration-500 rounded-full bg-white/20 overflow-hidden"
            style={{ width: current === index ? '60px' : '20px' }}
          >
            {current === index && (
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 7, ease: "linear" }}
                className="h-full bg-[#f58220]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Down Mouse icon *//*
      <div className="absolute bottom-10 right-12 hidden md:flex flex-col items-center gap-2 text-white/30">
        <div className="w-5 h-8 border-2 border-white/10 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-[#f58220] rounded-full" 
          />
        </div>
        <span className="text-[9px] uppercase font-bold tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
}*/











/*import { motion } from 'framer-motion';
import { Shield, HardHat, Truck } from 'lucide-react';

export default function Hero() {
  const cards = [
    { icon: <Shield className="text-brand-orange"/>, t: "Integrity", d: "Highest ethics." },
    { icon: <HardHat className="text-brand-orange"/>, t: "Safety", d: "People first." },
    { icon: <Truck className="text-brand-orange"/>, t: "Delivery", d: "Exceeding goals." },
  ];

  return (
    <section className="relative min-h-screen bg-brand-navy pt-48 pb-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] mb-8 tracking-tighter">
            Redefining Service, <br /> 
            <span className="text-brand-orange">Integrity & Safety.</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-10 max-w-lg leading-relaxed">Fravin Group LTD delivers innovative products and integrated service solutions that empower businesses.</p>
          <div className="flex gap-4">
            <button className="bg-brand-orange text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-brand-navy transition-all duration-500">Explore Solutions →</button>
          </div>
        </motion.div>

        <div className="relative h-[500px]">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full rounded-[40px] overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" className="w-full h-full object-cover opacity-50" />
          </motion.div>
          {/* Floating Feature Cards *//*
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden lg:flex flex-col gap-4">
            {cards.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i*0.2 }} className="bg-brand-navy/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-4 mb-2">{c.icon} <span className="text-white font-bold">{c.t}</span></div>
                <p className="text-zinc-400 text-xs">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Background Decor *//*
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-[120px] rounded-full -z-0" />
    </section>
  );
}*/