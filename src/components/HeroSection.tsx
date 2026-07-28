import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { BotanicalFrame } from './BotanicalFrame';

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden"
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

      {/* ── Luxury Botanical Frame — sits around the card ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 15,
          overflow: 'hidden',
        }}
      >
        <BotanicalFrame />
      </div>

      {/* ── Outer gold double-border frame lines ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '24px',
          border: '1px solid rgba(212,175,55,0.18)',
          borderRadius: '28px',
          pointerEvents: 'none',
          zIndex: 6,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '32px',
          border: '1px solid rgba(212,175,55,0.1)',
          borderRadius: '22px',
          pointerEvents: 'none',
          zIndex: 6,
        }}
      />

      {/* ── Floating invitation card — all text content lives here ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full mx-auto"
        style={{
          background: 'rgba(255,254,250,0.88)',
          backdropFilter: 'blur(8px)',
          borderRadius: '28px',
          boxShadow: '0 30px 80px rgba(40,5,11,0.08), 0 0 0 1px rgba(212,175,55,0.28)',
          padding: 'clamp(24px, 6vw, 56px)',
        }}
      >
        {/* Inner Islamic Geometric Frame */}
        <div
          style={{
            border: '1px solid rgba(212,175,55,0.4)',
            padding: 'clamp(24px, 5vw, 48px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            position: 'relative',
          }}
        >
          {/* Inner Dashed Frame */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '8px',
              border: '1px dashed rgba(212,175,55,0.4)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Top Mihrab Arch Accent */}
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '24px',
              pointerEvents: 'none',
              zIndex: 1,
            }}
            viewBox="0 0 80 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 12 L 25 12 L 40 2 L 55 12 L 80 12"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeOpacity="0.8"
              fill="rgba(255,254,250,1)"
            />
            <path
              d="M 30 14 L 40 6 L 50 14"
              stroke="#B8860B"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </svg>

          {/* Bottom Mihrab Arch Accent */}
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%) scale(1, -1)',
              width: '80px',
              height: '24px',
              pointerEvents: 'none',
              zIndex: 1,
            }}
            viewBox="0 0 80 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 12 L 25 12 L 40 2 L 55 12 L 80 12"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeOpacity="0.8"
              fill="rgba(255,254,250,1)"
            />
            <path
              d="M 30 14 L 40 6 L 50 14"
              stroke="#B8860B"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </svg>

          {/* 4 Corner Rub el Hizb (8-Pointed Star) Medallions */}
          {(['tl','tr','bl','br'] as const).map((corner) => (
            <div
              key={corner}
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,254,250,1)',
                ...(corner === 'tl' ? { top: -16, left: -16 } : {}),
                ...(corner === 'tr' ? { top: -16, right: -16 } : {}),
                ...(corner === 'bl' ? { bottom: -16, left: -16 } : {}),
                ...(corner === 'br' ? { bottom: -16, right: -16 } : {}),
                zIndex: 2,
              }}
            >
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                {/* 8-pointed star base */}
                <rect x="6" y="6" width="20" height="20" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.8" fill="rgba(255,254,250,1)" />
                <rect x="6" y="6" width="20" height="20" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.8" fill="rgba(255,254,250,1)" transform="rotate(45 16 16)" />
                {/* Inner decorative dot */}
                <circle cx="16" cy="16" r="3" fill="#B8860B" opacity="0.8" />
              </svg>
            </div>
          ))}

          {/* Bismillah */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 'clamp(22px, 5vw, 36px)',
              color: '#B8860B',
              letterSpacing: '0.04em',
            }}
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </motion.div>

          {/* Quran verse */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(11px, 1.8vw, 14px)',
              color: 'rgba(40,5,11,0.75)',
              maxWidth: '420px',
              lineHeight: 1.7,
              textAlign: 'center',
            }}
          >
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya...&rdquo;
            <span
              style={{
                display: 'block',
                marginTop: '6px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: 'normal',
                fontSize: '10px',
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
          <div
            style={{
              width: '80px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)',
            }}
          />

          {/* Walimatulurus heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span
              style={{
                display: 'block',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(11px, 1.8vw, 14px)',
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
                fontSize: 'clamp(9px, 1.5vw, 11px)',
                color: 'rgba(40,5,11,0.65)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginTop: '4px',
              }}
            >
              Majlis Kesyukuran &amp; Perkahwinan
            </h2>
          </motion.div>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ paddingTop: '8px', paddingBottom: '8px' }}
          >
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(36px, 8vw, 68px)',
                fontWeight: 700,
                color: '#28050B',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}
            >
              Alyea Dania
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '12px 0' }}>
              <span style={{ height: '1px', width: '48px', background: 'rgba(212,175,55,0.55)' }} />
              <Heart size={18} style={{ color: '#D4AF37', fill: 'rgba(212,175,55,0.15)' }} />
              <span style={{ height: '1px', width: '48px', background: 'rgba(212,175,55,0.55)' }} />
            </div>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(36px, 8vw, 68px)',
                fontWeight: 700,
                color: '#28050B',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}
            >
              Amirul Ikhwan
            </h1>
          </motion.div>

          {/* Invitation text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', color: 'rgba(40,5,11,0.75)' }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: '#8B1E31',
                fontWeight: 500,
                fontSize: 'clamp(12px, 2vw, 15px)',
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
                marginTop: '4px',
              }}
            >
              Dato&apos;/Datin/Tuan/Puan/Encik/Cik Seisi Keluarga
            </p>
            <p style={{ color: 'rgba(40,5,11,0.45)', fontSize: '11px', marginTop: '2px' }}>
              Ke majlis perkahwinan anakanda kesayangan kami
            </p>
          </motion.div>

          {/* Date & Venue card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              width: '100%',
              maxWidth: '440px',
              padding: 'clamp(16px, 3vw, 24px)',
              borderRadius: '16px',
              background: 'rgba(250,249,246,0.9)',
              border: '1px solid rgba(212,175,55,0.3)',
              boxShadow: '0 4px 20px rgba(40,5,11,0.06)',
              marginTop: '4px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: 'clamp(15px, 2.5vw, 20px)',
                color: '#4A0E17',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(212,175,55,0.25)',
                marginBottom: '12px',
              }}
            >
              <Calendar size={18} style={{ color: '#D4AF37' }} />
              Sabtu, 24 Oktober 2026
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'rgba(40,5,11,0.7)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#28050B', fontSize: 'clamp(11px, 1.8vw, 13px)' }}>
                <MapPin size={15} style={{ color: '#D4AF37', flexShrink: 0 }} />
                <span>Dewan Seri Endon, Presint 10, Putrajaya</span>
              </div>
              <span style={{ fontSize: '11px', color: 'rgba(40,5,11,0.45)' }}>Masa: 11:00 PAGI – 4:00 PETANG</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
