import React from 'react';
import { motion } from 'framer-motion';

/**
 * BotanicalFrame
 * Clean, ultra-luxurious burgundy rose frame using the 4 main corner assets:
 * - /assets/border left-top.png
 * - /assets/border right-top.png
 * - /assets/border left bottom.png
 * - /assets/border right-bottom.png
 *
 * Positioned neatly around the outer corners of the card frame so center text remains 100% clear.
 */
export const BotanicalFrame: React.FC = () => {
  return (
    <>
      {/* ─────────────── TOP LEFT ─────────────── */}
      <motion.div
        className="pointer-events-none fixed-botanical"
        animate={{
          rotate: [-2, 0, -2],
          y: [0, 4, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-35px',
          left: '-35px',
          width: 'clamp(140px, 36%, 250px)',
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
            filter: 'drop-shadow(0 12px 28px rgba(40,5,11,0.28)) drop-shadow(0 2px 6px rgba(40,5,11,0.15))',
          }}
        />
      </motion.div>

      {/* ─────────────── TOP RIGHT ─────────────── */}
      <motion.div
        animate={{
          y: [0, 6, 0],
          rotate: [0, -1.5, 0],
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
          src="/assets/border right-top.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: 25, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            filter: 'drop-shadow(0 10px 24px rgba(40,5,11,0.25))',
          }}
        />
      </motion.div>

      {/* ─────────────── BOTTOM LEFT ─────────────── */}
      <motion.div
        animate={{
          rotate: [0, 1.5, 0],
          y: [0, -5, 0],
        }}
        transition={{ duration: 14, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: 'clamp(120px, 30%, 220px)',
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
            filter: 'drop-shadow(0 10px 24px rgba(40,5,11,0.25))',
          }}
        />
      </motion.div>

      {/* ─────────────── BOTTOM RIGHT ─────────────── */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, -1.5, 0],
        }}
        transition={{ duration: 16, delay: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-35px',
          right: '-35px',
          width: 'clamp(130px, 32%, 230px)',
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
            filter: 'drop-shadow(0 12px 30px rgba(40,5,11,0.3))',
          }}
        />
      </motion.div>
    </>
  );
};
