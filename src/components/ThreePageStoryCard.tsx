import React from 'react';
import { motion } from 'framer-motion';

interface ThreePageStoryCardProps {
  isOpened?: boolean;
}

export const ThreePageStoryCard: React.FC<ThreePageStoryCardProps> = ({ isOpened = true }) => {
  return (
    <section
      id="utama"
      className="invitation-pink-stage relative flex min-h-[100svh] w-full items-center justify-center overflow-x-hidden px-3 pb-20 pt-4 text-center sm:pb-24 sm:pt-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={isOpened ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.97, y: 16 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-[660px] overflow-hidden rounded-[18px] shadow-[0_24px_70px_rgba(94,48,68,0.18)] min-[1100px]:max-w-[560px]"
      >
        {isOpened && (
          <video
            className="block h-auto w-full"
            src="/assets/amirul-alyea-opening-v3.mp4"
            aria-label="Video pembukaan majlis perkahwinan Iqhwan dan Alyea"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        )}
      </motion.div>
    </section>
  );
};
