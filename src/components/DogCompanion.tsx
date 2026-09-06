import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CutePuppy } from './bears/BearCharacters';

interface DogCompanionProps {
  mode?: 'floating' | 'inline' | 'corner';
  customJoke?: string;
  className?: string;
}

const DOG_JOKES = [
  "Woof! 🐾 I behave like a dog with you!",
  "Warning: High risk of loving puppy nibbles & licks! 🐶",
  "100% loyal puppy girlfriend mode activated! 🦴",
  "Tail wagging at maximum speed! ✨",
  "Did someone say treats and cuddles?! 🐾",
  "Arf! You can't escape my love! 🐶"
];

export const DogCompanion: React.FC<DogCompanionProps> = ({
  mode = 'corner',
  customJoke,
  className = '',
}) => {
  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const [jokeIndex, setJokeIndex] = useState(0);

  const handleDogClick = () => {
    // Play gentle playful 'boop' synth tone
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch {
      // Audio optional
    }

    const nextJoke = customJoke || DOG_JOKES[jokeIndex % DOG_JOKES.length];
    setBubbleText(nextJoke);
    setJokeIndex((prev) => prev + 1);

    setTimeout(() => {
      setBubbleText(null);
    }, 3800);
  };

  if (mode === 'floating') {
    return (
      <div className={`fixed bottom-4 right-4 z-40 ${className}`}>
        <div className="relative flex flex-col items-end">
          <AnimatePresence>
            {bubbleText && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="mb-2 mr-1 p-2.5 max-w-[200px] bg-[#fff7ed] border border-[#fed7aa] text-[#9a3412] text-xs rounded-2xl rounded-br-xs shadow-md font-medium text-center pointer-events-none"
              >
                {bubbleText}
              </motion.div>
            )}
          </AnimatePresence>

          <CutePuppy
            caption="Click puppy! 🐾"
            onClick={handleDogClick}
            className="hover:scale-105 transition-transform"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      <AnimatePresence>
        {bubbleText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 8 }}
            className="absolute bottom-full mb-2 p-2 px-3 bg-[#fff7ed] border border-[#fed7aa] text-[#9a3412] text-xs rounded-2xl shadow-md font-medium whitespace-nowrap z-20 pointer-events-none"
          >
            {bubbleText}
          </motion.div>
        )}
      </AnimatePresence>

      <CutePuppy
        caption="Puppy joke 🐾"
        onClick={handleDogClick}
      />
    </div>
  );
};
