import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import type { WishMessage } from '../types';

interface WishbookProps {
  wishes: WishMessage[];
  isLoading?: boolean;
  loadError?: string;
}

export const Wishbook: React.FC<WishbookProps> = ({ wishes, isLoading = false, loadError = '' }) => {
  return (
    <section id="ucapan" className="py-16 px-4 max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-2"
      >
        <span className="text-gold-600 font-serif text-xs md:text-sm tracking-[0.25em] uppercase font-semibold block">
          Buku Ucapan Tetamu
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950">
          Titipan Doa &amp; Ucapan
        </h2>
        <p className="text-xs text-slate-500 max-w-xs mx-auto">
          Koleksi ucapan dan doa ikhlas daripada rakan-rakan dan sanak saudara
        </p>
      </motion.div>

      <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
        {isLoading ? (
          <div className="text-center py-8 text-slate-400 text-xs italic">
            Sedang memuatkan titipan ucapan...
          </div>
        ) : loadError ? (
          <div className="text-center py-8 text-red-500 text-xs italic">
            {loadError}
          </div>
        ) : wishes.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs italic">
            Belum ada ucapan. Jadilah yang pertama menitipkan doa!
          </div>
        ) : (
          wishes.map((w) => (
            <motion.div
              key={w.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-white border border-gold-300/40 shadow-card-soft space-y-2 relative overflow-hidden"
            >
              <div className="flex min-w-0 items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-emerald-950 font-serif text-xs font-bold text-gold-300">
                    {w.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h4 className="break-words font-serif text-sm font-bold leading-tight text-slate-800">
                      {w.name}
                    </h4>
                    <span className="block text-[10px] leading-tight text-slate-400">{w.createdAt}</span>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-gold-300/50 bg-cream-100 px-2 py-1 text-[10px] font-semibold text-gold-700 sm:px-2.5">
                  <Heart className="w-3 h-3 text-gold-500 fill-gold-500/20" />
                  <span>{w.attendance === 'hadir' ? 'Hadir' : 'Doa Berkat'}</span>
                </div>
              </div>

              <p className="break-words border-l-2 border-gold-300 pt-1 pl-1 font-sans text-xs italic leading-relaxed text-slate-700 [overflow-wrap:anywhere]">
                &quot;{w.message}&quot;
              </p>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};
