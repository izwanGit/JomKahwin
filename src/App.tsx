import { useEffect, useState } from 'react';
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
  const [wishes, setWishes] = useState<WishMessage[]>([]);
  const [isWishbookLoading, setIsWishbookLoading] = useState(true);
  const [wishbookError, setWishbookError] = useState('');

  // Parse guest name from URL query parameter if present (?to=Dato+Razak)
  const queryParams = new URLSearchParams(window.location.search);
  const guestName = queryParams.get('to') || queryParams.get('nama') || undefined;

  const handleEnvelopeOpen = () => {
    setIsAudioAutoPlay(true);
    setIsEnvelopeOpen(true);
  };

  const handleAddWish = (newWish: WishMessage) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  const rsvpWebhookUrl =
    (import.meta.env.VITE_RSVP_WEBHOOK_URL as string | undefined) || defaultRsvpWebhookUrl;

  useEffect(() => {
    if (!rsvpWebhookUrl) {
      setWishbookError('Sumber ucapan belum disambungkan.');
      setIsWishbookLoading(false);
      return;
    }

    const callbackName = `jomkahwinWishbook_${Date.now()}`;
    const script = document.createElement('script');
    const callbackStore = window as unknown as Record<string, unknown>;

    const cleanup = () => {
      delete callbackStore[callbackName];
      script.remove();
    };

    const fail = () => {
      cleanup();
      setWishbookError('Ucapan belum dapat dimuatkan sekarang. Cuba semula sebentar lagi.');
      setIsWishbookLoading(false);
    };

    callbackStore[callbackName] = (payload: unknown) => {
      const data = payload as { wishes?: WishMessage[]; result?: string };

      if (data.result === 'success' && Array.isArray(data.wishes)) {
        setWishes(data.wishes);
        setWishbookError('');
      } else {
        setWishbookError('Ucapan belum dapat dimuatkan sekarang. Cuba semula sebentar lagi.');
      }

      setIsWishbookLoading(false);
      cleanup();
    };

    script.src = `${rsvpWebhookUrl}?action=wishes&callback=${callbackName}`;
    script.async = true;
    script.onerror = fail;
    document.body.appendChild(script);

    return () => {
      script.remove();
      // A JSONP response can still arrive after navigation or hot reload.
      // Keep a short-lived no-op callback so that late responses stay harmless.
      callbackStore[callbackName] = () => {};
      window.setTimeout(() => {
        delete callbackStore[callbackName];
      }, 60_000);
    };
  }, [rsvpWebhookUrl]);

  return (
    <div className="romantic-shell min-h-screen bg-cream-100 text-slate-800 relative selection:bg-gold-500 selection:text-white">
      <div aria-hidden="true" className="romantic-vignette" />
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
        <Wishbook wishes={wishes} isLoading={isWishbookLoading} loadError={wishbookError} />
        <SalamKautModal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
