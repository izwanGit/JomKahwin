import React from 'react';
import { motion } from 'framer-motion';

interface CoupleMonogramProps {
  compact?: boolean;
  light?: boolean;
}

export const CoupleMonogram: React.FC<CoupleMonogramProps> = ({ compact = false, light = false }) => (
  <motion.div
    aria-label="Monogram Alyea dan Amirul"
    initial={{ opacity: 0, scale: 0.86, rotate: -3 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    className={`couple-monogram ${compact ? 'couple-monogram--compact' : ''} ${light ? 'couple-monogram--light' : ''}`}
  >
    <span aria-hidden="true" className="couple-monogram__flourish">✦</span>
    <span className="couple-monogram__letters">A<span>&amp;</span>I</span>
    <span aria-hidden="true" className="couple-monogram__flourish">✦</span>
  </motion.div>
);
