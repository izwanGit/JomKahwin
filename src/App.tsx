import { useState } from 'react';
import { EnvelopeModal } from './components/EnvelopeModal';
import { FloatingPetals } from './components/FloatingPetals';
import { FloatingButterflies } from './components/FloatingButterflies';
import { MusicPlayer } from './components/MusicPlayer';
import { Navbar } from './components/Navbar';
import { ThreePageStoryCard } from './components/ThreePageStoryCard';
import { CountdownTimer } from './components/CountdownTimer';
import { EventDetails } from './components/EventDetails';
import { ScheduleTimeline } from './components/ScheduleTimeline';
import { RsvpForm } from './components/RsvpForm';
import { Wishbook } from './components/Wishbook';
import { SalamKautModal } from './components/SalamKautModal';
import { Footer } from './components/Footer';
import type { WishMessage } from './types';

export function App() {
  const defaultRsvpWebhookUrl =
    'https://script.google.com/macros/s/AKfycby3LEl3e0GklItH0PVcqQY8X2AXsY_dBcrRkCqDv3xFlEvLrpFbnS582HTYnG5hNuZdrw/exec';
  const [isAudioAutoPlay, setIsAudioAutoPlay] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

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
    setIsEnvelopeOpen(true);
  };

  const handleAddWish = (newWish: WishMessage) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  const rsvpWebhookUrl =
    (import.meta.env.VITE_RSVP_WEBHOOK_URL as string | undefined) || defaultRsvpWebhookUrl;

  return (
    <div className="min-h-screen bg-cream-100 text-slate-800 relative selection:bg-gold-500 selection:text-white">
      {/* 3D Interactive Opening Envelope */}
      <EnvelopeModal onOpen={handleEnvelopeOpen} guestName={guestName} />

      {/* Flagship Responsive Floating Navigation Bar */}
      {isEnvelopeOpen && <Navbar />}

      {/* 60fps Floating Petals & Gold Dust Canvas */}
      {isEnvelopeOpen && <FloatingPetals />}

      {/* Floating Alive Butterflies */}
      {isEnvelopeOpen && <FloatingButterflies />}

      {/* Floating Acoustic Music Player */}
      {isEnvelopeOpen && <MusicPlayer autoPlay={isAudioAutoPlay} />}

      {/* Main Page Layout */}
      <main className="invitation-content relative z-10 space-y-8 pb-12 overflow-x-hidden w-full max-w-full">
        <ThreePageStoryCard isOpened={isEnvelopeOpen} />
        <CountdownTimer />
        <EventDetails />
        <ScheduleTimeline />
        <RsvpForm onAddWish={handleAddWish} webhookUrl={rsvpWebhookUrl} />
        <Wishbook wishes={wishes} />
        <SalamKautModal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
