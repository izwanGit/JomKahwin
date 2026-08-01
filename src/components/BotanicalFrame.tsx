import React from 'react';
import { motion } from 'framer-motion';

/**
 * BotanicalFrame
 *
 * Flawless mobile & desktop corner botanical frame anchored directly to IslamicArchCard.
 * Sized and offset so that corner flowers hug the card frame line perfectly on mobile phones
 * without colliding with text, buttons, or the fixed bottom navigation dock.
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
          top: 'clamp(-14px, -2vw, -24px)',
          left: 'clamp(-14px, -2vw, -24px)',
          width: 'clamp(85px, 22%, 145px)',
          zIndex: 25,
          transformOrigin: 'top left',
          willChange: 'transform',
        }}
      >
        {/* Accent bloom sub-layer */}
        <motion.img
          src="/assets/floral-accent-1.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '8%',
            right: '-6%',
            width: '28%',
            transform: 'rotate(18deg)',
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
            filter: 'drop-shadow(0 6px 16px rgba(40,5,11,0.2))',
          }}
        />
      </motion.div>

      {/* ─────────────── TOP RIGHT ─────────────── */}
      <motion.div
        animate={{
          y: [0, 4, 0],
          rotate: [0, -1, 0],
        }}
        transition={{ duration: 15, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 'clamp(-12px, -1.8vw, -20px)',
          right: 'clamp(-12px, -1.8vw, -20px)',
          width: 'clamp(72px, 18%, 125px)',
          zIndex: 25,
          transformOrigin: 'top right',
          pointerEvents: 'none',
        }}
      >
        {/* Accent bloom sub-layer */}
        <motion.img
          src="/assets/floral-accent-2.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          style={{
            position: 'absolute',
            bottom: '-4%',
            left: '-8%',
            width: '28%',
            transform: 'rotate(-14deg)',
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
            filter: 'drop-shadow(0 5px 14px rgba(40,5,11,0.18))',
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
          bottom: 'clamp(-12px, -1.8vw, -20px)',
          left: 'clamp(-12px, -1.8vw, -20px)',
          width: 'clamp(78px, 19%, 130px)',
          zIndex: 25,
          pointerEvents: 'none',
          transformOrigin: 'bottom left',
        }}
      >
        {/* Accent bloom sub-layer */}
        <motion.img
          src="/assets/floral-accent-3.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          style={{
            position: 'absolute',
            top: '-6%',
            right: '-5%',
            width: '28%',
            transform: 'rotate(16deg)',
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
            filter: 'drop-shadow(0 5px 14px rgba(40,5,11,0.18))',
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
          bottom: 'clamp(-14px, -2vw, -24px)',
          right: 'clamp(-14px, -2vw, -24px)',
          width: 'clamp(82px, 20%, 135px)',
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
            filter: 'drop-shadow(0 6px 16px rgba(40,5,11,0.2))',
          }}
        />
      </motion.div>
    </>
  );
};
