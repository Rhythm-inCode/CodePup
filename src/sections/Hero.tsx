import React, { useState } from 'react';
import PromptBox from '../components/PromptBox';
import FloatingPreview from '../components/FloatingPreview';
import useInView from '../hooks/useInView';
import { HERO_TITLE, HERO_SUB } from '../utils/constants';
import future from '../assets/Future.png';
import designwave from '../assets/DesignWave.png';
import travel from '../assets/Travel.png';
import portfolio from '../assets/template1.png';
import blog from '../assets/template2.png';
import landing from '../assets/template3.png';


// Mock data for templates and examples
const templates = [
  { id: 1, name: 'Portfolio', img: portfolio },
  { id: 2, name: 'Blog', img: blog },
  { id: 3, name: 'Landing', img: landing },
];

const examples = [
  { id: 1, name: 'Future', img: future },
  { id: 2, name: 'DesignWave', img: designwave },
  { id: 3, name: 'Travel', img: travel },
];

export default function Hero() {
  const { ref, visible } = useInView<HTMLElement>();
  const [activeView, setActiveView] = useState<'templates' | 'examples' | null>(null);

  const toggleView = (type: 'templates' | 'examples') => {
    setActiveView((prev) => (prev === type ? null : type));
  };

  const itemsToShow =
    activeView === 'templates' ? templates :
    activeView === 'examples' ? examples : [];

  return (
    <section ref={ref} id="hero" className={`hero-wrap ${visible ? 'fade-section visible' : 'fade-section'}`}>
      <div className="relative z-10 backdrop-blur-[2px] bg-[#01060d]/70 rounded-3xl border border-white/5 shadow-[0_0_60px_rgba(0,255,255,0.08)] transition-all duration-700 max-w-6xl mx-auto px-6 py-16 glow-card flex flex-col items-center text-center gap-8">
        
        <div className="hero-title text-4xl md:text-5xl font-bold text-center glow-text">{HERO_TITLE}</div>
        <p className="hero-sub text-slate-400 mt-2 max-w-3xl">{HERO_SUB}</p>

        <PromptBox onSubmit={(q) => console.log('prompt:', q)} />

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="cta-ghost cursor-pointer" onClick={() => toggleView('templates')}>Explore Templates</div>
          <div className="cta-ghost cursor-pointer" onClick={() => toggleView('examples')}>See Examples</div>
        </div>

        {/* Smooth Fade Grid */}
        <div
          className={`mt-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 transition-all duration-500 ease-in-out transform
            ${activeView ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}`}
        >
          {itemsToShow.map((item) => (
            <div key={item.id} className="rounded-xl overflow-hidden shadow-lg glass ring-1 ring-white/6 transform transition-transform hover:-translate-y-1 hover:scale-[1.02]">
              <img src={item.img} alt={item.name} className="w-full h-32 object-cover" loading="lazy" />
              <div className="p-3 text-center">
                <div className="font-medium text-white">{item.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 w-full flex justify-center">
          <FloatingPreview />
        </div>
      </div>
    </section>
  );
}