import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export default function Button({ variant = 'primary', children, ...rest }: ButtonProps) {
  if (variant === 'primary') {
    return (
      <button
        {...rest}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cpblue to-cpaccent text-white text-sm font-semibold shadow-lg transform transition-transform hover:-translate-y-0.5 active:translate-y-0.5 neon-btn"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...rest}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm hover:text-white hover:bg-white/6 transition cta-main"
    >
      {children}
    </button>
  );
}
