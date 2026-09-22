import React from 'react';
import { motion } from 'framer-motion';

interface ThreePageStoryCardProps {
  isOpened?: boolean;
}

export const ThreePageStoryCard: React.FC<ThreePageStoryCardProps> = ({ isOpened = true }) => {
  return (
    <section
      id="utama"
      className="invitation-pink-stage relative flex min-h-[100svh] w-full items-center justify-center overflow-x-hidden px-0 pb-20 pt-4 text-center sm:px-3 sm:pb-24 sm:pt-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={isOpened ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.97, y: 16 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-[820px] overflow-hidden rounded-none shadow-[0_24px_70px_rgba(94,48,68,0.18)] sm:rounded-[18px]"
      >
        <video
          className="block h-auto w-full"
          src="/assets/amirul-alyea-opening-v3.mp4"
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
