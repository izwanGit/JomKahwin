import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BotanicalFrame } from './BotanicalFrame';

interface IslamicArchCardProps {
  children: ReactNode;
}

export const IslamicArchCard: React.FC<IslamicArchCardProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="islamic-arch-card relative w-full"
      style={{
        // ── Outer Patterned Frame ──
        padding: 'clamp(16px, 4vw, 32px)',
        // A clean, luxurious geometric Islamic star lattice pattern for the background
        backgroundImage: `radial-gradient(circle at 50% 12%, rgba(255,253,240,.94), rgba(255,254,250,.82) 42%, rgba(245,230,171,.18)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg stroke='%23B8860B' stroke-opacity='.24' stroke-width='1' fill='none'%3E%3Cpath d='M24 0L48 24 24 48 0 24Z'/%3E%3Cpath d='M12 0L24 12 36 0M48 12L36 24 48 36M36 48L24 36 12 48M0 36L12 24 0 12'/%3E%3Ccircle cx='24' cy='24' r='7'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: '#FFFEFA',
        borderRadius: '18px',
        border: '1px solid rgba(184,134,11,0.5)',
      }}
    >
      <div aria-hidden="true" className="absolute inset-[7px] rounded-[13px] border border-gold-500/20 pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-[12px] rounded-[10px] border border-burgundy-900/10 pointer-events-none" />
      {/* ── Botanical frame anchored flush to the outer card border corners ── */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
        <BotanicalFrame />
      </div>

      {/* Inner relative container to constrain absolute layers inside the padding */}
      <div className="relative w-full h-full">
        {/* ── BACKGROUND LAYER (Arch + Body) ── */}
        <div className="absolute inset-0 flex flex-col z-0 pointer-events-none">
          {/* TOP ARCH (SVG) */}
          <div className="w-full relative" style={{ paddingBottom: '35%' }}>
            <svg
              className="absolute overflow-visible"
              style={{
                bottom: '-2px',
                left: '0px',
                width: '100%',
                height: 'calc(100% + 2px)',
              }}
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="archGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F5E6AB" />
                  <stop offset="0.45" stopColor="#B8860B" />
                  <stop offset="0.72" stopColor="#E8D279" />
                  <stop offset="1" stopColor="#976E07" />
                </linearGradient>
                <linearGradient id="archPaper" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#FFFDF0" />
                  <stop offset="0.32" stopColor="#FFFEFA" />
                  <stop offset="1" stopColor="#FAF9F6" />
                </linearGradient>
              </defs>
              {/* Fill path (closed shape) */}
              <path
                d="M 0,40 L 0,25 A 12 12 0 0 1 15,15 A 15 15 0 0 1 35,8 A 18 18 0 0 1 65,8 A 15 15 0 0 1 85,15 A 12 12 0 0 1 100,25 L 100,40 Z"
                fill="url(#archPaper)"
              />
              <path
                d="M 0,40 L 0,25 A 12 12 0 0 1 15,15 A 15 15 0 0 1 35,8 A 18 18 0 0 1 65,8 A 15 15 0 0 1 85,15 A 12 12 0 0 1 100,25 L 100,40"
                fill="none"
                stroke="#4A0E17"
                strokeOpacity="0.13"
                strokeWidth="5"
                vectorEffect="non-scaling-stroke"
              />
              {/* Stroke path (open shape, no Z, no bottom line!) */}
              <path
                d="M 0,40 L 0,25 A 12 12 0 0 1 15,15 A 15 15 0 0 1 35,8 A 18 18 0 0 1 65,8 A 15 15 0 0 1 85,15 A 12 12 0 0 1 100,25 L 100,40"
                fill="none"
                stroke="url(#archGold)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          {/* MAIN CARD BODY (Solid White) */}
          <div
            className="w-full flex-1"
            style={{
              background: 'linear-gradient(180deg, #FFFEFA, #FAF9F6)',
              borderLeft: '2px solid #B8860B',
              borderRight: '2px solid #B8860B',
              borderBottom: '2px solid #B8860B',
              borderRadius: '0 0 4px 4px',
            }}
          />
        </div>

        {/* ── FOREGROUND CONTENT LAYER ── */}
        <div
          className="relative z-10 w-full flex flex-col items-center gap-[clamp(8px,1.5vh,20px)]"
          style={{
            padding: 'clamp(32px, 12vw, 80px) clamp(16px, 4vw, 56px) clamp(24px, 6vh, 56px)',
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
};
