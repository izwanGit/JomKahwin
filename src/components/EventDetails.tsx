import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar as CalendarIcon, Phone, ExternalLink } from 'lucide-react';
import type { ContactPerson } from '../types';

export const EventDetails: React.FC = () => {
  // Placeholder contact details: replace after client confirmation.
  const contacts: ContactPerson[] = [
    { role: 'Bapa Pengantin Perempuan', name: 'Daini Dzulkarnain', phone: '60198765432', relation: 'Bapa' },
    { role: 'Bapa Pengantin Lelaki', name: 'Mohd Zahir', phone: '60143140182', relation: 'Bapa' },
    { role: 'Abang Pengantin Perempuan', name: 'Syahmi', phone: '60111223344', relation: 'Abang' },
  ];
  const wazeUrl = 'https://waze.com/ul?q=Jiwa%20Damansara%20Petaling%20Jaya';
  const googleMapsUrl = 'https://maps.google.com/?q=Jiwa+Damansara+Block+C+Neo+Damansara+Petaling+Jaya';
  const googleCalendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Walimatulurus+Alyea+%26+Amirul&dates=20261024T030000Z/20261024T080000Z&details=Majlis+Perkahwinan+Alyea+Dania+%26+Amirul+Iqhwan.&location=Jiwa+Damansara,+Block+C,+Neo+Damansara,+Jalan+PJU+8/1,+Damansara+Perdana,+47820+Petaling+Jaya,+Selangor';

  const formatPhoneNumber = (phone: string) => {
    const localNumber = phone.replace(/^60/, '0');
    return `${localNumber.slice(0, 3)}-${localNumber.slice(3, 6)} ${localNumber.slice(6)}`;
  };

  return (
    <section id="lokasi" className="py-16 px-4 max-w-4xl mx-auto space-y-12">
      
      {/* Venue Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-3"
      >
        <span className="text-gold-600 font-serif text-xs md:text-sm tracking-[0.25em] uppercase font-semibold block">
          Lokasi Majlis
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-950">
          Jiwa Damansara
        </h2>
        <p className="text-slate-600 text-xs md:text-sm max-w-md mx-auto">
          Block C, Neo Damansara, Jalan PJU 8/1, Damansara Perdana, 47820 Petaling Jaya, Selangor
        </p>
      </motion.div>

      {/* Map Viewer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-card-soft border border-gold-500/30 bg-white p-1.5"
      >
        <div className="w-full rounded-xl overflow-hidden bg-cream-50">
          <iframe
            className="w-full h-[180px] sm:h-[350px]"
            style={{ border: 0, display: 'block' }}
            src="https://maps.google.com/maps?q=Jiwa%20Damansara,%20Neo%20Damansara,%20Petaling%20Jaya&t=&z=16&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi - Jiwa Damansara"
          />
        </div>
      </motion.div>

      {/* Navigation Buttons Card Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-3 gap-2 sm:gap-4"
      >
        <a
          href={wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-3 sm:p-6 rounded-2xl bg-white border border-gold-500/30 shadow-card-soft hover:shadow-gold-glow hover:border-gold-500 transition-all duration-300 text-center"
        >
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-800 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
            <Navigation className="w-4 h-4 sm:w-6 sm:h-6 text-burgundy-700" />
          </div>
          <span className="font-serif font-bold text-slate-800 text-xs sm:text-sm">Waze</span>
          <span className="text-[9px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 flex items-center gap-0.5 sm:gap-1">
            Pandu Navigasi <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-600" />
          </span>
        </a>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-3 sm:p-6 rounded-2xl bg-white border border-gold-500/30 shadow-card-soft hover:shadow-gold-glow hover:border-gold-500 transition-all duration-300 text-center"
        >
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-800 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
            <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-burgundy-700" />
          </div>
          <span className="font-serif font-bold text-slate-800 text-xs sm:text-sm">Google Maps</span>
          <span className="text-[9px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 flex items-center gap-0.5 sm:gap-1">
            Peta Lokasi <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-600" />
          </span>
        </a>

        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-3 sm:p-6 rounded-2xl bg-white border border-gold-500/30 shadow-card-soft hover:shadow-gold-glow hover:border-gold-500 transition-all duration-300 text-center"
        >
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-800 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
            <CalendarIcon className="w-4 h-4 sm:w-6 sm:h-6 text-burgundy-700" />
          </div>
          <span className="font-serif font-bold text-slate-800 text-xs sm:text-sm truncate max-w-full px-1">Kalendar</span>
          <span className="text-[9px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 flex items-center gap-0.5 sm:gap-1">
            Tambah <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-600" />
          </span>
        </a>
      </motion.div>

      {/* Placeholder family contacts — replace after client confirmation. */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="p-8 rounded-3xl bg-white border border-gold-500/30 shadow-card-soft space-y-6"
      >
        <div className="text-center space-y-1">
          <h3 className="text-xl font-serif font-bold text-burgundy-950">Hubungi Tuan Rumah</h3>
          <p className="text-xs text-slate-500">Sila hubungi kami jika terdapat sebarang pertanyaan mengenai majlis</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {contacts.map((contact) => (
            <a
              key={contact.phone}
              href={`https://wa.me/${contact.phone}?text=Assalamualaikum%20${encodeURIComponent(contact.name)},%20saya%20ingin%20bertanya%20mengenai%20majlis%20Alyea%20%26%20Amirul.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-cream-100/70 border border-gold-300/40 hover:bg-burgundy-900 hover:text-white group transition-all duration-300"
            >
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-600 group-hover:text-gold-300 block">{contact.role}</span>
                <span className="block break-words text-sm font-semibold text-slate-800 group-hover:text-white">{contact.name}</span>
                <span className="mt-0.5 block whitespace-nowrap text-xs font-medium tabular-nums text-slate-500 group-hover:text-cream-100">
                  {formatPhoneNumber(contact.phone)}
                </span>
              </div>
              <div className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-burgundy-100 text-burgundy-800 transition-colors group-hover:bg-gold-500 group-hover:text-burgundy-950">
                <Phone className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </motion.div>

    </section>
  );
};
