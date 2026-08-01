import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date('2026-10-24T11:00:00+08:00').getTime();

const calculateTimeLeft = (): TimeLeft => {
  const difference = TARGET_DATE - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
};

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'HARI', value: timeLeft.days },
    { label: 'JAM', value: timeLeft.hours },
    { label: 'MINIT', value: timeLeft.minutes },
    { label: 'SAAT', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 px-4 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white shadow-emerald-glow border border-gold-500/40 relative overflow-hidden"
      >
        {/* Background Islamic Pattern Accent */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 text-gold-300 font-serif text-xs md:text-sm tracking-[0.25em] uppercase mb-6 font-semibold">
            <Clock className="w-4 h-4 text-gold-400" />
            <span>Menghitung Hari Majlis</span>
          </div>

          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-md">
            {timeBlocks.map((block, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-emerald-900/80 border border-gold-500/30 backdrop-blur-md shadow-lg"
              >
                <span className="text-2xl sm:text-4xl font-serif font-bold text-gold-300 font-mono tracking-tight">
                  {String(block.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[11px] font-sans font-semibold text-emerald-200 tracking-widest mt-1 uppercase">
                  {block.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gold-200/80 font-serif italic mt-6">
            Sabtu, 24 Oktober 2026 • 13 Rabiulakhir 1448H
          </p>
        </div>
      </motion.div>
    </section>
  );
};
