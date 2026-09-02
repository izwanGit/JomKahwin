import React from 'react';
import { motion } from 'framer-motion';

interface ThreePageStoryCardProps {
  isOpened?: boolean;
}

export const ThreePageStoryCard: React.FC<ThreePageStoryCardProps> = ({ isOpened = true }) => {
  return (
    <section
      id="utama"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-x-hidden bg-cream-50 px-4 pb-20 pt-6 text-center sm:pb-24 sm:pt-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={isOpened ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.97, y: 16 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-[480px] overflow-hidden rounded-[22px] bg-cream-50 shadow-[0_24px_70px_rgba(38,51,28,0.16)]"
      >
        <video
          className="block h-auto w-full"
          src="/assets/amirul-alyea-opening.mp4"
          aria-label="Video pembukaan majlis perkahwinan Amirul dan Alyea"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </motion.div>
    </section>
  );
};
