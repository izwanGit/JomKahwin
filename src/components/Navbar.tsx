import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, MapPin, Calendar, CheckCircle2, MessageCircle, Heart } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('utama');

  const navItems: NavItem[] = [
    { id: 'utama', label: 'Utama', icon: Home },
    { id: 'lokasi', label: 'Lokasi', icon: MapPin },
    { id: 'tentatif', label: 'Tentatif', icon: Calendar },
    { id: 'rsvp', label: 'RSVP', icon: CheckCircle2 },
    { id: 'ucapan', label: 'Ucapan', icon: MessageCircle },
  ];

  // Real-time active section tracking via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.15,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -40;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="Navigasi Utama">
      {/* ── DESKTOP & TABLET BOTTOM FLOATING GLASS DOCK ── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-3xl items-center justify-between px-4 py-1.5 rounded-full backdrop-blur-xl bg-[#28050B]/92 border border-[#D4AF37]/45 shadow-[0_12px_36px_rgba(40,5,11,0.45)]"
        style={{ willChange: 'transform' }}
      >
        {/* Brand / Monogram */}
        <button
          onClick={() => scrollToSection('utama')}
          className="flex items-center gap-1.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg px-1.5 py-0.5 transition-all"
        >
          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
            <Heart className="w-3 h-3 fill-[#D4AF37]/30 text-[#D4AF37]" />
          </div>
          <div>
            <span className="font-serif font-bold text-sm text-[#FFFEFA] tracking-wide block leading-none">
              Alyea &amp; Amirul
            </span>
            <span className="text-[9px] text-[#D4AF37] tracking-[0.2em] uppercase font-semibold block mt-0.5">
              Walimatulurus
            </span>
          </div>
        </button>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-0.5 bg-[#FFFEFA]/5 p-0.5 rounded-full border border-[#D4AF37]/25">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-300 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  isActive
                    ? 'text-[#D4AF37] font-semibold'
                    : 'text-[#FFFEFA]/75 hover:text-[#FFFEFA] hover:bg-[#FFFEFA]/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabDesktop"
                    className="absolute inset-0 bg-[#D4AF37]/20 rounded-full border border-[#D4AF37]/60 shadow-[0_0_10px_rgba(212,175,55,0.25)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-3 h-3 relative z-10 ${isActive ? 'text-[#D4AF37]' : 'text-[#FFFEFA]/60'}`} />
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Quick RSVP CTA Button */}
        <button
          onClick={() => scrollToSection('rsvp')}
          className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#28050B] font-bold text-[11px] shadow-[0_4px_12px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFEFA]"
        >
          Hadir RSVP
        </button>
      </motion.div>

      {/* ── MOBILE FLOATING GLASS DOCK (iOS Style) ── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[88%] max-w-[320px] flex items-center justify-around px-2 py-1.5 rounded-full backdrop-blur-2xl bg-[#28050B]/92 border border-[#D4AF37]/45 shadow-[0_10px_28px_rgba(40,5,11,0.45)]"
        style={{ willChange: 'transform' }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              className={`relative flex flex-col items-center justify-center px-2.5 py-1 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                isActive ? 'text-[#D4AF37]' : 'text-[#FFFEFA]/60 hover:text-[#FFFEFA]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabMobile"
                  className="absolute inset-0 bg-[#D4AF37]/25 rounded-full border border-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <Icon className={`w-3.5 h-3.5 relative z-10 transition-transform ${isActive ? 'scale-110 text-[#D4AF37]' : ''}`} />
              <span className={`text-[9px] font-medium mt-0.5 relative z-10 ${isActive ? 'font-bold text-[#FFFEFA]' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </motion.div>
    </nav>
  );
};
