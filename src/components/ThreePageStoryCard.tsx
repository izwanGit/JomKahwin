import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { Heart, Calendar, MapPin, Phone, QrCode, Clock, Play, Pause, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BotanicalFrame } from './BotanicalFrame';
import { IslamicArchCard } from './IslamicArchCard';

interface ThreePageStoryCardProps {
  isOpened?: boolean;
}

export const ThreePageStoryCard: React.FC<ThreePageStoryCardProps> = ({ isOpened = true }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [direction, setDirection] = useState<number>(1);

  // Auto-transition timer (5.5s per page)
  useEffect(() => {
    if (!isOpened || !isPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev % 3) + 1);
    }, 5500);

    return () => clearInterval(timer);
  }, [isOpened, isPlaying]);

  const handleNext = () => {
    setIsPlaying(false);
    setDirection(1);
    setCurrentPage((prev) => (prev % 3) + 1);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setDirection(-1);
    setCurrentPage((prev) => (prev === 1 ? 3 : prev - 1));
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  const scrollToRsvp = () => {
    const rsvpElement = document.getElementById('rsvp');
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Directional slide variants
  const pageVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
      scale: 0.96,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      scale: 0.96,
    }),
  };

  const googleCalendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Walimatulurus+Alyea+%26+Amirul&dates=20261024T030000Z/20261024T080000Z&details=Majlis+Perkahwinan+Alyea+Dania+%26+Amirul+Iqhwan.&location=Dewan+Seri+Endon,+Presint+10,+Putrajaya';

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

            {/* TOP STORY PROGRESS BARS (Instagram/WhatsApp Story Style) */}
            <div className="w-full flex items-center justify-center gap-1.5 mb-2 z-20 px-4">
              {[1, 2, 3].map((page) => {
                const isActive = currentPage === page;
                const isPast = currentPage > page;
                return (
                  <button
                    key={page}
                    onClick={() => {
                      setIsPlaying(false);
                      setDirection(page > currentPage ? 1 : -1);
                      setCurrentPage(page);
                    }}
                    className="flex-1 h-1.5 rounded-full bg-[#D4AF37]/20 overflow-hidden relative focus:outline-none"
                    aria-label={`Ke Halaman ${page}`}
                  >
                    <div
                      className={`h-full bg-[#D4AF37] transition-all ${
                        isPast ? 'w-full' : isActive && isPlaying ? 'w-full duration-[5500ms] ease-linear' : isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* PAGE CONTENT SWITCHER (With Touch Drag Swipe Support) */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="w-full flex-1 flex flex-col items-center justify-center relative touch-pan-y cursor-grab active:cursor-grabbing"
            >
              <AnimatePresence mode="wait" custom={direction}>
                
                {/* ── PAGE 1: HERO MONOGRAM & MAJLIS TITLE ── */}
                {currentPage === 1 && (
                  <motion.div
                    key="page1"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col items-center justify-center space-y-3.5 py-1"
                  >
                    {/* Bismillah */}
                    <div
                      style={{
                        fontFamily: "'Amiri', serif",
                        fontSize: 'clamp(20px, 4.5vw, 36px)',
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
                          marginTop: '3px',
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

                    {/* Gold Monogram AA Logo Emblem */}
                    <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/60 bg-gradient-to-b from-[#FAF9F6] to-[#F5E6AB]/30 flex items-center justify-center shadow-sm my-1">
                      <span className="font-serif font-bold text-lg text-[#28050B] tracking-tighter">
                        A<span className="text-[#D4AF37] font-normal">&amp;</span>A
                      </span>
                    </div>

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
                          fontSize: 'clamp(24px, 7vw, 56px)',
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
                          fontSize: 'clamp(24px, 7vw, 56px)',
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

                    <span className="text-[10px] text-[#976E07] tracking-[0.2em] font-serif uppercase font-semibold">
                      Sabtu • 24.10.2026
                    </span>
                  </motion.div>
                )}

                {/* ── PAGE 2: IBU BAPA, JEMPUTAN & BUTIRAN MAJLIS ── */}
                {currentPage === 2 && (
                  <motion.div
                    key="page2"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col items-center justify-center space-y-4 py-1"
                  >
                    <span className="text-[#976E07] font-serif text-xs tracking-[0.3em] uppercase block font-semibold">
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

                    <div className="px-6 py-2.5 rounded-xl bg-[#28050B]/5 border border-[#D4AF37]/35 text-center shadow-xs">
                      <p className="font-sans text-xs sm:text-sm font-bold text-[#28050B]">
                        Dato&apos; / Datin / Tuan / Puan / Encik / Cik Seisi Keluarga
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 font-serif italic max-w-sm">
                      Ke Majlis Perkahwinan Anakanda Kesayangan Kami
                    </p>

                    {/* Date & Time Box */}
                    <div className="w-full max-w-sm p-4 rounded-xl bg-white/90 border border-[#D4AF37]/35 shadow-sm space-y-2.5">
                      <div className="flex items-center justify-center gap-2 font-serif font-bold text-base text-[#4A0E17]">
                        <Calendar size={16} className="text-[#D4AF37]" />
                        <span>Sabtu, 24 Oktober 2026</span>
                      </div>
                      <div className="text-xs text-slate-600 flex items-center justify-center gap-1">
                        <Clock size={13} className="text-[#D4AF37]" />
                        <span>Masa: 11:00 PAGI – 4:00 PETANG</span>
                      </div>
                      <div className="text-xs text-slate-700 font-medium flex items-center justify-center gap-1 pt-1.5 border-t border-[#D4AF37]/20">
                        <MapPin size={13} className="text-[#D4AF37] flex-shrink-0" />
                        <span>Dewan Seri Endon, Presint 10, Putrajaya</span>
                      </div>
                    </div>

                    {/* Save to Calendar Button */}
                    <a
                      href={googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-full bg-[#28050B] text-[#FFFEFA] text-xs font-semibold flex items-center gap-1.5 border border-[#D4AF37]/40 shadow-sm hover:scale-105 transition-transform"
                    >
                      <Calendar size={13} className="text-[#D4AF37]" />
                      <span>Simpan Ke Google Calendar</span>
                    </a>
                  </motion.div>
                )}

                {/* ── PAGE 3: DOA, HUBUNGI & QR LOKASI ── */}
                {currentPage === 3 && (
                  <motion.div
                    key="page3"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col items-center justify-center space-y-4 py-1"
                  >
                    <span className="text-[#976E07] font-serif text-xs tracking-[0.3em] uppercase block font-semibold">
                      Titipan Doa &amp; Perhubungan
                    </span>

                    {/* Blessing Du'a */}
                    <p className="font-serif italic text-xs sm:text-sm text-burgundy-950/85 max-w-md leading-relaxed">
                      &ldquo;Ya Allah, berkatilah majlis perkahwinan ini. Limpahkanlah baraqah dan rahmat-Mu kepada kedua mempelai ini, kurniakanlah zuriat yang soleh dan solehah, serta kekalkanlah jodoh mereka hingga ke syurga.&rdquo;
                    </p>

                    {/* Contact Persons */}
                    <div className="w-full max-w-sm space-y-1.5 text-left">
                      <p className="text-[10px] text-[#976E07] tracking-[0.2em] font-semibold uppercase text-center mb-1">
                        Hubungi Pihak Keluarga:
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/80 border border-[#D4AF37]/30 flex items-center justify-between hover:border-[#D4AF37] transition-all">
                          <div>
                            <p className="font-bold text-burgundy-950">Hj. Ahmad (Abah)</p>
                            <p className="text-[10px] text-slate-500">012-3456789</p>
                          </div>
                          <Phone size={13} className="text-[#D4AF37]" />
                        </a>
                        <a href="https://wa.me/60198765432" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/80 border border-[#D4AF37]/30 flex items-center justify-between hover:border-[#D4AF37] transition-all">
                          <div>
                            <p className="font-bold text-burgundy-950">Hjh. Aminah (Ma)</p>
                            <p className="text-[10px] text-slate-500">019-8765432</p>
                          </div>
                          <Phone size={13} className="text-[#D4AF37]" />
                        </a>
                      </div>
                    </div>

                    {/* Direct Quick Action Buttons */}
                    <div className="flex items-center gap-2 pt-1 flex-wrap justify-center">
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
                      <button
                        onClick={scrollToRsvp}
                        className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-burgundy-900 to-burgundy-950 text-gold-300 text-[11px] font-bold flex items-center gap-1 border border-gold-500/50 shadow-sm hover:scale-105 transition-transform"
                      >
                        <CheckCircle2 size={12} className="text-gold-400" />
                        <span>Pengesahan RSVP</span>
                      </button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.div>

            {/* BOTTOM E-CARD CONTROLS */}
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
                className="flex items-center gap-1 text-slate-500 hover:text-burgundy-950 text-[10px] px-2.5 py-0.5 rounded-full bg-white/70 border border-[#D4AF37]/30 transition-all"
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

