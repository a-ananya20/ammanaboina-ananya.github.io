import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { AudioTrack } from '../../types';

interface CustomAudioPlayerProps {
  track: AudioTrack;
  isPlaying?: boolean;
  onPlayStateChange?: (isPlaying: boolean) => void;
  onTrackEnded?: () => void;
  accentColor?: string;
  idPrefix?: string;
}

export const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({
  track,
  isPlaying: controlledIsPlaying,
  onPlayStateChange,
  onTrackEnded,
  accentColor = '#f59e0b',
  idPrefix = 'player',
}) => {
  const [internalIsPlaying, setInternalIsPlaying] = useState(false);
  const isPlaying = controlledIsPlaying !== undefined ? controlledIsPlaying : internalIsPlaying;
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(track.durationSeconds || 180);
  const [isMuted, setIsMuted] = useState(false);
  const [isSimulated, setIsSimulated] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Stop all playback safely
  const stopPlayback = useCallback(() => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioRef.current) {
      try {
        audioRef.current.pause();
      } catch {
        // Safe fallback
      }
    }
  }, []);

  // Play melodic note safely
  const playLullabyNote = useCallback((step: number) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      const melody = [523.25, 587.33, 659.25, 783.99, 880.0, 783.99, 659.25, 587.33];
      const noteFreq = melody[step % melody.length];

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(noteFreq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.3);
    } catch {
      // Audio fallback non-critical
    }
  }, []);

  // Start simulated playback cleanly
  const startSimulatedPlayback = useCallback(() => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }

    synthTimerRef.current = window.setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 1;
        if (next >= duration) {
          if (synthTimerRef.current) {
            clearInterval(synthTimerRef.current);
            synthTimerRef.current = null;
          }
          setTimeout(() => {
            setInternalIsPlaying(false);
            onPlayStateChange?.(false);
            onTrackEnded?.();
          }, 0);
          return 0;
        }
        playLullabyNote(next);
        return next;
      });
    }, 1000);
  }, [duration, onPlayStateChange, onTrackEnded, playLullabyNote]);

  // Sync external controlled isPlaying change
  useEffect(() => {
    if (controlledIsPlaying === undefined) return;

    if (controlledIsPlaying) {
      if (audioRef.current && !isSimulated) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsSimulated(true);
            startSimulatedPlayback();
          });
        }
      } else {
        startSimulatedPlayback();
      }
    } else {
      stopPlayback();
    }
  }, [controlledIsPlaying, isSimulated, startSimulatedPlayback, stopPlayback]);

  // Initialize or update HTML5 audio
  useEffect(() => {
    const audio = new Audio();
    const resolvedSrc = (track.src.startsWith('http://') || track.src.startsWith('https://') || track.src.startsWith('data:') || track.src.startsWith('blob:'))
      ? track.src
      : (track.src.startsWith('/') ? `${import.meta.env.BASE_URL || './'}${track.src.slice(1)}` : track.src);
    audio.src = resolvedSrc;
    audio.preload = 'metadata';

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration !== Infinity) {
        setDuration(Math.floor(audio.duration));
        setIsSimulated(false);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(Math.floor(audio.currentTime));
    };

    const handleEnded = () => {
      setInternalIsPlaying(false);
      onPlayStateChange?.(false);
      onTrackEnded?.();
    };

    const handleError = () => {
      setIsSimulated(true);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    audioRef.current = audio;

    return () => {
      try {
        audio.pause();
      } catch {
        // Safe fallback
      }
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      if (synthTimerRef.current) {
        clearInterval(synthTimerRef.current);
        synthTimerRef.current = null;
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close().catch(() => {});
        } catch {
          // Safe fallback
        }
      }
    };
  }, [track.src, onPlayStateChange, onTrackEnded]);

  const togglePlay = () => {
    const nextState = !isPlaying;
    if (controlledIsPlaying === undefined) {
      setInternalIsPlaying(nextState);
      if (!nextState) {
        stopPlayback();
      } else {
        if (audioRef.current && !isSimulated) {
          audioRef.current.play().catch(() => {
            setIsSimulated(true);
            startSimulatedPlayback();
          });
        } else {
          startSimulatedPlayback();
        }
      }
    }
    onPlayStateChange?.(nextState);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setCurrentTime(val);
    if (audioRef.current && !isSimulated) {
      audioRef.current.currentTime = val;
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      id={`${idPrefix}-container`}
      className="w-full max-w-lg mx-auto bg-[#ffffff]/90 border-2 border-[#fcd34d]/60 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 shadow-md backdrop-blur-sm transition-all"
    >
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="text-left space-y-0.5">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#b45309]">
            {track.subtitle}
          </span>
          <h4 className="font-display text-base sm:text-xl text-[#3d2410] font-semibold">
            {track.title}
          </h4>
        </div>

        {/* Mute button */}
        <button
          onClick={toggleMute}
          title={isMuted ? 'Unmute' : 'Mute'}
          className="p-1.5 sm:p-2 rounded-full hover:bg-[#fef3c7] text-[#78350f] transition-colors cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Scrubbable Progress Bar */}
      <div className="space-y-1 my-2.5 sm:my-3">
        <div className="relative w-full h-2.5 bg-[#fef3c7] rounded-full overflow-hidden">
          <div
            className="absolute top-0 bottom-0 left-0 rounded-full transition-all duration-300"
            style={{
              width: `${progressPercent}%`,
              backgroundColor: accentColor,
            }}
          />
        </div>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          aria-label="Audio scrubber"
          className="w-full h-2 opacity-0 cursor-pointer -mt-3.5 relative z-10 block"
        />
        <div className="flex justify-between text-[11px] font-mono text-[#92400e]">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Player Controls & Visual Waveform */}
      <div className="flex items-center justify-between pt-1">
        {/* Play/Pause Main Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          id={`${idPrefix}-play-btn`}
          className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-1.5 sm:space-x-2 cursor-pointer active:scale-95"
          style={{ backgroundColor: accentColor }}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
              <span>Play</span>
            </>
          )}
        </motion.button>

        {/* Animated Pastel Waveform Bars */}
        <div className="flex items-center space-x-1 sm:space-x-1.5 h-6">
          {[0.6, 1.2, 0.4, 0.9, 0.5, 1.0, 0.7, 0.3].map((heightScale, i) => (
            <motion.div
              key={i}
              animate={
                isPlaying
                  ? { scaleY: [0.3, heightScale, 0.3] }
                  : { scaleY: 0.2 }
              }
              transition={{
                duration: 0.8,
                repeat: isPlaying ? Infinity : 0,
                delay: i * 0.1,
                ease: 'easeInOut',
              }}
              className="w-1 min-[360px]:w-1.5 bg-[#f59e0b] rounded-full"
              style={{ height: '22px' }}
            />
          ))}
        </div>
      </div>

      {/* Friendly file status note */}
      {isSimulated && (
        <p className="text-[10px] text-[#b45309]/80 italic mt-3 text-center">
          🎶 Playing sweet melody preview until you place your file at{' '}
          <code className="bg-[#fef3c7] px-1 py-0.5 rounded font-mono">{track.src}</code>
        </p>
      )}
    </div>
  );
};
