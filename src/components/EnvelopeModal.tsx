import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnvelopeModalProps {
  onOpen: () => void;
  guestName?: string;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ onOpen, guestName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);

    // Trigger celebratory gold & rose confetti
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F5E6AB', '#4A0E17', '#E8B4B8', '#FAF9F6'],
      });
    } catch {
      // Fallback silently
    }

    // Delay dismissal to let photorealistic envelope reveal transition finish
    setTimeout(() => {
      onOpen();
      setIsDismissed(true);
    }, 1600);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-burgundy-950/95 backdrop-blur-md px-4 py-8 overflow-hidden"
      >
        {/* Background Islamic Geometric Pattern Accent */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative w-full max-w-md flex flex-col items-center">
          {/* Header Greeting */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-6"
          >
            <span className="text-gold-300 font-serif text-xs md:text-sm tracking-[0.3em] uppercase block mb-1">
              Walimatulurus
            </span>
            <h1 className="text-3xl md:text-4xl font-serif text-white font-bold tracking-wide">
              Alyea <span className="text-gold-500 font-normal">&amp;</span> Amirul
            </h1>
            {guestName && (
              <div className="mt-3 inline-block px-4 py-1 rounded-full bg-burgundy-900/80 border border-gold-500/40 text-gold-200 text-xs tracking-wider">
                Kepada Tuan/Puan: <span className="font-semibold text-white">{guestName}</span>
              </div>
            )}
          </motion.div>

          {/* Photorealistic 3D Envelope Interactive Display */}
          <div
            className="relative w-full max-w-xs aspect-square my-2 cursor-pointer group flex items-center justify-center"
            onClick={!isOpen ? handleOpenEnvelope : undefined}
          >
            {/* Outer Gold Glow Effect */}
            <div className="absolute inset-4 rounded-3xl bg-gold-500/20 blur-xl group-hover:bg-gold-500/30 transition-all" />

            {/* Photorealistic Closed & Open Velvet Envelope Assets */}
            <motion.div
              animate={isOpen ? { scale: [1, 1.05, 1.15], opacity: 0 } : { scale: [1, 1.02, 1] }}
              transition={{ repeat: isOpen ? 0 : Infinity, duration: 3, ease: 'easeInOut' }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src={isOpen ? "/assets/envelope-open-v3.png" : "/assets/envelope-closed-v3.png"}
                alt="Sampul Perkahwinan Velvet Burgundy"
                className="w-full h-full object-contain drop-shadow-2xl transition-all duration-700"
              />
            </motion.div>
          </div>

          {/* Open Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOpenEnvelope}
            disabled={isOpen}
            className="mt-4 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-burgundy-950 font-semibold tracking-wider text-sm shadow-gold-glow flex items-center gap-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-gold-300"
          >
            <Sparkles className="w-4 h-4 text-burgundy-950" />
            <span>{isOpen ? 'Membuka Kad...' : 'Buka Sampul'}</span>
            <Volume2 className="w-4 h-4 text-burgundy-950/70 ml-1" />
          </motion.button>
          
          <p className="text-[11px] text-gold-300/60 mt-3 flex items-center gap-1">
            <span>🎵 Tekan untuk memainkan lagu latar &amp; membuka kad</span>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
