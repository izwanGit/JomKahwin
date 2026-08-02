import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BotanicalFrame } from './BotanicalFrame';

interface IslamicArchCardProps {
  children: ReactNode;
}

const archPath = 'M 1,139 L 1,30 C 1,20 8,15 16,17 C 21,9 29,8 36,13 C 42,3 47,1 50,1 C 53,1 58,3 64,13 C 71,8 79,9 84,17 C 92,15 99,20 99,30 L 99,139 Z';
const innerArchPath = 'M 2.5,137.5 L 2.5,30.5 C 2.5,22 8.5,17 16.5,19 C 22,11 29,10 36.5,15 C 42.5,5.5 47,3 50,3 C 53,3 57.5,5.5 63.5,15 C 71,10 78,11 83.5,19 C 91.5,17 97.5,22 97.5,30.5 L 97.5,137.5 Z';

export const IslamicArchCard: React.FC<IslamicArchCardProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="islamic-arch-card relative w-full"
      style={{
        padding: 'clamp(20px, 4.5vw, 34px)',
        backgroundColor: '#FBF5DF',
        backgroundImage: `
          radial-gradient(circle at 50% 8%, rgba(255,255,255,.92), transparent 32%),
          linear-gradient(135deg, rgba(184,134,11,.05), rgba(255,254,250,.5) 48%, rgba(74,14,23,.045)),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cg fill='none' stroke='%23A77908' stroke-opacity='.34' stroke-width='.85'%3E%3Cpath d='M32 1 40 16 55 9 48 24 63 32 48 40 55 55 40 48 32 63 24 48 9 55 16 40 1 32 16 24 9 9 24 16Z'/%3E%3Cpath d='M32 12 40 24 52 32 40 40 32 52 24 40 12 32 24 24Z'/%3E%3Cpath d='M0 0 16 24 0 32M64 0 48 24 64 32M0 64 16 40 0 32M64 64 48 40 64 32'/%3E%3Ccircle cx='32' cy='32' r='3.5'/%3E%3C/g%3E%3C/svg%3E")
        `,
        border: '1px solid rgba(151,110,7,.62)',
        borderRadius: '20px',
      }}
    >
      {/* Layered keylines give the outer frame the finish of engraved stationery. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-[6px] rounded-[15px] border border-white/80" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-[10px] rounded-[12px] border border-gold-700/35" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-[14px] rounded-[9px] border border-burgundy-900/10" />

      <div className="pointer-events-none absolute inset-0 z-30 overflow-visible">
        <BotanicalFrame />
      </div>

      <div className="relative w-full">
        {/* One uninterrupted full-height arch: there is no SVG/body seam to expose. */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          viewBox="0 0 100 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="archPaper" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFFDF3" />
              <stop offset="0.42" stopColor="#FFFEFA" />
              <stop offset="1" stopColor="#F8F3E8" />
            </linearGradient>
            <linearGradient id="archGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8C6507" />
              <stop offset="0.22" stopColor="#E7CD73" />
              <stop offset="0.48" stopColor="#A77908" />
              <stop offset="0.72" stopColor="#F3E2A2" />
              <stop offset="1" stopColor="#8C6507" />
            </linearGradient>
            <pattern id="archWatermark" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M5 0 7 3 10 5 7 7 5 10 3 7 0 5 3 3Z" fill="none" stroke="#B8860B" strokeWidth="0.18" />
              <circle cx="5" cy="5" r="0.55" fill="#B8860B" fillOpacity="0.16" />
            </pattern>
            <filter id="archInsetShadow" x="-10%" y="-5%" width="120%" height="115%">
              <feDropShadow dx="0" dy="1.2" stdDeviation="1.4" floodColor="#28050B" floodOpacity="0.16" />
            </filter>
          </defs>

          <path d={archPath} fill="url(#archPaper)" filter="url(#archInsetShadow)" />
          <path d={archPath} fill="url(#archWatermark)" opacity="0.12" />
          <path d={archPath} fill="none" stroke="#4A0E17" strokeOpacity="0.16" strokeWidth="3.4" vectorEffect="non-scaling-stroke" />
          <path d={archPath} fill="none" stroke="url(#archGold)" strokeWidth="1.7" vectorEffect="non-scaling-stroke" />
          <path d={innerArchPath} fill="none" stroke="#D4AF37" strokeOpacity="0.46" strokeWidth="0.7" vectorEffect="non-scaling-stroke" />

          {/* Small eight-point khatam at the arch crown. */}
          <g transform="translate(50 4.8)" opacity="0.7">
            <path d="M0-2.2 0.75-0.75 2.2 0 0.75 0.75 0 2.2-0.75 0.75-2.2 0-0.75-0.75Z" fill="#B8860B" />
            <circle r="0.55" fill="#FFF7D6" />
          </g>
        </svg>

        <div
          className="relative z-10 flex w-full flex-col items-center gap-[clamp(8px,1.5vh,20px)]"
          style={{ padding: 'clamp(52px, 12vw, 78px) clamp(16px, 4vw, 56px) clamp(26px, 6vh, 54px)' }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
};
