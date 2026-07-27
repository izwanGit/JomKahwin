import { useState } from 'react';
import { EnvelopeModal } from './components/EnvelopeModal';
import { FloatingPetals } from './components/FloatingPetals';
import { MusicPlayer } from './components/MusicPlayer';
import { HeroSection } from './components/HeroSection';
import { CountdownTimer } from './components/CountdownTimer';
import { EventDetails } from './components/EventDetails';
import { ScheduleTimeline } from './components/ScheduleTimeline';
import { RsvpForm } from './components/RsvpForm';
import { Wishbook } from './components/Wishbook';
import { SalamKautModal } from './components/SalamKautModal';
import { Footer } from './components/Footer';
import type { WishMessage } from './types';

export function App() {
  const [isAudioAutoPlay, setIsAudioAutoPlay] = useState(false);

  // Parse guest name from URL query parameter if present (?to=Dato+Razak)
  const queryParams = new URLSearchParams(window.location.search);
  const guestName = queryParams.get('to') || queryParams.get('nama') || undefined;

  // Initial guestbook wishes
  const [wishes, setWishes] = useState<WishMessage[]>([
    {
      id: '1',
      name: 'Dr. Hakimi & Keluarga',
      message: 'Tahniah Alyea & Amirul! Semoga mahligai yang dibina sentiasa diberkati Allah SWT hingga ke anak cucu.',
      createdAt: 'Semalam',
      attendance: 'hadir',
    },
    {
      id: '2',
      name: 'Siti Sarah (Rakan UPM)',
      message: 'Barakallahulakuma wa baraka alaika wa jamaa bainakuma fii khair! Cantik sangat pasangan pengantin.',
      createdAt: '2 jam yang lalu',
      attendance: 'hadir',
    },
    {
      id: '3',
      name: 'Amirul & Isteri',
      message: 'Selamat Pengantin Baru bro Amirul & Alyea! Semoga kekal bahagia hingga ke syurga.',
      createdAt: '30 minit yang lalu',
      attendance: 'hadir',
    },
  ]);

  const handleEnvelopeOpen = () => {
    setIsAudioAutoPlay(true);
  };

  const handleAddWish = (newWish: WishMessage) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  return (
    <div className="min-h-screen bg-cream-100 text-slate-800 relative selection:bg-gold-500 selection:text-white">
      {/* 3D Interactive Opening Envelope */}
      <EnvelopeModal onOpen={handleEnvelopeOpen} guestName={guestName} />

      {/* 60fps Floating Petals & Gold Dust Canvas */}
      <FloatingPetals />

      {/* Floating Acoustic Music Player */}
      <MusicPlayer autoPlay={isAudioAutoPlay} />

      {/* Main Page Layout */}
      <main className="relative z-10 space-y-8 pb-12">
        <HeroSection />
        <CountdownTimer />
        <EventDetails />
        <ScheduleTimeline />
        <RsvpForm onAddWish={handleAddWish} />
        <Wishbook wishes={wishes} />
        <SalamKautModal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
