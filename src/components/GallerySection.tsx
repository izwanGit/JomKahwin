import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images: GalleryImage[] = [
    { id: 1, src: '/gallery/couple-photo-1.jpg', alt: 'Alyea Dania & Amirul Iqhwan', caption: 'Mahligai Cinta Alyea & Amirul' },
    { id: 2, src: '/gallery/couple-photo-2.jpg', alt: 'Alyea Dania & Amirul Iqhwan', caption: 'Kenangan Indah Bersama' },
    { id: 3, src: '/gallery/couple-photo-3.jpg', alt: 'Alyea Dania & Amirul Iqhwan', caption: 'Saat Manis Berdua' },
    { id: 4, src: '/gallery/couple-photo-4.jpg', alt: 'Alyea Dania & Amirul Iqhwan', caption: 'Janji Suci Dua Hati' },
    { id: 5, src: '/gallery/couple-photo-5.jpg', alt: 'Alyea Dania & Amirul Iqhwan', caption: 'Titian Kasih Mempelai' },
    { id: 6, src: '/gallery/couple-photo-6.jpg', alt: 'Alyea Dania & Amirul Iqhwan', caption: 'Senyuman Bahagia' },
    { id: 7, src: '/gallery/couple-photo-7.jpg', alt: 'Alyea Dania & Amirul Iqhwan', caption: 'Semarak Cinta Abadi' },
    { id: 8, src: '/gallery/couple-photo-8.jpg', alt: 'Alyea Dania & Amirul Iqhwan', caption: 'Momen Terindah' },
    { id: 9, src: '/gallery/couple-photo-9.jpg', alt: 'Alyea Dania & Amirul Iqhwan', caption: 'Menuju Hari Bahagia' },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="galeri" className="py-16 px-4 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-2"
      >
        <span className="text-gold-600 font-serif text-xs md:text-sm tracking-[0.25em] uppercase font-semibold block">
          Galeri Memori
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-950 flex items-center justify-center gap-2">
          <Camera className="w-6 h-6 text-gold-500" />
          <span>Potret Bahagia</span>
        </h2>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          Setiap gambar menyimpan kisah cinta dan persediaan indah Alyea &amp; Amirul
        </p>
      </motion.div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gold-400/30 cursor-pointer bg-white"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              loading="lazy"
            />
            {/* Hover overlay with heart icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
              <div className="flex items-center gap-1.5 text-xs font-serif font-semibold text-gold-200">
                <Heart size={12} className="text-gold-400 fill-gold-400" />
                <span>{img.caption}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Tutup Galeri"
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Gambar Sebelumnya"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Gambar Seterusnya"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Lightbox Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden border border-gold-400/40 shadow-2xl bg-black"
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-h-[80vh] w-auto max-w-full object-contain mx-auto"
              />
              <div className="p-3 bg-burgundy-950/90 text-center border-t border-gold-400/30">
                <p className="font-serif text-sm text-gold-200 font-semibold">
                  {images[selectedIndex].caption}
                </p>
                <span className="text-[10px] text-slate-400">
                  {selectedIndex + 1} daripada {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
