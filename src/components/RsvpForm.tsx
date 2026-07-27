import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send, Users, User, Phone, MessageSquareHeart } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { RsvpFormState, WishMessage } from '../types';

interface RsvpFormProps {
  onAddWish?: (wish: WishMessage) => void;
  webhookUrl?: string;
}

export const RsvpForm: React.FC<RsvpFormProps> = ({ onAddWish, webhookUrl }) => {
  const [formData, setFormData] = useState<RsvpFormState>({
    name: '',
    phone: '',
    attendance: 'hadir',
    pax: 2,
    wishes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);

    // Build Payload
    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
    } catch {
      // Fallback gracefully
    }

    // Add wish to live local feed
    if (formData.wishes.trim() && onAddWish) {
      onAddWish({
        id: Date.now().toString(),
        name: formData.name,
        message: formData.wishes,
        createdAt: 'Baru sahaja',
        attendance: formData.attendance,
      });
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    if (formData.attendance === 'hadir') {
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      } catch {
        // Fallback
      }
    }
  };

  return (
    <section id="rsvp" className="py-16 px-4 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 md:p-10 rounded-3xl bg-white border border-gold-500/30 shadow-card-soft space-y-6"
      >
        <div className="text-center space-y-2">
          <span className="text-gold-600 font-serif text-xs md:text-sm tracking-[0.25em] uppercase font-semibold block">
            Pengesahan Kehadiran
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950">
            Borang Kehadiran (RSVP)
          </h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Sila sahkan kehadiran anda sebelum <span className="font-semibold text-slate-700">10 Oktober 2026</span> bagi memudahkan urusan jamuan.
          </p>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-emerald-900 text-white text-center space-y-3 shadow-emerald-glow border border-gold-400/40"
          >
            <CheckCircle2 className="w-12 h-12 text-gold-400 mx-auto" />
            <h3 className="text-xl font-serif font-bold text-gold-200">
              Terima Kasih, {formData.name}!
            </h3>
            <p className="text-xs text-emerald-100 max-w-xs mx-auto leading-relaxed">
              {formData.attendance === 'hadir'
                ? `Pengesahan kehadiran anda (${formData.pax} Pax) telah berjaya direkodkan. Jumpa anda di majlis kelak!`
                : 'Terima kasih atas maklum balas dan doa anda buat pasangan pengantin.'}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-6 py-2 rounded-full bg-emerald-800 text-gold-300 text-xs font-semibold hover:bg-emerald-700 transition-colors"
            >
              Kemaskini Borang
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gold-600" /> Nama Penuh <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="cth. Encik Ahmad Bin Razak"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 text-sm outline-none transition-all"
              />
            </div>

            {/* Nombor Telefon */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold-600" /> Nombor Telefon / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="cth. 0123456789"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 text-sm outline-none transition-all"
              />
            </div>

            {/* Status Kehadiran */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Status Kehadiran <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendance: 'hadir' })}
                  className={`py-3 px-4 rounded-xl border text-xs font-semibold transition-all ${
                    formData.attendance === 'hadir'
                      ? 'bg-emerald-950 text-gold-300 border-gold-500 shadow-md'
                      : 'bg-cream-50 text-slate-700 border-slate-200 hover:bg-cream-100'
                  }`}
                >
                  Hadir
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendance: 'tidak_hadir' })}
                  className={`py-3 px-4 rounded-xl border text-xs font-semibold transition-all ${
                    formData.attendance === 'tidak_hadir'
                      ? 'bg-slate-800 text-white border-slate-700 shadow-md'
                      : 'bg-cream-50 text-slate-700 border-slate-200 hover:bg-cream-100'
                  }`}
                >
                  Tidak Hadir
                </button>
              </div>
            </div>

            {/* Bilangan Pax (Jika Hadir) */}
            {formData.attendance === 'hadir' && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-gold-600" /> Bilangan Pax (Termasuk Anda)
                </label>
                <select
                  value={formData.pax}
                  onChange={(e) => setFormData({ ...formData, pax: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 text-sm outline-none transition-all bg-white"
                >
                  <option value={1}>1 Pax</option>
                  <option value={2}>2 Pax</option>
                  <option value={3}>3 Pax</option>
                  <option value={4}>4 Pax</option>
                  <option value={5}>5 Pax (+ Keluarga)</option>
                </select>
              </motion.div>
            )}

            {/* Ucapan & Doa */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MessageSquareHeart className="w-3.5 h-3.5 text-gold-600" /> Ucapan &amp; Doa Buat Mempelai
              </label>
              <textarea
                rows={3}
                placeholder="Titipkan ucapan selamat dan doa keberkatan buat Fatimah & Sahrin..."
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 text-sm outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-gold-300 font-serif font-bold tracking-wider text-sm shadow-emerald-glow border border-gold-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-gold-400" />
              <span>{isSubmitting ? 'Hantar Data...' : 'Hantar Pengesahan Kehadiran'}</span>
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};
