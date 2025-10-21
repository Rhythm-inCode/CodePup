import React, { useEffect, useState } from 'react';

type Dot = {
  id: number;
  size: number;
  top: number;
  left: number;
  speedX: number;
  speedY: number;
  opacity: number;
  layer: number; // depth
};

export default function MovingDots() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const layers = 3;
    const countPerLayer = 30; // 90 dots total
    const allDots: Dot[] = [];

    for (let l = 1; l <= layers; l++) {
      for (let i = 0; i < countPerLayer; i++) {
        allDots.push({
          id: allDots.length,
          size: Math.random() * 4 + l * 2, // deeper layers bigger dots
          top: Math.random() * 100,
          left: Math.random() * 100,
          speedX: (Math.random() * 0.03 + 0.01) * l, // different speed per layer
          speedY: (Math.random() * 0.03 + 0.01) * l,
          opacity: 0.3 + Math.random() * 0.7,
          layer: l,
        });
      }
    }
    setDots(allDots);

    const move = () => {
      setDots(prev =>
        prev.map(d => {
          let newTop = d.top + d.speedY;
          let newLeft = d.left + d.speedX;

          // loop around screen edges
          if (newTop > 100) newTop = 0;
          if (newTop < 0) newTop = 100;
          if (newLeft > 100) newLeft = 0;
          if (newLeft < 0) newLeft = 100;

          return { ...d, top: newTop, left: newLeft };
        })
      );
      requestAnimationFrame(move);
    };

    move();
  }, []);

  return (
    <div className="dots-canvas">
      {dots.map(d => (
        <span
          key={d.id}
          className="dot"
          style={{
            position: 'absolute',
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            borderRadius: '50%',
            background: 'rgba(0,255,255,0.8)',
            boxShadow: `
              0 0 ${2 + d.layer * 4}px rgba(0,255,255,0.8),
              0 0 ${4 + d.layer * 8}px rgba(0,255,255,0.6)
            `,
            opacity: d.opacity,
            pointerEvents: 'none',
            zIndex: d.layer, // depth effect
          }}
        />
      ))}
    </div>
  );
}
