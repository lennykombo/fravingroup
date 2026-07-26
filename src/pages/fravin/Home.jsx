import CorporateNavbar from '../../components/fravin/CorporateNavbar';
import Hero from '../../components/fravin/Hero';
import AboutSummary from '../../components/fravin/AboutSummary';
import Industries from '../../components/fravin/Industries';
import Stats from '../../components/fravin/Stats';
import ServiceGrid from '../../components/fravin/ServiceGrid';
import FeaturedProjects from '../../components/fravin/FeaturedProjects';
import CorporateFooter from '../../components/fravin/CorporateFooter';

export default function FravinHome() {
  return (
    <main className="bg-white">
      <CorporateNavbar />
      <Hero />
      <AboutSummary />
      <ServiceGrid />
      <Industries />
      <Stats />
      <FeaturedProjects />
      
      {/* FINAL CALL TO ACTION */}
      <section className="bg-brand-navy py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
          <div>
            <h2 className="text-5xl font-bold text-white leading-tight mb-6">
              Let's Build Your Next <br />
              <span className="text-brand-orange">Solution Together.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-sm">
                Partner with us and discover how our integrated solutions can transform your business.
            </p>
            <div className="flex gap-4">
                <button className="bg-brand-orange text-white px-10 py-4 rounded-md font-bold transition-all hover:bg-orange-600">
                    Request a Quote →
                </button>
                <button className="border border-white/20 text-white px-10 py-4 rounded-md font-bold transition-all hover:bg-white/5">
                    Contact Us
                </button>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
             <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000" className="w-full h-full object-cover" alt="Handshake" />
          </div>
        </div>
      </section>

     
    </main>
  );
}