import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FUTURE_SCENES, FUTURE_LETTER_DATA } from '../../data/content';
import { BearCouple } from '../bears/BearCouple';
import { FamilyPortrait } from '../bears/FamilyPortrait';
import { ArrowLeft, RotateCcw, Mail, Sparkles, CheckCircle2, ChevronDown, Heart } from 'lucide-react';
import { DogCompanion } from '../DogCompanion';

interface Page6FutureMeProps {
  onBackToChoices: () => void;
  onRestartStory: () => void;
}

export const Page6FutureMe: React.FC<Page6FutureMeProps> = ({
  onBackToChoices,
  onRestartStory,
}) => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [hasFinishedLetter, setHasFinishedLetter] = useState(false);

  const handleOpenLetter = () => {
    setIsLetterOpen(true);
  };

  const handleLetterCompleted = () => {
    setHasFinishedLetter(true);
  };

  const studyScene = FUTURE_SCENES.find((s) => s.id === 'study') || FUTURE_SCENES[0];
  const careerScene = FUTURE_SCENES.find((s) => s.id === 'career') || FUTURE_SCENES[1];
  const familyScene = FUTURE_SCENES.find((s) => s.id === 'family') || FUTURE_SCENES[2];

  return (
    <div
      id="page-6-future-us"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto text-center"
    >
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center mb-6">
        <button
          onClick={onBackToChoices}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#ffffff]/80 hover:bg-[#ffffff] text-[#78350f] text-xs font-semibold shadow-xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Chapters</span>
        </button>

        <span className="text-xs font-bold text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">
          Chapter 4: Future Us
        </span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1 mb-10"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#0c4a6e] font-normal">
          Future Us 💫
        </h2>
        <p className="text-xs sm:text-sm text-[#0369a1] max-w-md mx-auto">
          A continuous journey through our future together — scroll down through each milestone we are building, hand in hand.
        </p>
      </motion.div>

      {/* ===================================================================== */}
      {/* SECTION 1: STUDYING TOGETHER                                         */}
      {/* ===================================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="w-full my-6 p-6 sm:p-8 rounded-3xl bg-[#ffffff]/90 border-2 border-[#bae6fd] shadow-md flex flex-col items-center"
      >
        <div className="space-y-1 mb-4 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7] font-bold">
            Milestone 01
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-[#0c4a6e] font-semibold">
            {studyScene.title}
          </h3>
          <p className="text-xs text-[#0369a1] font-medium">
            {studyScene.subtitle}
          </p>
        </div>

        {/* The Studying Bear Scene */}
        <div className="my-3 w-full flex justify-center">
          <BearCouple scene="studying" />
        </div>

        <p className="text-xs sm:text-sm text-[#334155] max-w-lg leading-relaxed mt-2">
          {studyScene.description}
        </p>

        {/* Scroll down indicator */}
        <div className="mt-6 flex flex-col items-center text-[#0284c7]/70">
          <span className="text-[10px] font-bold uppercase tracking-wider">Scroll to next milestone</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
        </div>
      </motion.section>

      {/* ===================================================================== */}
      {/* SECTION 2: OUR DREAM JOBS                                            */}
      {/* ===================================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="w-full my-6 p-6 sm:p-8 rounded-3xl bg-[#ffffff]/90 border-2 border-[#bae6fd] shadow-md flex flex-col items-center"
      >
        <div className="space-y-1 mb-4 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7] font-bold">
            Milestone 02
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-[#0c4a6e] font-semibold">
            {careerScene.title}
          </h3>
          <p className="text-xs text-[#0369a1] font-medium">
            {careerScene.subtitle}
          </p>
        </div>

        {/* The Career Celebrating Bear Scene */}
        <div className="my-3 w-full flex justify-center">
          <BearCouple scene="career" />
        </div>

        <p className="text-xs sm:text-sm text-[#334155] max-w-lg leading-relaxed mt-2">
          {careerScene.description}
        </p>

        {/* Scroll down indicator */}
        <div className="mt-6 flex flex-col items-center text-[#0284c7]/70">
          <span className="text-[10px] font-bold uppercase tracking-wider">Scroll to our families</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
        </div>
      </motion.section>

      {/* ===================================================================== */}
      {/* SECTION 3: OUR FAMILIES TOGETHER (Unified Group Portrait)             */}
      {/* ===================================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="w-full my-6 p-6 sm:p-8 rounded-3xl bg-[#ffffff]/90 border-2 border-[#bae6fd] shadow-md flex flex-col items-center"
      >
        <div className="space-y-1 mb-5 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7] font-bold">
            Milestone 03
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-[#0c4a6e] font-semibold">
            {familyScene.title}
          </h3>
          <p className="text-xs text-[#0369a1] font-medium">
            {familyScene.subtitle}
          </p>
        </div>

        {/* Unified Family Portrait (Everyone gathered together in one frame) */}
        <div className="w-full my-2 flex justify-center">
          <FamilyPortrait />
        </div>

        <p className="text-xs sm:text-sm text-[#334155] max-w-lg leading-relaxed mt-4">
          {familyScene.description}
        </p>

        {/* Scroll down indicator to letter */}
        <div className="mt-6 flex flex-col items-center text-[#0284c7]/70">
          <span className="text-[10px] font-bold uppercase tracking-wider">Lastly: A Letter Across Time</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
        </div>
      </motion.section>

      {/* ===================================================================== */}
      {/* SECTION 4: A LITTLE MESSAGE FROM FUTURE US (Unfolding Letter)          */}
      {/* ===================================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="w-full my-8 flex flex-col items-center"
      >
        <div className="space-y-1 mb-5 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7] font-bold">
            Across time to 2027
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-[#0c4a6e] font-semibold">
            A Little Message from Future Us
          </h3>
        </div>

        <AnimatePresence mode="wait">
          {!isLetterOpen ? (
            /* SEALED ENVELOPE (Lifts & Unfolds on click) */
            <motion.div
              key="closed-future-letter"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpenLetter}
              className="group cursor-pointer mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] border-2 border-[#93c5fd] shadow-lg flex flex-col items-center justify-center space-y-3 w-full max-w-lg"
            >
              <div className="w-14 h-14 rounded-full bg-[#0284c7] text-white flex items-center justify-center shadow-md font-mono font-bold text-xs">
                2027
              </div>

              <div className="space-y-1 text-center">
                <span className="text-xs font-mono uppercase text-[#0369a1] font-bold">
                  {FUTURE_LETTER_DATA.date}
                </span>
                <h4 className="font-display text-lg text-[#0c4a6e] font-semibold">
                  A letter waiting in our future
                </h4>
              </div>

              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0284c7] pt-1">
                <Mail className="w-3.5 h-3.5" />
                <span>Tap to unseal and unfold letter →</span>
              </div>
            </motion.div>
          ) : (
            /* UNFOLDED LETTER DISPLAY */
            <motion.div
              key="open-future-letter"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="relative bg-[#fffdfa] rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#bae6fd] text-left text-[#334155] space-y-4 w-full max-w-2xl"
              style={{
                backgroundImage: 'radial-gradient(#e0f2fe 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
              }}
            >
              <div className="pb-3 border-b border-[#bae6fd] flex justify-between items-center">
                <span className="font-mono text-xs text-[#0284c7] font-bold">
                  {FUTURE_LETTER_DATA.date}
                </span>
                <span className="font-handwritten text-lg text-[#0284c7]">
                  Future Us
                </span>
              </div>

              <h4 className="font-handwritten text-2xl sm:text-3xl text-[#0c4a6e] font-semibold">
                {FUTURE_LETTER_DATA.salutation}
              </h4>

              <div className="space-y-3 font-handwritten text-xl sm:text-2xl text-[#1e293b] leading-relaxed">
                {FUTURE_LETTER_DATA.paragraphs.map((p, pIdx) => (
                  <motion.p
                    key={pIdx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + pIdx * 0.15 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              <div className="pt-4 border-t border-[#bae6fd] space-y-1">
                <p className="font-handwritten text-2xl text-[#0c4a6e]">
                  {FUTURE_LETTER_DATA.signOff}
                </p>
                {FUTURE_LETTER_DATA.postScript && (
                  <p className="font-handwritten text-lg text-[#0284c7] italic">
                    {FUTURE_LETTER_DATA.postScript}
                  </p>
                )}
              </div>

              {/* Action to trigger final bear kiss animation */}
              {!hasFinishedLetter && (
                <div className="pt-4 text-center">
                  <button
                    onClick={handleLetterCompleted}
                    className="px-6 py-2.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs shadow-md transition-colors cursor-pointer flex items-center space-x-1.5 mx-auto"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>I finished reading ❤️</span>
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* FINAL BEAR KISS ANIMATION (Boy comes close, Girl Bear kisses him lovingly!) */}
      <AnimatePresence>
        {hasFinishedLetter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 p-6 sm:p-8 rounded-3xl bg-[#fdf2f8] border-2 border-[#fbcfe8] text-center space-y-4 max-w-md mx-auto shadow-xl"
          >
            <div className="flex items-center justify-center space-x-2 text-sm text-[#be185d] font-bold">
              <Sparkles className="w-4 h-4 text-[#ec4899]" />
              <span>Here's to our forever story</span>
              <Sparkles className="w-4 h-4 text-[#ec4899]" />
            </div>

            {/* Boy Bear comes close and Girl Bear leans in for the kiss */}
            <div className="py-2">
              <BearCouple scene="hug_kiss" className="scale-105" />
            </div>

            <p className="text-xs text-[#9d174d] font-medium italic">
              "Loving you has always been the easiest, warmest choice of my life."
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Restart story option */}
      <div className="mt-14 space-y-3">
        <button
          onClick={onRestartStory}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-[#0369a1] hover:text-[#0c4a6e] bg-[#ffffff]/80 px-4 py-2 rounded-full border border-[#bae6fd] shadow-xs cursor-pointer transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Revisit our story from Chapter 1</span>
        </button>
      </div>

      {/* Dog companion inside joke */}
      <div className="mt-8">
        <DogCompanion customJoke="Woof! Even in 2027 I'm still your puppy girl! 🐾💍" />
      </div>
    </div>
  );
};
