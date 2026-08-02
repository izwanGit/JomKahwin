import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Copy, Check, X, Landmark } from 'lucide-react';

export const SalamKautModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const bankAcc = '12029020481982';
  const bankName = 'Bank Islam Malaysia Berhad';
  const accHolder = 'Alyea Dania binti Ahmad';

  const handleCopy = () => {
    navigator.clipboard.writeText(bankAcc);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Trigger Button Section */}
      <section className="py-8 px-4 text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-emerald-950 font-serif font-bold text-sm shadow-gold-glow hover:scale-105 transition-all duration-300 focus:outline-none"
        >
          <Gift className="w-5 h-5 text-emerald-950 group-hover:rotate-12 transition-transform" />
          <span>Salam Kaut / Hadiah Digital</span>
        </button>
      </section>

      {/* Modal Backdrop & Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm p-6 rounded-3xl bg-white border border-gold-500/40 shadow-2xl text-center space-y-5"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1 pt-2">
                <span className="text-gold-600 font-serif text-xs tracking-widest uppercase font-semibold block">
                  Salam Kaut
                </span>
                <h3 className="text-2xl font-serif font-bold text-emerald-950">
                  Hadiah &amp; Ingatan Tulus
                </h3>
                <p className="text-[11px] text-slate-500 px-2">
                  Bagi tetamu yang ingin menitipkan hadiah secara digital buat pasangan pengantin
                </p>
              </div>

              {/* Bank transfer details. A decorative QR icon must not be presented as scannable. */}
              <div className="p-4 rounded-2xl bg-cream-100 border border-gold-300/50 flex flex-col items-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-burgundy-950 border border-gold-500/50 shadow-burgundy-glow flex items-center justify-center">
                  <Landmark className="w-7 h-7 text-gold-300" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-700">Pindahan Bank</span>

                <div className="space-y-0.5 text-xs">
                  <span className="font-semibold text-emerald-950 block">{bankName}</span>
                  <span className="text-slate-500 text-[11px] block">{accHolder}</span>
                </div>

                <div className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-800">
                  <span>{bankAcc}</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-lg bg-emerald-950 text-gold-300 hover:bg-emerald-900 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-gold-400" /> Disalin!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-gold-400" /> Salin Akaun
                      </>
                    )}
                  </button>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 italic">
                Semoga Allah SWT membalas segala kebaikan dan murah rezeki buat anda.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
