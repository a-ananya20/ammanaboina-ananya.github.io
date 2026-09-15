import React from 'react';
import { motion } from 'motion/react';
import { BoyBear, GirlBear, CutePuppy } from './BearCharacters';
import { Heart, Camera, Sparkles } from 'lucide-react';

export const FamilyPortrait: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center select-none w-full max-w-2xl mx-auto ${className}`}>
      {/* Golden Wooden Picture Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full rounded-2xl sm:rounded-3xl p-2 min-[360px]:p-3 sm:p-6 bg-[#fffbf5] border-4 sm:border-8 border-[#d4af37] shadow-xl overflow-hidden"
        style={{
          boxShadow: '0 20px 35px -10px rgba(180, 83, 9, 0.15), 0 0 0 2px #b45309',
        }}
      >
        {/* Frame Hanging Wire/Ribbon Detail at top */}
        <div className="flex items-center justify-center mb-1 sm:mb-2">
          <div className="flex items-center space-x-1.5 bg-[#b45309] text-white px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-md z-30">
            <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Our Family Portrait 📸</span>
          </div>
        </div>

        {/* Vintage Photo Corner Accents */}
        <div className="absolute top-2 left-2 w-3 sm:w-5 h-3 sm:h-5 border-t-2 border-l-2 border-[#b45309]/50 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 sm:w-5 h-3 sm:h-5 border-t-2 border-r-2 border-[#b45309]/50 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 sm:w-5 h-3 sm:h-5 border-b-2 border-l-2 border-[#b45309]/50 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 sm:w-5 h-3 sm:h-5 border-b-2 border-r-2 border-[#b45309]/50 rounded-br-sm pointer-events-none" />

        {/* Cohesive Group Picture Content */}
        <div className="relative pt-1 sm:pt-2 pb-1 px-0.5 sm:px-2 flex flex-col items-center overflow-hidden rounded-xl">
          {/* Subtle Warm Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fef3c7]/50 via-transparent to-[#fed7aa]/30 rounded-xl pointer-events-none" />

          {/* Fluid responsive container that fits phone screens without clipping */}
          <div className="w-full flex flex-col items-center">
            {/* BACK ROW: The 4 Loving Parents Standing Together Proudly */}
            <div className="relative z-10 flex items-end justify-center -space-x-1 min-[380px]:-space-x-2 sm:-space-x-4">
              {/* 1. Mohan's Dad (No specs) */}
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center text-[7.5px] min-[360px]:text-[8.5px] sm:text-xs font-bold text-[#78350f] bg-[#fef3c7] px-1 sm:px-2 py-0.5 rounded-full border border-[#fde68a] mb-0.5 sm:mb-1 shadow-2xs z-20 leading-tight">
                  <span className="text-[6.5px] min-[360px]:text-[7.5px] sm:hidden opacity-80 leading-none">Mohan's</span>
                  <span className="sm:hidden leading-tight">Dad 🐻</span>
                  <span className="hidden sm:inline">Mohan's Dad 🐻</span>
                </div>
                <BoyBear size="portrait" pose="idle" eyeState="open" lookDirection="right" />
              </div>

              {/* 2. Mohan's Mom */}
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center text-[7.5px] min-[360px]:text-[8.5px] sm:text-xs font-bold text-[#78350f] bg-[#fef3c7] px-1 sm:px-2 py-0.5 rounded-full border border-[#fde68a] mb-0.5 sm:mb-1 shadow-2xs z-20 leading-tight">
                  <span className="text-[6.5px] min-[360px]:text-[7.5px] sm:hidden opacity-80 leading-none">Mohan's</span>
                  <span className="sm:hidden leading-tight">Mom 🌸</span>
                  <span className="hidden sm:inline">Mohan's Mom 🌸</span>
                </div>
                <GirlBear size="portrait" pose="happy" eyeState="happy" lookDirection="right" />
              </div>

              {/* 3. Ananya's Mom */}
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center text-[7.5px] min-[360px]:text-[8.5px] sm:text-xs font-bold text-[#7c3aed] bg-[#ede9fe] px-1 sm:px-2 py-0.5 rounded-full border border-[#ddd6fe] mb-0.5 sm:mb-1 shadow-2xs z-20 leading-tight">
                  <span className="text-[6.5px] min-[360px]:text-[7.5px] sm:hidden opacity-80 leading-none">Ananya's</span>
                  <span className="sm:hidden leading-tight">Mom 🌸</span>
                  <span className="hidden sm:inline">Ananya's Mom 🌸</span>
                </div>
                <GirlBear size="portrait" pose="happy" eyeState="happy" lookDirection="left" />
              </div>

              {/* 4. Ananya's Dad (No tie or facial artifact) */}
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center text-[7.5px] min-[360px]:text-[8.5px] sm:text-xs font-bold text-[#7c3aed] bg-[#ede9fe] px-1 sm:px-2 py-0.5 rounded-full border border-[#ddd6fe] mb-0.5 sm:mb-1 shadow-2xs z-20 leading-tight">
                  <span className="text-[6.5px] min-[360px]:text-[7.5px] sm:hidden opacity-80 leading-none">Ananya's</span>
                  <span className="sm:hidden leading-tight">Dad 🐻</span>
                  <span className="hidden sm:inline">Ananya's Dad 🐻</span>
                </div>
                <BoyBear size="portrait" pose="idle" eyeState="open" lookDirection="left" />
              </div>
            </div>

            {/* FRONT ROW: The Sibling Bears & The Couple in the Center */}
            <div className="relative z-20 flex items-end justify-center -space-x-1 min-[380px]:-space-x-2 sm:-space-x-3 -mt-2 sm:-mt-6">
              {/* 5. Brother Bear (Left) */}
              <div className="flex flex-col items-center text-center">
                <BoyBear size="portrait-sm" pose="celebrating" eyeState="wink" lookDirection="right" />
                <span className="text-[7.5px] min-[360px]:text-[8.5px] sm:text-[10px] font-bold text-[#1e40af] bg-[#dbeafe] px-1.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap -mt-0.5 sm:-mt-1 z-20">
                  Brother 🧢
                </span>
              </div>

              {/* 6. MOHAN (Center Left) */}
              <div className="flex flex-col items-center text-center z-30">
                <BoyBear
                  size="portrait"
                  pose="holding_hands"
                  eyeState="open"
                  lookDirection="right"
                  blushing={true}
                />
                <span className="text-[8.5px] min-[360px]:text-[9.5px] sm:text-xs font-black text-[#92400e] bg-[#fef3c7] px-1.5 min-[360px]:px-2.5 sm:px-3 py-0.5 rounded-full border border-[#f59e0b] shadow-xs whitespace-nowrap -mt-0.5 sm:-mt-1 z-20">
                  Mohan 🐻
                </span>
              </div>

              {/* Heart between Couple */}
              <div className="flex flex-col items-center z-40 mb-4 sm:mb-10 -mx-0.5 sm:-mx-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Heart className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[#ec4899] fill-current drop-shadow-md" />
                </motion.div>
              </div>

              {/* 7. ANANYA (Center Right) */}
              <div className="flex flex-col items-center text-center z-30">
                <GirlBear
                  size="portrait"
                  pose="holding_hands"
                  eyeState="open"
                  lookDirection="left"
                  blushing={true}
                />
                <span className="text-[8.5px] min-[360px]:text-[9.5px] sm:text-xs font-black text-[#7c3aed] bg-[#ede9fe] px-1.5 min-[360px]:px-2.5 sm:px-3 py-0.5 rounded-full border border-[#a855f7] shadow-xs whitespace-nowrap -mt-0.5 sm:-mt-1 z-20">
                  Ananya 🌸
                </span>
              </div>

              {/* 8. Sister Bear (Right) */}
              <div className="flex flex-col items-center text-center">
                <GirlBear size="portrait-sm" pose="celebrating" eyeState="happy" lookDirection="left" />
                <span className="text-[7.5px] min-[360px]:text-[8.5px] sm:text-[10px] font-bold text-[#be185d] bg-[#fce7f3] px-1.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap -mt-0.5 sm:-mt-1 z-20">
                  Sister 🎀
                </span>
              </div>
            </div>

            {/* FRONT & CENTER COMPANION: The Loyal Puppy */}
            <div className="relative z-30 mt-2 sm:mt-3 flex items-center justify-center max-w-full px-1">
              <div className="bg-[#ffffff]/95 px-2 min-[360px]:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#fde68a] shadow-xs flex items-center space-x-1 sm:space-x-2 max-w-full">
                <CutePuppy action="wagging" caption="" className="scale-65 min-[360px]:scale-75 sm:scale-90 origin-center -my-1 shrink-0" />
                <span className="text-[8px] min-[360px]:text-[9.5px] sm:text-[11px] font-bold text-[#b45309] leading-tight">
                  And our puppy girl right at the center! 🐾
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Frame Plaque / Engraved Inscription */}
        <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t-2 border-[#fef3c7] text-center space-y-0.5 relative z-30">
          <h4 className="font-display text-xs sm:text-lg text-[#78350f] font-bold leading-snug">
            The Bear Family — United With Love & Laughter
          </h4>
          <p className="text-[10px] sm:text-xs text-[#92400e] italic leading-tight">
            "Everyone together in one warm, forever home."
          </p>
        </div>
      </motion.div>
    </div>
  );
};
