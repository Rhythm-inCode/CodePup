import React from 'react';
import useInView from '../hooks/useInView';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: 'Alex R.', role: 'Designer', review: 'This platform is like exploring a new universe every time!' },
  { id: 2, name: 'Maya S.', role: 'Developer', review: 'The templates and previews are simply stellar!' },
  { id: 3, name: 'Leo P.', role: 'Creator', review: 'The cosmic theme makes working here mesmerizing.' },
  { id: 4, name: 'Nina K.', role: 'Marketer', review: 'I feel like navigating through space with every click!' },
  { id: 5, name: 'Eva',role: 'Developer', review: 'I could create my portfolio in minutes, thanks to CodePup.' },
  { id: 6, name: 'Frank',role: 'Influencer', review: 'Love how smooth and alive everything feels. Cosmic magic!' },
  { id: 7, name: 'Grace',role: 'Designer', review: 'User experience is phenomenal. Totally recommend it.' },
  { id: 8, name: 'Henry',role: 'Marketer', review: 'Finally a platform that feels futuristic yet simple!' },
];

export default function Testimonials() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="testimonials"
      className={`relative z-10 px-6 py-24 max-w-7xl mx-auto fade-section ${visible ? 'visible' : ''}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center glow-text mb-12">
        What People Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="testimonial-card glow-card p-6 rounded-2xl flex flex-col justify-between transition-all transform hover:scale-105 hover:-translate-y-2"
          >
            <p className="text-slate-300 mb-4">{t.review}</p>
            <div className="mt-auto">
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-sm text-slate-400">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
