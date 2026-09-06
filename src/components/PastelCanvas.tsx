import React from 'react';
import { motion } from 'motion/react';

interface PastelCanvasProps {
  theme?: 'pastel-warm' | 'pastel-lavender' | 'pastel-sky' | 'moonlit-intro';
  children?: React.ReactNode;
}

export const PastelCanvas: React.FC<PastelCanvasProps> = ({
  theme = 'pastel-warm',
  children,
}) => {
  const getBackgroundClasses = () => {
    switch (theme) {
      case 'moonlit-intro':
        return 'bg-gradient-to-b from-[#1a2035] via-[#242b47] to-[#363a5d] text-[#f8fafc]';
      case 'pastel-lavender':
        return 'bg-gradient-to-b from-[#faf5ff] via-[#f3e8ff] to-[#faf6f0] text-[#3b0764]';
      case 'pastel-sky':
        return 'bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#faf6f0] text-[#075985]';
      case 'pastel-warm':
      default:
        return 'bg-gradient-to-b from-[#fffbeb] via-[#fef3c7]/40 to-[#faf6f0] text-[#451a03]';
    }
  };

  return (
    <div className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700 ${getBackgroundClasses()}`}>
      {/* Floating Gentle Ambient Clouds / Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {theme === 'moonlit-intro' ? (
          <>
            {/* Glowing Moon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 right-10 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#fef08a] to-[#fffbeb] shadow-[0_0_50px_rgba(254,240,138,0.45)] flex items-center justify-center opacity-90"
            >
              <div className="w-6 h-6 rounded-full bg-[#fde047]/30 absolute top-5 left-5" />
              <div className="w-4 h-4 rounded-full bg-[#fde047]/20 absolute bottom-7 right-7" />
            </motion.div>

            {/* Twinkling gentle stars */}
            {[
              { t: '15%', l: '12%', s: 4 },
              { t: '25%', l: '35%', s: 3 },
              { t: '18%', l: '70%', s: 5 },
              { t: '40%', l: '85%', s: 3 },
              { t: '32%', l: '20%', s: 4 },
            ].map((star, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.2, 0.9] }}
                transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ top: star.t, left: star.l, width: star.s, height: star.s }}
                className="absolute rounded-full bg-[#fef9c3] shadow-[0_0_6px_#fef08a]"
              />
            ))}
          </>
        ) : (
          <>
            {/* Soft Pastel Aura Orbs */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], x: [0, 10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#fbcfe8]/25 blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], y: [0, -15, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#fed7aa]/25 blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.06, 1], x: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-[#ddd6fe]/25 blur-3xl"
            />
          </>
        )}
      </div>

      {/* Main Page Content */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};
