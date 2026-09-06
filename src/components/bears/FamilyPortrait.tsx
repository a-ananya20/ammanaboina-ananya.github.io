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
        className="relative w-full rounded-3xl p-4 sm:p-6 bg-[#fffbf5] border-8 border-[#d4af37] shadow-xl"
        style={{
          boxShadow: '0 20px 35px -10px rgba(180, 83, 9, 0.15), 0 0 0 2px #b45309',
        }}
      >
        {/* Frame Hanging Wire/Ribbon Detail at top */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-[#b45309] text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
          <Camera className="w-3.5 h-3.5" />
          <span>Our Family Portrait 📸</span>
        </div>

        {/* Vintage Photo Corner Accents */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#b45309]/50 rounded-tl-sm" />
        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#b45309]/50 rounded-tr-sm" />
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#b45309]/50 rounded-bl-sm" />
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#b45309]/50 rounded-br-sm" />

        {/* Cohesive Group Picture Content */}
        <div className="relative pt-4 pb-2 px-2 flex flex-col items-center overflow-hidden">
          {/* Subtle Warm Backdrop & Fairy Lights */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fef3c7]/50 via-transparent to-[#fed7aa]/30 rounded-2xl pointer-events-none" />

          {/* BACK ROW: The 4 Loving Parents Standing Together Proudly */}
          <div className="relative z-10 flex items-end justify-center -space-x-4 sm:-space-x-6 mb-[-28px] sm:mb-[-34px]">
            {/* 1. Boy Bear's Dad */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <BoyBear size="md" pose="idle" eyeState="open" lookDirection="right" />
                {/* Round Spectacles for Dad */}
                <svg className="absolute top-[26px] left-[38px] w-12 h-6 pointer-events-none" viewBox="0 0 50 25">
                  <circle cx="15" cy="12" r="7" stroke="#475569" strokeWidth="2" fill="none" />
                  <circle cx="35" cy="12" r="7" stroke="#475569" strokeWidth="2" fill="none" />
                  <line x1="22" y1="12" x2="28" y2="12" stroke="#475569" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-[#78350f] bg-[#fef3c7] px-2 py-0.5 rounded-full border border-[#fde68a] -mt-1 shadow-2xs">
                Boy's Dad 👓
              </span>
            </div>

            {/* 2. Boy Bear's Mom */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <GirlBear size="md" pose="happy" eyeState="happy" lookDirection="right" />
                {/* Cozy Shawl brooch */}
                <div className="absolute top-[48px] left-[58px] w-3 h-3 rounded-full bg-[#f59e0b] border border-[#d97706] shadow-2xs pointer-events-none" />
              </div>
              <span className="text-[10px] font-bold text-[#78350f] bg-[#fef3c7] px-2 py-0.5 rounded-full border border-[#fde68a] -mt-1 shadow-2xs">
                Boy's Mom 🌸
              </span>
            </div>

            {/* 3. Girl Bear's Mom */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <GirlBear size="md" pose="happy" eyeState="happy" lookDirection="left" />
                {/* Elegant Pearl Necklace */}
                <div className="absolute top-[52px] left-[52px] flex space-x-1 pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-2xs" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-2xs" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-2xs" />
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#7c3aed] bg-[#ede9fe] px-2 py-0.5 rounded-full border border-[#ddd6fe] -mt-1 shadow-2xs">
                Girl's Mom 📿
              </span>
            </div>

            {/* 4. Girl Bear's Dad */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <BoyBear size="md" pose="idle" eyeState="open" lookDirection="left" />
                {/* Navy Tie */}
                <svg className="absolute top-[48px] left-[60px] w-4 h-9 pointer-events-none" viewBox="0 0 20 40">
                  <polygon points="10,0 15,10 12,35 10,40 8,35 5,10" fill="#1e3a8a" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-[#7c3aed] bg-[#ede9fe] px-2 py-0.5 rounded-full border border-[#ddd6fe] -mt-1 shadow-2xs">
                Girl's Dad 👔
              </span>
            </div>
          </div>

          {/* FRONT ROW: The Sibling Bears & The Couple in the Center */}
          <div className="relative z-20 flex items-end justify-center -space-x-3 sm:-space-x-5">
            {/* 5. Brother Bear (Left) */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <BoyBear size="sm" pose="celebrating" eyeState="wink" lookDirection="right" />
                {/* Backwards Red Cap */}
                <div className="absolute top-[12px] left-[34px] w-7 h-4 bg-[#ef4444] rounded-t-full border border-[#b91c1c] shadow-2xs pointer-events-none" />
              </div>
              <span className="text-[9px] font-bold text-[#1e40af] bg-[#dbeafe] px-1.5 py-0.5 rounded-full -mt-2 shadow-2xs">
                Brother 🧢
              </span>
            </div>

            {/* 6. BOY BEAR (Center Left) */}
            <div className="flex flex-col items-center text-center z-30">
              <BoyBear
                size="md"
                pose="holding_hands"
                eyeState="open"
                lookDirection="right"
                blushing={true}
              />
              <span className="text-[11px] font-extrabold text-[#92400e] bg-[#fef3c7] px-2.5 py-0.5 rounded-full border border-[#f59e0b] -mt-2 shadow-xs">
                Boy Bear 🐻
              </span>
            </div>

            {/* Heart between Couple */}
            <div className="flex flex-col items-center z-40 mb-10 -mx-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart className="w-7 h-7 text-[#ec4899] fill-current drop-shadow-md" />
              </motion.div>
            </div>

            {/* 7. GIRL BEAR (Center Right) */}
            <div className="flex flex-col items-center text-center z-30">
              <GirlBear
                size="md"
                pose="holding_hands"
                eyeState="open"
                lookDirection="left"
                blushing={true}
              />
              <span className="text-[11px] font-extrabold text-[#7c3aed] bg-[#ede9fe] px-2.5 py-0.5 rounded-full border border-[#a855f7] -mt-2 shadow-xs">
                Girl Bear 🐻
              </span>
            </div>

            {/* 8. Sister Bear (Right) */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <GirlBear size="sm" pose="celebrating" eyeState="happy" lookDirection="left" />
                {/* Twin Pink Ribbons */}
                <div className="absolute top-[16px] left-[32px] w-2.5 h-2.5 bg-[#ec4899] rounded-full shadow-2xs pointer-events-none" />
                <div className="absolute top-[16px] right-[32px] w-2.5 h-2.5 bg-[#ec4899] rounded-full shadow-2xs pointer-events-none" />
              </div>
              <span className="text-[9px] font-bold text-[#be185d] bg-[#fce7f3] px-1.5 py-0.5 rounded-full -mt-2 shadow-2xs">
                Sister 🎀
              </span>
            </div>
          </div>

          {/* FRONT & CENTER COMPANION: The Loyal Puppy! */}
          <div className="relative z-30 -mt-5 flex items-center justify-center">
            <div className="bg-[#ffffff]/90 px-3 py-1 rounded-full border border-[#fde68a] shadow-xs flex items-center space-x-2">
              <CutePuppy size="sm" />
              <span className="text-[10px] font-bold text-[#b45309]">
                And our puppy girl right at the center! 🐾
              </span>
            </div>
          </div>
        </div>

        {/* Frame Plaque / Engraved Inscription */}
        <div className="mt-4 pt-3 border-t-2 border-[#fef3c7] text-center space-y-0.5">
          <h4 className="font-display text-base sm:text-lg text-[#78350f] font-bold">
            The Bear Family — United With Love & Laughter
          </h4>
          <p className="text-xs text-[#92400e] italic">
            "Everyone together in one warm, forever home."
          </p>
        </div>
      </motion.div>
    </div>
  );
};
