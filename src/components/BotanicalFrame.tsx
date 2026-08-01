import React from 'react';
import { motion } from 'framer-motion';

/**
 * BotanicalFrame
 * Ultra-luxury asymmetric burgundy & gold botanical border composed from corner arrangements.
 * Built using high-resolution burgundy rose bouquets and accent floral elements.
 * Perfectly frames the invitation card without obscuring key text.
 */
export const BotanicalFrame: React.FC = () => {
  return (
    <>
      {/* ─────────────── TOP LEFT — Burgundy rose corner arrangement ─────────────── */}
      <motion.div
        className="pointer-events-none fixed-botanical"
        animate={{
          rotate: [-4, -1, -4],
          y: [0, 6, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-35px',
          left: '-35px',
          width: 'clamp(140px, 36%, 260px)',
          zIndex: 25,
          transformOrigin: 'top left',
          willChange: 'transform',
        }}
      >
        {/* Primary corner bouquet */}
        <motion.img
          src="/assets/floral-tl.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            filter: 'drop-shadow(0 12px 32px rgba(40,5,11,0.35)) drop-shadow(0 2px 8px rgba(40,5,11,0.2))',
          }}
        />
        {/* Accent bloom */}
        <motion.img
          src="/assets/floral-accent-1.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            bottom: '-18%',
            right: '-12%',
            width: '42%',
            filter: 'drop-shadow(0 6px 16px rgba(40,5,11,0.3))',
            transform: 'rotate(30deg)',
          }}
        />
      </motion.div>

      {/* ─────────────── TOP RIGHT — Sweeping burgundy foliage ─────────────── */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          x: [0, -5, 0],
        }}
        transition={{ duration: 15, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: 'clamp(110px, 28%, 200px)',
          zIndex: 25,
          transformOrigin: 'top right',
          pointerEvents: 'none',
        }}
      >
        <motion.img
          src="/assets/floral-tr.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: 30, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            transform: 'rotate(14deg) scaleX(-1)',
            filter: 'drop-shadow(0 8px 24px rgba(40,5,11,0.3))',
          }}
        />
        {/* Accent element */}
        <motion.img
          src="/assets/floral-accent-2.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '0%',
            width: '35%',
            filter: 'drop-shadow(0 4px 12px rgba(40,5,11,0.25))',
            transform: 'rotate(-20deg)',
          }}
        />
      </motion.div>

      {/* ─────────────── BOTTOM LEFT — Upward stems ─────────────── */}
      <motion.div
        animate={{
          rotate: [0, 3, 0],
          y: [0, -8, 0],
        }}
        transition={{ duration: 14, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: 'clamp(100px, 25%, 180px)',
          zIndex: 25,
          pointerEvents: 'none',
          transformOrigin: 'bottom left',
        }}
      >
        <motion.img
          src="/assets/floral-bl.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            transform: 'rotate(-18deg)',
            filter: 'drop-shadow(0 8px 24px rgba(40,5,11,0.3))',
          }}
        />
        {/* Accent element */}
        <motion.img
          src="/assets/floral-accent-3.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.0, delay: 0.55 }}
          style={{
            position: 'absolute',
            top: '-15%',
            right: '-5%',
            width: '38%',
            filter: 'drop-shadow(0 4px 10px rgba(40,5,11,0.2))',
            transform: 'rotate(25deg)',
          }}
        />
      </motion.div>

      {/* ─────────────── BOTTOM RIGHT — Rich layered bouquet ─────────────── */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, -2, 0],
        }}
        transition={{ duration: 16, delay: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-40px',
          right: '-40px',
          width: 'clamp(130px, 32%, 230px)',
          zIndex: 25,
          pointerEvents: 'none',
          transformOrigin: 'bottom right',
        }}
      >
        {/* Main bouquet */}
        <motion.img
          src="/assets/floral-br.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            transform: 'rotate(10deg)',
            filter: 'drop-shadow(0 14px 36px rgba(40,5,11,0.4)) drop-shadow(0 3px 10px rgba(40,5,11,0.25))',
          }}
        />
        {/* Foreground bloom */}
        <motion.img
          src="/assets/floral-accent-1.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            top: '5%',
            left: '-15%',
            width: '40%',
            filter: 'drop-shadow(0 6px 16px rgba(40,5,11,0.3))',
            transform: 'rotate(-15deg)',
          }}
        />
      </motion.div>
    </>
  );
};
