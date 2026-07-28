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
      className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center drop-shadow-2xl"
    >
      {/* ── TOP ARCH (SVG) ── */}
      {/* 
        This SVG is the beautiful Ogee / Onion dome arch.
        It scales width-wise but preserves its height ratio to avoid distortion.
      */}
      <div className="relative w-full" style={{ paddingBottom: '35%' }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 35"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C59B27" />
              <stop offset="50%" stopColor="#E5C76B" />
              <stop offset="100%" stopColor="#976E07" />
            </linearGradient>
            <linearGradient id="cardFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,254,250,0.95)" />
              <stop offset="100%" stopColor="rgba(255,254,250,0.95)" />
            </linearGradient>
          </defs>

          {/*
            Path tracing an elegant Islamic dome:
            - Starts bottom left (2, 35)
            - Straight up to (2, 20)
            - Ogee curve to the center top point (50, 2)
            - Ogee curve down to right side (98, 20)
            - Straight down to bottom right (98, 35)
          */}
          <path
            d="
              M 4,35 
              L 4,22 
              C 4,14 12,18 20,12 
              C 28,6 40,8 50,2 
              C 60,8 72,6 80,12 
              C 88,18 96,14 96,22 
              L 96,35 
              Z
            "
            fill="url(#cardFill)"
            stroke="url(#goldBorder)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* ── MAIN CARD BODY ── */}
      <div
        className="w-full relative flex flex-col items-center"
        style={{
          background: 'rgba(255,254,250,0.95)',
          // Only border left, right, and bottom. Top is handled by the SVG.
          borderLeft: '4px solid #C59B27',
          borderRight: '4px solid #976E07',
          borderBottom: '4px solid #976E07',
          borderImage: 'linear-gradient(to bottom, #C59B27, #976E07) 1',
          padding: '0 clamp(24px, 6vw, 56px) clamp(24px, 6vw, 56px)',
          // Negative margin to seamlessly overlap the SVG bottom edge
          marginTop: '-1px',
        }}
      >
        {/* Inner content wrapper */}
        <div className="w-full flex flex-col items-center gap-[20px]">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
