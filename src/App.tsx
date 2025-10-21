import React, { useEffect }from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQs from './sections/FAQs';
import Footer from './components/Footer';
import MovingDots from './components/MovingDots';
import CosmicGap from './components/CosmicGap';
import UniverseDivider from './components/UniverseDivider';
import useTheme from './hooks/useTheme';

function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.05; // scroll factor (adjust as needed)
      document.documentElement.style.setProperty('--bg-offset', `${offset}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`app-bg ${theme === 'dark' ? 'dark' : 'light'}`}>
  <div className="bg-grade" aria-hidden />
  <MovingDots />
  
  <Navbar theme={theme} setTheme={setTheme} />
  <main className="relative z-10">
    <Hero />
    
    <CosmicGap />
    <Gallery />
    <Pricing />
    <Testimonials />
    <FAQs />
  </main>
  <Footer />
</div>

  );
}

export default App;
