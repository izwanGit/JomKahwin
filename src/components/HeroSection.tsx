import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { BotanicalFrame } from './BotanicalFrame';
import { IslamicArchCard } from './IslamicArchCard';

export const HeroSection: React.FC = () => {
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

      {/* ── Floating Islamic Arch Card Container ── */}
      <div className="relative z-10 w-full max-w-xl mx-auto py-4">
        {/* Botanical frame anchored directly around the card corners */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
          <BotanicalFrame />
        </div>

        <IslamicArchCard>
          
          {/* Bismillah */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: 'clamp(18px, 4vw, 36px)',
              color: '#B8860B',
              letterSpacing: '0.04em',
              marginTop: '0px',
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
          <div
            style={{
              width: '60px',
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ paddingTop: '4px', paddingBottom: '4px' }}
          >
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(30px, 7vw, 68px)',
                fontWeight: 700,
                color: '#28050B',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
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
                fontSize: 'clamp(30px, 7vw, 68px)',
                fontWeight: 700,
                color: '#28050B',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}
            >
              Amirul Iqhwan
            </h1>
          </motion.div>

          {/* Invitation text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
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
          
        </IslamicArchCard>
      </div>
    </section>
  );
};
