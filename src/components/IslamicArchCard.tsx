import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IslamicArchCardProps {
  children: ReactNode;
}

export const IslamicArchCard: React.FC<IslamicArchCardProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full drop-shadow-2xl"
      style={{
        // ── Outer Patterned Frame ──
        padding: 'clamp(16px, 4vw, 32px)',
        // A clean, luxurious geometric Islamic star lattice pattern for the background
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg stroke='%23D4AF37' stroke-opacity='0.3' stroke-width='1.5' fill='none'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z'/%3E%3Cpath d='M0 10 L10 0 L30 0 L40 10 L40 30 L30 40 L10 40 L0 30 Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: '#FFFEFA',
        borderRadius: '12px',
        border: '1px solid rgba(212,175,55,0.4)',
      }}
    >
      {/* ── TOP ARCH (SVG) ── */}
      <div 
        className="w-full relative flex flex-col items-center justify-end z-10" 
        style={{ paddingBottom: '35%' }}
      >
        <svg
          className="absolute overflow-visible"
          style={{ 
            bottom: '-2px', // Overlap body by 2px to eliminate subpixel gap
            left: '1px',    // Align x=0 to center of 2px left border
            width: 'calc(100% - 2px)', 
            height: 'calc(100% + 2px)' 
          }}
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/*
            Path tracing a polylobed (scalloped) Moorish arch:
            - Starts at bottom left (0, 40)
            - 5 distinct lobes connecting to the bottom right (100, 40)
          */}
          {/* Fill path (closed shape) */}
          <path
            d="M 0,40 L 0,25 A 12 12 0 0 1 15,15 A 15 15 0 0 1 35,8 A 18 18 0 0 1 65,8 A 15 15 0 0 1 85,15 A 12 12 0 0 1 100,25 L 100,40 Z"
            fill="rgba(255,254,250,1)"
          />
          {/* Stroke path (open shape, no Z, no bottom line!) */}
          <path
            d="M 0,40 L 0,25 A 12 12 0 0 1 15,15 A 15 15 0 0 1 35,8 A 18 18 0 0 1 65,8 A 15 15 0 0 1 85,15 A 12 12 0 0 1 100,25 L 100,40"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* ── MAIN CARD BODY (White Cutout) ── */}
      <div
        className="w-full relative flex flex-col items-center z-0"
        style={{
          background: 'rgba(255,254,250,1)',
          borderLeft: '2px solid #D4AF37',
          borderRight: '2px solid #D4AF37',
          borderBottom: '2px solid #D4AF37',
          padding: '0 clamp(16px, 4vw, 56px) clamp(16px, 4vh, 56px)',
          borderRadius: '0 0 4px 4px',
        }}
      >
        {/* Inner content wrapper */}
        <div className="w-full flex flex-col items-center gap-[clamp(8px,1.5vh,20px)]">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
