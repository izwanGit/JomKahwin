import React from 'react';
import { Share2, Heart } from 'lucide-react';
import { CoupleMonogram } from './CoupleMonogram';

export const Footer: React.FC = () => {
  const shareText = "Assalamualaikum! Anda dijemput ke Majlis Perkahwinan Alyea Dania & Amirul Iqhwan pada Sabtu, 24 Oktober 2026. Klik pautan untuk maklumat lanjut dan pengesahan kehadiran: " + window.location.href;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Walimatulurus Alyea ❤️ Amirul',
        text: 'Kad Jemputan Digital Majlis Perkahwinan Alyea & Amirul',
        url: window.location.href,
      }).catch(() => {});
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    }
  };

  return (
    <footer className="pt-12 pb-40 md:pb-16 px-4 text-center bg-burgundy-950 text-white relative overflow-hidden border-t border-gold-500/30">
      <div className="max-w-md mx-auto space-y-6 relative z-10">
        <div className="flex justify-center"><CoupleMonogram light /></div>
        
        {/* Share Button */}
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy-900 border border-gold-400/40 text-gold-300 text-xs font-semibold hover:bg-burgundy-800 transition-colors shadow-burgundy-glow"
        >
          <Share2 className="w-4 h-4 text-gold-400" />
          <span>Kongsi Kad Jemputan via WhatsApp</span>
        </button>

        <div className="space-y-1">
          <h3 className="font-serif text-2xl font-bold text-gold-300">
            Alyea <span className="text-gold-500 font-normal">&amp;</span> Amirul
          </h3>
          <p className="text-xs text-burgundy-200/80 font-serif italic">
            #AlyeaAmirul #Walimatulurus #JomKahwin
          </p>
        </div>

        <div className="flex items-center justify-center gap-1 text-[11px] text-gold-300/60 pt-4 border-t border-burgundy-900">
          <span>Direka khas dengan</span>
          <Heart className="w-3 h-3 text-gold-500 fill-gold-500" />
          <span>secara digital</span>
        </div>

      </div>
    </footer>
  );
};
