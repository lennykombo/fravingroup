import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, Mail, 
  Shield, Monitor, Sparkles, Truck, Printer, ShoppingCart, Activity,
  ChevronRight
} from 'lucide-react';

export default function CorporateNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
    setActiveMobileSub(null);
  }, [location]);

  // CHANGE 1: Standardized data format (All items are now Objects)
  const serviceCategories = [
     {
    title: "Security Services",
    icon: <Shield size={20} className="text-[#f58220]" />,
    // Link directly to the IDs in our data file
    items: [
      { name: "Manned Guarding", path: "/services/security/premise-guarding" },
      { name: "CCTV Installation", path: "/services/security/security-equipment" },
      { name: "Alarm Systems", path: "/services/security/alarm-response" },
      { name: "K9 Services", path: "/services/security/k9-services" },
    ]
  },
    {
      title: "Information Technology",
      icon: <Monitor size={20} className="text-[#f58220]" />,
      items: [
        { name: "Software Development", path: "#" },
        { name: "Networking", path: "#" },
        { name: "Cybersecurity", path: "#" },
        { name: "IT Support", path: "#" }
      ]
    },
    { title: "Cleaning Services", icon: <Sparkles size={20} className="text-[#f58220]" />, path: "#" },
    { title: "Logistics", icon: <Truck size={20} className="text-[#f58220]" />, path: "#" },
    { title: "Printing Services", icon: <Printer size={20} className="text-[#f58220]" />, path: "#" },
    { title: "Procurement", icon: <ShoppingCart size={20} className="text-[#f58220]" />, path: "#" },
    { title: "Supply Chain Management", icon: <Activity size={20} className="text-[#f58220]" />, path: "#" },
  ];

  return (
    <header className="fixed w-full z-[100]">
      {/* 1. TOP BAR */}
      <div className={`bg-[#051124] text-[10px] text-zinc-400 py-2 px-12 hidden lg:flex justify-between items-center transition-all duration-500 ${scrolled ? '-translate-y-full opacity-0' : 'translate-y-0'}`}>
        <div className="flex gap-6 font-bold uppercase tracking-widest">
           <span className="flex items-center gap-2"><Phone size={10} className="text-[#f58220]"/> +254 700 000 000</span>
           <span className="flex items-center gap-2"><Mail size={10} className="text-[#f58220]"/> info@fravin.com</span>
        </div>
        <span className="font-bold uppercase tracking-widest opacity-60">Mon - Fri: 8:00 AM - 5:00 PM</span>
      </div>

      {/* 2. MAIN NAV */}
      <nav className={`transition-all duration-500 px-6 lg:px-12 py-1 ${scrolled ? "bg-white shadow-xl" : "bg-white/95 backdrop-blur-md"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <Link to="/" className="relative flex flex-col group py-1">
            <div className="relative h-12 lg:h-16 w-44 lg:w-64">
              <img src="/logo1.png" alt="Fravin Logo" className="h-full w-full object-contain object-left" />
            </div>
            <span className={`text-[7px] font-black tracking-[0.4em] mt-1 uppercase transition-colors duration-500 ${scrolled ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Redefine. Deliver. Excel.
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-zinc-500">
            <Link to="/" className="hover:text-[#f58220] transition">Home</Link>
            <Link to="/about" className="hover:text-[#f58220] transition">About Us</Link>
            
            <div 
              className="relative py-4 cursor-pointer group"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <div className={`flex items-center gap-1 transition-colors ${megaMenuOpen ? 'text-[#f58220]' : 'group-hover:text-[#f58220]'}`}>
                Our Services <ChevronDown size={12} className={`transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`}/>
              </div>

              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div 
  initial={{ opacity: 0, y: 15 }} 
  animate={{ opacity: 1, y: 0 }} 
  exit={{ opacity: 0, y: 15 }} 
  className="absolute top-full -left-[500px] xl:-left-64 w-[850px] pt-4 pointer-events-auto"
>
                    <div className="bg-white shadow-2xl border border-zinc-100 rounded-3xl p-8 grid grid-cols-3 gap-10">
                      <div className="col-span-2 grid grid-cols-2 gap-8 border-r border-zinc-100 pr-8">
                        {serviceCategories.slice(0, 2).map((cat, i) => (
                          <div key={i}>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2 bg-zinc-50 rounded-lg">{cat.icon}</div>
                              <h4 className="text-[12px] text-[#051124] font-black tracking-tight">{cat.title}</h4>
                            </div>
                            <ul className="space-y-3 pl-11">
                              {/* CHANGE 2: Updated loop to handle the new object structure */}
                              {cat.items?.map((item, j) => (
                                <li key={j}>
                                  <Link to={item.path} className="text-zinc-400 hover:text-[#f58220] transition-colors normal-case font-medium text-sm flex items-center gap-2 group/link">
                                    <div className="w-1 h-1 bg-zinc-200 rounded-full group-hover/link:bg-[#f58220]" />
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] text-zinc-300 font-black tracking-[0.2em] mb-2 uppercase">Other Services</h4>
                        {serviceCategories.slice(2).map((cat, i) => (
                          <Link key={i} to={cat.path || "#"} className="flex items-center gap-3 group/item">
                            <div className="p-2 bg-zinc-50 rounded-lg group-hover/item:bg-[#f58220]/10 transition-colors">{cat.icon}</div>
                            <span className="text-[11px] text-zinc-500 font-bold group-hover/item:text-[#051124] transition-colors">{cat.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/projects" className="hover:text-[#f58220] transition">Projects</Link>
            <Link to="/contact" className="bg-[#f58220] text-white px-8 py-3 rounded-md font-bold hover:bg-[#051124] transition shadow-lg shadow-[#f58220]/20">Request a Quote</Link>
          </div>

          <button onClick={() => setMobileOpen(true)} className="lg:hidden text-[#f58220] p-2 hover:bg-zinc-50 rounded-lg transition-colors">
            <Menu size={28}/>
          </button>
        </div>
      </nav>

      {/* 3. MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden" />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-[#051124] z-[200] lg:hidden flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <img src="/logo1.png" alt="Fravin" className="h-10 object-contain invert brightness-0" />
                <button onClick={() => setMobileOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"><X size={28}/></button>
              </div>

              <div className="flex flex-col gap-4">
                <Link to="/" className="text-2xl font-black text-white tracking-tighter uppercase mb-4">Home</Link>
                <Link to="/about" className="text-2xl font-black text-white tracking-tighter uppercase mb-4">About Us</Link>
                
                <div className="mb-4">
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex items-center justify-between w-full text-2xl font-black tracking-tighter uppercase mb-2 ${mobileServicesOpen ? 'text-[#f58220]' : 'text-white'}`}
                  >
                    Our Services 
                    <ChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden space-y-4 pt-4">
                        {serviceCategories.map((cat, i) => (
                          <div key={i} className="flex flex-col">
                            <button 
                              onClick={() => setActiveMobileSub(activeMobileSub === i ? null : i)}
                              className="flex items-center justify-between group py-2"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg">{cat.icon}</div>
                                <span className={`text-lg font-bold ${activeMobileSub === i ? 'text-[#f58220]' : 'text-zinc-300'}`}>{cat.title}</span>
                              </div>
                              {cat.items && <ChevronRight size={16} className={`text-zinc-600 transition-transform ${activeMobileSub === i ? 'rotate-90' : ''}`} />}
                            </button>

                            <AnimatePresence>
                              {cat.items && activeMobileSub === i && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-14 flex flex-col gap-3 py-2 border-l border-white/5 ml-6">
                                  {/* CHANGE 3: Mobile loop updated to handle objects */}
                                  {cat.items.map((sub, j) => (
                                    <Link key={j} to={sub.path} className="text-zinc-500 hover:text-white transition-colors text-base font-medium">
                                      {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link to="/projects" className="text-2xl font-black text-white tracking-tighter uppercase">Projects</Link>
              </div>

              <div className="mt-auto pt-10">
                <button className="w-full bg-[#f58220] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-2xl shadow-orange-500/20">
                  <Phone size={18}/> Request a Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}












/*import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, Mail, 
  Shield, Monitor, Sparkles, Truck, Printer, ShoppingCart, Activity,
  ChevronRight
} from 'lucide-react';

export default function CorporateNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  // Track which sub-category is open in the mobile menu
  const [activeMobileSub, setActiveMobileSub] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
    setActiveMobileSub(null);
  }, [location]);

  const serviceCategories = [
    {
      title: "Security Services",
      icon: <Shield size={20} className="text-[#f58220]" />,
     // items: ["Manned Guarding", "CCTV Installation", "Access Control", "Alarm Systems"]
      items: [
      { name: "Manned Guarding", path: "/services/security/premise-guarding" },
      { name: "CCTV Installation", path: "/services/security/security-equipment" },
      { name: "Alarm Systems", path: "/services/security/alarm-response" },
      { name: "K9 Services", path: "/services/security/k9-services" },
       ]
    },
    {
      title: "Information Technology",
      icon: <Monitor size={20} className="text-[#f58220]" />,
      items: ["Software Development", "Networking", "Cybersecurity", "IT Support"]
    },
    { title: "Cleaning Services", icon: <Sparkles size={20} className="text-[#f58220]" /> },
    { title: "Logistics", icon: <Truck size={20} className="text-[#f58220]" /> },
    { title: "Printing Services", icon: <Printer size={20} className="text-[#f58220]" /> },
    { title: "Procurement", icon: <ShoppingCart size={20} className="text-[#f58220]" /> },
    { title: "Supply Chain Management", icon: <Activity size={20} className="text-[#f58220]" /> },
  ];

  <Link 
  to={item.path} // Use the new path property
  className="text-zinc-400 hover:text-[#f58220] ..."
>
  {item.name}
</Link>

  return (
    <header className="fixed w-full z-[100]">
      {/* 1. TOP BAR *//*
      <div className={`bg-[#051124] text-[10px] text-zinc-400 py-2 px-12 hidden lg:flex justify-between items-center transition-all duration-500 ${scrolled ? '-translate-y-full opacity-0' : 'translate-y-0'}`}>
        <div className="flex gap-6 font-bold uppercase tracking-widest">
           <span className="flex items-center gap-2"><Phone size={10} className="text-[#f58220]"/> +254 700 000 000</span>
           <span className="flex items-center gap-2"><Mail size={10} className="text-[#f58220]"/> info@fravin.com</span>
        </div>
        <span className="font-bold uppercase tracking-widest opacity-60">Mon - Fri: 8:00 AM - 5:00 PM</span>
      </div>

      {/* 2. MAIN NAV *//*
      <nav className={`transition-all duration-500 px-6 lg:px-12 py-1 ${scrolled ? "bg-white shadow-xl" : "bg-white/95 backdrop-blur-md"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section *//*
          <Link to="/" className="relative flex flex-col group py-1">
            <div className="relative h-12 lg:h-16 w-44 lg:w-64">
              <img src="/logo1.png" alt="Fravin Logo" className="h-full w-full object-contain object-left" />
            </div>
            <span className={`text-[7px] font-black tracking-[0.4em] mt-1 uppercase transition-colors duration-500 ${scrolled ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Redefine. Deliver. Excel.
            </span>
          </Link>

          {/* Desktop Links *//*
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-zinc-500">
            <Link to="/" className="hover:text-[#f58220] transition">Home</Link>
            <Link to="/about" className="hover:text-[#f58220] transition">About Us</Link>
            
            {/* Desktop Mega Menu Trigger *//*
            <div 
              className="relative py-4 cursor-pointer group"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <div className={`flex items-center gap-1 transition-colors ${megaMenuOpen ? 'text-[#f58220]' : 'group-hover:text-[#f58220]'}`}>
                Our Services <ChevronDown size={12} className={`transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`}/>
              </div>

              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full -left-48 w-[800px] pt-4 pointer-events-auto">
                    <div className="bg-white shadow-2xl border border-zinc-100 rounded-3xl p-8 grid grid-cols-3 gap-10">
                      <div className="col-span-2 grid grid-cols-2 gap-8 border-r border-zinc-100 pr-8">
                        {serviceCategories.slice(0, 2).map((cat, i) => (
                          <div key={i}>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2 bg-zinc-50 rounded-lg">{cat.icon}</div>
                              <h4 className="text-[12px] text-[#051124] font-black tracking-tight">{cat.title}</h4>
                            </div>
                            <ul className="space-y-3 pl-11">
                              {cat.items.map((item, j) => (
                                <li key={j}>
                                  <Link to="#" className="text-zinc-400 hover:text-[#f58220] transition-colors normal-case font-medium text-sm flex items-center gap-2 group/link">
                                    <div className="w-1 h-1 bg-zinc-200 rounded-full group-hover/link:bg-[#f58220]" />
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] text-zinc-300 font-black tracking-[0.2em] mb-2 uppercase">Other Services</h4>
                        {serviceCategories.slice(2).map((cat, i) => (
                          <Link key={i} to="#" className="flex items-center gap-3 group/item">
                            <div className="p-2 bg-zinc-50 rounded-lg group-hover/item:bg-[#f58220]/10 transition-colors">{cat.icon}</div>
                            <span className="text-[11px] text-zinc-500 font-bold group-hover/item:text-[#051124] transition-colors">{cat.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/projects" className="hover:text-[#f58220] transition">Projects</Link>
            <Link to="/contact" className="bg-[#f58220] text-white px-8 py-3 rounded-md font-bold hover:bg-[#051124] transition shadow-lg shadow-[#f58220]/20">Request a Quote</Link>
          </div>

          <button onClick={() => setMobileOpen(true)} className="lg:hidden text-[#f58220] p-2 hover:bg-zinc-50 rounded-lg transition-colors">
            <Menu size={28}/>
          </button>
        </div>
      </nav>

      {/* 3. MOBILE MENU (Enhanced Structured Drawer) *//*
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden" />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-[#051124] z-[200] lg:hidden flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <img src="/logo1.png" alt="Fravin" className="h-10 object-contain invert brightness-0" />
                <button onClick={() => setMobileOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"><X size={28}/></button>
              </div>

              <div className="flex flex-col gap-4">
                <Link to="/" className="text-2xl font-black text-white tracking-tighter uppercase mb-4">Home</Link>
                <Link to="/about" className="text-2xl font-black text-white tracking-tighter uppercase mb-4">About Us</Link>
                
                {/* COMPLEX MOBILE SERVICES MENU *//*
                <div className="mb-4">
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex items-center justify-between w-full text-2xl font-black tracking-tighter uppercase mb-2 ${mobileServicesOpen ? 'text-[#f58220]' : 'text-white'}`}
                  >
                    Our Services 
                    <ChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden space-y-4 pt-4">
                        {serviceCategories.map((cat, i) => (
                          <div key={i} className="flex flex-col">
                            {/* Sub-toggle for categories with items *//*
                            <button 
                              onClick={() => setActiveMobileSub(activeMobileSub === i ? null : i)}
                              className="flex items-center justify-between group py-2"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg">{cat.icon}</div>
                                <span className={`text-lg font-bold ${activeMobileSub === i ? 'text-[#f58220]' : 'text-zinc-300'}`}>{cat.title}</span>
                              </div>
                              {cat.items && <ChevronRight size={16} className={`text-zinc-600 transition-transform ${activeMobileSub === i ? 'rotate-90' : ''}`} />}
                            </button>

                            {/* Deep Level Links (Manned Guarding, etc.) *//*
                            <AnimatePresence>
                              {cat.items && activeMobileSub === i && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-14 flex flex-col gap-3 py-2 border-l border-white/5 ml-6">
                                  {cat.items.map((sub, j) => (
                                    <Link key={j} to="#" className="text-zinc-500 hover:text-white transition-colors text-base font-medium">
                                      {sub}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link to="/projects" className="text-2xl font-black text-white tracking-tighter uppercase">Projects</Link>
              </div>

              <div className="mt-auto pt-10">
                <button className="w-full bg-[#f58220] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-2xl shadow-orange-500/20">
                  <Phone size={18}/> Request a Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}*/

