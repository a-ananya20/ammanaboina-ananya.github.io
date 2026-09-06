import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BIRTHDAY_DATA } from '../../data/content';
import { BearCouple } from '../bears/BearCouple';
import { ArrowLeft, Sparkles, Heart, Flame } from 'lucide-react';
import { DogCompanion } from '../DogCompanion';

interface Page5BirthdayProps {
  onBackToChoices: () => void;
  onNextChapter: () => void;
}

export const Page5Birthday: React.FC<Page5BirthdayProps> = ({
  onBackToChoices,
  onNextChapter,
}) => {
  // 3 candles initially unlit
  const [litCandles, setLitCandles] = useState<boolean[]>([false, false, false]);
  const [activeBearReaction, setActiveBearReaction] = useState<string | null>(null);
  const [isKissing, setIsKissing] = useState(false);

  const allCandlesLit = litCandles.every((c) => c === true);

  // Play warm match lighting sound with Web Audio
  const playFlameSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.36);
    } catch {
      // Audio optional
    }
  };

  // Light a candle by index or light all
  const handleLightCandle = (index: number) => {
    playFlameSound();
    setLitCandles((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const handleLightAll = () => {
    playFlameSound();
    setLitCandles([true, true, true]);
  };

  // Click Girl Bear interaction -> kisses Boy Bear!
  const handleBearClick = (bear: 'boy' | 'girl') => {
    if (bear === 'girl') {
      setIsKissing(true);
      setActiveBearReaction(BIRTHDAY_DATA.girlBearKissText);
      setTimeout(() => {
        setIsKissing(false);
      }, 2500);
    } else {
      setActiveBearReaction(BIRTHDAY_DATA.boyBearReactionText);
      setTimeout(() => {
        setActiveBearReaction(null);
      }, 2500);
    }
  };

  return (
    <div
      id="page-5-birthday"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto text-center"
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

        <span className="text-xs font-bold text-[#e11d48] bg-[#fee2e2] px-3 py-1 rounded-full border border-[#fecaca]">
          Chapter 3: Birthday Celebration
        </span>
      </div>

      {/* Title & Candle Prompt */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2 mb-6"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#881337] font-semibold tracking-wide">
          {allCandlesLit ? BIRTHDAY_DATA.celebrationTitle : BIRTHDAY_DATA.cakePrompt}
        </h2>
        <p className="text-xs sm:text-sm text-[#9f1239] font-medium">
          {allCandlesLit
            ? "Every candle is glowing with all my love for you!"
            : BIRTHDAY_DATA.candlesPromptSubtitle}
        </p>
      </motion.div>

      {/* INTERACTIVE BIRTHDAY CAKE WITH 3 CLICKABLE CANDLES */}
      <div className="relative my-4 flex flex-col items-center">
        {/* The 3 Candles on top of cake */}
        <div className="flex items-end justify-center space-x-6 mb-1 z-20">
          {[0, 1, 2].map((idx) => {
            const isLit = litCandles[idx];
            return (
              <div
                key={idx}
                id={`candle-${idx}`}
                onClick={() => handleLightCandle(idx)}
                className="relative flex flex-col items-center cursor-pointer group"
                title={isLit ? "Burning brightly" : "Tap to light candle!"}
              >
                {/* Flame */}
                <div className="h-8 flex items-center justify-center">
                  {isLit ? (
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 0.95, 1],
                        rotate: [-2, 2, -1, 1],
                      }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-5 h-7 rounded-full bg-gradient-to-t from-[#ef4444] via-[#f59e0b] to-[#fef08a] shadow-[0_0_15px_rgba(245,158,11,0.9)] flex items-center justify-center"
                    >
                      <div className="w-2 h-3 bg-white/80 rounded-full" />
                    </motion.div>
                  ) : (
                    <span className="text-xs text-[#94a3b8] group-hover:text-[#f59e0b] transition-colors flex items-center space-x-0.5">
                      <Flame className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                {/* Candle Stick */}
                <div
                  className={`w-3.5 h-10 rounded-t-sm shadow-xs ${
                    idx === 0
                      ? 'bg-[#93c5fd] border-t border-[#60a5fa]'
                      : idx === 1
                      ? 'bg-[#f472b6] border-t border-[#ec4899]'
                      : 'bg-[#fbbf24] border-t border-[#f59e0b]'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Cake Tiers */}
        <div className="relative flex flex-col items-center z-10">
          {/* Top Layer */}
          <div className="w-48 sm:w-56 h-14 bg-gradient-to-r from-[#fed7aa] via-[#ffedd5] to-[#fed7aa] rounded-t-2xl border-2 border-[#fdba74] shadow-sm flex items-center justify-center relative overflow-hidden">
            {/* Strawberry frosting scallops */}
            <div className="absolute top-0 inset-x-0 h-4 bg-[#f472b6] rounded-b-xl opacity-80" />
            <span className="font-handwritten text-lg text-[#9a3412] font-bold mt-2">
              For My Love ❤️
            </span>
          </div>

          {/* Bottom Layer */}
          <div className="w-60 sm:w-72 h-16 bg-gradient-to-r from-[#fbcfe8] via-[#fdf2f8] to-[#fbcfe8] border-2 border-[#f472b6] rounded-t-xl rounded-b-2xl shadow-md flex items-center justify-around px-4">
            <span className="text-sm">🍓</span>
            <span className="text-sm">✨</span>
            <span className="text-sm">🍓</span>
            <span className="text-sm">✨</span>
            <span className="text-sm">🍓</span>
          </div>

          {/* Cake Stand */}
          <div className="w-68 sm:w-80 h-3 bg-[#e2e8f0] rounded-full border border-[#cbd5e1] shadow-xs -mt-0.5" />
        </div>

        {/* Quick button to light all candles if user wants */}
        {!allCandlesLit && (
          <button
            onClick={handleLightAll}
            className="mt-3 text-xs font-bold text-[#e11d48] bg-[#fee2e2] hover:bg-[#fecaca] px-4 py-1.5 rounded-full border border-[#fecaca] shadow-xs cursor-pointer transition-colors"
          >
            Light All Candles at once 🕯️✨
          </button>
        )}
      </div>

      {/* THE SAME BEAR COUPLE (Holding hands beside the cake, Clickable for kisses!) */}
      <div className="relative my-4 flex flex-col items-center">
        <BearCouple
          scene={isKissing ? 'hug_kiss' : 'birthday'}
          interactive={true}
          onBearClick={handleBearClick}
          className="scale-95 sm:scale-105"
        />

        {/* Easter Egg Hint */}
        <p className="text-[11px] text-[#9f1239] font-medium mt-2">
          {BIRTHDAY_DATA.bearEasterEggHint}
        </p>

        {/* Bear Click Reaction Toast */}
        <AnimatePresence>
          {activeBearReaction && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-2 px-4 py-1.5 rounded-full bg-[#fff1f2] border border-[#fecaca] text-xs font-bold text-[#be123c] shadow-xs"
            >
              {activeBearReaction}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* HEARTFELT BIRTHDAY GREETING (Visible after candles are lit) */}
      <AnimatePresence>
        {allCandlesLit && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-lg mx-auto bg-[#ffffff]/95 border-2 border-[#fecaca] rounded-3xl p-6 sm:p-8 shadow-xl text-left space-y-4 my-6"
          >
            <div className="flex items-center space-x-2 pb-2 border-b border-[#fecaca] text-[#e11d48] font-bold text-sm">
              <Heart className="w-4 h-4 fill-current text-[#f43f5e]" />
              <span>A note from my heart</span>
            </div>

            <div className="space-y-3 text-[#4c0519] text-sm sm:text-base leading-relaxed">
              {BIRTHDAY_DATA.greetingText.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation to final chapter */}
      <div className="mt-8 flex items-center justify-center">
        <button
          onClick={onNextChapter}
          className="px-7 py-3 rounded-full bg-gradient-to-r from-[#e11d48] to-[#f43f5e] hover:from-[#be123c] hover:to-[#e11d48] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center space-x-2"
        >
          <span>Next: Message From Future Me 📩</span>
        </button>
      </div>

      {/* Cute Puppy for inside joke */}
      <div className="mt-8">
        <DogCompanion customJoke="Woof! Happy Birthday to the best boyfriend in the world! 🎂🐾" />
      </div>
    </div>
  );
};
