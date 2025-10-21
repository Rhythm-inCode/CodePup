import React from 'react';
import mock from '../assets/mock-site-1.svg';
import useInView from '../hooks/useInView';

import future from '../assets/Future.png';
import designwave from '../assets/DesignWave.png';
import lawfirm from '../assets/LawFirm.png';
import travel from '../assets/Travel.png';
import wake from '../assets/Wake.png';
import travelweb from '../assets/TravelWeb.png';

const sites = [
  { id: 1, title: 'Future', img: future },
  { id: 2, title: 'DesignWave', img: designwave },
  { id: 3, title: 'LawFirm', img: lawfirm },
  { id: 4, title: 'Travel', img: travel },
  { id: 5, title: 'Wake', img: wake },
  { id: 6, title: 'TravelWeb', img: travelweb },
];

export default function Gallery() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} id="gallery" className={`py-16 relative fade-section ${visible ? 'visible' : ''}`}>
      <div className="relative z-10 backdrop-blur-[2px] bg-[#01060d]/70 rounded-3xl border border-white/5 shadow-[0_0_60px_rgba(0,255,255,0.08)] transition-all duration-700 max-w-6xl mx-auto px-6 py-16 glow-card ">
        <h3 className="text-2xl font-semibold text-center">Gallery — sites built with CodePup</h3>
        <h1 className="text-slate-400 mt-2 max-w-2xl ">A small selection to show how varied the output can be — business, portfolio, blog, and landing pages.</h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((s) => (
            <div key={s.id} className="rounded-2xl overflow-hidden shadow-lg glass ring-1 ring-white/6 transform transition-transform hover:-translate-y-1 hover:scale-[1.02]">
              <img src={s.img} alt={s.title} className="w-full h-44 object-cover" loading="lazy" />
              <div className="p-4">
                <div className="font-medium text-white">{s.title}</div>
                <div className="text-slate-400 text-sm mt-1">Built with simple prompts — exportable and production-ready.</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="neon-btn px-6 py-3">See More</button>
        </div>
      </div>
    </section>
  );
}
