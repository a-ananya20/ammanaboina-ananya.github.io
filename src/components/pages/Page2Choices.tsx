import React from 'react';
import { motion } from 'motion/react';
import { CHOICES_PAGE_DATA } from '../../data/content';
import { BearCouple } from '../bears/BearCouple';
import { BoyBear, GirlBear } from '../bears/BearCharacters';
import { Music, Mail, Cake, Clock } from 'lucide-react';
import { PageId } from '../../types';

interface Page2ChoicesProps {
  onSelectOption: (page: PageId) => void;
}

export const Page2Choices: React.FC<Page2ChoicesProps> = ({ onSelectOption }) => {
  return (
    <div
      id="page-2-choices"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-5xl mx-auto text-center"
    >
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-2 mb-6"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#fef3c7] border border-[#fde68a] text-xs font-semibold text-[#92400e]">
          {CHOICES_PAGE_DATA.header}
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#3d2410] font-normal">
          {CHOICES_PAGE_DATA.subheader}
        </h2>
        <p className="text-xs sm:text-sm text-[#785434]">
          Pick any chapter to explore our little world. You can return here anytime.
        </p>
      </motion.div>

      {/* The Bear Couple Watching Affectionately */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8"
      >
        <BearCouple scene="question" className="scale-90" />
      </motion.div>

      {/* FOUR INTERACTIVE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-4xl px-2">
        {/* OPTION 1: 🎵 SONG & VOICE NOTE */}
        <motion.div
          id="choice-card-song"
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectOption('page3_song')}
          className="group relative cursor-pointer p-5 rounded-3xl bg-gradient-to-b from-[#fffbeb] to-[#fef3c7] border-2 border-[#fde68a] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between min-h-[260px]"
        >
          <div className="w-full flex justify-between items-center text-xs font-bold text-[#b45309]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#fde68a]/70">Chapter 1</span>
            <Music className="w-4 h-4 text-[#f59e0b]" />
          </div>

          {/* Tiny Scene: Bears sharing headphones */}
          <div className="my-2 relative w-32 h-28 flex items-center justify-center">
            <div className="scale-65 -mr-4">
              <BoyBear size="sm" headphones={true} eyeState="closed" lookDirection="right" />
            </div>
            <div className="scale-65 -ml-4">
              <GirlBear size="sm" headphones={true} eyeState="closed" lookDirection="left" />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="font-display text-lg text-[#78350f] font-semibold">
              Song & Voice Note
            </h3>
            <p className="text-xs text-[#92400e]/80 leading-tight">
              Something I sang and recorded just for you 🎧
            </p>
          </div>

          <div className="mt-3 text-xs font-semibold text-[#d97706] group-hover:underline">
            Listen now →
          </div>
        </motion.div>

        {/* OPTION 2: 💌 OPEN WHEN */}
        <motion.div
          id="choice-card-open-when"
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectOption('page4_open_when')}
          className="group relative cursor-pointer p-5 rounded-3xl bg-gradient-to-b from-[#faf5ff] to-[#ede9fe] border-2 border-[#ddd6fe] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between min-h-[260px]"
        >
          <div className="w-full flex justify-between items-center text-xs font-bold text-[#7c3aed]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#ddd6fe]/70">Chapter 2</span>
            <Mail className="w-4 h-4 text-[#8b5cf6]" />
          </div>

          {/* Tiny Scene: Cute physical envelope with wax heart */}
          <div className="my-2 relative w-28 h-28 flex items-center justify-center">
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-24 h-16 bg-[#fdf2f8] border-2 border-[#fbcfe8] rounded-xl shadow-md flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-[#f43f5e] flex items-center justify-center shadow-xs">
                  <span className="text-white text-xs">❤️</span>
                </div>
              </div>
              <span className="absolute bottom-1 font-handwritten text-xs text-[#be185d]">
                Open When...
              </span>
            </motion.div>
          </div>

          <div className="space-y-1">
            <h3 className="font-display text-lg text-[#5b21b6] font-semibold">
              Open When...
            </h3>
            <p className="text-xs text-[#6d28d9]/80 leading-tight">
              7 handwritten letters for every possible mood ✉️
            </p>
          </div>

          <div className="mt-3 text-xs font-semibold text-[#7c3aed] group-hover:underline">
            Open letters →
          </div>
        </motion.div>

        {/* OPTION 3: 🎂 BIRTHDAY GREETING */}
        <motion.div
          id="choice-card-birthday"
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectOption('page5_birthday')}
          className="group relative cursor-pointer p-5 rounded-3xl bg-gradient-to-b from-[#fff1f2] to-[#fee2e2] border-2 border-[#fecaca] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between min-h-[260px]"
        >
          <div className="w-full flex justify-between items-center text-xs font-bold text-[#e11d48]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#fecaca]/70">Chapter 3</span>
            <Cake className="w-4 h-4 text-[#f43f5e]" />
          </div>

          {/* Tiny Scene: Birthday Cake with candles */}
          <div className="my-2 relative w-28 h-28 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex flex-col items-center"
            >
              <div className="flex space-x-2 mb-0.5">
                <span className="text-xs animate-bounce">🕯️</span>
                <span className="text-xs animate-bounce delay-100">🕯️</span>
                <span className="text-xs animate-bounce delay-200">🕯️</span>
              </div>
              <div className="w-20 h-9 bg-[#fda4af] rounded-t-xl border border-[#fb7185] flex items-center justify-center shadow-xs">
                <div className="w-16 h-2 bg-[#fff1f2] rounded-full" />
              </div>
              <div className="w-24 h-4 bg-[#fff1f2] border-t-2 border-[#f43f5e] rounded-b-md shadow-xs" />
            </motion.div>
          </div>

          <div className="space-y-1">
            <h3 className="font-display text-lg text-[#9f1239] font-semibold">
              Birthday Greeting
            </h3>
            <p className="text-xs text-[#be185d]/80 leading-tight">
              Light your candles and read my birthday wish 🎂
            </p>
          </div>

          <div className="mt-3 text-xs font-semibold text-[#e11d48] group-hover:underline">
            Light candles →
          </div>
        </motion.div>

        {/* OPTION 4: 💫 FUTURE US */}
        <motion.div
          id="choice-card-future"
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectOption('page6_future')}
          className="group relative cursor-pointer p-5 rounded-3xl bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] border-2 border-[#bae6fd] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between min-h-[260px]"
        >
          <div className="w-full flex justify-between items-center text-xs font-bold text-[#0284c7]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#bae6fd]/70">Chapter 4</span>
            <Clock className="w-4 h-4 text-[#0ea5e9]" />
          </div>

          {/* Tiny Scene: Two bears gazing at future */}
          <div className="my-2 relative w-32 h-28 flex items-center justify-center">
            <div className="scale-65 -mr-4">
              <BoyBear size="sm" eyeState="open" lookDirection="right" />
            </div>
            <div className="scale-65 -ml-4">
              <GirlBear size="sm" eyeState="open" lookDirection="left" />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="font-display text-lg text-[#075985] font-semibold">
              Future Us
            </h3>
            <p className="text-xs text-[#0369a1]/80 leading-tight">
              Studying, dream jobs, our families, and 2027 letter ✨
            </p>
          </div>

          <div className="mt-3 text-xs font-semibold text-[#0284c7] group-hover:underline">
            View our future →
          </div>
        </motion.div>
      </div>
    </div>
  );
};
