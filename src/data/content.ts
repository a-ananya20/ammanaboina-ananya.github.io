import { FutureLetterData, SongStanza } from '../types';

/**
 * =========================================================================
 * 🐻💌 BEAR SURPRISE WEBSITE - EASY CUSTOMIZATION FILE
 * =========================================================================
 * You can edit all your texts, question, his name, letters, and audio here!
 * =========================================================================
 */

// --- 1. NAMES & NICKNAMES ---
export const BOYFRIEND_DATA = {
  name: "Mohan Kumar",                  // ✏️ His real name
  nickname: "Kanna",     // ✏️ His cute nickname
  girlfriendNickname: "your puppy girl", // ✏️ Inside joke nickname
  birthdayDate: "September 16",   // ✏️ His birthday
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

// --- 3. PAGE 2: THE THREE CHOICES ---
export const CHOICES_PAGE_DATA = {
  header: "Okay... since you said yes. 🐻✨",
  subheader: "What do you want to see first?",
  choices: [
    {
      id: 'song' as const,
      title: "Song",
      tag: "🎵 CHAPTER 1",
      subtitle: "Mandaara Mandaara lyrics & meanings",
      color: "from-[#fef3c7] to-[#fed7aa]",
      borderColor: "border-[#fde68a]",
      textColor: "text-[#92400e]"
    },
    {
      id: 'birthday' as const,
      title: "Birthday Greeting",
      tag: "🎂 CHAPTER 2",
      subtitle: "Light the candles on your cake & read my wish",
      color: "from-[#fee2e2] to-[#ffedd5]",
      borderColor: "border-[#fecaca]",
      textColor: "text-[#991b1b]"
    },
    {
      id: 'future' as const,
      title: "Future Us",
      tag: "💫 CHAPTER 3",
      subtitle: "Studying, dream jobs, our families, and a letter from 2027",
      color: "from-[#e0f2fe] to-[#dbeafe]",
      borderColor: "border-[#bae6fd]",
      textColor: "text-[#075985]"
    }
  ]
};

/**
 * Resolves static assets located in the public directory so they work correctly
 * whether hosted on a custom domain, root GitHub Pages (https://a-ananya20.github.io/),
 * or a repository subpath (https://a-ananya20.github.io/ammanaboina-ananya.github.io/).
 */
export const getPublicAssetUrl = (path: string): string => {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  const clean = path.replace(/^\//, '');
  const base = import.meta.env.BASE_URL || './';
  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
};

// --- 4. PAGE 3: SONG LYRICS ("Mandaara Mandaara") ---
export const SONG_LYRICS_DATA = {
  title: "Mandaara Mandaara",
  subtitle: "Lyrics & Meanings",
  stanzas: [
    {
      id: 1,
      lines: [
        "Mandaara mandaara",
        "Karige thellaarela",
        "Kiranaale nanne cherela"
      ],
      meaning: "Just like the darkness of night slowly disappears and sunlight reaches me, you came into my life and brought light into it."
    },
    {
      id: 2,
      lines: [
        "Kallara kallara",
        "Choosthunna kallara",
        "Sarikottha sneham dharichera"
      ],
      meaning: "When I look at you, I realize that I have found a completely new and beautiful relationship."
    },
    {
      id: 3,
      lines: [
        "Alikidi chese naalo",
        "Adagani prashne edho",
        "Asaladhi badhulo emo",
        "Adhi thelena"
      ],
      meaning: "Something is happening inside me. I have a question in my heart, but I don't even know what the question is or what the answer is."
    },
    {
      id: 4,
      lines: [
        "Kudhurugaa unde madhilo",
        "Chilipigaa egire edhalo",
        "Theliyani bhaavam thelise",
        "Katha maarena"
      ],
      meaning: "My heart used to be calm, but now something playful and exciting is happening inside me. I have discovered a feeling I never knew before. Has my life changed because of this feeling?"
    },
    {
      id: 5,
      lines: [
        "Oh nee venta aduge vesthu",
        "Nee needanai gamanisthu",
        "Naa ninnalloleni nanne ilaaga",
        "Neelo chusthunnaaaa"
      ],
      meaning: "As I walk beside you and stay with you like your shadow, I am discovering a new version of myself through you — someone I never was before."
    },
    {
      id: 6,
      lines: [
        "Mandaara mandaara",
        "Karige thellaarelaaga",
        "Aa kiranaale nanne cherela",
        "",
        "Kallaara kallaaraa",
        "Chusthunnaavaa kallaara",
        "Ee sarikottha sneham darichera"
      ],
      meaning: "Like the night fading into morning and sunlight reaching me, you came into my life. When I look at you, I realize that I've found this beautiful new bond."
    },
    {
      id: 7,
      lines: [
        "Sundara.. Mandaara",
        "Kallaara.. Sundara"
      ],
      meaning: "Beautiful one."
    },
    {
      id: 8,
      lines: [
        "Unikini chaate oopiri koodaa",
        "Uliki padelaa undhe ilaa"
      ],
      meaning: "Even my very existence and my breath feel different because of what I'm feeling."
    },
    {
      id: 9,
      lines: [
        "Kalalonainaa kalaganaledhe",
        "Vidipothundhani aramarikaa"
      ],
      meaning: "I never even imagined that we could be apart."
    },
    {
      id: 10,
      lines: [
        "Kadalai naalo nuvve",
        "Alanai neelo neney"
      ],
      meaning: "You are like an ocean within me, and I am like a wave within you."
    },
    {
      id: 11,
      lines: [
        "Okatai odhige kshaname",
        "Adhi premenaaa?"
      ],
      meaning: "When we became so deeply connected, was that what love is?"
    },
    {
      id: 12,
      lines: [
        "Kaalaalane maripisthu",
        "Aanandhame andhisthu"
      ],
      meaning: "When I'm with you, I forget about time, and you fill my life with happiness."
    },
    {
      id: 13,
      lines: [
        "Naa prayaanamai",
        "Naa gamyanivai",
        "Naa nuvvavuthunnaave"
      ],
      meaning: "You have become my journey, and you have become my destination. You are becoming such an important part of my life that you are becoming a part of me."
    }
  ] as SongStanza[]
};

// --- 5. PAGE 5: BIRTHDAY GREETING & CANDLES ---
export const BIRTHDAY_DATA = {
  cakePrompt: "Light them up.",
  candlesPromptSubtitle: "Tap the candles on the cake to light each flame! 🕯️",
  celebrationTitle: "Happy Birthday Kannalu! ❤️🎂",
  greetingText: [
    "A Happy Happy Birthday to Mohan Kumar 🐻✨",
    "happy happy birthday to the man who say m kadu nenu nerpistha, nenu unna kada, manam manchiga undam, Na pellama, kannamma i love u raa, yekuva overthink cheyaku, antha manchiga aythadi. ",
    "Thank You for everything kanna nuv na life lo ochinanduku if not u no one could have been in ur place laga aypoinandhuku, ne matalaki, ne kathalaki, ne pichi stories ki, ne opika ki, ne jokes ki, ne naughty pannulu ki, ne smile ki, ne alochana ki literally antiki.",
    "May this year bring you good health, endless laughter, thrilling victories and all the dreams your heart has been quietly wishing for."
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
    description: "Sitting, studying, turning pages, sipping warm water and tea, and secretly holding hands underneath the table while working hard.",
    caption: "Educating and supporting each other"
  },
  {
    id: 'career' as const,
    title: "2. Dream Job",
    subtitle: "Reaching our goals side by side",
    description: "After all the hard work and perseverance, celebrating each other's career milestones. Proudly cheering for your achievements and knowing we built this future together.",
    caption: "Proudly celebrating your dream job and our Youtube victories 💼🎉"
  },
  {
    id: 'family' as const,
    title: "3. Our Families Together",
    subtitle: "One big, beautiful family portrait",
    description: "All of us together in one warm, happy family portrait: Nanna, Amma, Athamma, Mammaya, Thamudu, Akka and the two of us right at the center, surrounded by love, laughter, and lifelong togetherness.",
    caption: "Our whole family gathered close together in one portrait 🐻📸❤️"
  }
];

export const FUTURE_LETTER_DATA: FutureLetterData = {
  date: "September 16, 2027",
  salutation: "Dear us,",
  paragraphs: [
    "We actually made it this far.Right now, we are still figuring out so many things.Careers, money, responsibilities, our future...Sometimes we know exactly what we want, and sometimes we are just pretending that we have everything figured out.",
    "But one thing I hope hasn't changed..  Us.",
    "I hope we still talk about the most random things.I hope we still laugh at stupid jokes that nobody else understands.I hope you still irritate me for absolutely no reason And I hope I still irritate you even more.",
    "I wonder what our life looks like now.Did we achieve the things we were worried about? Did we build the kind of life we imagined? I hope life taught us to be patient with each other.",
    "I hope we learned that love isn't just about good days, birthdays, surprises and cute moments.It's also about staying when things get difficult.Listening when the other person doesn't know how to explain what's wrong.Giving space when it's needed. Saying sorry when we're wrong.And choosing each other even after seeing each other's worst moods, worst habits and worst decisions.",
    "I don't expect our future to be perfect.There will probably be arguments.There will be stressful days.There will be times when one of us feels lost. But whenever that happens, I hope we remember each other.",
    "And I hope we each other... Don't worry. We figured it out together.If life has changed us, I hope it changed us for the better.If our dreams changed, I hope we found new ones together.And if things didnot go exactly according to plan...I hope we still have each other and can say Okay... plan B.",
    "So, future us...If you're reading this, please remember one thing.Don't take what we have for granted.",
    "Whatever our future looks like, I just hope when we look back at this version of ourselves.we smile.Because these were the days when we were still dreaming about our future.",
    "And somehow.we became that future.",
    "With love",
    
  ],
  signOff: "Forever your Kannamma,",
  postScript: "P.S. Happy Birthday, my love. Forever in your corner. ❤️"
};
