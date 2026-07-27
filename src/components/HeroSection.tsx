import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Background Frame Accent */}
      <div className="absolute inset-4 md:inset-8 border border-gold-500/20 rounded-3xl pointer-events-none" />
      <div className="absolute inset-6 md:inset-10 border border-gold-500/10 rounded-2xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Bismillah Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-arabic text-2xl md:text-3xl text-gold-600 tracking-wider py-2"
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </motion.div>

        {/* Quran Verse / Invitation Motto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xs md:text-sm font-serif italic text-slate-600 max-w-md px-4 leading-relaxed"
        >
          &quot;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya...&quot;
          <span className="block mt-1 font-sans not-italic text-[10px] text-gold-700 tracking-widest uppercase">
            (Surah Ar-Rum: 21)
          </span>
        </motion.p>

        {/* Divider Ornament */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent my-2" />

        {/* Majlis Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="text-gold-600 font-serif text-sm md:text-base tracking-[0.3em] uppercase block font-semibold">
            Walimatulurus
          </span>
          <h2 className="text-slate-800 text-xs md:text-sm uppercase tracking-widest mt-1">
            Majlis Kesyukuran & Perkahwinan
          </h2>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="py-4 space-y-2"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-burgundy-950 tracking-tight leading-tight">
            Fatimah Az-Zahra
          </h1>
          
          <div className="flex items-center justify-center gap-3 my-2">
            <span className="h-[1px] w-12 bg-gold-400" />
            <Heart className="w-5 h-5 text-gold-500 fill-gold-500/20" />
            <span className="h-[1px] w-12 bg-gold-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-burgundy-950 tracking-tight leading-tight">
            Sahrin bin Ahmad
          </h1>
        </motion.div>

        {/* Parents Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xs md:text-sm text-slate-600 font-sans max-w-lg space-y-1 pt-2"
        >
          <p className="font-serif italic text-gold-800 font-medium">
            Dengan penuh rasa kesyukuran ke hadrat Allah SWT, kami:
          </p>
          <p className="font-semibold text-slate-800">
            Hj. Ahmad bin Ismail &amp; Hjh. Aminah binti Hassan
          </p>
          <p className="text-slate-500 text-[11px]">
            Menjemput Dato&apos;/Datin/Tuan/Puan/Encik/Cik seisi keluarga ke majlis perkahwinan anakanda kami
          </p>
        </motion.div>

        {/* Date & Location Pill Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 w-full max-w-md p-6 rounded-2xl bg-white/80 border border-gold-500/30 shadow-card-soft backdrop-blur-sm space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-burgundy-900 font-serif font-bold text-lg border-b border-gold-200 pb-3">
            <Calendar className="w-5 h-5 text-gold-600" />
            <span>Sabtu, 24 Oktober 2026</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-slate-700 text-xs md:text-sm">
            <div className="flex items-center gap-1.5 font-medium text-emerald-950">
              <MapPin className="w-4 h-4 text-gold-600" />
              <span>Dewan Seri Endon, Presint 10, Putrajaya</span>
            </div>
            <span className="text-[11px] text-slate-500">Masa: 11:00 PAGI - 4:00 PETANG</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
