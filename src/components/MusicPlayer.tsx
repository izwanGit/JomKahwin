import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Royalty-free acoustic wedding song stream
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-acoustic-guitar-112702.mp3";

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser policy until user gesture
          setIsPlaying(false);
        });
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />
      
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Hentikan Muzik' : 'Mainkan Muzik'}
        className="group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-emerald-950/90 text-gold-300 border border-gold-500/40 shadow-emerald-glow backdrop-blur-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-400"
      >
        {isPlaying ? (
          <>
            {/* Animated Equalizer Bars */}
            <div className="flex items-end gap-0.5 h-4 w-4 justify-center">
              <span className="w-0.5 bg-gold-400 animate-[bounce_1s_infinite_100ms] h-full" />
              <span className="w-0.5 bg-gold-300 animate-[bounce_1s_infinite_300ms] h-2/3" />
              <span className="w-0.5 bg-gold-500 animate-[bounce_1s_infinite_200ms] h-5/6" />
            </div>
            <Volume2 className="w-4 h-4 text-gold-400" />
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform" />
            <VolumeX className="w-4 h-4 text-slate-400" />
          </>
        )}
        <span className="text-xs font-serif tracking-wider font-medium pr-1 text-gold-200">
          {isPlaying ? 'Muzik' : 'Lagu'}
        </span>
      </button>
    </div>
  );
};
