import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CoupleMonogram } from './CoupleMonogram';

interface EnvelopeModalProps {
  onOpen: () => void;
  guestName?: string;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ onOpen, guestName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousOverflow;
    };
  }, [isDismissed]);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Keep the opening confetti in the invitation's olive-and-blush palette.
    try {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const lowPowerDevice = (navigator.hardwareConcurrency ?? 4) <= 4;
      const mobileDevice = window.innerWidth < 768;

      if (!reducedMotion) {
        confetti({
          particleCount: lowPowerDevice ? 12 : mobileDevice ? 16 : 30,
          spread: 72,
          startVelocity: 24,
          ticks: 90,
          scalar: 0.82,
          origin: { y: 0.6 },
          colors: ['#43542A', '#9DB14C', '#E8A9BD', '#F4C9D6', '#FFFCF5'],
        });
      }
    } catch {
      // Fallback silently
    }

    // Let the open envelope appear before revealing the invitation.
    setTimeout(() => {
      onOpen();
      setIsDismissed(true);
    }, 1000);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="invitation-pink-stage fixed inset-0 z-[100] flex items-center justify-center overflow-hidden px-4 py-5"
      >
        <div className="relative flex w-full max-w-md flex-col items-center">
          {/* Header Greeting */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-3 text-center sm:mb-4"
          >
            <div className="mb-3 flex justify-center">
              <div className="rounded-full bg-[#34452A] p-1 shadow-[0_6px_18px_rgba(52,69,42,0.16)] ring-1 ring-white/80">
                <CoupleMonogram compact light />
              </div>
            </div>
            <span className="mb-1 block font-serif text-xs uppercase tracking-[0.3em] text-[#657337] md:text-sm">
              Walimatulurus
            </span>
            <h1 className="font-serif text-3xl font-bold tracking-wide text-[#34452A] md:text-4xl">
              Amirul <span className="font-normal text-[#B85779]">&amp;</span> Alyea
            </h1>
            {guestName && (
              <div className="mt-3 inline-block rounded-full border border-[#DDA7B8] bg-white/55 px-4 py-1 text-xs tracking-wider text-[#53643B]">
                Kepada Tuan/Puan: <span className="font-semibold text-[#34452A]">{guestName}</span>
              </div>
            )}
          </motion.div>

          {/* Crop the transparent canvas to the actual envelope artwork. */}
          <div
            className={`relative my-2 w-[min(78vw,320px)] cursor-pointer overflow-hidden ${isOpen ? 'aspect-[992/1272]' : 'aspect-[992/704]'}`}
            onClick={handleOpenEnvelope}
            role="button"
            tabIndex={isOpen ? -1 : 0}
            aria-label="Buka jemputan"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleOpenEnvelope();
              }
            }}
          >
            {/* Both images stay mounted so the open artwork is ready before the click. */}
            <motion.div
              animate={isOpen ? { scale: [1, 1.03, 1.06], opacity: [1, 1, 0] } : { scale: [1, 1.015, 1], opacity: 1 }}
              transition={{ repeat: isOpen ? 0 : Infinity, duration: isOpen ? 0.95 : 3, ease: 'easeInOut', ...(isOpen ? { times: [0, 0.75, 1] } : {}) }}
              className="relative h-full w-full drop-shadow-[0_12px_18px_rgba(52,69,42,0.18)]"
            >
              <img
                src="/assets/envelope-closed-v4.png"
                alt="Sampul perkahwinan hijau dengan lak mohor merah jambu"
                aria-hidden={isOpen}
                width={1241}
                height={1748}
                draggable={false}
                className={`absolute left-[-12.5%] top-[-74.15%] h-auto w-[125.1%] max-w-none transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <img
                src="/assets/envelope-open-v4.png"
                alt="Sampul perkahwinan hijau terbuka"
                aria-hidden={!isOpen}
                width={1241}
                height={1748}
                draggable={false}
                className={`absolute left-[-12.5%] top-[-18.71%] h-auto w-[125.1%] max-w-none transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              />
            </motion.div>
          </div>

          {/* Open Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpenEnvelope}
            disabled={isOpen}
            className="mt-4 flex items-center gap-2.5 rounded-full bg-[#34452A] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(52,69,42,0.22)] transition-all hover:bg-[#43542A] focus:outline-none focus:ring-2 focus:ring-[#B85779] focus:ring-offset-2 focus:ring-offset-[#F8C8D9]"
          >
            <Sparkles className="h-4 w-4 text-[#F4C9D6]" />
            <span>{isOpen ? 'Membuka Kad...' : 'Buka Jemputan'}</span>
            <Volume2 className="ml-1 h-4 w-4 animate-pulse text-[#F4C9D6]" />
          </motion.button>
          
          <p className="mt-3 flex items-center gap-1 font-serif text-[11px] italic text-[#755665]">
            <span>🎵 Tekan untuk memainkan lagu &amp; membuka kad jemputan</span>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
