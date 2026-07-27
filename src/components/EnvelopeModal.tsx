import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Volume2 } from 'lucide-react';
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
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F5E6AB', '#4A0E17', '#E8B4B8', '#FAF9F6'],
      });
    } catch {
      // Fallback silently if canvas-confetti isn't present
    }

    // Delay dismissal to let 3D unfold animation play gracefully
    setTimeout(() => {
      onOpen();
      setIsDismissed(true);
    }, 1400);
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
            className="text-center mb-8"
          >
            <span className="text-gold-300 font-serif text-sm tracking-[0.3em] uppercase block mb-1">
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

          {/* 3D Envelope Container */}
          <div className="perspective-1000 relative w-full max-w-xs aspect-[4/3] my-4 cursor-pointer" onClick={!isOpen ? handleOpenEnvelope : undefined}>
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-cream-100 to-cream-200 shadow-2xl border-2 border-gold-500/50 p-6 flex flex-col items-center justify-between text-center overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
              
              {/* Gold Foil Border Accents */}
              <div className="absolute inset-2 border border-gold-500/30 rounded-xl pointer-events-none" />
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold-500 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold-500 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold-500 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold-500 pointer-events-none" />

              {/* Top Bismillah Calligraphy Placeholder / Motif */}
              <div className="font-serif text-gold-700 text-xs tracking-widest pt-2">
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </div>

              {/* Center Monogram Wax Seal */}
              <motion.div
                animate={isOpen ? { scale: [1, 1.2, 0], rotate: 180, opacity: 0 } : { scale: [1, 1.04, 1] }}
                transition={{ repeat: isOpen ? 0 : Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 shadow-gold-glow border-2 border-gold-200 flex items-center justify-center text-burgundy-950 font-serif font-bold text-xl shadow-lg relative my-2"
              >
                <div className="absolute inset-1 rounded-full border border-gold-200/50" />
                <Heart className="w-6 h-6 text-burgundy-950 fill-burgundy-950/20" />
              </motion.div>

              {/* Envelope Text */}
              <div className="space-y-1 pb-2">
                <p className="text-xs font-serif text-burgundy-900 tracking-widest uppercase font-semibold">
                  Kad Jemputan Digital
                </p>
                <p className="text-[10px] text-slate-500 tracking-wider">
                  Sila tekan untuk membuka kad
                </p>
              </div>

              {/* 3D Flap Unfold Motion Overlay */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={isOpen ? { rotateX: -180, opacity: 0 } : { rotateX: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: 'top center' }}
                className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gold-300 to-cream-100 border-b border-gold-500/40 clip-triangle pointer-events-none"
              />
            </div>
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
            className="mt-6 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-burgundy-950 font-semibold tracking-wider text-sm shadow-gold-glow flex items-center gap-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-gold-300"
          >
            <Sparkles className="w-4 h-4 text-burgundy-950" />
            <span>{isOpen ? 'Membuka Kad...' : 'Buka Sampul'}</span>
            <Volume2 className="w-4 h-4 text-burgundy-950/70 ml-1" />
          </motion.button>
          
          <p className="text-[11px] text-gold-300/60 mt-3 flex items-center gap-1">
            <span>🎵 Lagu latar akan dimainkan secara automatik</span>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
