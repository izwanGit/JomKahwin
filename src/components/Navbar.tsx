import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Home, MapPin, Calendar, CheckCircle2, MessageCircle, Heart } from 'lucide-react';
import { getRouteHref, type PageId } from '../routes';

interface NavItem {
  id: PageId;
  label: string;
  icon: React.ElementType;
}

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'utama', label: 'Utama', icon: Home },
  { id: 'lokasi', label: 'Lokasi', icon: MapPin },
  { id: 'tentatif', label: 'Tentatif', icon: Calendar },
  { id: 'rsvp', label: 'RSVP', icon: CheckCircle2 },
  { id: 'ucapan', label: 'Ucapan', icon: MessageCircle },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, page: PageId) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    onNavigate(page);
  };

  const entranceProps = shouldReduceMotion
    ? { initial: false as const }
    : { initial: { y: 80, opacity: 0 } };

  return (
    <nav aria-label="Navigasi Utama">
      {/* ── DESKTOP & TABLET BOTTOM FLOATING GLASS DOCK ── */}
      <motion.div
        {...entranceProps}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-3xl items-center justify-between px-4 py-1.5 rounded-full backdrop-blur-xl bg-[#26331C]/94 border border-[#9db14c]/55 shadow-[0_12px_36px_rgba(38,51,28,0.36)]"
        style={{ willChange: 'transform' }}
      >
        {/* Brand / Monogram */}
        <a
          href={getRouteHref('utama')}
          onClick={(event) => handleNavigation(event, 'utama')}
          aria-label="Ke halaman utama"
          className="flex items-center gap-1.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b1c5] rounded-lg px-1.5 py-0.5 transition-all"
        >
          <div className="w-6 h-6 rounded-full bg-[#d95d83]/15 border border-[#f5b1c5]/70 flex items-center justify-center text-[#f5b1c5] group-hover:scale-110 transition-transform">
            <Heart className="w-3 h-3 fill-[#d95d83]/40 text-[#f5b1c5]" />
          </div>
          <div>
            <span className="font-serif font-bold text-sm text-[#FFFEFA] tracking-wide block leading-none">
              Amirul &amp; Alyea
            </span>
            <span className="text-[9px] text-[#c8d771] tracking-[0.2em] uppercase font-semibold block mt-0.5">
              Walimatulurus
            </span>
          </div>
        </a>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-0.5 bg-[#FFFEFA]/7 p-0.5 rounded-full border border-[#9db14c]/35">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={getRouteHref(item.id)}
                onClick={(event) => handleNavigation(event, item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-300 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b1c5] ${
                  isActive
                    ? 'text-[#f5b1c5] font-semibold'
                    : 'text-[#FFFEFA]/75 hover:text-[#FFFEFA] hover:bg-[#FFFEFA]/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabDesktop"
                    className="absolute inset-0 bg-[#d95d83]/20 rounded-full border border-[#f5b1c5]/65 shadow-[0_0_10px_rgba(217,93,131,0.24)]"
                    transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-3 h-3 relative z-10 ${isActive ? 'text-[#f5b1c5]' : 'text-[#FFFEFA]/60'}`} />
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Quick RSVP CTA Button */}
        <a
          href={getRouteHref('rsvp')}
          onClick={(event) => handleNavigation(event, 'rsvp')}
          className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#F7D76A] to-[#F2C94C] text-[#26331C] font-bold text-[11px] shadow-[0_4px_12px_rgba(242,201,76,0.28)] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFEFA]"
        >
          Hadir RSVP
        </a>
      </motion.div>

      {/* ── MOBILE FLOATING GLASS DOCK (iOS Style) ── */}
      <motion.div
        {...entranceProps}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[88%] max-w-[320px] flex items-center justify-around px-2 py-1.5 rounded-full backdrop-blur-2xl bg-[#26331C]/94 border border-[#9db14c]/55 shadow-[0_10px_28px_rgba(38,51,28,0.36)]"
        style={{ willChange: 'transform' }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activePage === item.id;
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={getRouteHref(item.id)}
              onClick={(event) => handleNavigation(event, item.id)}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
              className={`relative flex flex-col items-center justify-center px-2.5 py-1 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b1c5] ${
                isActive ? 'text-[#f5b1c5]' : 'text-[#FFFEFA]/60 hover:text-[#FFFEFA]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabMobile"
                  className="absolute inset-0 bg-[#d95d83]/20 rounded-full border border-[#f5b1c5]/65 shadow-[0_0_8px_rgba(217,93,131,0.24)]"
                  transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <Icon className={`w-3.5 h-3.5 relative z-10 transition-transform ${isActive ? 'scale-110 text-[#f5b1c5]' : ''}`} />
              <span className={`text-[9px] font-medium mt-0.5 relative z-10 ${isActive ? 'font-bold text-[#FFFEFA]' : ''}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </motion.div>
    </nav>
  );
};
