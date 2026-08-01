import React from 'react';
import { motion } from 'framer-motion';

/**
 * BotanicalFrame
 * Luxury asymmetric burgundy rose border using the newly uploaded corner assets:
 * - /assets/border left-top.png
 * - /assets/border right-top.png
 * - /assets/border left bottom.png
 * - /assets/border right-bottom.png
 * Layered with accent elements: floral-accent-1, 2 & 3.
 */
export const BotanicalFrame: React.FC = () => {
  return (
    <>
      {/* ─────────────── TOP LEFT ─────────────── */}
      <motion.div
        className="pointer-events-none fixed-botanical"
        animate={{
          rotate: [-3, 0, -3],
          y: [0, 5, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-40px',
          left: '-40px',
          width: 'clamp(150px, 38%, 270px)',
          zIndex: 25,
          transformOrigin: 'top left',
          willChange: 'transform',
        }}
      >
        <motion.img
          src="/assets/border left-top.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
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
            bottom: '-15%',
            right: '-10%',
            width: '38%',
            filter: 'drop-shadow(0 6px 16px rgba(40,5,11,0.3))',
            transform: 'rotate(25deg)',
          }}
        />
      </motion.div>

      {/* ─────────────── TOP RIGHT ─────────────── */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [0, -2, 0],
        }}
        transition={{ duration: 15, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-35px',
          right: '-35px',
          width: 'clamp(120px, 30%, 220px)',
          zIndex: 25,
          transformOrigin: 'top right',
          pointerEvents: 'none',
        }}
      >
        <motion.img
          src="/assets/border right-top.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: 25, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            filter: 'drop-shadow(0 10px 28px rgba(40,5,11,0.3))',
          }}
        />
        {/* Accent element */}
        <motion.img
          src="/assets/floral-accent-2.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '-8%',
            left: '-5%',
            width: '36%',
            filter: 'drop-shadow(0 4px 12px rgba(40,5,11,0.25))',
            transform: 'rotate(-15deg)',
          }}
        />
      </motion.div>

      {/* ─────────────── BOTTOM LEFT ─────────────── */}
      <motion.div
        animate={{
          rotate: [0, 2, 0],
          y: [0, -7, 0],
        }}
        transition={{ duration: 14, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-35px',
          left: '-35px',
          width: 'clamp(130px, 32%, 240px)',
          zIndex: 25,
          pointerEvents: 'none',
          transformOrigin: 'bottom left',
        }}
      >
        <motion.img
          src="/assets/border left bottom.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: 20, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            filter: 'drop-shadow(0 10px 28px rgba(40,5,11,0.3))',
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
            top: '-12%',
            right: '-5%',
            width: '36%',
            filter: 'drop-shadow(0 4px 10px rgba(40,5,11,0.2))',
            transform: 'rotate(20deg)',
          }}
        />
      </motion.div>

      {/* ─────────────── BOTTOM RIGHT ─────────────── */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, -2, 0],
        }}
        transition={{ duration: 16, delay: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-40px',
          right: '-40px',
          width: 'clamp(140px, 34%, 250px)',
          zIndex: 25,
          pointerEvents: 'none',
          transformOrigin: 'bottom right',
        }}
      >
        <motion.img
          src="/assets/border right-bottom.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.88, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            filter: 'drop-shadow(0 14px 36px rgba(40,5,11,0.4)) drop-shadow(0 3px 10px rgba(40,5,11,0.25))',
          }}
        />
        {/* Foreground accent */}
        <motion.img
          src="/assets/floral-accent-1.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            top: '5%',
            left: '-12%',
            width: '38%',
            filter: 'drop-shadow(0 6px 16px rgba(40,5,11,0.3))',
            transform: 'rotate(-12deg)',
          }}
        />
      </motion.div>
    </>
  );
};
