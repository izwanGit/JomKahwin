import React from 'react';
import { motion } from 'framer-motion';

/**
 * BotanicalFrame
 * Ultra-luxury asymmetric botanical border composed from 4 unique corner arrangements.
 * All flowers are real photographs tinted to deep burgundy palette.
 * Designed to frame the invitation content without covering key text.
 */
export const BotanicalFrame: React.FC = () => {
  return (
    <>
      {/* ─────────────── TOP LEFT — Largest, richest arrangement ─────────────── */}
      <motion.div
        className="pointer-events-none fixed-botanical"
        animate={{ 
          rotate: [-8, -5, -8],
          y: [0, 8, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '-60px',
          left: '-70px',
          width: 'clamp(220px, 38vw, 440px)',
          zIndex: 15,
          transformOrigin: 'top left',
          willChange: 'transform',
        }}
      >
        {/* Primary large bouquet */}
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
        {/* Secondary accent flower — spills inward slightly */}
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

      {/* ─────────────── TOP RIGHT — Medium, sweeping foliage ─────────────── */}
      <motion.div
        animate={{ 
          y: [0, 12, 0],
          x: [0, -6, 0]
        }}
        transition={{ duration: 15, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '-45px',
          right: '-55px',
          width: 'clamp(160px, 28vw, 320px)',
          zIndex: 15,
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
        {/* Accent — tucked behind corner */}
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

      {/* ─────────────── BOTTOM LEFT — Asymmetric, upward stems ─────────────── */}
      <motion.div
        animate={{ 
          rotate: [0, 3, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 14, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: 'clamp(150px, 26vw, 300px)',
          zIndex: 15,
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
        {/* Small hanging accent */}
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

      {/* ─────────────── BOTTOM RIGHT — Richest, most layered arrangement ─────────────── */}
      <motion.div
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, -2, 0]
        }}
        transition={{ duration: 16, delay: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: '-65px',
          right: '-65px',
          width: 'clamp(190px, 34vw, 400px)',
          zIndex: 15,
          pointerEvents: 'none',
          transformOrigin: 'bottom right',
        }}
      >
        {/* Main large bouquet — hero flower */}
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
        {/* Secondary bloom — foreground layer */}
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
        {/* Tiny accent — deepest foreground petal */}
        <motion.img
          src="/assets/floral-accent-2.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 1.0, delay: 0.65 }}
          style={{
            position: 'absolute',
            top: '-10%',
            left: '20%',
            width: '28%',
            filter: 'drop-shadow(0 3px 8px rgba(40,5,11,0.2))',
            transform: 'rotate(40deg)',
          }}
        />
      </motion.div>

      {/* ─────────────── SUBTLE GOLD VINE LINES connecting corners ─────────────── */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 5,
          overflow: 'visible',
        }}
      >
        <defs>
          <linearGradient id="vineGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#B8860B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Top vine — TL to TR */}
        <path
          d="M 40 60 Q 25% 12, 50% 8 T calc(100% - 40px) 55"
          stroke="url(#vineGold)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="6 10"
          strokeLinecap="round"
        />
        {/* Right vine — TR down to BR */}
        <path
          d="M calc(100% - 55px) 55 Q calc(100% - 6px) 30% , calc(100% - 12px) 50% T calc(100% - 58px) calc(100% - 58px)"
          stroke="url(#vineGold)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 12"
          strokeLinecap="round"
        />
        {/* Bottom vine — BR to BL */}
        <path
          d="M calc(100% - 60px) calc(100% - 60px) Q 65% calc(100% - 10px), 45% calc(100% - 6px) T 45 calc(100% - 52px)"
          stroke="url(#vineGold)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 9"
          strokeLinecap="round"
        />
        {/* Left vine — BL up to TL */}
        <path
          d="M 45 calc(100% - 52px) Q 8px 65%, 6px 50% T 40 60"
          stroke="url(#vineGold)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 11"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
