import React from 'react';
import Button from '../components/Button';
import useInView from '../hooks/useInView';

const tiers = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$0',
    desc: 'Starter — export only, simple templates',
    features: ['1 site', 'Basic templates', 'Export code']
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$12/mo',
    desc: 'For creators and freelancers',
    features: ['5 sites', 'Custom themes', 'Export + Deploy'],
    highlight: true
  },
  {
    id: 'agency',
    name: 'Agency',
    price: '$49/mo',
    desc: 'For teams & agencies',
    features: ['Unlimited sites', 'Team seats', 'Priority support']
  }
];

export default function Pricing() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} id="pricing" className={`py-16 relative fade-section ${visible ? 'visible' : ''}`}>
      <div className="relative z-10 backdrop-blur-[2px] bg-[#01060d]/70 rounded-3xl border border-white/5 shadow-[0_0_60px_rgba(0,255,255,0.08)] transition-all duration-700 max-w-6xl mx-auto px-6 py-16 glow-card">
        <h3 className="text-2xl font-semibold text-center">Pricing</h3>
        <h1 className="text-slate-400 mt-2 max-w-2xl">Simple pricing — scale when you’re ready. Free tier to try everything out.</h1>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.id} className={`p-6 rounded-2xl shadow-lg glass ring-1 ${t.highlight ? 'ring-cpblue/50 scale-[1.02] bg-gradient-to-b from-white/2 to-white/1' : 'ring-white/6'} transform transition-all hover:-translate-y-1`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.desc}</div>
                </div>
                <div className="text-2xl font-extrabold">{t.price}</div>
              </div>

              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {t.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>

              <div className="mt-6">
                <Button>{t.highlight ? 'Start Pro' : 'Choose'}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
