import React from 'react';

const Butterfly = ({ className }: { className: string }) => (
  <svg className={`romantic-butterfly ${className}`} viewBox="0 0 48 48" aria-hidden="true">
    <defs>
      <linearGradient id={`wing-${className}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F5E6AB" />
        <stop offset="0.55" stopColor="#D4AF37" />
        <stop offset="1" stopColor="#8B1E31" />
      </linearGradient>
    </defs>
    <g className="romantic-butterfly__wings" fill={`url(#wing-${className})`} stroke="#8B1E31" strokeOpacity=".38" strokeWidth=".8">
      <path d="M24 25C13 24 4 17 7 8c3-7 12-2 17 11Z" />
      <path d="M24 25C15 29 10 38 16 42c6 4 10-5 10-17Z" />
      <path d="M24 25c11-1 20-8 17-17-3-7-12-2-17 11Z" />
      <path d="M24 25c9 4 14 13 8 17-6 4-10-5-8-17Z" />
    </g>
    <path d="M24 20c2 4 2 8 0 13" stroke="#4A0E17" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="24" cy="19" r="1.5" fill="#4A0E17" />
  </svg>
);

/**
 * Always-visible romantic accents above the invitation surface.
 * These use CSS transforms rather than a canvas so they remain reliable in
 * embedded mobile browsers and never intercept touch input.
 */
export const RomanticOverlay: React.FC = () => (
  <div className="romantic-overlay" aria-hidden="true">
    <Butterfly className="romantic-butterfly--one" />
    <Butterfly className="romantic-butterfly--two" />
    <Butterfly className="romantic-butterfly--three" />

    <span className="romantic-petal romantic-petal--one">♥</span>
    <span className="romantic-petal romantic-petal--two">♥</span>
    <span className="romantic-petal romantic-petal--three">❦</span>
    <span className="romantic-petal romantic-petal--four">✦</span>
  </div>
);
