import React from 'react';

export default function ThemeToggle({
  theme,
  setTheme
}: {
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
}) {
  const isOn = theme === 'dark';
  const toggle = () => setTheme(isOn ? 'light' : 'dark');

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`theme-switch ${isOn ? 'on' : 'off'}`}
      title="Toggle theme"
    >
      <span
        style={{ transform: isOn ? 'translateX(20px)' : 'translateX(0)' }}
        className="theme-thumb"
      />
    </button>
  );
}
