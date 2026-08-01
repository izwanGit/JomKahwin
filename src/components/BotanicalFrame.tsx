import React from 'react';
import { motion } from 'framer-motion';

/**
 * BotanicalFrame
 *
 * Full-viewport corner botanical frame. Now anchored to the section edges,
 * not the card, so flowers are always large and prominent on all screens.
 *
 * Corner bouquets: border left-top, right-top, left bottom, right-bottom
 * Accent blooms:   floral-accent-1, 2, 3 — layered as depth elements
 */
export const BotanicalFrame: React.FC = () => {
  return (
    <>
      {/* ─────────────── TOP LEFT ─────────────── */}
      <motion.div
        className="pointer-events-none"
        animate={{ rotate: [-2, 0, -2], y: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 'clamp(160px, 38vw, 300px)',
          zIndex: 30,
          transformOrigin: 'top left',
          willChange: 'transform',
        }}
      >
        {/* Accent bloom layered behind the stem */}
        <motion.img
          src="/assets/floral-accent-1.png"
          alt="" aria-hidden="true"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.82, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            position: 'absolute',
            bottom: '28%',
            right: '-8%',
            width: '30%',
            transform: 'rotate(22deg)',
            filter: 'drop-shadow(0 4px 8px rgba(40,5,11,0.18))',
            zIndex: 28,
          }}
        />
        {/* Primary corner bouquet */}
        <motion.img
          src="/assets/border left-top.png"
          alt="" aria-hidden="true"
          initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 30,
            filter: 'drop-shadow(0 12px 28px rgba(40,5,11,0.28)) drop-shadow(0 3px 8px rgba(40,5,11,0.14))',
          }}
        />
      </motion.div>

      {/* ─────────────── TOP RIGHT ─────────────── */}
      <motion.div
        animate={{ y: [0, 6, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 15, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 'clamp(130px, 30vw, 240px)',
          zIndex: 30,
          transformOrigin: 'top right',
          pointerEvents: 'none',
        }}
      >
        {/* Accent bloom layered behind the stem */}
        <motion.img
          src="/assets/floral-accent-2.png"
          alt="" aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.78 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '32%',
            transform: 'rotate(-18deg)',
            filter: 'drop-shadow(0 4px 8px rgba(40,5,11,0.16))',
            zIndex: 28,
          }}
        />
        {/* Primary corner bouquet */}
        <motion.img
          src="/assets/border right-top.png"
          alt="" aria-hidden="true"
          initial={{ opacity: 0, x: 20, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 30,
            filter: 'drop-shadow(0 10px 24px rgba(40,5,11,0.24))',
          }}
        />
      </motion.div>

      {/* ─────────────── BOTTOM LEFT ─────────────── */}
      <motion.div
        animate={{ rotate: [0, 1.5, 0], y: [0, -5, 0] }}
        transition={{ duration: 14, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 'clamp(140px, 34vw, 270px)',
          zIndex: 30,
          pointerEvents: 'none',
          transformOrigin: 'bottom left',
        }}
      >
        {/* Accent bloom layered near top of the stem */}
        <motion.img
          src="/assets/floral-accent-3.png"
          alt="" aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.78 }}
          transition={{ duration: 1.0, delay: 0.55 }}
          style={{
            position: 'absolute',
            top: '-12%',
            right: '-8%',
            width: '30%',
            transform: 'rotate(18deg)',
            filter: 'drop-shadow(0 4px 8px rgba(40,5,11,0.16))',
            zIndex: 28,
          }}
        />
        {/* Primary corner bouquet */}
        <motion.img
          src="/assets/border left bottom.png"
          alt="" aria-hidden="true"
          initial={{ opacity: 0, y: 20, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 30,
            filter: 'drop-shadow(0 10px 24px rgba(40,5,11,0.24))',
          }}
        />
      </motion.div>

      {/* ─────────────── BOTTOM RIGHT ─────────────── */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 16, delay: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 'clamp(150px, 36vw, 280px)',
          zIndex: 30,
          pointerEvents: 'none',
          transformOrigin: 'bottom right',
        }}
      >
        {/* Primary corner bouquet */}
        <motion.img
          src="/assets/border right-bottom.png"
          alt="" aria-hidden="true"
          initial={{ opacity: 0, scale: 0.88, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 30,
            filter: 'drop-shadow(0 12px 28px rgba(40,5,11,0.28))',
          }}
        />
      </motion.div>
    </>
  );
};
