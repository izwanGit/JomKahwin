import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Utensils, Heart, Camera, DoorClosed } from 'lucide-react';
import type { EventScheduleItem } from '../types';

export const ScheduleTimeline: React.FC = () => {
  const scheduleItems: EventScheduleItem[] = [
    {
      time: '11:00 PAGI',
      title: 'Ketibaan Tetamu Jemputan',
      description: 'Selamat datang ke Dewan Seri Endon. Jamuan makan bermula.',
    },
    {
      time: '12:30 TENGAH HARI',
      title: 'Ketibaan Pasangan Pengantin',
      description: 'Arak-arakan kompang dan ketibaan mempelai di pintu utama.',
    },
    {
      time: '01:00 PETANG',
      title: 'Makan Beradab & Bersanding',
      description: 'Upacara makan beradab di pentas utama bersama keluarga.',
    },
    {
      time: '02:30 PETANG',
      title: 'Upacara Potong Kek & Bergambar',
      description: 'Sesi ramah mesra dan bergambar bersama para tetamu.',
    },
    {
      time: '04:00 PETANG',
      title: 'Majlis Bersurai',
      description: 'Ucapan terima kasih daripada pihak keluarga pengantin.',
    },
  ];

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Clock className="w-4 h-4 text-emerald-800" />;
      case 1:
        return <Heart className="w-4 h-4 text-emerald-800" />;
      case 2:
        return <Utensils className="w-4 h-4 text-emerald-800" />;
      case 3:
        return <Camera className="w-4 h-4 text-emerald-800" />;
      default:
        return <DoorClosed className="w-4 h-4 text-emerald-800" />;
    }
  };

  return (
    <section id="tentatif" className="py-16 px-4 max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <span className="text-gold-600 font-serif text-xs md:text-sm tracking-[0.25em] uppercase font-semibold block">
          Tentatif Majlis
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950">
          Atur Cara Majlis
        </h2>
      </div>

      <div className="relative pl-6 md:pl-8 border-l-2 border-gold-300/60 space-y-8 ml-4 md:ml-12">
        {scheduleItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1 w-8 h-8 rounded-full bg-cream-100 border-2 border-gold-500 flex items-center justify-center shadow-md group-hover:bg-gold-500 group-hover:text-emerald-950 transition-colors">
              {getIcon(idx)}
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gold-300/30 shadow-card-soft space-y-1">
              <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-950 text-gold-300 text-[10px] font-mono tracking-widest font-bold mb-1">
                {item.time}
              </span>
              <h3 className="text-lg font-serif font-bold text-emerald-950">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
