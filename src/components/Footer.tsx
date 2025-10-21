import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-20 mt-40 bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-[4px] border-t border-cyan-500/10 shadow-[0_-10px_60px_rgba(0,255,255,0.1)] footer">
  <div className="max-w-6xl mx-auto px-6 py-20 text-sm ">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-slate-200">
      <div>
        <h4 className="font-semibold text-cyan-400 mb-3">CodePup</h4>
        <p className="text-slate-400 leading-relaxed">
          Building smarter, faster, and more beautiful web experiences — powered by AI precision.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-cyan-400 mb-3">Explore</h4>
        <ul className="space-y-2">
          <li><a href="#features" className="hover:text-cyan-300 transition">Features</a></li>
          <li><a href="#gallery" className="hover:text-cyan-300 transition">Gallery</a></li>
          <li><a href="#pricing" className="hover:text-cyan-300 transition">Pricing</a></li>
          <li><a href="#faqs" className="hover:text-cyan-300 transition">FAQs</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-cyan-400 mb-3">Company</h4>
        <ul className="space-y-2">
          <li><a href="#careers" className="hover:text-cyan-300 transition">Careers</a></li>
          <li><a href="#community" className="hover:text-cyan-300 transition">Community</a></li>
          <li><a href="#" className="hover:text-cyan-300 transition">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-cyan-400 mb-3">Connect</h4>
        <div className="flex gap-4 text-slate-400">
          <a href="#" className="hover:text-cyan-300 transition">Twitter</a>
          <a href="#" className="hover:text-cyan-300 transition">LinkedIn</a>
          <a href="#" className="hover:text-cyan-300 transition">GitHub</a>
        </div>
      </div>
    </div>

    <div className="mt-16 pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
      <p>© {new Date().getFullYear()} CodePup. All rights reserved.</p>
      <p>Made with ⚡ by CodePup Team</p>
    </div>
  </div>
</footer>

  );
}
