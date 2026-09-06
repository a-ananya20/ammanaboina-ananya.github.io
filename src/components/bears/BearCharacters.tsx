import React from 'react';
import { motion } from 'motion/react';

export type BearEyeState = 'open' | 'closed' | 'wink' | 'sleepy' | 'hearts' | 'surprised';
export type BearLookDir = 'left' | 'right' | 'center';

export interface BoyBearProps {
  pose?: 'idle' | 'happy' | 'shy' | 'holding_hands' | 'hug' | 'kiss' | 'study' | 'sleeping' | 'celebrating';
  eyeState?: BearEyeState;
  blushing?: boolean;
  lookDirection?: BearLookDir;
  headphones?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  id?: string;
}

export interface GirlBearProps {
  pose?: 'idle' | 'happy' | 'shy' | 'holding_hands' | 'hug' | 'kiss' | 'study' | 'sleeping' | 'celebrating';
  eyeState?: BearEyeState;
  blushing?: boolean;
  lookDirection?: BearLookDir;
  headphones?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  id?: string;
}

const sizeMap = {
  sm: 'w-24 h-28',
  md: 'w-32 h-36',
  lg: 'w-44 h-48',
  xl: 'w-56 h-64',
};

/* ========================================================================== */
/* 🐻 BOY BEAR COMPONENT (Consistent Caramel Brown Fur & Baby Blue Sweater)   */
/* ========================================================================== */
export const BoyBear: React.FC<BoyBearProps> = ({
  pose = 'idle',
  eyeState = 'open',
  blushing = false,
  lookDirection = 'right',
  headphones = false,
  size = 'md',
  className = '',
  onClick,
  id = 'boy-bear',
}) => {
  const eyeOffsetX = lookDirection === 'right' ? 2 : lookDirection === 'left' ? -2 : 0;

  return (
    <motion.div
      id={id}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.05 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      className={`relative select-none ${sizeMap[size]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      <svg viewBox="0 0 160 180" className="w-full h-full drop-shadow-md" fill="none">
        <defs>
          <linearGradient id="boyFur" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c58c58" />
            <stop offset="100%" stopColor="#a36e3c" />
          </linearGradient>
          <linearGradient id="boySweater" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="80" cy="172" rx="42" ry="7" fill="#856b54" opacity="0.25" />

        {/* Ears */}
        {/* Left Ear */}
        <circle cx="48" cy="42" r="16" fill="url(#boyFur)" stroke="#8e5d32" strokeWidth="2" />
        <circle cx="48" cy="42" r="9" fill="#fde4c8" />
        {/* Right Ear */}
        <circle cx="112" cy="42" r="16" fill="url(#boyFur)" stroke="#8e5d32" strokeWidth="2" />
        <circle cx="112" cy="42" r="9" fill="#fde4c8" />

        {/* Body (Baby Blue Sweater) */}
        <motion.path
          d="M48,110 C46,95 114,95 112,110 L118,162 C118,168 42,168 42,162 Z"
          fill="url(#boySweater)"
          stroke="#3b82f6"
          strokeWidth="2"
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Sweater Collar */}
        <ellipse cx="80" cy="102" rx="22" ry="7" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1.5" />
        {/* Sweater detail lines */}
        <line x1="80" y1="110" x2="80" y2="155" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Cute Feet / Paws */}
        <ellipse cx="58" cy="165" rx="14" ry="8" fill="url(#boyFur)" stroke="#8e5d32" strokeWidth="1.5" />
        <ellipse cx="58" cy="165" rx="7" ry="4" fill="#fde4c8" />
        <ellipse cx="102" cy="165" rx="14" ry="8" fill="url(#boyFur)" stroke="#8e5d32" strokeWidth="1.5" />
        <ellipse cx="102" cy="165" rx="7" ry="4" fill="#fde4c8" />

        {/* Arms based on pose */}
        {pose === 'study' ? (
          /* Arms on desk holding pencil */
          <g>
            <path d="M48,115 C42,130 52,148 70,145" stroke="url(#boySweater)" strokeWidth="14" strokeLinecap="round" />
            <circle cx="72" cy="145" r="7" fill="#fde4c8" />
            <line x1="72" y1="145" x2="80" y2="152" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        ) : pose === 'celebrating' ? (
          /* Arms up celebrating */
          <g>
            <path d="M46,118 C32,100 30,85 36,75" stroke="url(#boySweater)" strokeWidth="13" strokeLinecap="round" />
            <circle cx="36" cy="74" r="7" fill="#fde4c8" />
            <path d="M114,118 C128,100 130,85 124,75" stroke="url(#boySweater)" strokeWidth="13" strokeLinecap="round" />
            <circle cx="124" cy="74" r="7" fill="#fde4c8" />
          </g>
        ) : pose === 'hug' || pose === 'kiss' ? (
          /* Arm reaching right for hug */
          <g>
            <path d="M112,118 C125,122 140,126 148,132" stroke="url(#boySweater)" strokeWidth="14" strokeLinecap="round" />
            <circle cx="149" cy="132" r="7" fill="#fde4c8" />
          </g>
        ) : (
          /* Default relaxed arms */
          <g>
            <path d="M48,115 C40,128 42,142 52,148" stroke="url(#boySweater)" strokeWidth="13" strokeLinecap="round" />
            <circle cx="53" cy="148" r="6.5" fill="#fde4c8" />
            <path d="M112,115 C120,128 118,142 108,148" stroke="url(#boySweater)" strokeWidth="13" strokeLinecap="round" />
            <circle cx="107" cy="148" r="6.5" fill="#fde4c8" />
          </g>
        )}

        {/* Head */}
        <motion.g
          animate={
            pose === 'kiss'
              ? { rotate: 5, x: 4 }
              : pose === 'shy'
              ? { rotate: -4 }
              : { y: [0, -1.5, 0] }
          }
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: '80px', originY: '100px' }}
        >
          {/* Head Base Circle */}
          <ellipse cx="80" cy="68" rx="40" ry="36" fill="url(#boyFur)" stroke="#8e5d32" strokeWidth="2.2" />

          {/* Muzzle (Cream colored snout) */}
          <ellipse cx="80" cy="76" rx="20" ry="14" fill="#fde4c8" />

          {/* Cute Nose */}
          <path d="M76,69 Q80,67 84,69 Q80,75 76,69 Z" fill="#382414" />

          {/* Cute Mouth */}
          <path d="M80,73 L80,78 M76,78 Q80,82 84,78" stroke="#382414" strokeWidth="1.8" strokeLinecap="round" />

          {/* Eyes */}
          {eyeState === 'closed' || pose === 'kiss' || pose === 'sleeping' ? (
            /* Closed happy smiling eyes */
            <g stroke="#382414" strokeWidth="2.2" strokeLinecap="round">
              <path d="M62,60 Q67,65 72,60" />
              <path d="M88,60 Q93,65 98,60" />
            </g>
          ) : eyeState === 'wink' ? (
            /* One winking, one open */
            <g>
              <circle cx={67 + eyeOffsetX} cy="60" r="4.5" fill="#382414" />
              <circle cx={65.5 + eyeOffsetX} cy="58.5" r="1.5" fill="#ffffff" />
              <path d="M88,60 Q93,65 98,60" stroke="#382414" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          ) : eyeState === 'hearts' ? (
            /* Heart eyes */
            <g fill="#ef4444">
              <path d="M67,56 C65,54 62,56 62,59 C62,63 67,66 67,66 C67,66 72,63 72,59 C72,56 69,54 67,56 Z" />
              <path d="M93,56 C91,54 88,56 88,59 C88,63 93,66 93,66 C93,66 98,63 98,59 C98,56 95,54 93,56 Z" />
            </g>
          ) : (
            /* Open cute eyes with shine */
            <g>
              <circle cx={67 + eyeOffsetX} cy="60" r="4.5" fill="#382414" />
              <circle cx={65.5 + eyeOffsetX} cy="58.5" r="1.5" fill="#ffffff" />
              <circle cx={93 + eyeOffsetX} cy="60" r="4.5" fill="#382414" />
              <circle cx={91.5 + eyeOffsetX} cy="58.5" r="1.5" fill="#ffffff" />
            </g>
          )}

          {/* Rosy Blush Cheeks */}
          {(blushing || pose === 'shy' || pose === 'kiss' || pose === 'happy') && (
            <g>
              <ellipse cx="58" cy="70" rx="7" ry="4.5" fill="#f87171" opacity="0.6" />
              <ellipse cx="102" cy="70" rx="7" ry="4.5" fill="#f87171" opacity="0.6" />
            </g>
          )}

          {/* Headphones if wearing */}
          {headphones && (
            <g>
              {/* Headband */}
              <path d="M42,55 C42,28 118,28 118,55" stroke="#475569" strokeWidth="4" strokeLinecap="round" fill="none" />
              {/* Ear cushions */}
              <rect x="36" y="50" width="8" height="20" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
              <rect x="116" y="50" width="8" height="20" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
            </g>
          )}
        </motion.g>
      </svg>
    </motion.div>
  );
};

/* ========================================================================== */
/* 🐻 GIRL BEAR COMPONENT (Consistent Milk-Tea Fur, Ear Flower & Lavender Dress) */
/* ========================================================================== */
export const GirlBear: React.FC<GirlBearProps> = ({
  pose = 'idle',
  eyeState = 'open',
  blushing = true,
  lookDirection = 'left',
  headphones = false,
  size = 'md',
  className = '',
  onClick,
  id = 'girl-bear',
}) => {
  const eyeOffsetX = lookDirection === 'left' ? -2 : lookDirection === 'right' ? 2 : 0;

  return (
    <motion.div
      id={id}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.05 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      className={`relative select-none ${sizeMap[size]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      <svg viewBox="0 0 160 180" className="w-full h-full drop-shadow-md" fill="none">
        <defs>
          <linearGradient id="girlFur" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cfa175" />
            <stop offset="100%" stopColor="#b27f52" />
          </linearGradient>
          <linearGradient id="girlDress" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="80" cy="172" rx="40" ry="7" fill="#856b54" opacity="0.25" />

        {/* Ears */}
        {/* Left Ear */}
        <circle cx="48" cy="42" r="16" fill="url(#girlFur)" stroke="#9c683b" strokeWidth="2" />
        <circle cx="48" cy="42" r="9" fill="#fdf0e0" />
        {/* Daisy / Bow on Left Ear */}
        <g transform="translate(42, 36)">
          <circle cx="0" cy="-4" r="3.5" fill="#ffffff" />
          <circle cx="4" cy="0" r="3.5" fill="#ffffff" />
          <circle cx="0" cy="4" r="3.5" fill="#ffffff" />
          <circle cx="-4" cy="0" r="3.5" fill="#ffffff" />
          <circle cx="0" cy="0" r="3" fill="#fbbf24" />
        </g>

        {/* Right Ear */}
        <circle cx="112" cy="42" r="16" fill="url(#girlFur)" stroke="#9c683b" strokeWidth="2" />
        <circle cx="112" cy="42" r="9" fill="#fdf0e0" />

        {/* Dress / Body (Lavender Pinafore Dress) */}
        <motion.path
          d="M52,110 C50,96 110,96 108,110 L120,162 C120,168 40,168 40,162 Z"
          fill="url(#girlDress)"
          stroke="#a855f7"
          strokeWidth="2"
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
        {/* Scalloped Collar */}
        <path
          d="M62,102 Q70,110 80,105 Q90,110 98,102"
          fill="#ffffff"
          stroke="#d8b4fe"
          strokeWidth="1.5"
        />

        {/* Cute Feet / Paws */}
        <ellipse cx="58" cy="165" rx="13" ry="8" fill="url(#girlFur)" stroke="#9c683b" strokeWidth="1.5" />
        <ellipse cx="58" cy="165" rx="6.5" ry="4" fill="#fdf0e0" />
        <ellipse cx="102" cy="165" rx="13" ry="8" fill="url(#girlFur)" stroke="#9c683b" strokeWidth="1.5" />
        <ellipse cx="102" cy="165" rx="6.5" ry="4" fill="#fdf0e0" />

        {/* Arms based on pose */}
        {pose === 'study' ? (
          /* Arms on desk */
          <g>
            <path d="M112,115 C118,130 108,148 90,145" stroke="url(#girlDress)" strokeWidth="13" strokeLinecap="round" />
            <circle cx="88" cy="145" r="6.5" fill="#fdf0e0" />
            <line x1="88" y1="145" x2="80" y2="152" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        ) : pose === 'celebrating' ? (
          /* Arms up celebrating */
          <g>
            <path d="M46,118 C32,100 30,85 36,75" stroke="url(#girlDress)" strokeWidth="13" strokeLinecap="round" />
            <circle cx="36" cy="74" r="6.5" fill="#fdf0e0" />
            <path d="M114,118 C128,100 130,85 124,75" stroke="url(#girlDress)" strokeWidth="13" strokeLinecap="round" />
            <circle cx="124" cy="74" r="6.5" fill="#fdf0e0" />
          </g>
        ) : pose === 'hug' || pose === 'kiss' ? (
          /* Arm reaching left for hug */
          <g>
            <path d="M48,118 C35,122 20,126 12,132" stroke="url(#girlDress)" strokeWidth="13" strokeLinecap="round" />
            <circle cx="11" cy="132" r="6.5" fill="#fdf0e0" />
          </g>
        ) : (
          /* Default sweet folded or relaxed arms */
          <g>
            <path d="M48,115 C40,128 42,142 52,148" stroke="url(#girlDress)" strokeWidth="13" strokeLinecap="round" />
            <circle cx="53" cy="148" r="6.5" fill="#fdf0e0" />
            <path d="M112,115 C120,128 118,142 108,148" stroke="url(#girlDress)" strokeWidth="13" strokeLinecap="round" />
            <circle cx="107" cy="148" r="6.5" fill="#fdf0e0" />
          </g>
        )}

        {/* Head */}
        <motion.g
          animate={
            pose === 'kiss'
              ? { rotate: -6, x: -5 }
              : pose === 'shy'
              ? { rotate: 4 }
              : { y: [0, -1.5, 0] }
          }
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          style={{ originX: '80px', originY: '100px' }}
        >
          {/* Head Base */}
          <ellipse cx="80" cy="68" rx="39" ry="35" fill="url(#girlFur)" stroke="#9c683b" strokeWidth="2.2" />

          {/* Muzzle */}
          <ellipse cx="80" cy="76" rx="19" ry="13.5" fill="#fdf0e0" />

          {/* Nose */}
          <path d="M76,70 Q80,68 84,70 Q80,75 76,70 Z" fill="#382414" />

          {/* Mouth */}
          <path d="M80,74 L80,78 M76,78 Q80,82 84,78" stroke="#382414" strokeWidth="1.8" strokeLinecap="round" />

          {/* Eyes with eyelashes */}
          {eyeState === 'closed' || pose === 'kiss' || pose === 'sleeping' ? (
            /* Closed happy smiling eyes with eyelashes */
            <g stroke="#382414" strokeWidth="2.2" strokeLinecap="round">
              <path d="M62,60 Q67,65 72,60" />
              <line x1="61" y1="58" x2="58" y2="56" />
              <path d="M88,60 Q93,65 98,60" />
              <line x1="99" y1="58" x2="102" y2="56" />
            </g>
          ) : eyeState === 'wink' ? (
            /* One winking, one open */
            <g>
              <path d="M62,60 Q67,65 72,60" stroke="#382414" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="61" y1="58" x2="58" y2="56" stroke="#382414" strokeWidth="1.8" />
              <circle cx={93 + eyeOffsetX} cy="60" r="4.5" fill="#382414" />
              <circle cx={91.5 + eyeOffsetX} cy="58.5" r="1.5" fill="#ffffff" />
              <line x1="97" y1="56" x2="100" y2="54" stroke="#382414" strokeWidth="1.6" />
            </g>
          ) : eyeState === 'hearts' ? (
            /* Heart eyes */
            <g fill="#ec4899">
              <path d="M67,56 C65,54 62,56 62,59 C62,63 67,66 67,66 C67,66 72,63 72,59 C72,56 69,54 67,56 Z" />
              <path d="M93,56 C91,54 88,56 88,59 C88,63 93,66 93,66 C93,66 98,63 98,59 C98,56 95,54 93,56 Z" />
            </g>
          ) : (
            /* Open cute eyes with sparkle & delicate lashes */
            <g>
              <circle cx={67 + eyeOffsetX} cy="60" r="4.5" fill="#382414" />
              <circle cx={65.5 + eyeOffsetX} cy="58.5" r="1.5" fill="#ffffff" />
              <line x1="63" y1="56" x2="60" y2="54" stroke="#382414" strokeWidth="1.6" strokeLinecap="round" />

              <circle cx={93 + eyeOffsetX} cy="60" r="4.5" fill="#382414" />
              <circle cx={91.5 + eyeOffsetX} cy="58.5" r="1.5" fill="#ffffff" />
              <line x1="97" y1="56" x2="100" y2="54" stroke="#382414" strokeWidth="1.6" strokeLinecap="round" />
            </g>
          )}

          {/* Rosy Peach Blush Cheeks */}
          {blushing && (
            <g>
              <ellipse cx="58" cy="70" rx="7" ry="4.5" fill="#fb7185" opacity="0.65" />
              <ellipse cx="102" cy="70" rx="7" ry="4.5" fill="#fb7185" opacity="0.65" />
            </g>
          )}

          {/* Headphones if wearing */}
          {headphones && (
            <g>
              <path d="M42,55 C42,28 118,28 118,55" stroke="#475569" strokeWidth="4" strokeLinecap="round" fill="none" />
              <rect x="36" y="50" width="8" height="20" rx="4" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
              <rect x="116" y="50" width="8" height="20" rx="4" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
            </g>
          )}
        </motion.g>
      </svg>
    </motion.div>
  );
};

/* ========================================================================== */
/* 🐶 CUTE PUPPY COMPONENT (Recurring Inside Joke Companion)                  */
/* ========================================================================== */
export const CutePuppy: React.FC<{
  className?: string;
  action?: 'idle' | 'running' | 'wagging' | 'peek';
  caption?: string;
  onClick?: () => void;
}> = ({ className = '', action = 'wagging', caption = 'Woof! 🐾', onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: [-2, 2, -2] }}
      className={`relative inline-flex flex-col items-center select-none cursor-pointer ${className}`}
    >
      <svg viewBox="0 0 100 80" className="w-16 h-12 drop-shadow-sm" fill="none">
        {/* Little Puppy Body */}
        <ellipse cx="50" cy="50" rx="22" ry="16" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
        {/* Wagging Tail */}
        <motion.path
          d="M28,45 Q16,35 20,25"
          stroke="#ea580c"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ rotate: [-20, 20, -20] }}
          transition={{ duration: 0.3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: '28px', originY: '45px' }}
        />
        {/* Cute Legs */}
        <rect x="38" y="60" width="6" height="12" rx="3" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.2" />
        <rect x="56" y="60" width="6" height="12" rx="3" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.2" />
        {/* Head */}
        <circle cx="68" cy="38" r="16" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
        {/* Floppy Ears */}
        <ellipse cx="60" cy="30" rx="5" ry="10" fill="#c2410c" transform="rotate(-20 60 30)" />
        <ellipse cx="76" cy="30" rx="5" ry="10" fill="#c2410c" transform="rotate(20 76 30)" />
        {/* Eyes */}
        <circle cx="66" cy="36" r="2.2" fill="#431407" />
        <circle cx="74" cy="36" r="2.2" fill="#431407" />
        {/* Puppy Nose */}
        <ellipse cx="70" cy="42" rx="3" ry="2" fill="#431407" />
        <path d="M70,44 Q70,47 73,46" stroke="#431407" strokeWidth="1.2" strokeLinecap="round" />
        {/* Pink Tongue sticking out playfully */}
        <ellipse cx="70" cy="48" rx="2.5" ry="3.5" fill="#f43f5e" />
      </svg>
      {caption && (
        <span className="text-[10px] font-bold text-[#ea580c] bg-[#fff7ed] px-2 py-0.5 rounded-full border border-[#ffedd5] shadow-xs">
          {caption}
        </span>
      )}
    </motion.div>
  );
};
