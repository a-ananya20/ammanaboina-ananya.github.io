/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageId } from './types';
import { PastelCanvas } from './components/PastelCanvas';
import { Page1CrazyQuestion } from './components/pages/Page1CrazyQuestion';
import { Page2Choices } from './components/pages/Page2Choices';
import { Page3SongVoice } from './components/pages/Page3SongVoice';
import { Page4OpenWhen } from './components/pages/Page4OpenWhen';
import { Page5Birthday } from './components/pages/Page5Birthday';
import { Page6FutureMe } from './components/pages/Page6FutureMe';
import { DogCompanion } from './components/DogCompanion';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('page1_question');

  // Smooth scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Canvas theme mapping
  const getTheme = () => {
    switch (currentPage) {
      case 'page4_open_when':
        return 'pastel-lavender';
      case 'page6_future':
        return 'pastel-sky';
      case 'page1_question':
      case 'page2_choices':
      case 'page3_song':
      case 'page5_birthday':
      default:
        return 'pastel-warm';
    }
  };

  return (
    <PastelCanvas theme={getTheme()}>
      <main className="relative z-10 w-full min-h-screen flex flex-col justify-center px-3 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          {/* PAGE 1: THE CRAZY QUESTION */}
          {currentPage === 'page1_question' && (
            <motion.div
              key="page1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Page1CrazyQuestion
                onYesAnswered={() => setCurrentPage('page2_choices')}
              />
            </motion.div>
          )}

          {/* PAGE 2: THE FOUR CHOICES */}
          {currentPage === 'page2_choices' && (
            <motion.div
              key="page2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Page2Choices
                onSelectOption={(targetPage) => setCurrentPage(targetPage)}
              />
            </motion.div>
          )}

          {/* PAGE 3: SONG / VOICE NOTE */}
          {currentPage === 'page3_song' && (
            <motion.div
              key="page3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Page3SongVoice
                onBackToChoices={() => setCurrentPage('page2_choices')}
                onNextChapter={() => setCurrentPage('page4_open_when')}
              />
            </motion.div>
          )}

          {/* PAGE 4: OPEN WHEN LETTERS */}
          {currentPage === 'page4_open_when' && (
            <motion.div
              key="page4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Page4OpenWhen
                onBackToChoices={() => setCurrentPage('page2_choices')}
                onNextChapter={() => setCurrentPage('page5_birthday')}
              />
            </motion.div>
          )}

          {/* PAGE 5: BIRTHDAY GREETING & CANDLE LIGHTING */}
          {currentPage === 'page5_birthday' && (
            <motion.div
              key="page5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Page5Birthday
                onBackToChoices={() => setCurrentPage('page2_choices')}
                onNextChapter={() => setCurrentPage('page6_future')}
              />
            </motion.div>
          )}

          {/* PAGE 6: MESSAGE FROM FUTURE ME */}
          {currentPage === 'page6_future' && (
            <motion.div
              key="page6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Page6FutureMe
                onBackToChoices={() => setCurrentPage('page2_choices')}
                onRestartStory={() => setCurrentPage('page1_question')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Dog Companion in the bottom corner with playful inside jokes */}
      <DogCompanion mode="floating" />
    </PastelCanvas>
  );
}
