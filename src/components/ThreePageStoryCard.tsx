import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, MapPin, Phone, Clock } from 'lucide-react';
import { BotanicalFrame } from './BotanicalFrame';
import { IslamicArchCard } from './IslamicArchCard';

interface ThreePageStoryCardProps {
  isOpened?: boolean;
}

/*
 * ─── CINEMATIC TIMING CONSTANTS ───
 * These control the pacing of the entire story experience.
 * Each page has its own "dwell time" — the duration a guest
 * sees that page before the cinematic transition begins.
 */
const PAGE_DWELL_MS: Record<number, number> = {
  1: 8000,  // Page 1 (Cover) — longer, let the music settle in
  2: 9000,  // Page 2 (Invitation) — more text to absorb
  3: 10000, // Page 3 (Doa & Contact) — final page, linger before looping
};

/*
 * ─── CINEMATIC TRANSITION VARIANTS ───
 * Inspired by Final Cut Pro "Blur Dissolve" and "Push Zoom" transitions.
 *
 * The outgoing page: gently scales UP (camera pulling away)
 * while simultaneously blurring and fading to white.
 *
 * The incoming page: starts scaled UP and blurred (out of focus),
 * then settles DOWN to 1.0 and sharpens (camera focusing in).
 *
 * Combined with staggered child element reveals, this creates
 * the romantic, cinematic feel of a wedding film.
 *
 * NOTE: We use `filter` for blur. On low-end devices the blur
 * is kept to 8px max (not 20px+) and duration is long enough
 * that the GPU has time to composite without frame drops.
 * The `will-change` hint is applied in the className.
const pageVariants = {
  enter: {
    opacity: 0,
    scale: 1.05,
    filter: 'blur(8px)',
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.4,
      ease: [0.22, 0.68, 0.35, 1.0] as [number, number, number, number],
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.04,
    filter: 'blur(8px)',
    transition: {
      duration: 1.0,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

const childReveal = {
  enter: {
    opacity: 0,
    y: 14,
    scale: 0.97,
    filter: 'blur(4px)',
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    filter: 'blur(4px)',
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

export const ThreePageStoryCard: React.FC<ThreePageStoryCardProps> = ({ isOpened = true }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const advancePage = useCallback(() => {
    setCurrentPage((prev) => (prev % 3) + 1);
  }, []);

  // Auto-advance timer — starts after envelope opens
  useEffect(() => {
    if (!isOpened) return;

    const dwellTime = PAGE_DWELL_MS[currentPage] ?? 8000;
    const timer = setTimeout(advancePage, dwellTime);

    return () => clearTimeout(timer);
  }, [isOpened, currentPage, advancePage]);

  return (
    <section
      id="utama"
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 py-8 overflow-hidden"
      style={{ backgroundColor: '#FFFEFA' }}
    >
      {/* ── Cotton paper texture overlay ── */}
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

      {/* ── Outer gold double-border frame lines ── */}
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

      {/* ── CINEMATIC STORY CARD ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={isOpened ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl mx-auto py-4"
      >
        {/* Botanical frame anchored directly around the card corners */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
          <BotanicalFrame />
        </div>

        <IslamicArchCard>
          {/* Stage for cinematic page swaps */}
          <div className="relative w-full flex flex-col items-center justify-center min-h-[460px] sm:min-h-[520px]">
            <AnimatePresence mode="wait">

              {/* ═══════════════════════════════════════════════════
                  PAGE 1 — COVER (Restored Original HeroSection)
                  Bismillah → Quran → Walimatulurus → Names → Date
                 ═══════════════════════════════════════════════════ */}
              {currentPage === 1 && (
                <motion.div
                  key="page1"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex flex-col items-center justify-center gap-[clamp(8px,1.5vh,20px)] will-change-transform"
                >
                  {/* Bismillah */}
                  <motion.div
                    variants={childReveal}
                    style={{
                      fontFamily: "'Amiri', serif",
                      fontSize: 'clamp(18px, 4vw, 36px)',
                      color: '#B8860B',
                      letterSpacing: '0.04em',
                    }}
                  >
                    بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                  </motion.div>

                  {/* Quran verse */}
                  <motion.p
                    variants={childReveal}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontSize: 'clamp(10px, 1.6vw, 14px)',
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
                  </motion.p>

                  {/* Gold divider */}
                  <motion.div
                    variants={childReveal}
                    style={{
                      width: '60px',
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)',
                    }}
                  />

                  {/* Walimatulurus heading */}
                  <motion.div variants={childReveal}>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(10px, 1.6vw, 14px)',
                        fontWeight: 700,
                        color: '#976E07',
                        letterSpacing: '0.35em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Walimatulurus
                    </span>
                    <h2
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 'clamp(8px, 1.4vw, 11px)',
                        color: 'rgba(40,5,11,0.65)',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                        marginTop: '2px',
                      }}
                    >
                      Majlis Kesyukuran &amp; Perkahwinan
                    </h2>
                  </motion.div>

                  {/* Couple Names */}
                  <motion.div
                    variants={childReveal}
                    style={{ paddingTop: '4px', paddingBottom: '4px' }}
                  >
                    <h1
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(22px, 6.5vw, 64px)',
                        fontWeight: 700,
                        color: '#28050B',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.05,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Alyea Dania
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: 'clamp(4px, 1vh, 12px) 0' }}>
                      <span style={{ height: '1px', width: '32px', background: 'rgba(212,175,55,0.55)' }} />
                      <Heart size={16} style={{ color: '#D4AF37', fill: 'rgba(212,175,55,0.15)' }} />
                      <span style={{ height: '1px', width: '32px', background: 'rgba(212,175,55,0.55)' }} />
                    </div>

                    <h1
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(22px, 6.5vw, 64px)',
                        fontWeight: 700,
                        color: '#28050B',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.05,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Amirul Iqhwan
                    </h1>
                  </motion.div>

                  {/* Invitation text */}
                  <motion.div
                    variants={childReveal}
                    style={{ fontSize: 'clamp(10px, 1.6vw, 13px)', color: 'rgba(40,5,11,0.75)' }}
                  >
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: 'italic',
                        color: '#8B1E31',
                        fontWeight: 500,
                        fontSize: 'clamp(11px, 1.8vw, 15px)',
                      }}
                    >
                      Dengan penuh rasa kesyukuran ke hadrat Allah SWT, kami menjemput:
                    </p>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        color: '#28050B',
                        letterSpacing: '0.02em',
                        marginTop: '2px',
                      }}
                    >
                      Dato&apos;/Datin/Tuan/Puan/Encik/Cik Seisi Keluarga
                    </p>
                    <p style={{ color: 'rgba(40,5,11,0.45)', fontSize: '10px', marginTop: '2px' }}>
                      Ke majlis perkahwinan anakanda kesayangan kami
                    </p>
                  </motion.div>

                  {/* Date & Venue card */}
                  <motion.div
                    variants={childReveal}
                    style={{
                      width: '100%',
                      maxWidth: '440px',
                      padding: 'clamp(12px, 2vh, 24px)',
                      borderRadius: '16px',
                      background: 'rgba(250,249,246,0.9)',
                      border: '1px solid rgba(212,175,55,0.3)',
                      boxShadow: '0 4px 20px rgba(40,5,11,0.06)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 700,
                        fontSize: 'clamp(13px, 2vw, 20px)',
                        color: '#4A0E17',
                        paddingBottom: '8px',
                        borderBottom: '1px solid rgba(212,175,55,0.25)',
                        marginBottom: '8px',
                      }}
                    >
                      <Calendar size={16} style={{ color: '#D4AF37' }} />
                      Sabtu, 24 Oktober 2026
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'rgba(40,5,11,0.7)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600, color: '#28050B', fontSize: 'clamp(10px, 1.6vw, 13px)' }}>
                        <MapPin size={14} style={{ color: '#D4AF37', flexShrink: 0 }} />
                        <span>Dewan Seri Endon, Presint 10, Putrajaya</span>
                      </div>
                      <span style={{ fontSize: '10px', color: 'rgba(40,5,11,0.45)' }}>Masa: 11:00 PAGI – 4:00 PETANG</span>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* ═══════════════════════════════════════════════════
                  PAGE 2 — FORMAL INVITATION (Kad Jemputan Rasmi)
                  Parents → Formal Text → Date/Time/Venue Detail
                 ═══════════════════════════════════════════════════ */}
              {currentPage === 2 && (
                <motion.div
                  key="page2"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex flex-col items-center justify-center gap-[clamp(10px,2vh,24px)] will-change-transform"
                >
                  {/* Section label */}
                  <motion.span
                    variants={childReveal}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(9px, 1.4vw, 12px)',
                      fontWeight: 700,
                      color: '#976E07',
                      letterSpacing: '0.35em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Atur Cara Majlis
                  </motion.span>

                  {/* Gold ornamental divider */}
                  <motion.div
                    variants={childReveal}
                    style={{
                      width: '40px',
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)',
                    }}
                  />

                  {/* Parents' names */}
                  <motion.div variants={childReveal} className="text-center space-y-1">
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 700,
                        fontSize: 'clamp(14px, 2.2vw, 20px)',
                        color: '#28050B',
                        lineHeight: 1.3,
                      }}
                    >
                      Hj. Ahmad Bin Ibrahim
                    </p>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: 'italic',
                        fontSize: 'clamp(10px, 1.4vw, 12px)',
                        color: 'rgba(40,5,11,0.5)',
                      }}
                    >
                      &amp;
                    </p>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 700,
                        fontSize: 'clamp(14px, 2.2vw, 20px)',
                        color: '#28050B',
                        lineHeight: 1.3,
                      }}
                    >
                      Hjh. Aminah Binti Ali
                    </p>
                  </motion.div>

                  {/* Formal invitation text */}
                  <motion.p
                    variants={childReveal}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontSize: 'clamp(10px, 1.5vw, 13px)',
                      color: '#8B1E31',
                      fontWeight: 500,
                      maxWidth: '380px',
                      lineHeight: 1.6,
                      textAlign: 'center',
                    }}
                  >
                    Dengan segala hormatnya kami menjemput Dato&apos;/Datin/Tuan/Puan/Encik/Cik sekeluarga ke majlis perkahwinan puteri/putera kami
                  </motion.p>

                  {/* Couple names (smaller, supporting role on this page) */}
                  <motion.div variants={childReveal} className="text-center">
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(18px, 4.5vw, 36px)',
                        fontWeight: 700,
                        color: '#28050B',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.15,
                      }}
                    >
                      Alyea Dania <span style={{ color: '#D4AF37', fontWeight: 400 }}>&amp;</span> Amirul Iqhwan
                    </p>
                  </motion.div>

                  {/* Detailed event information card */}
                  <motion.div
                    variants={childReveal}
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      padding: 'clamp(16px, 2.5vh, 28px)',
                      borderRadius: '16px',
                      background: 'rgba(250,249,246,0.92)',
                      border: '1px solid rgba(212,175,55,0.3)',
                      boxShadow: '0 4px 24px rgba(40,5,11,0.06)',
                    }}
                  >
                    {/* Date */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 700,
                        fontSize: 'clamp(14px, 2.2vw, 20px)',
                        color: '#4A0E17',
                        marginBottom: '12px',
                      }}
                    >
                      <Calendar size={16} style={{ color: '#D4AF37' }} />
                      Sabtu, 24 Oktober 2026
                    </div>

                    {/* Time details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '1px solid rgba(212,175,55,0.2)', paddingTop: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: 'clamp(10px, 1.5vw, 12px)', color: '#28050B' }}>
                        <Clock size={13} style={{ color: '#D4AF37', flexShrink: 0 }} />
                        <span style={{ fontWeight: 600 }}>11:00 Pagi – 4:00 Petang</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: 'clamp(10px, 1.5vw, 12px)', color: 'rgba(40,5,11,0.6)' }}>
                        <Heart size={11} style={{ color: '#D4AF37' }} />
                        <span style={{ fontStyle: 'italic' }}>Ketibaan Pengantin: 12:30 Tengah Hari</span>
                      </div>
                    </div>

                    {/* Venue */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        marginTop: '12px',
                        paddingTop: '10px',
                        borderTop: '1px solid rgba(212,175,55,0.2)',
                        fontWeight: 600,
                        fontSize: 'clamp(10px, 1.5vw, 13px)',
                        color: '#28050B',
                      }}
                    >
                      <MapPin size={14} style={{ color: '#D4AF37', flexShrink: 0 }} />
                      <span>Dewan Seri Endon, Presint 10, Putrajaya</span>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* ═══════════════════════════════════════════════════
                  PAGE 3 — DOA, HUBUNGI & LOKASI
                  Blessing → Contact Family → GPS Quick Links
                 ═══════════════════════════════════════════════════ */}
              {currentPage === 3 && (
                <motion.div
                  key="page3"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex flex-col items-center justify-center gap-[clamp(10px,2vh,24px)] will-change-transform"
                >
                  {/* Section label */}
                  <motion.span
                    variants={childReveal}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(9px, 1.4vw, 12px)',
                      fontWeight: 700,
                      color: '#976E07',
                      letterSpacing: '0.35em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Titipan Doa &amp; Perhubungan
                  </motion.span>

                  {/* Gold ornamental divider */}
                  <motion.div
                    variants={childReveal}
                    style={{
                      width: '40px',
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)',
                    }}
                  />

                  {/* Blessing du'a */}
                  <motion.p
                    variants={childReveal}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontSize: 'clamp(11px, 1.6vw, 14px)',
                      color: 'rgba(40,5,11,0.78)',
                      maxWidth: '400px',
                      lineHeight: 1.7,
                      textAlign: 'center',
                    }}
                  >
                    &ldquo;Ya Allah, berkatilah majlis perkahwinan ini. Limpahkanlah baraqah dan rahmat-Mu kepada kedua mempelai, kurniakanlah zuriat yang soleh dan solehah, serta kekalkanlah jodoh mereka hingga ke Jannah.&rdquo;
                  </motion.p>

                  {/* Contact persons */}
                  <motion.div
                    variants={childReveal}
                    style={{ width: '100%', maxWidth: '380px' }}
                  >
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '10px',
                        color: '#976E07',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        textAlign: 'center',
                        marginBottom: '8px',
                      }}
                    >
                      Hubungi Pihak Keluarga
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <a
                        href="https://wa.me/60123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '10px 12px',
                          borderRadius: '12px',
                          background: 'rgba(255,254,250,0.9)',
                          border: '1px solid rgba(212,175,55,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textDecoration: 'none',
                        }}
                      >
                        <div>
                          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '13px', color: '#28050B' }}>
                            Hj. Ahmad
                          </p>
                          <p style={{ fontSize: '10px', color: 'rgba(40,5,11,0.45)', marginTop: '1px' }}>
                            Abah • 012-3456789
                          </p>
                        </div>
                        <Phone size={13} style={{ color: '#D4AF37' }} />
                      </a>
                      <a
                        href="https://wa.me/60198765432"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '10px 12px',
                          borderRadius: '12px',
                          background: 'rgba(255,254,250,0.9)',
                          border: '1px solid rgba(212,175,55,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textDecoration: 'none',
                        }}
                      >
                        <div>
                          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '13px', color: '#28050B' }}>
                            Hjh. Aminah
                          </p>
                          <p style={{ fontSize: '10px', color: 'rgba(40,5,11,0.45)', marginTop: '1px' }}>
                            Ibu • 019-8765432
                          </p>
                        </div>
                        <Phone size={13} style={{ color: '#D4AF37' }} />
                      </a>
                    </div>
                  </motion.div>

                  {/* GPS Quick Access */}
                  <motion.div
                    variants={childReveal}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}
                  >
                    <a
                      href="https://waze.com/ul?q=Dewan%20Seri%20Endon%20Putrajaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '8px 16px',
                        borderRadius: '999px',
                        background: '#28050B',
                        color: '#FFFEFA',
                        fontSize: '11px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        border: '1px solid rgba(212,175,55,0.4)',
                        textDecoration: 'none',
                        boxShadow: '0 2px 8px rgba(40,5,11,0.12)',
                      }}
                    >
                      <MapPin size={12} style={{ color: '#D4AF37' }} />
                      <span>Navigasi Waze</span>
                    </a>
                    <a
                      href="https://maps.google.com/?q=Dewan+Seri+Endon+Presint+10+Putrajaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '8px 16px',
                        borderRadius: '999px',
                        background: '#D4AF37',
                        color: '#28050B',
                        fontSize: '11px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        textDecoration: 'none',
                        boxShadow: '0 2px 8px rgba(212,175,55,0.25)',
                      }}
                    >
                      <MapPin size={12} />
                      <span>Google Maps</span>
                    </a>
                  </motion.div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </IslamicArchCard>
      </motion.div>
    </section>
  );
};
