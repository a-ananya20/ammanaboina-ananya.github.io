import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AUDIO_TRACKS } from '../../data/content';
import { BearCouple } from '../bears/BearCouple';
import { CustomAudioPlayer } from '../audio/CustomAudioPlayer';
import { ArrowLeft, Sparkles, Heart } from 'lucide-react';
import { DogCompanion } from '../DogCompanion';

interface Page3SongVoiceProps {
  onBackToChoices: () => void;
  onNextChapter: () => void;
}

export const Page3SongVoice: React.FC<Page3SongVoiceProps> = ({
  onBackToChoices,
  onNextChapter,
}) => {
  const [isPlayingSong, setIsPlayingSong] = useState(false);
  const [songFinished, setSongFinished] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  // Handle when song finishes naturally
  const handleSongEnded = () => {
    setIsPlayingSong(false);
    setSongFinished(true);

    // Reset finished celebration after a while so it doesn't get stuck
    setTimeout(() => {
      // Keep completed text visible
    }, 4000);
  };

  return (
    <div
      id="page-3-song-voice"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto text-center"
    >
      {/* Back button */}
      <div className="w-full flex justify-between items-center mb-6">
        <button
          onClick={onBackToChoices}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#ffffff]/80 hover:bg-[#ffffff] text-[#78350f] text-xs font-semibold shadow-xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Chapters</span>
        </button>

        <span className="text-xs font-bold text-[#b45309] bg-[#fef3c7] px-3 py-1 rounded-full border border-[#fde68a]">
          Chapter 1: Song & Voice
        </span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1.5 mb-6"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
          Something I made just for you
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#3d2410] font-normal">
          My Song
        </h2>
      </motion.div>

      {/* THE BEARS SCENE (Choreographed to music playback & forehead kiss) */}
      <div className="relative my-4 w-full flex flex-col items-center justify-center">
        <motion.div
          animate={
            isPlayingSong
              ? { scale: [1, 1.02, 1] }
              : isPlayingVoice
              ? { y: [0, -2, 0] }
              : {}
          }
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BearCouple
            scene={
              songFinished
                ? 'headphones_kiss'
                : isPlayingSong
                ? 'headphones'
                : isPlayingVoice
                ? 'holding_hands'
                : 'question'
            }
            isPlayingMusic={isPlayingSong}
            className="scale-95 sm:scale-105"
          />
        </motion.div>

        {/* Reaction Text when song finishes */}
        <AnimatePresence>
          {songFinished && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#fdf2f8] border border-[#fbcfe8] text-[#be185d] text-sm font-semibold shadow-md"
            >
              <Heart className="w-4 h-4 fill-current text-[#ec4899]" />
              <span>Okay... that was for you. ❤️ (and a sweet forehead kiss!)</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 1. MY SONG AUDIO PLAYER */}
      <div className="w-full max-w-lg mx-auto mb-10">
        <CustomAudioPlayer
          track={AUDIO_TRACKS.mySong}
          accentColor="#f59e0b"
          idPrefix="song-player"
          onPlayStateChange={(playing) => {
            setIsPlayingSong(playing);
            if (playing) setSongFinished(false);
          }}
          onTrackEnded={handleSongEnded}
        />
      </div>

      {/* 2. VOICE MESSAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-lg mx-auto pt-6 border-t-2 border-[#fef3c7] space-y-4"
      >
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7c3aed]">
            And now... something I wanted to tell you
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-[#3d2410] font-normal">
            Voice Message 🎙️
          </h3>
        </div>

        <CustomAudioPlayer
          track={AUDIO_TRACKS.voiceMessage}
          accentColor="#8b5cf6"
          idPrefix="voice-player"
          onPlayStateChange={(playing) => setIsPlayingVoice(playing)}
        />
      </motion.div>

      {/* Navigation to next chapter */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onNextChapter}
          className="px-7 py-3 rounded-full bg-gradient-to-r from-[#d97706] to-[#f59e0b] hover:from-[#b45309] hover:to-[#d97706] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          Next: Open When Letters →
        </button>
      </div>

      {/* Cute Puppy for inside joke */}
      <div className="mt-8">
        <DogCompanion customJoke="Woof! Even my dog ears love this song! 🎧🐾" />
      </div>
    </div>
  );
};
