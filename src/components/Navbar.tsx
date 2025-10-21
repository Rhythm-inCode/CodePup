import React from 'react';
import logo from '../assets/logo.svg';
import Button from './Button';
import ThemeSwitch from './ThemeToggle';

export default function Navbar({
  theme,
  setTheme
}: {
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
}) {
  return (
    <header className="fixed top-0 w-full z-30 backdrop-blur-md bg-[#01060d]/90 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* left logo + brand */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="CodePup" className=" w-10 h-10 md:w-12 md:h-12" />
          <div className="font-extrabold text-xl md:text-2xl glow-text select-none">
            CodePup
          </div>
        </div>

        {/* center links */}
        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#gallery" className="hover:text-cyan-400 transition">Gallery</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
          <a href="#faqs" className="hover:text-cyan-400 transition">FAQs</a>
        </nav>

        {/* right controls */}
        <div className="flex items-center gap-4">
          <ThemeSwitch theme={theme} setTheme={setTheme} />
          <Button variant="ghost" className="border border-white/20 hover:bg-white/5 transition">
            Login
          </Button>
          <Button className="button-neon rounded-xl px-6 py-3 neon-btn hover:scale-105 transition">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
