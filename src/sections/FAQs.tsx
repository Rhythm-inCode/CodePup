import React, { useState } from 'react';
import useInView from '../hooks/useInView';

const items = [
  { q: 'How fast can I build a site?', a: 'Most sites can be scaffolded in under 5 minutes with basic prompts. You can then tweak and export.' },
  { q: 'Can I export code?', a: 'Yes — export React + Tailwind-ready code, ready to deploy.' },
  { q: 'Do you host sites?', a: 'We provide one-click deploy options to platforms like Vercel and Netlify.' },
  { q: 'Can I customize themes?', a: 'Absolutely! You can tweak colors, fonts, and layouts or use your own Tailwind configuration.' },
  { q: 'Is team collaboration supported?', a: 'Yes — multiple users can work on sites and share templates seamlessly.' },
  { q: 'Are my sites secure?', a: 'All generated sites follow best security practices and can be exported to any secure hosting.' },
  { q: 'Can I use my own domain?', a: 'Yes, you can connect custom domains and deploy directly with one click.' },
  { q: 'Does it support responsive design?', a: 'Every site generated is fully responsive and optimized for desktop, tablet, and mobile.' },
];

export default function FAQs() {
  const { ref, visible } = useInView<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} id="faqs" className={`py-16 relative fade-section ${visible ? 'visible' : ''}`}>
      <div className="relative z-10 backdrop-blur-[2px] bg-[#01060d]/70 rounded-3xl border border-white/5 shadow-[0_0_60px_rgba(0,255,255,0.08)] transition-all duration-700 max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white glow-text text-center">Frequently Asked Questions</h3>
         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-xl p-6 glass ring-1 ring-white/6 transform transition-all hover:scale-[1.02]">
              <button
                className="w-full text-left flex items-center justify-between"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span className="font-medium text-white">{it.q}</span>
                <span className="text-slate-400">{open === idx ? '−' : '+'}</span>
              </button>
              <div className={`mt-3 text-slate-300 transition-all ${open === idx ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                <p>{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
