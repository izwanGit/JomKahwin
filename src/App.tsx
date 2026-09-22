import { useEffect, useState } from 'react';
import { EnvelopeModal } from './components/EnvelopeModal';
import { RomanticOverlay } from './components/RomanticOverlay';
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
import { getPageFromPath, getRoute, getRouteHref, type PageId } from './routes';

const INVITATION_OPEN_KEY = 'jomkahwin-invitation-open';

export function App() {
  const defaultRsvpWebhookUrl =
    'https://script.google.com/macros/s/AKfycby3LEl3e0GklItH0PVcqQY8X2AXsY_dBcrRkCqDv3xFlEvLrpFbnS582HTYnG5hNuZdrw/exec';
  const [isAudioAutoPlay, setIsAudioAutoPlay] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(() => {
    try {
      return window.sessionStorage.getItem(INVITATION_OPEN_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [activePage, setActivePage] = useState<PageId>(() => getPageFromPath(window.location.pathname));
  const [wishes, setWishes] = useState<WishMessage[]>([]);
  const [isWishbookLoading, setIsWishbookLoading] = useState(true);
  const [wishbookError, setWishbookError] = useState('');

  // Parse guest name from URL query parameter if present (?to=Dato+Razak)
  const queryParams = new URLSearchParams(window.location.search);
  const guestName = queryParams.get('to') || queryParams.get('nama') || undefined;

  const handleEnvelopeOpen = () => {
    setIsAudioAutoPlay(true);
    setIsEnvelopeOpen(true);

    try {
      window.sessionStorage.setItem(INVITATION_OPEN_KEY, 'true');
    } catch {
      // The invitation still works when browser storage is unavailable.
    }
  };

  const handleNavigate = (page: PageId) => {
    if (page === activePage) return;

    window.history.pushState({}, '', getRouteHref(page));
    setActivePage(page);
  };

  const handleAddWish = (newWish: WishMessage) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  const rsvpWebhookUrl =
    (import.meta.env.VITE_RSVP_WEBHOOK_URL as string | undefined) || defaultRsvpWebhookUrl;

  useEffect(() => {
    const handlePopState = () => setActivePage(getPageFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = getRoute(activePage).title;
  }, [activePage]);

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
      <EnvelopeModal onOpen={handleEnvelopeOpen} guestName={guestName} alreadyOpened={isEnvelopeOpen} />

      {/* Flagship Responsive Floating Navigation Bar */}
      {isEnvelopeOpen && <Navbar activePage={activePage} onNavigate={handleNavigate} />}

      {/* Lightweight romantic accents above the invitation card. */}
      {isEnvelopeOpen && <RomanticOverlay />}

      {/* Floating Acoustic Music Player */}
      {isEnvelopeOpen && <MusicPlayer autoPlay={isAudioAutoPlay} />}

      {/* Each navigation destination renders as its own page instead of an in-page scroll target. */}
      <main
        key={activePage}
        className="invitation-content relative z-10 min-h-[70svh] space-y-8 pb-12 overflow-x-hidden w-full max-w-full"
      >
        {activePage === 'utama' && (
          <>
            <ThreePageStoryCard isOpened={isEnvelopeOpen} />
            <CountdownTimer />
          </>
        )}
        {activePage === 'lokasi' && <EventDetails />}
        {activePage === 'tentatif' && <ScheduleTimeline />}
        {activePage === 'rsvp' && (
          <>
            <RsvpForm onAddWish={handleAddWish} webhookUrl={rsvpWebhookUrl} />
            <SalamKautModal />
          </>
        )}
        {activePage === 'ucapan' && (
          <Wishbook wishes={wishes} isLoading={isWishbookLoading} loadError={wishbookError} />
        )}
      </main>

      <Footer />

    </div>
  );
}

export default App;
