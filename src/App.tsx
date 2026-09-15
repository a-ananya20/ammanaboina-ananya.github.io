/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageId } from './types';
import { PastelCanvas } from './components/PastelCanvas';
import { Page1CrazyQuestion } from './components/pages/Page1CrazyQuestion';
import { Page2Choices } from './components/pages/Page2Choices';
import { Page3SongVoice } from './components/pages/Page3SongVoice';
import { Page5Birthday } from './components/pages/Page5Birthday';
import { Page6FutureMe } from './components/pages/Page6FutureMe';

const VALID_PAGES: PageId[] = [
  'page1_question',
  'page2_choices',
  'page3_song',
  'page5_birthday',
  'page6_future',
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    return VALID_PAGES.includes(hash) ? hash : 'page1_question';
  });

  // Central navigation handler with safe browser history support
  const navigateTo = useCallback((page: PageId, pushHistory = true) => {
    setCurrentPage(page);
    try {
      if (pushHistory && typeof window !== 'undefined' && window.history?.pushState) {
        window.history.pushState({ page }, '', `#${page}`);
      }
    } catch {
      // Safe fallback for sandboxed iframes
    }
  }, []);

  // Listen to browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      try {
        if (e.state && e.state.page && VALID_PAGES.includes(e.state.page)) {
          setCurrentPage(e.state.page);
        } else if (window.location.hash) {
          const hash = window.location.hash.replace('#', '') as PageId;
          if (VALID_PAGES.includes(hash)) {
            setCurrentPage(hash);
          }
        }
      } catch {
        // Safe fallback
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Smooth scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Canvas theme mapping
  const getTheme = () => {
    switch (currentPage) {
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Page1CrazyQuestion
                onYesAnswered={() => navigateTo('page2_choices')}
              />
            </motion.div>
          )}

          {/* PAGE 2: THE CHOICES */}
          {currentPage === 'page2_choices' && (
            <motion.div
              key="page2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Page2Choices
                onSelectOption={(targetPage) => navigateTo(targetPage)}
                onBackToStart={() => navigateTo('page1_question')}
              />
            </motion.div>
          )}

          {/* PAGE 3: SONG */}
          {currentPage === 'page3_song' && (
            <motion.div
              key="page3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Page3SongVoice
                onBackToChoices={() => navigateTo('page2_choices')}
                onNextChapter={() => navigateTo('page5_birthday')}
              />
            </motion.div>
          )}

          {/* PAGE 5: BIRTHDAY GREETING & CANDLE LIGHTING */}
          {currentPage === 'page5_birthday' && (
            <motion.div
              key="page5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Page5Birthday
                onBackToChoices={() => navigateTo('page2_choices')}
                onNextChapter={() => navigateTo('page6_future')}
              />
            </motion.div>
          )}

          {/* PAGE 6: MESSAGE FROM FUTURE ME */}
          {currentPage === 'page6_future' && (
            <motion.div
              key="page6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Page6FutureMe
                onBackToChoices={() => navigateTo('page2_choices')}
                onRestartStory={() => navigateTo('page1_question')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PastelCanvas>
  );
}
