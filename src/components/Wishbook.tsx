import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import type { WishMessage } from '../types';

interface WishbookProps {
  wishes: WishMessage[];
}

export const Wishbook: React.FC<WishbookProps> = ({ wishes }) => {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <span className="text-gold-600 font-serif text-xs md:text-sm tracking-[0.25em] uppercase font-semibold block">
          Buku Ucapan Tetamu
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950">
          Titipan Doa &amp; Ucapan
        </h2>
        <p className="text-xs text-slate-500 max-w-xs mx-auto">
          Koleksi ucapan dan doa ikhlas daripada rakan-rakan dan sanak saudara
        </p>
      </div>

      <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
        {wishes.length === 0 ? (
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-950 text-gold-300 font-serif font-bold text-xs flex items-center justify-center border border-gold-400/40">
                    {w.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-800 text-sm">
                      {w.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 block">{w.createdAt}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream-100 text-gold-700 border border-gold-300/50">
                  <Heart className="w-3 h-3 text-gold-500 fill-gold-500/20" />
                  <span>{w.attendance === 'hadir' ? 'Hadir' : 'Doa Berkat'}</span>
                </div>
              </div>

              <p className="text-xs text-slate-700 font-sans italic leading-relaxed pt-1 pl-1 border-l-2 border-gold-300">
                &quot;{w.message}&quot;
              </p>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};
