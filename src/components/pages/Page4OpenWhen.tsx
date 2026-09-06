import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OPEN_WHEN_LETTERS } from '../../data/content';
import { OpenWhenLetter } from '../../types';
import { BoyBear, GirlBear, CutePuppy } from '../bears/BearCharacters';
import { ArrowLeft, ArrowRight, X, Sparkles, Heart, Moon, CloudRain, Flame, PhoneCall, HeartHandshake } from 'lucide-react';
import { DogCompanion } from '../DogCompanion';

interface Page4OpenWhenProps {
  onBackToChoices: () => void;
  onNextChapter: () => void;
}

export const Page4OpenWhen: React.FC<Page4OpenWhenProps> = ({
  onBackToChoices,
  onNextChapter,
}) => {
  const [selectedLetter, setSelectedLetter] = useState<OpenWhenLetter | null>(null);
  // Animation stage: 'closed' | 'lifting' | 'rotating' | 'opening' | 'unfolding' | 'revealed'
  const [envelopeAnimStep, setEnvelopeAnimStep] = useState<'closed' | 'lifting' | 'opening' | 'revealed'>('closed');

  const handleOpenEnvelope = (letter: OpenWhenLetter) => {
    setSelectedLetter(letter);
    setEnvelopeAnimStep('lifting');

    // Play physical paper unfold sound with Web Audio
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;

      // Soft paper rustle frequencies
      [320, 480, 640].forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + i * 0.08);
        gain.gain.setValueAtTime(0.02, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.16);
      });
    } catch {
      // Audio optional
    }

    setTimeout(() => {
      setEnvelopeAnimStep('opening');
    }, 450);

    setTimeout(() => {
      setEnvelopeAnimStep('revealed');
    }, 900);
  };

  const handleCloseLetter = () => {
    setEnvelopeAnimStep('closed');
    setTimeout(() => {
      setSelectedLetter(null);
    }, 300);
  };

  const currentIndex = selectedLetter
    ? OPEN_WHEN_LETTERS.findIndex((l) => l.id === selectedLetter.id)
    : -1;

  const handlePrevLetter = () => {
    if (currentIndex > 0) {
      handleOpenEnvelope(OPEN_WHEN_LETTERS[currentIndex - 1]);
    }
  };

  const handleNextLetter = () => {
    if (currentIndex < OPEN_WHEN_LETTERS.length - 1) {
      handleOpenEnvelope(OPEN_WHEN_LETTERS[currentIndex + 1]);
    }
  };

  // Helper to render letter-specific bear scene
  const renderTopicBearScene = (theme: OpenWhenLetter['theme']) => {
    switch (theme) {
      case 'missing':
        return (
          <div className="flex items-center justify-center space-x-3 py-2">
            <BoyBear size="sm" eyeState="open" lookDirection="right" />
            <div className="flex flex-col items-center">
              <Moon className="w-5 h-5 text-[#f59e0b] animate-pulse" />
              <Heart className="w-4 h-4 text-[#f472b6] fill-current animate-bounce" />
            </div>
            <GirlBear size="sm" eyeState="open" lookDirection="left" />
          </div>
        );
      case 'bad_day':
        return (
          <div className="flex items-center justify-center space-x-3 py-2">
            <BoyBear size="sm" pose="shy" eyeState="closed" lookDirection="right" blushing={true} />
            <Sparkles className="w-5 h-5 text-[#f59e0b]" />
            <GirlBear size="sm" pose="comforting" eyeState="closed" lookDirection="left" blushing={true} />
          </div>
        );
      case 'cant_sleep':
        return (
          <div className="flex items-center justify-center space-x-2 py-2">
            <div className="p-2 rounded-2xl bg-[#e0e7ff] border border-[#c7d2fe] flex items-center space-x-2">
              <span className="text-sm">💤</span>
              <BoyBear size="sm" pose="sleeping" eyeState="closed" lookDirection="right" />
              <GirlBear size="sm" pose="sleeping" eyeState="closed" lookDirection="left" />
            </div>
          </div>
        );
      case 'motivation':
        return (
          <div className="flex items-center justify-center space-x-3 py-2">
            <BoyBear size="sm" pose="celebrating" eyeState="wink" lookDirection="right" />
            <span className="text-lg">⭐</span>
            <GirlBear size="sm" pose="celebrating" eyeState="happy" lookDirection="left" />
          </div>
        );
      case 'angry':
        return (
          <div className="flex items-center justify-center space-x-3 py-2">
            <GirlBear size="sm" pose="apologizing" eyeState="closed" lookDirection="left" blushing={true} />
            <span className="text-base font-bold text-[#ec4899]">🥺 Sorry!</span>
            <BoyBear size="sm" pose="shy" eyeState="open" lookDirection="right" blushing={true} />
          </div>
        );
      case 'love':
        return (
          <div className="flex items-center justify-center space-x-2 py-2">
            <BoyBear size="sm" pose="hug" eyeState="hearts" lookDirection="right" />
            <Heart className="w-6 h-6 text-[#ec4899] fill-current animate-pulse" />
            <GirlBear size="sm" pose="hug" eyeState="hearts" lookDirection="left" />
          </div>
        );
      case 'need_me':
      default:
        return (
          <div className="flex items-center justify-center space-x-3 py-2">
            <BoyBear size="sm" pose="holding_hands" eyeState="open" lookDirection="right" />
            <div className="text-xs font-bold text-[#059669] bg-[#d1fae5] px-2 py-0.5 rounded-full">
              Always here
            </div>
            <GirlBear size="sm" pose="holding_hands" eyeState="open" lookDirection="left" />
          </div>
        );
    }
  };

  return (
    <div
      id="page-4-open-when"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-5xl mx-auto text-center"
    >
      {/* Navigation Header */}
      <div className="w-full flex justify-between items-center mb-6">
        <button
          onClick={onBackToChoices}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#ffffff]/80 hover:bg-[#ffffff] text-[#78350f] text-xs font-semibold shadow-xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Chapters</span>
        </button>

        <span className="text-xs font-bold text-[#7c3aed] bg-[#ede9fe] px-3 py-1 rounded-full border border-[#ddd6fe]">
          Chapter 2: Magical Letters
        </span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1 mb-8"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#3d2410] font-normal">
          Open When... 💌
        </h2>
        <p className="text-xs sm:text-sm text-[#785434] max-w-md mx-auto">
          Whenever you need me, pick the letter that matches how you feel. Tap to unseal.
        </p>
      </motion.div>

      {/* 7 PHYSICAL ENVELOPES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-4xl px-2">
        {OPEN_WHEN_LETTERS.map((letter, idx) => (
          <motion.div
            key={letter.id}
            id={`envelope-${letter.id}`}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOpenEnvelope(letter)}
            className="group relative cursor-pointer p-5 rounded-3xl bg-[#ffffff]/90 border-2 border-[#e9d5ff] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between min-h-[170px]"
            style={{ backgroundColor: letter.envelopeColor }}
          >
            {/* Top Envelope Flap styling */}
            <div className="w-full flex items-center justify-between text-xs text-[#64748b]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#9333ea] font-semibold">
                Letter #{idx + 1}
              </span>
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white shadow-2xs font-bold"
                style={{ backgroundColor: letter.stampColor }}
              >
                ♥
              </div>
            </div>

            {/* Envelope Center / Wax Stamp */}
            <div className="my-2 relative flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xs transform group-hover:scale-110 transition-transform"
                style={{ backgroundColor: letter.stampColor }}
              >
                <span className="text-sm">✉️</span>
              </div>
            </div>

            {/* Letter Title */}
            <div className="space-y-0.5">
              <h3 className="font-handwritten text-xl sm:text-2xl text-[#3b0764] font-semibold leading-tight">
                {letter.title}
              </h3>
              <p className="text-[11px] text-[#7e22ce] font-medium">
                Tap to unseal and read →
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULL ANIMATED LETTER REVEAL MODAL */}
      <AnimatePresence>
        {selectedLetter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              key="letter-modal"
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', stiffness: 280, damping: 25 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#fffdfa] rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#fed7aa] text-left text-[#3d2410]"
              style={{
                backgroundImage: 'radial-gradient(#f1e6d4 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseLetter}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#fef3c7] hover:bg-[#fde68a] text-[#78350f] transition-colors cursor-pointer"
                title="Fold & Put Back"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Letter Header */}
              <div className="pb-3 border-b-2 border-[#fed7aa] flex flex-col space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#ea580c] font-bold">
                  Open When Collection • #{currentIndex + 1}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#431407] font-semibold">
                  {selectedLetter.title}
                </h3>
              </div>

              {/* Topic-Specific Animated Bear Scene */}
              <div className="my-3 bg-[#fff7ed]/80 rounded-2xl border border-[#ffedd5] p-2">
                {renderTopicBearScene(selectedLetter.theme)}
              </div>

              {/* Letter Body in Handwritten Style */}
              <div className="space-y-4 my-4 font-handwritten text-xl sm:text-2xl text-[#292524] leading-relaxed">
                {selectedLetter.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}

                {selectedLetter.psNote && (
                  <div className="pt-2 border-t border-[#fed7aa]/60 text-lg sm:text-xl text-[#b45309] font-medium">
                    {selectedLetter.psNote}
                  </div>
                )}
              </div>

              {/* Modal Bottom Controls: Prev, Next, Fold Back */}
              <div className="pt-4 border-t-2 border-[#fed7aa] flex items-center justify-between text-xs">
                <button
                  onClick={handlePrevLetter}
                  disabled={currentIndex <= 0}
                  className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-full font-bold transition-colors ${
                    currentIndex <= 0
                      ? 'text-[#d6d3d1] cursor-not-allowed'
                      : 'text-[#ea580c] hover:bg-[#fff7ed] cursor-pointer'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleCloseLetter}
                  className="px-5 py-2 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold shadow-xs transition-colors cursor-pointer"
                >
                  Fold & Put Back ✉️
                </button>

                <button
                  onClick={handleNextLetter}
                  disabled={currentIndex >= OPEN_WHEN_LETTERS.length - 1}
                  className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-full font-bold transition-colors ${
                    currentIndex >= OPEN_WHEN_LETTERS.length - 1
                      ? 'text-[#d6d3d1] cursor-not-allowed'
                      : 'text-[#ea580c] hover:bg-[#fff7ed] cursor-pointer'
                  }`}
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation to next chapter */}
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={onNextChapter}
          className="px-7 py-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] hover:from-[#7c3aed] hover:to-[#9333ea] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          Next: Birthday Greeting 🎂 →
        </button>
      </div>

      {/* Cute Puppy inside joke */}
      <div className="mt-8">
        <DogCompanion customJoke="Woof! I'm licking the stamps on every letter! 🐾" />
      </div>
    </div>
  );
};
