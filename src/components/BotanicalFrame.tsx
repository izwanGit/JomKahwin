import React from 'react';
import { motion } from 'framer-motion';

/**
 * BotanicalFrame
 *
 * Ultra-luxury layered burgundy rose frame.
 * Arranges the 3 small floral accent blooms (floral-accent-1, 2, 3) as subtle, 3D sub-layer
 * extensions tucked neatly behind the outer foliage of the main corner bouquets.
 *
 * Ensures all small flowers are visible while keeping inner card text 100% clear.
 */
export const BotanicalFrame: React.FC = () => {
  return (
    <>
      {/* ─────────────── TOP LEFT ─────────────── */}
      <motion.div
        className="pointer-events-none fixed-botanical"
        animate={{
          rotate: [-2, 0, -2],
          y: [0, 3, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 'clamp(-28px, -4vw, -42px)',
          left: 'clamp(-28px, -4vw, -42px)',
          width: 'clamp(145px, 34%, 230px)',
          zIndex: 25,
          transformOrigin: 'top left',
          willChange: 'transform',
        }}
      >
        {/* Small floral accent 1 tucked neatly behind outer foliage */}
        <motion.img
          src="/assets/floral-accent-1.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          style={{
            position: 'absolute',
            top: '35%',
            left: '-15%',
            width: '24%',
            transform: 'rotate(-25deg)',
            filter: 'drop-shadow(0 4px 10px rgba(40,5,11,0.2))',
            zIndex: 22,
          }}
        />
        {/* Main top-left corner bouquet */}
        <motion.img
          src="/assets/border left-top.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 25,
            filter: 'drop-shadow(0 8px 22px rgba(40,5,11,0.25))',
          }}
        />
      </motion.div>

      {/* ─────────────── TOP RIGHT (Moved UP higher) ─────────────── */}
      <motion.div
        animate={{
          y: [0, 4, 0],
          rotate: [0, -1, 0],
        }}
        transition={{ duration: 15, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 'clamp(-34px, -5vw, -50px)',
          right: 'clamp(-24px, -3.5vw, -36px)',
          width: 'clamp(125px, 30%, 200px)',
          zIndex: 25,
          transformOrigin: 'top right',
          pointerEvents: 'none',
        }}
      >
        {/* Small floral accent 2 tucked neatly behind outer top-right foliage */}
        <motion.img
          src="/assets/floral-accent-2.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '-14%',
            width: '24%',
            transform: 'rotate(20deg)',
            filter: 'drop-shadow(0 4px 10px rgba(40,5,11,0.2))',
            zIndex: 22,
          }}
        />
        {/* Main top-right corner bouquet */}
        <motion.img
          src="/assets/border right-top.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: 15, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 25,
            filter: 'drop-shadow(0 6px 18px rgba(40,5,11,0.22))',
          }}
        />
      </motion.div>

      {/* ─────────────── BOTTOM LEFT ─────────────── */}
      <motion.div
        animate={{
          rotate: [0, 1, 0],
          y: [0, -3, 0],
        }}
        transition={{ duration: 14, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 'clamp(-26px, -3.8vw, -40px)',
          left: 'clamp(-26px, -3.8vw, -40px)',
          width: 'clamp(135px, 31%, 210px)',
          zIndex: 25,
          pointerEvents: 'none',
          transformOrigin: 'bottom left',
        }}
      >
        {/* Small floral accent 3 tucked neatly behind bottom-left outer foliage */}
        <motion.img
          src="/assets/floral-accent-3.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '30%',
            left: '-15%',
            width: '24%',
            transform: 'rotate(-20deg)',
            filter: 'drop-shadow(0 4px 10px rgba(40,5,11,0.2))',
            zIndex: 22,
          }}
        />
        {/* Main bottom-left corner bouquet */}
        <motion.img
          src="/assets/border left bottom.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: 12, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 25,
            filter: 'drop-shadow(0 6px 18px rgba(40,5,11,0.22))',
          }}
        />
      </motion.div>

      {/* ─────────────── BOTTOM RIGHT ─────────────── */}
      <motion.div
        animate={{
          y: [0, -4, 0],
          rotate: [0, -1, 0],
        }}
        transition={{ duration: 16, delay: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 'clamp(-28px, -4vw, -42px)',
          right: 'clamp(-28px, -4vw, -42px)',
          width: 'clamp(140px, 32%, 220px)',
          zIndex: 25,
          pointerEvents: 'none',
          transformOrigin: 'bottom right',
        }}
      >
        {/* Main bottom-right corner bouquet */}
        <motion.img
          src="/assets/border right-bottom.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 25,
            filter: 'drop-shadow(0 8px 22px rgba(40,5,11,0.24))',
          }}
        />
      </motion.div>
    </>
  );
};
