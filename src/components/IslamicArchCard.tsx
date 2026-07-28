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
      className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center"
      style={{ filter: 'drop-shadow(0 20px 40px rgba(40,5,11,0.12))' }}
    >
      {/* ── TOP ARCH (SVG) ── */}
      <div 
        className="w-full relative flex flex-col items-center justify-end z-10" 
        style={{ paddingBottom: '30%' }}
      >
        <svg
          className="absolute overflow-visible"
          style={{ 
            bottom: '-2px', // Overlap body by 2px to eliminate subpixel gap
            left: '1px',    // Align x=0 to center of 2px left border
            width: 'calc(100% - 2px)', 
            height: 'calc(100% + 2px)' 
          }}
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/*
            Path tracing an elegant Islamic dome:
            - Starts bottom left (0, 30)
            - Straight up to (0, 20)
            - Ogee curve to the center top point (50, 0)
            - Ogee curve down to right side (100, 20)
            - Straight down to bottom right (100, 30)
          */}
          <path
            d="
              M 0,30 
              L 0,20 
              C 0,10 15,15 25,10 
              C 35,5 45,5 50,0 
              C 55,5 65,5 75,10 
              C 85,15 100,10 100,20 
              L 100,30 
              Z
            "
            fill="rgba(255,254,250,0.95)"
            stroke="#D4AF37"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* ── MAIN CARD BODY ── */}
      <div
        className="w-full relative flex flex-col items-center z-0"
        style={{
          background: 'rgba(255,254,250,0.95)',
          borderLeft: '2px solid #D4AF37',
          borderRight: '2px solid #D4AF37',
          borderBottom: '2px solid #D4AF37',
          padding: '0 clamp(16px, 4vw, 56px) clamp(16px, 4vh, 56px)',
          borderRadius: '0 0 12px 12px',
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
