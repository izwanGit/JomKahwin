import React from 'react';

const Butterfly = ({ className }: { className: string }) => (
  <svg className={`romantic-butterfly ${className}`} viewBox="0 0 64 56" aria-hidden="true">
    <defs>
      <linearGradient id={`wing-${className}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FFF2B8" />
        <stop offset="0.38" stopColor="#D4AF37" />
        <stop offset="0.72" stopColor="#A3243A" />
        <stop offset="1" stopColor="#4A0E17" />
      </linearGradient>
      <linearGradient id={`lower-${className}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#E8D279" />
        <stop offset="1" stopColor="#741928" />
      </linearGradient>
    </defs>

    <g className="romantic-butterfly__wing romantic-butterfly__wing--left" stroke="#4A0E17" strokeOpacity=".45" strokeWidth=".8">
      <path d="M30 27C19 26 4 20 5 8 6-3 22 2 30 21Z" fill={`url(#wing-${className})`} />
      <path d="M30 28C20 30 10 39 16 49 22 57 30 43 31 31Z" fill={`url(#lower-${className})`} />
      <path d="M28 24 10 8M27 27 9 18M28 31 18 46" fill="none" stroke="#F5E6AB" strokeOpacity=".62" />
    </g>

    <g className="romantic-butterfly__wing romantic-butterfly__wing--right" stroke="#4A0E17" strokeOpacity=".45" strokeWidth=".8">
      <path d="M34 27C45 26 60 20 59 8 58-3 42 2 34 21Z" fill={`url(#wing-${className})`} />
      <path d="M34 28C44 30 54 39 48 49 42 57 34 43 33 31Z" fill={`url(#lower-${className})`} />
      <path d="M36 24 54 8M37 27 55 18M36 31 46 46" fill="none" stroke="#F5E6AB" strokeOpacity=".62" />
    </g>

    <path d="M30 11C25 4 21 4 19 7M34 11C39 4 43 4 45 7" fill="none" stroke="#4A0E17" strokeWidth="1.25" strokeLinecap="round" />
    <ellipse cx="32" cy="29" rx="2.8" ry="14" fill="#4A0E17" />
    <circle cx="32" cy="13" r="3.2" fill="#4A0E17" />
    <path d="M32 40v9" stroke="#4A0E17" strokeWidth="1.5" strokeLinecap="round" />
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
    <Butterfly className="romantic-butterfly--ghost" />

    <span className="romantic-petal romantic-petal--one">♥</span>
    <span className="romantic-petal romantic-petal--two">♥</span>
    <span className="romantic-petal romantic-petal--three">❦</span>
  </div>
);
