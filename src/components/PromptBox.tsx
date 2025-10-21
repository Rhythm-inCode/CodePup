import React, { useState } from 'react';

export default function PromptBox({ onSubmit }: { onSubmit?: (text: string) => void; }) {
  const [val, setVal] = useState('');

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!val.trim()) return;
    onSubmit?.(val.trim());
    // small UX: keep input, maybe show micro-feedback later
  }

  return (
    <form onSubmit={submit} className="prompt-box" role="search" aria-label="Site prompt">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 7h16M4 12h10M4 17h16" stroke="rgba(230,238,246,0.6)" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>

      <input
        className="prompt-input"
        placeholder='Try: "Create a one-page portfolio for a photographer"'
        value={val}
        onChange={(e) => setVal(e.target.value)}
        aria-label="Describe the site you want"
      />

      <button type="submit" className="cta-main" aria-label="Generate site">
        Generate
      </button>
    </form>
  );
}
