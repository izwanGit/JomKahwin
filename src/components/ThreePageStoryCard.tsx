import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, MapPin, Phone, QrCode, Clock, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { BotanicalFrame } from './BotanicalFrame';
import { IslamicArchCard } from './IslamicArchCard';

interface ThreePageStoryCardProps {
  isOpened?: boolean;
}

export const ThreePageStoryCard: React.FC<ThreePageStoryCardProps> = ({ isOpened = true }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto-transition timer (5 seconds per page) once envelope is opened
  useEffect(() => {
    if (!isOpened || !isPlaying) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev % 3) + 1);
    }, 5500);

    return () => clearInterval(timer);
  }, [isOpened, isPlaying]);

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentPage((prev) => (prev % 3) + 1);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentPage((prev) => (prev === 1 ? 3 : prev - 1));
  };

  // Hardware-accelerated GPU 60fps variants with zero filter-blur layout thrashing
  const pageVariants = {
    initial: { opacity: 0, scale: 0.96, y: 12 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.97, y: -10 },
  };

  return (
    <section
      id="utama"
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-3 py-6 sm:py-10 overflow-hidden"
      style={{ backgroundColor: '#FFFEFA' }}
    >
      {/* Cotton paper texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 20% 10%, rgba(212,175,55,0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 90%, rgba(116,25,40,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(255,254,250,0.9) 0%, transparent 100%)
          `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Outer gold double-border frame lines */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '16px',
          border: '1px solid rgba(212,175,55,0.18)',
          borderRadius: '20px',
          pointerEvents: 'none',
          zIndex: 6,
        }}
      />

      {/* ── 3-PAGE STORY CARD CONTAINER ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={isOpened ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl mx-auto py-2"
      >
        {/* Botanical frame anchored directly around the card corners */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
          <BotanicalFrame />
        </div>

        <IslamicArchCard>
          <div className="min-h-[460px] sm:min-h-[500px] flex flex-col justify-between items-center w-full relative">

            {/* TOP PAGE INDICATORS (Pill dots like Instagram Story) */}
            <div className="w-full flex items-center justify-center gap-2 mb-2 z-20">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentPage(page);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentPage === page
                      ? 'w-8 bg-[#D4AF37] shadow-sm'
                      : 'w-2 bg-[#D4AF37]/25 hover:bg-[#D4AF37]/50'
                  }`}
                  aria-label={`Buka Halaman ${page}`}
                />
              ))}
            </div>

            {/* PAGE CONTENT SWITCHER */}
            <div className="w-full flex-1 flex flex-col items-center justify-center relative">
              <AnimatePresence mode="wait">
                
                {/* ── PAGE 1: HERO MONOGRAM & MAJLIS TITLE ── */}
                {currentPage === 1 && (
                  <motion.div
                    key="page1"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col items-center justify-center space-y-4 py-2"
                  >
                    {/* Bismillah */}
                    <div
                      style={{
                        fontFamily: "'Amiri', serif",
                        fontSize: 'clamp(20px, 4.5vw, 38px)',
                        color: '#B8860B',
                        letterSpacing: '0.04em',
                      }}
                    >
                      بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                    </div>

                    {/* Surah Ar-Rum Verse */}
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: 'italic',
                        fontSize: 'clamp(11px, 1.7vw, 14px)',
                        color: 'rgba(40,5,11,0.75)',
                        maxWidth: '420px',
                        lineHeight: 1.6,
                        textAlign: 'center',
                      }}
                    >
                      &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya...&rdquo;
                      <span
                        style={{
                          display: 'block',
                          marginTop: '4px',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontStyle: 'normal',
                          fontSize: '9px',
                          color: '#976E07',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                        }}
                      >
                        (Surah Ar-Rum: 21)
                      </span>
                    </p>

                    <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)' }} />

                    {/* Heading */}
                    <div>
                      <span className="block font-serif text-[11px] sm:text-xs font-bold text-[#976E07] tracking-[0.35em] uppercase">
                        Walimatulurus
                      </span>
                      <h2 className="font-sans text-[9px] sm:text-[10px] text-burgundy-950/60 tracking-[0.25em] uppercase font-medium mt-0.5">
                        Majlis Kesyukuran &amp; Perkahwinan
                      </h2>
                    </div>

                    {/* Couple Names */}
                    <div className="py-1">
                      <h1
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 'clamp(24px, 7vw, 60px)',
                          fontWeight: 700,
                          color: '#28050B',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.05,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Alyea Dania
                      </h1>
                      <div className="flex items-center justify-center gap-2 my-1">
                        <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
                        <Heart size={14} className="text-[#D4AF37] fill-[#D4AF37]/20" />
                        <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
                      </div>
                      <h1
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 'clamp(24px, 7vw, 60px)',
                          fontWeight: 700,
                          color: '#28050B',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.05,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Amirul Iqhwan
                      </h1>
                    </div>

                    <span className="text-[10px] text-[#976E07] tracking-[0.2em] font-serif uppercase">
                      Sabtu • 24.10.2026
                    </span>
                  </motion.div>
                )}

                {/* ── PAGE 2: IBU BAPA, JEMPUTAN & BUTIRAN MAJLIS ── */}
                {currentPage === 2 && (
                  <motion.div
                    key="page2"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col items-center justify-center space-y-4 py-2"
                  >
                    <span className="text-[#976E07] font-serif text-xs tracking-[0.3em] uppercase block">
                      Undangan Tulus Ikhlas
                    </span>

                    {/* Parents Name */}
                    <div className="space-y-1 text-center">
                      <p className="font-serif text-base sm:text-lg font-bold text-burgundy-950">
                        Hj. Ahmad Bin Ibrahim &amp; Hjh. Aminah Binti Ali
                      </p>
                      <p className="text-[11px] text-slate-500 font-serif italic">
                        Bersama sekeluarga dengan penuh rasa kesyukuran menjemput:
                      </p>
                    </div>

                    <div className="px-6 py-2 rounded-xl bg-[#28050B]/5 border border-[#D4AF37]/30 text-center">
                      <p className="font-sans text-xs sm:text-sm font-bold text-[#28050B]">
                        Dato&apos; / Datin / Tuan / Puan / Encik / Cik Seisi Keluarga
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 font-serif italic max-w-sm">
                      Ke Majlis Perkahwinan Anakanda Kesayangan Kami
                    </p>

                    {/* Date & Time Box */}
                    <div className="w-full max-w-sm p-4 rounded-xl bg-white/90 border border-[#D4AF37]/35 shadow-sm space-y-2">
                      <div className="flex items-center justify-center gap-2 font-serif font-bold text-base text-[#4A0E17]">
                        <Calendar size={16} className="text-[#D4AF37]" />
                        <span>Sabtu, 24 Oktober 2026</span>
                      </div>
                      <div className="text-xs text-slate-600 flex items-center justify-center gap-1">
                        <Clock size={13} className="text-[#D4AF37]" />
                        <span>Masa: 11:00 PAGI – 4:00 PETANG</span>
                      </div>
                      <div className="text-xs text-slate-700 font-medium flex items-center justify-center gap-1 pt-1 border-t border-[#D4AF37]/20">
                        <MapPin size={13} className="text-[#D4AF37] flex-shrink-0" />
                        <span>Dewan Seri Endon, Presint 10, Putrajaya</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── PAGE 3: DOA, HUBUNGI & QR LOKASI ── */}
                {currentPage === 3 && (
                  <motion.div
                    key="page3"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col items-center justify-center space-y-4 py-2"
                  >
                    <span className="text-[#976E07] font-serif text-xs tracking-[0.3em] uppercase block">
                      Titipan Doa &amp; Perhubungan
                    </span>

                    {/* Blessing Du'a */}
                    <p className="font-serif italic text-xs sm:text-sm text-burgundy-950/80 max-w-md leading-relaxed">
                      &ldquo;Ya Allah, berkatilah majlis perkahwinan ini. Limpahkanlah baraqah dan rahmat-Mu kepada kedua mempelai ini, kurniakanlah zuriat yang soleh dan solehah, serta kekalkanlah jodoh mereka hingga ke syurga.&rdquo;
                    </p>

                    {/* Contact Persons */}
                    <div className="w-full max-w-sm space-y-1.5 text-left">
                      <p className="text-[10px] text-[#976E07] tracking-[0.2em] font-semibold uppercase text-center mb-1">
                        Hubungi Untuk Pertanyaan:
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <a href="tel:60123456789" className="p-2 rounded-lg bg-white/80 border border-[#D4AF37]/30 flex items-center justify-between hover:border-[#D4AF37] transition-all">
                          <div>
                            <p className="font-bold text-burgundy-950">Hj. Ahmad (Abah)</p>
                            <p className="text-[10px] text-slate-500">012-3456789</p>
                          </div>
                          <Phone size={12} className="text-[#D4AF37]" />
                        </a>
                        <a href="tel:60198765432" className="p-2 rounded-lg bg-white/80 border border-[#D4AF37]/30 flex items-center justify-between hover:border-[#D4AF37] transition-all">
                          <div>
                            <p className="font-bold text-burgundy-950">Hjh. Aminah (Ma)</p>
                            <p className="text-[10px] text-slate-500">019-8765432</p>
                          </div>
                          <Phone size={12} className="text-[#D4AF37]" />
                        </a>
                      </div>
                    </div>

                    {/* Quick GPS Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <a
                        href="https://waze.com/ul?q=Dewan%20Seri%20Endon%20Putrajaya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-[#28050B] text-[#FFFEFA] text-[11px] font-semibold flex items-center gap-1 border border-[#D4AF37]/40 shadow-sm hover:scale-105 transition-transform"
                      >
                        <MapPin size={12} className="text-[#D4AF37]" />
                        <span>Waze Lokasi</span>
                      </a>
                      <a
                        href="https://maps.google.com/?q=Dewan+Seri+Endon+Presint+10+Putrajaya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-[#D4AF37] text-burgundy-950 text-[11px] font-semibold flex items-center gap-1 shadow-sm hover:scale-105 transition-transform"
                      >
                        <QrCode size={12} />
                        <span>Google Maps</span>
                      </a>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* BOTTOM E-CARD CONTROLS (Next/Prev + Slideshow Play/Pause) */}
            <div className="w-full flex items-center justify-between px-2 pt-3 border-t border-[#D4AF37]/25 text-[11px] z-20">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 text-[#976E07] hover:text-[#28050B] font-serif font-medium transition-colors focus:outline-none"
              >
                <ChevronLeft size={16} />
                <span>Sebelumnya</span>
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1 text-slate-500 hover:text-burgundy-950 text-[10px] px-2 py-0.5 rounded-full bg-white/70 border border-[#D4AF37]/30 transition-all"
                title={isPlaying ? 'Jeda Pertukaran Halaman' : 'Mainkan Pertukaran Halaman Auto'}
              >
                {isPlaying ? <Pause size={10} className="text-[#D4AF37]" /> : <Play size={10} className="text-[#D4AF37]" />}
                <span>{isPlaying ? 'Auto-Slide' : 'Dihentikan'}</span>
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-1 text-[#976E07] hover:text-[#28050B] font-serif font-medium transition-colors focus:outline-none"
              >
                <span>Seterusnya</span>
                <ChevronRight size={16} />
              </button>
            </div>

          </div>
        </IslamicArchCard>
      </motion.div>
    </section>
  );
};
