import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { CRAZY_QUESTION_DATA } from '../../data/content';
import { BearCouple } from '../bears/BearCouple';
import { DogCompanion } from '../DogCompanion';

interface Page1CrazyQuestionProps {
  onYesAnswered: () => void;
}

export const Page1CrazyQuestion: React.FC<Page1CrazyQuestionProps> = ({ onYesAnswered }) => {
  const [noButtonText, setNoButtonText] = useState(CRAZY_QUESTION_DATA.noButtonInitialText);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [animationStep, setAnimationStep] = useState<
    'idle' | 'looking' | 'closer' | 'hug' | 'kiss' | 'complete'
  >('idle');

  const containerRef = useRef<HTMLDivElement>(null);

  // Dodge function for cursor hover or touch tap on NO button
  const dodgeNoButton = () => {
    if (isAnswered) return;

    // Pick random offsets within safe bounds
    const maxOffset = 140;
    const randomAngle = Math.random() * 2 * Math.PI;
    const distance = 80 + Math.random() * (maxOffset - 80);

    const newX = Math.cos(randomAngle) * distance;
    const newY = Math.sin(randomAngle) * distance;

    setNoPosition({ x: newX, y: newY });

    // Cycle funny escape quips
    const quip =
      CRAZY_QUESTION_DATA.noButtonPhrases[
        (escapeCount + 1) % CRAZY_QUESTION_DATA.noButtonPhrases.length
      ];
    setNoButtonText(quip);
    setEscapeCount((prev) => prev + 1);

    // Play subtle soft dodge boop
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600 + Math.random() * 200, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {
      // Audio optional
    }
  };

  // When YES is clicked: choreograph the 6-step bear romance sequence
  const handleYesClick = () => {
    if (isAnswered) return;
    setIsAnswered(true);

    // Step 1 & 2: Looking toward each other
    setAnimationStep('looking');

    // Play cheerful chime
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(freq, now + i * 0.12);
        gain.gain.setValueAtTime(0.06, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.45);
      });
    } catch {
      // Audio optional
    }

    // Step 3: Move closer
    setTimeout(() => {
      setAnimationStep('closer');
    }, 600);

    // Step 4 & 5: Hug and kiss!
    setTimeout(() => {
      setAnimationStep('hug');
    }, 1200);

    setTimeout(() => {
      setAnimationStep('kiss');
    }, 1800);

    // Step 6 & 7: Sparkles & smooth transition
    setTimeout(() => {
      setAnimationStep('complete');
      setTimeout(() => {
        onYesAnswered();
      }, 1200);
    }, 3400);
  };

  return (
    <div
      ref={containerRef}
      id="page-1-crazy-question"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-3xl mx-auto text-center"
    >
      {/* Playful top badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#fef3c7] border border-[#fde68a] text-xs font-semibold text-[#92400e] shadow-xs mb-6"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
        <span>{CRAZY_QUESTION_DATA.heading}</span>
      </motion.div>

      {/* THE SAME BOY BEAR AND GIRL BEAR (Visual Centerpiece) */}
      <div className="relative my-4 w-full flex justify-center items-center">
        <BearCouple
          scene={
            animationStep === 'hug' || animationStep === 'kiss' || animationStep === 'complete'
              ? 'hug_kiss'
              : 'question'
          }
          className="scale-95 sm:scale-105"
        />
      </div>

      {/* The Question Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-3 max-w-xl mx-auto my-6 px-4"
      >
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#3d2410] font-normal leading-snug">
          {CRAZY_QUESTION_DATA.question}
        </h1>
        <p className="text-sm text-[#785434] font-medium italic">
          {CRAZY_QUESTION_DATA.subtext}
        </p>
      </motion.div>

      {/* The Two Buttons: YES ❤️ and Unclickable Dodging NO 😈 */}
      <div className="relative min-h-[120px] w-full max-w-md mx-auto flex items-center justify-center space-x-6 sm:space-x-8 pt-4">
        {/* YES BUTTON (Clickable with glowing warmth) */}
        <motion.button
          id="btn-yes"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleYesClick}
          disabled={isAnswered}
          className="relative group z-20 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#f43f5e] via-[#ec4899] to-[#fb7185] text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-[0_0_30px_rgba(244,63,94,0.45)] transition-all cursor-pointer flex items-center space-x-2"
        >
          <Heart className="w-5 h-5 fill-current animate-pulse text-white" />
          <span>{CRAZY_QUESTION_DATA.yesButtonText}</span>
        </motion.button>

        {/* NO BUTTON (Unclickable! Escapes on mouse approach & touch) */}
        {!isAnswered && (
          <motion.div
            style={{
              x: noPosition.x,
              y: noPosition.y,
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className="relative z-30"
          >
            <button
              id="btn-no"
              onMouseEnter={dodgeNoButton}
              onTouchStart={(e) => {
                e.preventDefault();
                dodgeNoButton();
              }}
              onClick={(e) => {
                e.preventDefault();
                dodgeNoButton();
              }}
              type="button"
              className="px-6 py-3.5 rounded-full bg-[#f1f5f9] border border-[#cbd5e1] text-[#64748b] font-medium text-sm sm:text-base shadow-sm hover:bg-[#e2e8f0] transition-colors select-none cursor-pointer whitespace-nowrap"
            >
              {noButtonText}
            </button>
          </motion.div>
        )}
      </div>

      {/* Celebration Banner when YES is clicked */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#fdf2f8] border border-[#fbcfe8] text-[#be185d] font-bold text-sm sm:text-base shadow-md"
          >
            <span>✨ {CRAZY_QUESTION_DATA.yesCelebrationText} ✨</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dog companion for the inside joke */}
      <div className="mt-8">
        <DogCompanion customJoke="Told you! You have to accept puppy girlfriend forever! 🐾" />
      </div>
    </div>
  );
};
