import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

// Global Shell Components
import CorporateNavbar from './components/fravin/CorporateNavbar';
import CorporateFooter from './components/fravin/CorporateFooter';

// Pages
import FravinHome from './pages/fravin/Home';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <main className="selection:bg-brand-orange selection:text-white bg-white min-h-screen font-sans">
        
        <CorporateNavbar />
        
        <Routes>
          <Route path="/" element={<FravinHome />} />
        </Routes>

        <CorporateFooter />
        
      </main>
    </Router>
  );
}

export default App;