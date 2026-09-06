import { AudioTrack, OpenWhenLetter, FutureLetterData } from '../types';

/**
 * =========================================================================
 * 🐻💌 BEAR SURPRISE WEBSITE - EASY CUSTOMIZATION FILE
 * =========================================================================
 * You can edit all your texts, question, his name, letters, and audio here!
 * =========================================================================
 */

// --- 1. NAMES & NICKNAMES ---
export const BOYFRIEND_DATA = {
  name: "Alex",                  // ✏️ His real name
  nickname: "handsome bear",     // ✏️ His cute nickname
  girlfriendNickname: "your puppy girl", // ✏️ Inside joke nickname
  birthdayDate: "September 6",   // ✏️ His birthday
};

// --- 2. PAGE 1: THE CRAZY QUESTION ---
export const CRAZY_QUESTION_DATA = {
  heading: "One very important question...",
  // ✏️ You can edit your crazy question here:
  question: "Are you ready to spend the rest of your life dealing with a girl who behaves like a dog? 🐶",
  subtext: "Think very carefully before answering... there is no turning back.",
  yesButtonText: "YES, OF COURSE ❤️",
  noButtonInitialText: "NO 😈",
  // Funny messages that appear on the escaping NO button:
  noButtonPhrases: [
    "Nice try 😂",
    "Nope! 🐾",
    "You really thought? 👀",
    "Not an option, sir 🐶",
    "Try again! 🦴",
    "Click YES instead! ❤️",
    "Woof! Can't click me!",
    "Resistance is futile 🐶"
  ],
  yesCelebrationText: "HE SAID YES!! 🐻❤️🐻"
};

// --- 3. PAGE 2: THE FOUR CHOICES ---
export const CHOICES_PAGE_DATA = {
  header: "Okay... since you said yes. 🐻✨",
  subheader: "What do you want to see first?",
  choices: [
    {
      id: 'song' as const,
      title: "Song & Voice Note",
      tag: "🎵 MUSIC",
      subtitle: "Something I sang and recorded just for you",
      color: "from-[#fef3c7] to-[#fed7aa]",
      borderColor: "border-[#fde68a]",
      textColor: "text-[#92400e]"
    },
    {
      id: 'openWhen' as const,
      title: "Open When Letters",
      tag: "💌 LETTERS",
      subtitle: "7 handwritten letters for every possible mood",
      color: "from-[#ede9fe] to-[#fae8ff]",
      borderColor: "border-[#e9d5ff]",
      textColor: "text-[#6b21a8]"
    },
    {
      id: 'birthday' as const,
      title: "Birthday Greeting",
      tag: "🎂 CELEBRATION",
      subtitle: "Light the candles on your cake & read my wish",
      color: "from-[#fee2e2] to-[#ffedd5]",
      borderColor: "border-[#fecaca]",
      textColor: "text-[#991b1b]"
    },
    {
      id: 'future' as const,
      title: "Future Us",
      tag: "💫 FUTURE US",
      subtitle: "Studying, dream jobs, our families, and a letter from 2027",
      color: "from-[#e0f2fe] to-[#dbeafe]",
      borderColor: "border-[#bae6fd]",
      textColor: "text-[#075985]"
    }
  ]
};

// --- 4. PAGE 3: AUDIO TRACKS ---
export const AUDIO_TRACKS = {
  mySong: {
    id: "my-song",
    title: "My Song",
    subtitle: "Something I made just for you 🎧",
    // ✏️ Place your singing audio in /public/assets/audio/my-song.mp3
    src: "/assets/audio/my-song.mp3",
    durationSeconds: 184,
    description: "Recorded softly with all my heart."
  } as AudioTrack,
  voiceMessage: {
    id: "voice-message",
    title: "Voice Message",
    subtitle: "And now... something I wanted to tell you 🎙️",
    // ✏️ Place your voice note in /public/assets/audio/voice-message.mp3
    src: "/assets/audio/voice-message.mp3",
    durationSeconds: 118,
    description: "A little personal whisper across the distance."
  } as AudioTrack
};

// --- 5. PAGE 4: "OPEN WHEN..." LETTERS ---
export const OPEN_WHEN_LETTERS: OpenWhenLetter[] = [
  {
    id: "missing-me",
    title: "Open when you're missing me",
    shortLabel: "Missing me",
    iconName: "Heart",
    stampColor: "#f472b6",
    envelopeColor: "#fdf2f8",
    theme: "missing",
    content: [
      "Hey you. 🐻",
      "If you're opening this, I can already feel that quiet little ache of wanting to be in the same room.",
      "Close your eyes for three seconds. Take a slow, deep breath. Can you feel how completely you are loved? Every single second we spend apart is just countdown time until the next time I get to jump on you and give you puppy hugs.",
      "Look outside at the sky. Wherever you are, the same breeze is touching both of us.",
      "I love you more than all the miles and minutes in the world."
    ],
    psNote: "P.S. Warning: When I see you next, you are getting at least 50 continuous hugs and maybe a puppy nose-boop! 🐾"
  },
  {
    id: "bad-day",
    title: "Open when you're having a bad day",
    shortLabel: "Bad day",
    iconName: "CloudRain",
    stampColor: "#60a5fa",
    envelopeColor: "#eff6ff",
    theme: "bad_day",
    content: [
      "Drop your shoulders. Unclench your jaw. Take off your heavy shoes.",
      "Today might have been exhausting, unfair, or frustrating. Maybe things didn't work out the way you wanted them to, or people were annoying. That is okay.",
      "You don't have to carry the whole universe on your back today. You are allowed to be tired. You are allowed to rest.",
      "Drink a glass of warm water, put on your softest clothes, and wrap yourself in a blanket. Tomorrow is a completely fresh start, and I believe in you with every fiber of my soul."
    ],
    psNote: "P.S. If anyone was mean to you today, let me know so I can bark at them loudly! 🐶"
  },
  {
    id: "cant-sleep",
    title: "Open when you can't sleep",
    shortLabel: "Can't sleep",
    iconName: "Moon",
    stampColor: "#a78bfa",
    envelopeColor: "#f5f3ff",
    theme: "cant_sleep",
    content: [
      "Still wide awake at 2 AM with a brain that refuses to slow down?",
      "Put your phone face-down after reading this. Stop replaying conversations or worrying about tomorrow's to-do list. The world will keep turning without your active supervision until morning.",
      "Imagine us cozy under a giant soft duvet. The room is cool, the night is quiet, and my head is resting gently on your chest, rising and falling with your breath. You are completely safe and warm.",
      "Rest your eyes now, handsome bear. I'll meet you in our dream world."
    ],
    psNote: "P.S. Counting sheep is boring; count how many cute bear hugs we're gonna share instead! 💤"
  },
  {
    id: "need-motivation",
    title: "Open when you need motivation",
    shortLabel: "Motivation",
    iconName: "Sparkles",
    stampColor: "#fbbf24",
    envelopeColor: "#fffbeb",
    theme: "motivation",
    content: [
      "A quick reminder of who the heck you are:",
      "You are brilliant, hardworking, thoughtful, and capable of things you haven't even dared to imagine yet. I watch you tackle hard things every day with quiet courage and dignity.",
      "When self-doubt whispers in your ear, remember that growth never feels comfortable while it's happening. You are building something lasting, step by quiet step.",
      "Straighten up your back, take a breath, and take that next step. You've got this, and I am in your corner cheering the loudest forever."
    ],
    psNote: "P.S. Your #1 fan is wagging her tail and rooting for you right now! ⭐"
  },
  {
    id: "angry-with-me",
    title: "Open when you're angry with me",
    shortLabel: "Angry with me",
    iconName: "Flame",
    stampColor: "#fb7185",
    envelopeColor: "#fff1f2",
    theme: "angry",
    content: [
      "I am so sorry. 🥺",
      "If I was stubborn, careless, or said something clumsy that hurt your feelings, please know from the bottom of my heart that hurting you is the absolute last thing I ever want to do.",
      "Even when we disagree, my love and admiration for you never waver. You are my partner, my teammate, and my favorite person.",
      "Take whatever quiet space you need to cool down. Whenever you're ready, come talk to me. I'm ready to listen with an open heart so we can be us again."
    ],
    psNote: "P.S. I promise not to bite (unless it's an affectionate playful nibble later after we make up!) 🐻❤️"
  },
  {
    id: "how-much-i-love-you",
    title: "Open when you want to know how much I love you",
    shortLabel: "How much I love you",
    iconName: "HeartHandshake",
    stampColor: "#ec4899",
    envelopeColor: "#fdf2f8",
    theme: "love",
    content: [
      "How much do I love you?",
      "I love you in the quiet mornings when you're still sleepy and your hair is a mess. I love you when you're intensely focused on something you care about with that cute furrow between your brows.",
      "I love you when we laugh until our ribs ache, and I love you when we're just sitting together in comfortable silence, doing our own things in the same warm room.",
      "It is a steady, gentle, stubborn love that only grows deeper with every single memory we make together."
    ],
    psNote: "P.S. Scientifically proven to be bigger than all galaxies combined! 🐾"
  },
  {
    id: "need-me",
    title: "Open when you need me",
    shortLabel: "Need me",
    iconName: "PhoneCall",
    stampColor: "#34d399",
    envelopeColor: "#ecfdf5",
    theme: "need_me",
    content: [
      "No matter what time it is, no matter what is going on — pick up your phone and call me.",
      "Never think that you are bothering me, that it's too late, or that what you're going through is 'too small'. If it matters to you, it matters to me.",
      "If you need to vent, I'll listen. If you need a laugh, I'll act silly. If you just need someone on the other end of the line while you breathe, I'll stay right there.",
      "You are never alone in this world. I am always holding your hand."
    ],
    psNote: "P.S. One call = instant virtual bear hug delivered! 🐻"
  }
];

// --- 6. PAGE 5: BIRTHDAY GREETING & CANDLES ---
export const BIRTHDAY_DATA = {
  cakePrompt: "Light them up.",
  candlesPromptSubtitle: "Tap the candles on the cake to light each flame! 🕯️",
  celebrationTitle: "Happy Birthday My Love! ❤️🎂",
  greetingText: [
    "Happy Birthday to my favorite person in the entire universe! 🐻✨",
    "Today is the day the world was blessed with you, and my life became infinitely warmer, softer, and sweeter the day you walked into it.",
    "Thank you for your patient smiles, your warm hugs, your steady presence, and the way you always make me feel safe, cherished, and free to be my goofiest self.",
    "May this year bring you endless laughter, thrilling victories, delicious food, peaceful nights, and all the dreams your heart has been quietly wishing for."
  ],
  bearEasterEggHint: "💡 Tip: Try tapping on Girl Bear or Boy Bear for a sweet surprise!",
  girlBearKissText: "Girl bear leans in and gives boy bear a sweet birthday kiss! 💋",
  boyBearReactionText: "Boy bear turns bright pink and smiles bashfully! 🥰"
};

// --- 7. PAGE 6: FUTURE US ---
export const FUTURE_SCENES = [
  {
    id: 'study' as const,
    title: "1. Studying Together",
    subtitle: "Late nights, notebooks & quiet support",
    description: "Sitting side by side at our cozy wooden desk with warm lamp glow, turning pages, sipping warm tea, and secretly holding hands underneath the table while working hard.",
    caption: "Holding hands under the table while chasing our goals 📖"
  },
  {
    id: 'career' as const,
    title: "2. Dream Job",
    subtitle: "Reaching our goals side by side",
    description: "After all the hard work and perseverance, celebrating each other's career milestones. Proudly cheering for your achievements and knowing we built this future together.",
    caption: "Proudly celebrating your dream job and our victories 💼🎉"
  },
  {
    id: 'family' as const,
    title: "3. Our Families Together",
    subtitle: "One big, beautiful bear family portrait",
    description: "All of us together in one warm, happy family portrait: Dad Bear, Mom Bear, Brother Bear, Sister Bear, and the two of us right at the center, surrounded by love, laughter, and lifelong togetherness.",
    caption: "Our whole family gathered close together in one portrait 🐻📸❤️"
  }
];

export const FUTURE_LETTER_DATA: FutureLetterData = {
  date: "September 6, 2027",
  salutation: "Dear you,",
  paragraphs: [
    "I wonder what you are doing as you read this in 2027.",
    "Did we get that cozy apartment with the big window and the sunny corner? Have we taken that trip we spent late nights sketching out on our phones? Did you get that dream job you were quietly working towards when I built this website?",
    "I'm writing this across time because some things are so certain that even years cannot alter them: my faith in you, my gratitude for your presence in my life, and the peace I feel whenever you hold my hand.",
    "Look at the person sitting beside you — or across from you right now. Loving you has always been the easiest, warmest, and most natural choice of my life.",
    "Here's to every chapter ahead, written day by day, hand in hand."
  ],
  signOff: "Forever your loving bear (and dog-girl),",
  postScript: "P.S. Happy Birthday, my love. Forever in your corner. ❤️"
};
