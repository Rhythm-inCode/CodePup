import React, { useEffect, useRef } from 'react';

export default function CosmicGap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; r: number; dx: number; dy: number }[] = [];
    const num = 100;
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = 300;

    for (let i = 0; i < num; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,255,255,0.5)';
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });

      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden my-32 flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      
      {/* Cosmic glowing text */}
      <div className="relative z-10 text-center px-6 overflow-hidden">
  <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.6)]
                  tracking-widest md:tracking-[0.3em] lg:tracking-[0.5em] leading-snug animate-float">
    Explore the Infinite
  </h2>
  <p className="mt-4 text-cyan-200 text-lg md:text-xl drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]
                max-w-4xl mx-auto tracking-wide animate-float-slow">
    Discover more sites crafted with creativity and AI
  </p>
</div>

    </div>
  );
}
