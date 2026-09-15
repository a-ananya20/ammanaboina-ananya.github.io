import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SONG_LYRICS_DATA } from '../../data/content';
import { BearCouple } from '../bears/BearCouple';
import { ArrowLeft, Heart, Music, Sparkles } from 'lucide-react';
import { DogCompanion } from '../DogCompanion';

interface Page3SongVoiceProps {
  onBackToChoices: () => void;
  onNextChapter: () => void;
}

export const Page3SongVoice: React.FC<Page3SongVoiceProps> = ({
  onBackToChoices,
  onNextChapter,
}) => {
  const [bearKiss, setBearKiss] = useState(false);

  const toggleBearKiss = () => {
    setBearKiss((prev) => !prev);
  };

  return (
    <div
      id="page-3-song"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto text-center"
    >
      {/* Top Navigation Bar */}
      <div className="w-full flex justify-between items-center mb-6 relative z-50">
        <button
          type="button"
          onClick={onBackToChoices}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#ffffff]/90 hover:bg-[#ffffff] text-[#78350f] text-xs font-semibold shadow-xs transition-all cursor-pointer border border-[#fde68a] active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Chapters</span>
        </button>

        <span className="text-xs font-bold text-[#b45309] bg-[#fef3c7] px-3 py-1 rounded-full border border-[#fde68a]">
          Chapter 1: Song
        </span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1.5 mb-6"
      >
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-xs font-semibold text-[#b45309]">
          <Music className="w-3.5 h-3.5 text-[#f59e0b]" />
          <span>Our Song & Meanings</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#3d2410] font-normal">
          {SONG_LYRICS_DATA.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#78350f] max-w-md mx-auto">
          Every word reminds me of you. Read through the verses and what they express from my heart.
        </p>
      </motion.div>

      {/* THE BEARS SCENE (Same characters, cute headphones animation & tap for kiss) */}
      <div className="relative my-4 w-full flex flex-col items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          onClick={toggleBearKiss}
          className="cursor-pointer"
          title="Tap on us for a sweet kiss!"
        >
          <BearCouple
            scene={bearKiss ? 'headphones_kiss' : 'headphones'}
            isPlayingMusic={true}
            className="scale-95 sm:scale-105"
          />
        </motion.div>

        {/* Reaction text when tapped */}
        <AnimatePresence>
          {bearKiss ? (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-3 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#fdf2f8] border border-[#fbcfe8] text-[#be185d] text-xs font-semibold shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-[#ec4899]" />
              <span>Forehead kiss for my favorite person! ❤️</span>
            </motion.div>
          ) : (
            <span className="mt-2 text-[11px] text-[#92400e]/70 font-medium">
              💡 Tap on the bears for a sweet surprise!
            </span>
          )}
        </AnimatePresence>
      </div>

      {/* LYRICS & MEANINGS CONTAINER */}
      <div className="w-full max-w-2xl mx-auto my-6 space-y-4">
        {SONG_LYRICS_DATA.stanzas.map((stanza) => (
          <motion.div
            key={stanza.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
            className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#fffbeb] border-2 border-[#fde68a] shadow-sm hover:shadow-md transition-all text-left space-y-3"
          >
            {/* Stanza Number Indicator */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center space-x-1 text-[11px] font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-2.5 py-0.5 rounded-full border border-[#fde68a]">
                <Sparkles className="w-3 h-3 text-[#f59e0b]" />
                <span>Verse {stanza.id}</span>
              </span>
              <Music className="w-3.5 h-3.5 text-[#f59e0b]/50" />
            </div>

            {/* Telugu Transliteration Lines */}
            <div className="space-y-1 pl-1">
              {stanza.lines.map((line, idx) =>
                line.trim() === '' ? (
                  <div key={idx} className="h-2" />
                ) : (
                  <p
                    key={idx}
                    className="font-display text-base sm:text-lg text-[#3d2410] font-medium leading-snug"
                  >
                    {line}
                  </p>
                )
              )}
            </div>

            {/* Subtle English Meaning */}
            <div className="pt-3 border-t border-[#fde68a]/60">
              <p className="text-xs font-semibold text-[#b45309] uppercase tracking-wider mb-1">
                Meaning:
              </p>
              <p className="text-xs sm:text-sm text-[#78350f] italic leading-relaxed pl-2 border-l-2 border-[#f59e0b]/60">
                "{stanza.meaning}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-50">
        <button
          type="button"
          onClick={onBackToChoices}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#ffffff]/90 hover:bg-[#ffffff] text-[#78350f] font-semibold text-sm shadow-xs border border-[#fde68a] transition-all cursor-pointer active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Chapters</span>
        </button>
        <button
          type="button"
          onClick={onNextChapter}
          className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#d97706] to-[#f59e0b] hover:from-[#b45309] hover:to-[#d97706] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
        >
          Next: Birthday Greeting 🎂 →
        </button>
      </div>

      {/* Cute Puppy for inside joke */}
      <div className="mt-8">
        <DogCompanion customJoke="Woof! Even my puppy ears adore these beautiful lyrics! 🎶🐾" />
      </div>
    </div>
  );
};
