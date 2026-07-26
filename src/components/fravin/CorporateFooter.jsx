import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function CorporateFooter() {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Column 1: Brand */}
        <div className="lg:col-span-2">
          <div className="text-2xl font-black tracking-tighter mb-6 uppercase">
            FRAVIN <span className="text-brand-orange">GROUP</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
            We redefine service, integrity, safety, and delivery through innovative solutions and exceptional execution.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-brand-orange">Quick Links</h4>
          <ul className="space-y-4 text-zinc-400 text-sm font-bold">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Projects</li>
            <li className="hover:text-white transition cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Column 3: Solutions */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-brand-orange">Our Solutions</h4>
          <ul className="space-y-4 text-zinc-400 text-sm font-bold">
            <li className="hover:text-white transition cursor-pointer">Security</li>
            <li className="hover:text-white transition cursor-pointer">IT Solutions</li>
            <li className="hover:text-white transition cursor-pointer">Logistics</li>
            <li className="hover:text-white transition cursor-pointer">Printing</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-brand-orange">Newsletter</h4>
          <p className="text-zinc-400 text-xs mb-4">Subscribe for latest updates and insights.</p>
          <div className="flex flex-col gap-2">
            <input type="email" placeholder="Your email address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-orange" />
            <button className="bg-brand-orange text-white py-3 rounded-lg font-black text-[10px] uppercase tracking-widest">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Fravin Group LTD. All Rights Reserved.</p>
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}