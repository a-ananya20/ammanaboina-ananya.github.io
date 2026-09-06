import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BoyBear, GirlBear } from './BearCharacters';
import { FamilyPortrait } from './FamilyPortrait';
import { Sparkles, Heart } from 'lucide-react';

export type CoupleSceneType =
  | 'question'
  | 'hug_kiss'
  | 'headphones'
  | 'headphones_kiss'
  | 'studying'
  | 'career'
  | 'family'
  | 'birthday'
  | 'future_peace';

interface BearCoupleProps {
  scene: CoupleSceneType;
  interactive?: boolean;
  isPlayingMusic?: boolean;
  onBearClick?: (bear: 'boy' | 'girl') => void;
  className?: string;
}

export const BearCouple: React.FC<BearCoupleProps> = ({
  scene,
  interactive = false,
  isPlayingMusic = false,
  onBearClick,
  className = '',
}) => {
  const [internalKissTrigger, setInternalKissTrigger] = useState(false);

  // Handle click on Girl Bear -> Kiss Boy Bear!
  const handleGirlClick = () => {
    if (onBearClick) {
      onBearClick('girl');
    } else if (interactive) {
      setInternalKissTrigger(true);
      setTimeout(() => setInternalKissTrigger(false), 2500);
    }
  };

  // Handle click on Boy Bear
  const handleBoyClick = () => {
    if (onBearClick) {
      onBearClick('boy');
    }
  };

  const isKissing = scene === 'hug_kiss' || scene === 'headphones_kiss' || internalKissTrigger;

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Sparkles / Floating Hearts Burst during kiss */}
      <AnimatePresence>
        {isKissing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1.2, y: -26 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="absolute -top-10 z-50 flex items-center space-x-1.5 pointer-events-none"
          >
            <Sparkles className="w-5 h-5 text-[#f59e0b] animate-spin" />
            <div className="flex items-center space-x-1 bg-[#fff1f2] border-2 border-[#f43f5e] px-3 py-1 rounded-full shadow-lg">
              <span className="text-sm">💋</span>
              <Heart className="w-5 h-5 text-[#ec4899] fill-current animate-pulse" />
              <span className="text-xs font-black text-[#be123c]">MWAH!</span>
            </div>
            <Sparkles className="w-5 h-5 text-[#f59e0b]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Notes Floating when music plays */}
      <AnimatePresence>
        {isPlayingMusic && (
          <div className="absolute -top-8 inset-x-0 flex justify-around pointer-events-none z-20">
            {['🎵', '🎶', '✨', '🎵'].map((note, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10, x: (i - 1.5) * 10 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-10, -35],
                  x: [(i - 1.5) * 10, (i - 1.5) * 15 + (i % 2 === 0 ? 5 : -5)],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeOut',
                }}
                className="text-base sm:text-lg"
              >
                {note}
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* 1. SCENE: STUDYING TOGETHER */}
      {scene === 'studying' && (
        <div className="relative flex flex-col items-center">
          {/* Desk with study elements */}
          <div className="relative flex items-end justify-center space-x-2 sm:space-x-4">
            <BoyBear
              pose="study"
              eyeState="open"
              lookDirection="right"
              size="md"
              blushing={true}
              onClick={handleBoyClick}
            />

            {/* Cozy Desk Table */}
            <div className="relative -mx-6 z-10 w-52 sm:w-64 h-16 bg-[#e2ceb8] border-2 border-[#b59d84] rounded-t-xl shadow-md flex items-center justify-between px-3">
              {/* Stack of books */}
              <div className="flex flex-col space-y-0.5">
                <div className="w-9 h-2.5 bg-[#60a5fa] rounded-xs border border-[#3b82f6]" />
                <div className="w-11 h-2.5 bg-[#f472b6] rounded-xs border border-[#ec4899]" />
                <div className="w-12 h-3 bg-[#34d399] rounded-xs border border-[#059669]" />
              </div>

              {/* Cute Desk Lamp */}
              <div className="relative flex flex-col items-center">
                <div className="w-6 h-5 bg-[#fbbf24] rounded-t-full shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
                <div className="w-1 h-6 bg-[#78716c]" />
                <div className="w-5 h-1.5 bg-[#57534e] rounded-full" />
              </div>

              {/* Notebook & Mug */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-8 bg-[#fafaf9] rounded border border-[#d6d3d1] p-1 shadow-2xs text-[6px] text-[#a8a29e] leading-tight">
                  <div className="w-full h-0.5 bg-[#cbd5e1] mb-1" />
                  <div className="w-3/4 h-0.5 bg-[#cbd5e1] mb-1" />
                  <div className="w-1/2 h-0.5 bg-[#cbd5e1]" />
                </div>
                <div className="w-4 h-5 bg-[#fbcfe8] rounded-t border border-[#f472b6] text-[7px] text-center">
                  ☕
                </div>
              </div>
            </div>

            <GirlBear
              pose="study"
              eyeState="open"
              lookDirection="left"
              size="md"
              blushing={true}
              onClick={handleGirlClick}
            />
          </div>

          {/* Under-the-table Secret Hand Holding Callout */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-3 px-3 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-xs text-[#92400e] font-medium flex items-center space-x-1.5 shadow-2xs"
          >
            <span className="text-sm">🤝</span>
            <span>Secretly holding hands under the study table</span>
          </motion.div>
        </div>
      )}

      {/* 2. SCENE: CAREER & DREAMS CELEBRATION */}
      {scene === 'career' && (
        <div className="relative flex items-center justify-center space-x-4">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BoyBear
              pose="celebrating"
              eyeState="wink"
              size="md"
              blushing={true}
              lookDirection="right"
              onClick={handleBoyClick}
            />
          </motion.div>

          <div className="flex flex-col items-center text-center px-2">
            <span className="text-2xl animate-bounce">🏆</span>
            <span className="text-xs font-bold text-[#b45309] bg-[#fef3c7] px-2 py-0.5 rounded-full border border-[#fde68a] mt-1">
              Dreams Reached!
            </span>
          </div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          >
            <GirlBear
              pose="celebrating"
              eyeState="happy"
              size="md"
              blushing={true}
              lookDirection="left"
              onClick={handleGirlClick}
            />
          </motion.div>
        </div>
      )}

      {/* 3. SCENE: UNIFIED FAMILY PORTRAIT (All Family Members Together) */}
      {scene === 'family' && (
        <FamilyPortrait />
      )}

      {/* 4. DEFAULT PAIR SCENES (Hug, Kiss, Headphones, Birthday) */}
      {scene !== 'studying' && scene !== 'career' && scene !== 'family' && (
        <div className="relative flex items-center justify-center">
          {/* BOY BEAR (Moves close, leans in, blushing happily) */}
          <motion.div
            animate={
              isKissing
                ? { x: 26, rotate: 3, scale: 1.02 }
                : isPlayingMusic
                ? { y: [0, -2, 0], rotate: [0, 1, 0] }
                : { x: 0, rotate: 0 }
            }
            transition={{ type: 'spring', damping: 18, stiffness: 200 }}
            className="z-10"
          >
            <BoyBear
              pose={isKissing ? 'kiss' : scene === 'birthday' ? 'holding_hands' : 'idle'}
              eyeState={isKissing ? 'closed' : isPlayingMusic ? 'closed' : 'open'}
              blushing={isKissing || scene === 'birthday'}
              lookDirection="right"
              headphones={scene === 'headphones' || scene === 'headphones_kiss'}
              size="lg"
              onClick={handleBoyClick}
            />
          </motion.div>

          {/* KISS CONTACT POP: Right between their faces */}
          {isKissing && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [0.8, 1.25, 1.1] }}
              transition={{ duration: 0.4 }}
              className="absolute z-40 pointer-events-none flex flex-col items-center"
              style={{ top: '22%' }}
            >
              <div className="flex items-center space-x-1 bg-[#fff1f2] border-2 border-[#f43f5e] px-2.5 py-0.5 rounded-full shadow-md">
                <span className="text-xs">💋</span>
                <span className="text-[11px] font-black text-[#e11d48]">Smooch!</span>
              </div>
            </motion.div>
          )}

          {/* Shared Headphone Cable */}
          {(scene === 'headphones' || scene === 'headphones_kiss') && (
            <svg
              className="absolute -top-4 w-32 h-20 pointer-events-none z-20"
              viewBox="0 0 120 80"
              fill="none"
            >
              <path
                d="M 28 35 Q 60 70 92 35"
                stroke="#64748b"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="60" cy="53" r="3" fill="#3b82f6" />
            </svg>
          )}

          {/* GIRL BEAR (Leans directly into Boy Bear, tilting head and kissing his cheek!) */}
          <motion.div
            animate={
              isKissing
                ? { x: -28, y: -2, rotate: -8, scale: 1.05 }
                : isPlayingMusic
                ? { y: [0, -2, 0], rotate: [0, -1, 0] }
                : { x: 0, rotate: 0 }
            }
            transition={{ type: 'spring', damping: 18, stiffness: 200 }}
            className="z-20"
          >
            <GirlBear
              pose={isKissing ? 'kiss' : scene === 'birthday' ? 'holding_hands' : 'idle'}
              eyeState={isKissing ? 'closed' : isPlayingMusic ? 'closed' : 'open'}
              blushing={true}
              lookDirection="left"
              headphones={scene === 'headphones' || scene === 'headphones_kiss'}
              size="lg"
              onClick={handleGirlClick}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};
