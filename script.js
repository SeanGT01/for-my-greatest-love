/**
 * ==========================================================================
 * A LITTLE GARDEN OF US — Interactive Love Story Website
 * Vanilla JavaScript (No Frameworks, No External Dependencies)
 * ==========================================================================
 */

/* ==========================================================================
   USER CONFIGURATION SECTION
   Customize your password, dates, memories, music, and love letters here!
   ========================================================================== */

// 1. THE 4-DIGIT SECRET CODE (Change this to any 4 digits, e.g. "1234" or "0814")
const ACCESS_CODE = "0717";

// 2. PASSWORD HINT (Displayed when she taps "Need a little hint?")
const HINT_TEXT = "Hint: your birthday";

// 3. DAYS SINCE WE MET (Optional)
// Format: "YYYY-MM-DD" e.g., "2023-05-20". Leave as "" to show a sweet message instead.
const START_DATE = ""; 

// 4. MUSIC PLAYLIST (OFFICIAL YOUTUBE SOUNDTRACKS - FULL SONGS, NO INTROS, NO PREVIEWS)
// Easily customize songs with any YouTube Video ID and optional startSeconds!
const PLAYLIST = [
  {
    title: "How Deep Is Your Love",
    artist: "Bee Gees",
    youtubeId: "XpqqjU7u5Yc",
    youtubeUrl: "https://www.youtube.com/watch?v=XpqqjU7u5Yc",
    startSeconds: 0,
    note: "“How deep is your love, I really mean to learn… ‘cause we’re living in a world of fools breaking us down, when they all should let us be…” 🤍"
  },
  {
    title: "Kisame",
    artist: "rhodessa",
    youtubeId: "ifY5MF4zZ0k", // Official Viva Records Lyric Video / Studio Audio - Zero theatrical video intro, starts immediately with the acoustic guitar!
    youtubeUrl: "https://www.youtube.com/watch?v=ifY5MF4zZ0k",
    startSeconds: 0,
    note: "“Nakahiga sa ilalim ng kisame, iniisip kita… Gusto ko lang naman marinig ang boses mo bago matulog sa gabi.” 🌙🤍"
  },
  {
    title: "Kabisado",
    artist: "IV OF SPADES",
    youtubeId: "uyC8mS5MHkk",
    youtubeUrl: "https://www.youtube.com/watch?v=uyC8mS5MHkk",
    startSeconds: 0,
    note: "“Kabisado ko na ang bawat ngiti mo, at ikaw pa rin ang pipiliin ko sa bawat araw at sa bawat bukas.” 🌿✨"
  }
];

// 5. PHOTO SCRAPBOOK MEMORIES (Add as many as you like!)
// You can replace the image paths with your own JPG or PNG files in assets/photos/
const PHOTO_MEMORIES = [
  {
    image: "assets/photos/ch2-first-meeting.jpg",
    objectPosition: "center 22%",
    title: "Our first meeting",
    date: "A Day I'll Never Forget 🌿",
    quote: "We weren't talking yet, but secretly watching you, my heart confirmed everything. When you were about to leave, I felt an unexplainable longing.",
    story: "This was back when we weren't talking yet, but this was the exact day I confirmed all my feelings for you. I spent the day secretly watching you, captivated by every little thing you did. And by the time you were about to leave, a wave of sadness washed over me — an unexplainable longing, wishing time would pause so you didn't have to go. That was the day my heart quietly decided it was you."
  },
  {
    image: "assets/photos/ch2-ethan.jpg",
    objectPosition: "center center",
    title: "Always sending me cute pictures with Ethan",
    date: "Sweetest Notifications 💌",
    quote: "Every time my phone lights up with your silly faces and sweet snaps with Ethan, my whole day instantly gets brighter.",
    story: "There is nothing in this world quite like receiving photos like this from you. Whenever my phone buzzes and I see you making silly faces with Ethan, smiling so effortlessly and full of joy, it melts my heart every single time. It's in these little everyday snaps where I see your playful soul, your warmth, and the sweet person I am so deeply in love with."
  },
  {
    image: "assets/photos/ch2-your-smile.jpg",
    objectPosition: "center 55%",
    title: "Your smile",
    date: "Late Night Calls & Radiant Smiles 🌙",
    quote: "Your smile — seeing you smile makes my entire day complete, turning every screen call into the warmest place my heart knows.",
    story: "No matter how exhausting, chaotic, or heavy the day felt, the moment our call connected and I saw your face light up with that gentle smile, everything instantly felt right again. Seeing you resting your chin on your hand, listening to me, smiling so brightly and sharing those quiet late-night moments across the screen — it’s all I ever needed to feel at peace. Your smile is my daily reassurance, my greatest comfort, and my favorite sight in the whole universe."
  },
  {
    image: "assets/photos/ch2-our-first-meeting.jpg",
    objectPosition: "center 68%",
    title: "Our first date",
    date: "Finally Side By Side 🎬",
    quote: "After all the screens and quiet longings, sitting right beside you in the dim cinema lights and feeling you lean close felt like the softest dream come true.",
    story: "This was the moment everything we dreamed of finally became real. After counting down days through screens and wondering what it would feel like to finally be together, we were sitting right there, shoulder to shoulder in the quiet cinema. When you tilted your head close to me and we smiled for this picture, all my nervousness melted away into pure comfort. I knew right then that no matter where life takes us, sitting next to you will always be my favorite place in the world."
  },
  {
    image: "assets/photos/ch2-second-meeting-1.jpg",
    objectPosition: "center 25%",
    title: "Our second date",
    date: "Closer & Sweeter Every Day 🌷",
    quote: "By our second date, all the shyness was gone — just endless laughs, resting my chin on your shoulder, and feeling completely at home with you.",
    story: "If our first date was the spark, our second date was when we completely melted into each other’s presence. All the initial nervousness disappeared, replaced by comfortable giggles, silly faces, and pure warmth. Resting my chin on your shoulder, stealing a kiss on your cheek while you made that adorable face — in every single frame of this day, I can see how naturally we belong together. You make me laugh like nobody else, and every second by your side reminds me just how lucky I am to love you.",
    photos: [
      {
        image: "assets/photos/ch2-second-meeting-1.jpg",
        objectPosition: "center 25%",
        alt: "Our second date - resting my chin on your shoulder"
      },
      {
        image: "assets/photos/ch2-second-meeting-2.jpg",
        objectPosition: "center 25%",
        alt: "Our second date - sweet giggles and shy smile"
      },
      {
        image: "assets/photos/ch2-second-meeting-3.jpg",
        objectPosition: "center 25%",
        alt: "Our second date - stealing a kiss on your cheek"
      }
    ]
  },
  {
    image: "assets/photos/ch2-admiring-1.jpg",
    objectPosition: "center 20%",
    title: "Admiring you from afar",
    date: "Before you even knew 🤍",
    quote: "There were moments I’d just quietly watch you from afar, secretly smiling at my screen and wishing you knew how special you are to me.",
    story: "Before I ever had the courage to tell you how I felt, I was already falling for you in silence. Whenever you turned your camera on or whenever you were just doing your own thing, I’d catch myself quietly watching you, smiling like an idiot without you even knowing. You didn’t have to do anything grand — just seeing your face was always enough to brighten even my hardest days.",
    photos: [
      {
        image: "assets/photos/ch2-admiring-1.jpg",
        objectPosition: "center 20%",
        alt: "Admiring you from afar - quiet moments watching you"
      },
      {
        image: "assets/photos/ch2-admiring-2.jpg",
        objectPosition: "center 20%",
        alt: "Admiring you from afar - your radiant presence"
      }
    ]
  }
];

// 5.4 CHAPTER 1 SECTION METADATA (Constant caption and story explanation for all photos in each part)
const CHAPTER_1_SECTION_INFO = {
  a: {
    title: "The First Meeting",
    caption: "“Level 1: When our worlds crossed”",
    quote: "Level 1: When our worlds crossed",
    story: "I already knew of you before all of this started, but we never really had the chance to talk or get to know each other.\n\nThen somehow, a simple game brought us closer. We started talking more, getting to know each other little by little, and everything just happened naturally from there. There was something about talking to you that felt easy and comfortable, and I genuinely enjoyed every conversation and moment we shared.\n\nLooking back now, it’s kind of crazy how something as simple and random as playing a game became the start of everything we have today.\n\nAnd I’m really glad it happened. ❤️"
  },
  b: {
    title: "The Random Conversations",
    caption: "“Just 5 more minutes… turned into 3 AM”",
    quote: "Just 5 more minutes… turned into 3 AM",
    story: "Before I realized it, talking to you became my favorite part of any day. The silly inside jokes, the late-night discord calls where neither of us wanted to say goodnight, and the random stories about our days. Everything felt so easy with you. I found myself checking my phone just to see if your name popped up on my screen."
  },
  c: {
    title: "The Feelings I Kept Quiet",
    caption: "“Quiet thoughts I couldn't say out loud yet”",
    quote: "Quiet thoughts I couldn't say out loud yet",
    story: "I didn't plan on falling for you. It wasn't one single dramatic moment, but a hundred quiet ones. The way you laughed when something caught you off guard, the gentle way you listened, and how comfortable silence felt between us. My heart started beating a little faster whenever you joined the call, and I kept asking myself if you felt it too."
  },
  d: {
    title: "When You Became My Favorite Person",
    caption: "“Our cozy Stardew home where we built memories together”",
    quote: "Our cozy Stardew home where we built memories together",
    story: "There came a day when I realized you weren't just a gaming buddy or a friend on the other side of a screen. You had become my safe harbor, my favorite notification, and the person I wanted to celebrate every little victory with. You became the one I wanted by my side, in games and in life."
  }
};

// 5.5 CHAPTER 1 TIMELINE PHOTO GALLERIES (Parts A, B, C, D)
// Easily add 1, 2, 3, or more than 3 photos per part!
// When you have multiple photos in any part, thumbnail selector buttons and prev/next arrows appear automatically.
const CHAPTER_1_GALLERIES = {
  a: [
    {
      src: "assets/photos/ch1-bloxfruits.png",
      alt: "The First Meeting - Blox Fruits",
      caption: "“Level 1: When our worlds crossed”",
      title: "The First Meeting",
      quote: "Level 1: When our worlds crossed",
      story: "I already knew of you before all of this started, but we never really had the chance to talk or get to know each other.\n\nThen somehow, a simple game brought us closer. We started talking more, getting to know each other little by little, and everything just happened naturally from there. There was something about talking to you that felt easy and comfortable, and I genuinely enjoyed every conversation and moment we shared.\n\nLooking back now, it’s kind of crazy how something as simple and random as playing a game became the start of everything we have today.\n\nAnd I’m really glad it happened. ❤️"
    },
    {
      src: "assets/photos/ch1-roblox-arena.png",
      alt: "Roblox Arena - eisu vs LiceanGt",
      caption: "“Level 1: When our worlds crossed”",
      title: "The First Meeting",
      quote: "Level 1: When our worlds crossed",
      story: "I already knew of you before all of this started, but we never really had the chance to talk or get to know each other.\n\nThen somehow, a simple game brought us closer. We started talking more, getting to know each other little by little, and everything just happened naturally from there. There was something about talking to you that felt easy and comfortable, and I genuinely enjoyed every conversation and moment we shared.\n\nLooking back now, it’s kind of crazy how something as simple and random as playing a game became the start of everything we have today.\n\nAnd I’m really glad it happened. ❤️",
      fitContain: true
    }
  ],
  b: [
    {
      src: "assets/photos/ch1-minecraft-night.png",
      alt: "The Random Conversations - Minecraft Night",
      caption: "“Just 5 more minutes… turned into 3 AM”",
      title: "The Random Conversations",
      quote: "Just 5 more minutes… turned into 3 AM",
      story: "Before I realized it, talking to you became my favorite part of any day. The silly inside jokes, the late-night discord calls where neither of us wanted to say goodnight, and the random stories about our days. Everything felt so easy with you. I found myself checking my phone just to see if your name popped up on my screen."
    },
    {
      src: "assets/photos/ch1-minecraft-statue.png",
      alt: "Sitting on the Giant Goggles Statue - Minecraft",
      caption: "“Just 5 more minutes… turned into 3 AM”",
      title: "The Random Conversations",
      quote: "Just 5 more minutes… turned into 3 AM",
      story: "Before I realized it, talking to you became my favorite part of any day. The silly inside jokes, the late-night discord calls where neither of us wanted to say goodnight, and the random stories about our days. Everything felt so easy with you. I found myself checking my phone just to see if your name popped up on my screen."
    }
  ],
  c: [
    {
      src: "assets/photos/ch1-minecraft-sunset.png",
      alt: "The Feelings I Kept Quiet - Minecraft Sunset",
      caption: "“Quiet thoughts I couldn't say out loud yet”",
      title: "The Feelings I Kept Quiet",
      quote: "Quiet thoughts I couldn't say out loud yet",
      story: "I didn't plan on falling for you. It wasn't one single dramatic moment, but a hundred quiet ones. The way you laughed when something caught you off guard, the gentle way you listened, and how comfortable silence felt between us. My heart started beating a little faster whenever you joined the call, and I kept asking myself if you felt it too."
    }
  ],
  d: [
    {
      src: "assets/photos/ch1-stardew-cabin.png",
      alt: "Our Cozy Farmhouse - Stardew Valley",
      caption: "“Our cozy Stardew home where we built memories together”",
      title: "When You Became My Favorite Person",
      quote: "Our cozy Stardew home where we built memories together",
      story: "There came a day when I realized you weren't just a gaming buddy or a friend on the other side of a screen. You had become my safe harbor, my favorite notification, and the person I wanted to celebrate every little victory with. You became the one I wanted by my side, in games and in life.",
      pixelated: false
    },
    {
      src: "assets/photos/ch1-stardew-seeds.png",
      alt: "Holding Seeds Together - Stardew Valley Duo",
      caption: "“Our cozy Stardew home where we built memories together”",
      title: "When You Became My Favorite Person",
      quote: "Our cozy Stardew home where we built memories together",
      story: "There came a day when I realized you weren't just a gaming buddy or a friend on the other side of a screen. You had become my safe harbor, my favorite notification, and the person I wanted to celebrate every little victory with. You became the one I wanted by my side, in games and in life.",
      pixelated: true
    },
    {
      src: "assets/photos/ch1-stardew-dino.png",
      alt: "Matching Dino Hats - Stardew Valley",
      caption: "“Our cozy Stardew home where we built memories together”",
      title: "When You Became My Favorite Person",
      quote: "Our cozy Stardew home where we built memories together",
      story: "There came a day when I realized you weren't just a gaming buddy or a friend on the other side of a screen. You had become my safe harbor, my favorite notification, and the person I wanted to celebrate every little victory with. You became the one I wanted by my side, in games and in life.",
      pixelated: true
    },
    {
      src: "assets/photos/ch1-stardew-wedding.png",
      alt: "Our Stardew Wedding - Under the Floral Arch",
      caption: "“Our cozy Stardew home where we built memories together”",
      title: "When You Became My Favorite Person",
      quote: "Our cozy Stardew home where we built memories together",
      story: "There came a day when I realized you weren't just a gaming buddy or a friend on the other side of a screen. You had become my safe harbor, my favorite notification, and the person I wanted to celebrate every little victory with. You became the one I wanted by my side, in games and in life.",
      pixelated: true
    },
    {
      src: "assets/photos/ch1-stardew-night.png",
      alt: "Late Night 2 AM - Stardew Valley",
      caption: "“Our cozy Stardew home where we built memories together”",
      title: "When You Became My Favorite Person",
      quote: "Our cozy Stardew home where we built memories together",
      story: "There came a day when I realized you weren't just a gaming buddy or a friend on the other side of a screen. You had become my safe harbor, my favorite notification, and the person I wanted to celebrate every little victory with. You became the one I wanted by my side, in games and in life.",
      pixelated: true
    }
  ]
};

// 6. CHAPTER 1: CONFESSION LETTER (Revealed via "Read what I never told you...")
const CONFESSION_LETTER = {
  badge: "What I Never Told You",
  title: "The Quiet Truth",
  body: `
    <p>Dear Iza,</p>
    <p>There's something I don't think I've ever really told you about when we first started talking.</p>
    <p>Before I ever had the courage to tell you how I felt, I was already starting to like you more than I wanted to admit. Every time I saw your name pop up on my screen, I couldn't help but smile. And whenever you turned your camera on in Discord, I'd secretly watch you from my screen, probably smiling like an idiot without you even knowing.</p>
    <p>It was such a small thing, but somehow, seeing your face was enough to make my day. You didn't have to do anything special—you could just be there, doing your own thing, and somehow that already made me happy. I don't think you ever realized how much those simple moments meant to me.</p>
    <p>I started looking forward to our conversations more and more. Even on days when I was tired or things weren't going well, talking to you somehow made everything feel a little lighter. Sometimes I'd even go back and read our old messages, just because they reminded me of you and made me smile all over again.</p>
    <p>Back then, I had no idea where any of this would lead. I didn't know that a random game and a few simple conversations would eventually give me someone who would mean this much to me.</p>
    <p>But even before I knew what we would become, there was already a part of me that knew you were someone I didn't want to lose.</p>
    <p>And now, looking back, I'm so glad I found you. Out of all the people I could have met, somehow it was you—and I wouldn't change that for anything.</p>
    <p>Thank you for coming into my life so unexpectedly and turning something as simple as a random game into the beginning of one of the most beautiful parts of my life.</p>
    <p>If I could go back to those first days knowing everything I know now, I'd do it all again. I'd still secretly smile whenever you turned your camera on. I'd still enjoy every little conversation we had, and I'd still slowly fall for you without even realizing how deeply you would eventually mean to me.</p>
    <p>And if somehow we had to start from the beginning a thousand times, I hope I'd find you every single time.</p>
    <p style="font-family: var(--font-handwriting); font-size: 1.6rem; color: var(--color-forest); margin-top: 20px;">\u2014Sean. \u2764\uFE0F\uD83C\uDF3F</p>
  `
};

// 7. CHAPTER 3: "THINGS I LOVE ABOUT YOU" CONTENT
const THINGS_I_LOVE = {
  badge: "From My Heart",
  title: "Things I Love About You",
  body: `
    <p>Here are just a few of the million little reasons why I love you:</p>
    <ul>
      <li><strong>Your genuine laugh:</strong> The way your whole face lights up when something is truly funny.</li>
      <li><strong>Your sweet heart:</strong> How deeply you care for people and cute little animals.</li>
      <li><strong>Our gaming moments:</strong> How fun it is to explore virtual worlds and team up with you.</li>
      <li><strong>Your voice:</strong> It has been my favorite comfort after exhausting, long days.</li>
      <li><strong>Your love for Pochacco &amp; green tulips:</strong> The cute little things that make you uniquely you.</li>
      <li><strong>Your patience:</strong> Always understanding me, even when I'm hard to understand.</li>
      <li><strong>Your presence:</strong> How you make even the quietest, most ordinary moments feel warm and meaningful.</li>
      <li><strong>Just being you:</strong> You never have to try to impress me — you are already my favorite person.</li>
    </ul>
    <p style="font-style: italic; color: var(--color-muted-text); margin-top: 16px;">
      “I didn’t need a special occasion to remind you of this. I just love you on ordinary Tuesdays, quiet Sundays, and every day in between.”
    </p>
  `
};

// 8. CHAPTER 3: "A LETTER FOR YOUR HARD DAYS"
const HARD_DAYS_LETTER = {
  badge: "A Safe Harbor",
  title: "For When You Have a Hard Day",
  body: `
    <p>My Baby,</p>
    <p>If you're reading this right now, maybe you're tired, stressed, overthinking, or just having one of those days where everything feels a little too heavy.</p>
    <p>I just want you to slow down for a moment and breathe. You don't have to figure everything out right now. You don't have to carry everything at once. Whatever is bothering you can wait for a little while. For now, just give yourself a moment to rest.</p>
    <p>And please remember, it's okay to have bad days. You don't always have to be okay. You don't have to pretend to be happy or act strong when you're tired. If you need to cry, cry. If you need some quiet, take your time. And if you need someone to talk to, you know I'm always here to listen—even if you don't know exactly what to say.</p>
    <p>I know sometimes you can be hard on yourself, but I wish you could see yourself the way I see you. I believe in you so much, baby, even during the moments when you don't believe in yourself. You've made it through so many difficult days already, and I know you'll make it through this one too.</p>
    <p>So please take care of yourself for me, okay? Drink some water, eat something if you haven't, get some rest, and don't feel guilty for taking a break. You deserve to rest too.</p>
    <p>And if today feels especially heavy, just remember that you don't have to carry it alone. Let me carry some of it with you.</p>
    <p>No matter how difficult your day gets, no matter how overwhelmed you feel, I'm always here for you. You don't have to be at your best for me to love you. I'll love you on your happiest days, your quiet days, your messy days, and especially on the days when you feel like you're not yourself.</p>
    <p>Take your time, baby. Breathe. Rest.</p>
    <p>Everything doesn't have to be okay right now.</p>
    <p>Just remember that you are loved, more than you know.</p>
    <p style="font-family: var(--font-handwriting); font-size: 1.6rem; color: var(--color-forest); margin-top: 20px;">And you'll always have me in your corner. 🍵💚</p>
  `
};

// 9. CHAPTER 3: BUCKET LIST ITEMS (Stored in localStorage)
const DEFAULT_BUCKET_LIST = [
  "Watch a golden sunset together by the water",
  "Visit a flower market and find fresh green tulips",
  "Cook a cozy dinner together and make a mess in the kitchen",
  "Build a blanket pillow fort and binge our favorite movies",
  "Go on a late-night drive with the windows down and our playlist on",
  "Take silly photo booth pictures and keep the strips in our wallets",
  "Play our favorite games side-by-side until 3 AM",
  "Stargaze on a clear night and talk about our future"
];

// 10. FINAL PAGE: 12+ RANDOM LOVE NOTES / SURPRISES
const SURPRISE_NOTES = [
  "“Just in case no one told you today: you are my favorite person in the entire world.” 🌿",
  "“I didn’t need a special occasion to tell you that you look adorable today.” 🐾",
  "“You make my world so much softer and happier just by being in it.” 💚",
  "“Remember to drink some water and give yourself a little hug from me!” 🌷",
  "“If I had a green tulip for every time you made me smile, our garden would cover the Earth.” ✨",
  "“I’m so lucky that out of all the people on this planet, you're the one I get to love.” 💌",
  "“Even on my busiest days, you are always the sweetest thought in my mind.” ☕",
  "“Pochacco says: You are doing amazing, and you are loved more than you know!” 🐶",
  "“Ordinary days become my favorite adventures as long as I get to talk to you.” 🌿",
  "“Thank you for being my teammate, my safe place, and my favorite hello.” 🎮",
  "“No matter how far we are or how long the day is, my heart is always right beside you.” 💚",
  "“Sending you an invisible forehead kiss right now. Close your eyes and feel it!” 🌸"
];

// 11. FLOATING MASCOT INTERACTIVE SPEECHES
const MASCOT_QUOTES = [
  "Hi my favorite person! 🐾",
  "Pochacco loves green tulips too! 🌷",
  "You're the sweetest girl ever! 💚",
  "Playing games with you is the absolute best! 🎮",
  "Did you know he smiles every time you message? 💌",
  "Don't forget: you are so loved! ✨",
  "Let's plant more tulips in our little garden! 🌱"
];


/* ==========================================================================
   APPLICATION STATE & CORE INITIALIZATION
   ========================================================================== */

const state = {
  isUnlocked: false,
  currentSongIndex: 0,
  isPlaying: false,
  isMuted: false,
  ytPlayer: null,
  isYtReady: false,
  pendingPlay: false,
  ambientChimesActive: false,
  currentChapter: 1,
  activeLightboxIndex: 0,
  lightboxMode: 'memories', // 'memories' | 'chapter1'
  activeChapter1Part: 'd',
  chapter1ActiveIndices: { a: 0, b: 0, c: 0, d: 0 },
  polaroidActiveIndices: {},
  tulipCount: 0,
  bucketList: [],
  nightMode: false,
  motionEnabled: true,
  audioSynthContext: null,
  audioSynthOsc: null
};

// DOM Element References
const elements = {
  // Screens
  welcomeSection: document.getElementById('welcome-section'),
  musicSelectSection: document.getElementById('music-select-section'),
  storyContainer: document.getElementById('story-container'),
  siteHeader: document.getElementById('site-header'),
  
  // Password inputs
  digitInputs: Array.from(document.querySelectorAll('.digit-input')),
  passwordFeedback: document.getElementById('password-feedback'),
  hintToggleBtn: document.getElementById('hint-toggle-btn'),
  hintText: document.getElementById('hint-text'),
  unlockSubmitBtn: document.getElementById('unlock-submit-btn'),
  welcomeEnvelope: document.getElementById('welcome-envelope'),
  
  // Audio & Music (Official YouTube Audio & Ambient Chimes - Pure Audio, No Video)
  bgAudioPlayer: document.getElementById('bg-audio-player'),
  musicSingleCard: document.getElementById('music-single-card'),
  pickerPrevSongBtn: document.getElementById('picker-prev-song-btn'),
  pickerNextSongBtn: document.getElementById('picker-next-song-btn'),
  pickerDotsStrip: document.getElementById('picker-dots-strip'),
  pickerSongTitle: document.getElementById('picker-song-title'),
  pickerSongArtist: document.getElementById('picker-song-artist'),
  pickerSongNote: document.getElementById('picker-song-note'),
  pickerTrackTag: document.getElementById('picker-track-tag'),
  pickerTrackCounter: document.getElementById('picker-track-counter'),
  cassetteLabelTrack: document.getElementById('cassette-label-track'),
  pickerPreviewPlayBtn: document.getElementById('picker-preview-play-btn'),
  previewPillIcon: document.getElementById('preview-pill-icon'),
  previewPillText: document.getElementById('preview-pill-text'),
  pickerCassetteArt: document.getElementById('picker-cassette-art'),
  startStoryBtn: document.getElementById('start-story-btn'),
  miniMusicPlayer: document.getElementById('mini-music-player'),
  playerTrackName: document.getElementById('player-track-name'),
  playerTrackArtist: document.getElementById('player-track-artist'),
  playerPlayBtn: document.getElementById('player-play-btn'),
  playIcon: document.getElementById('play-icon'),
  pauseIcon: document.getElementById('pause-icon'),
  playerPrevBtn: document.getElementById('player-prev-btn'),
  playerNextBtn: document.getElementById('player-next-btn'),
  playerAmbientBtn: document.getElementById('player-ambient-btn'),
  playerMinimizeBtn: document.getElementById('player-minimize-btn'),
  
  // Navigation & Progress
  readingProgressBar: document.getElementById('reading-progress-bar'),
  chapterNavLinks: Array.from(document.querySelectorAll('.nav-link')),
  themeToggleBtn: document.getElementById('theme-toggle-btn'),
  motionToggleBtn: document.getElementById('motion-toggle-btn'),
  miniPlayerToggleBtn: document.getElementById('mini-player-toggle-btn'),
  backToTopBtn: document.getElementById('back-to-top-btn'),
  daysCounterWidget: document.getElementById('days-counter-widget'),
  daysCounterText: document.getElementById('days-counter-text'),

  // Chapter 1 & 2
  ch1ConfessionBtn: document.getElementById('ch1-confession-btn'),
  polaroidGrid: document.getElementById('polaroid-grid'),
  memoryCounterNum: document.getElementById('memory-counter-num'),

  // Chapter 3 Cards
  cardThingsLove: document.getElementById('card-things-love'),
  cardFavoriteMemory: document.getElementById('card-favorite-memory'),
  cardBucketList: document.getElementById('card-bucket-list'),
  cardHardDays: document.getElementById('card-hard-days'),

  // Chapter 4 Letter
  openLetterSealBtn: document.getElementById('open-letter-seal-btn'),
  sealedEnvelopeCard: document.getElementById('sealed-envelope-card'),
  unfoldedLetter: document.getElementById('unfolded-letter'),
  continueToGardenBtn: document.getElementById('continue-to-garden-btn'),

  // Final Chapter 5 Garden
  flowerbedContainer: document.getElementById('flowerbed-container'),
  gardenCountLabel: document.getElementById('garden-count-label'),
  plantTulipBtn: document.getElementById('plant-tulip-btn'),
  resetGardenBtn: document.getElementById('reset-garden-btn'),
  btnReadAgain: document.getElementById('btn-read-again'),
  btnSendHeart: document.getElementById('btn-send-heart'),
  btnMoreSurprise: document.getElementById('btn-more-surprise'),
  btnRandomMemory: document.getElementById('btn-random-memory'),
  btnQuestionYou: document.getElementById('btn-question-you'),

  // Floating Mascot
  floatingMascotWidget: document.getElementById('floating-mascot-widget'),
  mascotToggleBtn: document.getElementById('mascot-toggle-btn'),
  mascotSpeechBubble: document.getElementById('mascot-speech-bubble'),
  mascotSpeechText: document.getElementById('mascot-speech-text'),
  floatingMascotImg: document.getElementById('floating-mascot-img'),
  secretNoteBtn: document.getElementById('secret-note-btn'),

  // Modals
  lightboxModal: document.getElementById('lightbox-modal'),
  lightboxImg: document.getElementById('lightbox-img'),
  lightboxTitle: document.getElementById('lightbox-title'),
  lightboxDate: document.getElementById('lightbox-date'),
  lightboxQuote: document.getElementById('lightbox-quote'),
  lightboxStory: document.getElementById('lightbox-story'),
  lightboxCounter: document.getElementById('lightbox-counter'),
  lightboxPrevBtn: document.getElementById('lightbox-prev-btn'),
  lightboxNextBtn: document.getElementById('lightbox-next-btn'),
  lightboxPanePrev: document.getElementById('lightbox-pane-prev'),
  lightboxPaneNext: document.getElementById('lightbox-pane-next'),
  lightboxPanePill: document.getElementById('lightbox-pane-pill'),
  lightboxDotsStrip: document.getElementById('lightbox-dots-strip'),

  letterModal: document.getElementById('letter-modal'),
  letterModalBadge: document.getElementById('letter-modal-badge'),
  letterModalTitle: document.getElementById('letter-modal-title'),
  letterModalBody: document.getElementById('letter-modal-body'),

  bucketListModal: document.getElementById('bucket-list-modal'),
  bucketItemsList: document.getElementById('bucket-items-list'),
  bucketProgressFill: document.getElementById('bucket-progress-fill'),
  bucketProgressLabel: document.getElementById('bucket-progress-label'),
  newBucketInput: document.getElementById('new-bucket-input'),
  addBucketBtn: document.getElementById('add-bucket-btn'),
  resetBucketBtn: document.getElementById('reset-bucket-btn'),

  questionModal: document.getElementById('question-modal'),
  questionChoices: document.getElementById('question-choices'),
  questionAnswerBox: document.getElementById('question-answer-box'),

  surpriseModal: document.getElementById('surprise-modal'),
  surpriseText: document.getElementById('surprise-text'),
  drawAnotherSurpriseBtn: document.getElementById('draw-another-surprise-btn'),

  // Particles & Toasts
  ambientParticles: document.getElementById('ambient-particles'),
  toastContainer: document.getElementById('toast-container')
};


/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPasswordInputs();
  initDaysCounter();
  initThemeAndMotion();
  initMusicSystem();
  initChapter1Galleries();
  renderPolaroidGallery();
  initBucketList();
  initGarden();
  setupEventListeners();
  startAmbientParticles();
  // Run scroll reveal after a tick so dynamically-rendered elements (polaroids etc.) are in the DOM
  setTimeout(initScrollReveal, 80);
});


/* ==========================================================================
   1. PASSWORD & LOCK SCREEN SYSTEM
   ========================================================================== */

function initPasswordInputs() {
  if (elements.hintText) {
    elements.hintText.textContent = HINT_TEXT;
  }

  elements.digitInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const val = e.target.value;

      // Handle paste of 4 digits
      if (val.length > 1) {
        handlePastedCode(val);
        return;
      }

      // Restrict to single numeric digit
      if (!/^\d$/.test(val)) {
        input.value = '';
        input.classList.remove('has-value');
        return;
      }

      input.classList.add('has-value');

      // Move focus to next input box if available
      if (index < elements.digitInputs.length - 1) {
        elements.digitInputs[index + 1].focus();
      } else {
        // All digits typed, check password automatically
        validatePassword();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (!input.value && index > 0) {
          elements.digitInputs[index - 1].focus();
        } else {
          input.value = '';
          input.classList.remove('has-value');
        }
      } else if (e.key === 'Enter') {
        validatePassword();
      }
    });

    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasteData = (e.clipboardData || window.clipboardData).getData('text');
      handlePastedCode(pasteData);
    });
  });

  if (elements.hintToggleBtn) {
    elements.hintToggleBtn.addEventListener('click', () => {
      elements.hintText.classList.toggle('hidden');
    });
  }

  if (elements.unlockSubmitBtn) {
    elements.unlockSubmitBtn.addEventListener('click', validatePassword);
  }
}

function handlePastedCode(pastedStr) {
  const digits = pastedStr.replace(/\D/g, '').slice(0, 4);
  if (!digits) return;

  digits.split('').forEach((digit, i) => {
    if (elements.digitInputs[i]) {
      elements.digitInputs[i].value = digit;
      elements.digitInputs[i].classList.add('has-value');
    }
  });

  if (digits.length === 4) {
    validatePassword();
  } else if (elements.digitInputs[digits.length]) {
    elements.digitInputs[digits.length].focus();
  }
}

function validatePassword() {
  const enteredCode = elements.digitInputs.map(input => input.value).join('');

  if (enteredCode.length < 4) {
    showPasswordFeedback("Please enter all 4 digits of our secret code 🌿", "error-msg");
    shakePasswordInputs();
    return;
  }

  if (enteredCode === ACCESS_CODE) {
    showPasswordFeedback("Welcome, my favorite person! Unlocking our story… 💚", "success-msg");
    unlockWebsite();
  } else {
    showPasswordFeedback("Nice try, sweet girl! Check the hint if you need it 🌷", "error-msg");
    shakePasswordInputs();
    // Clear boxes after brief delay for re-entry
    setTimeout(() => {
      elements.digitInputs.forEach(input => {
        input.value = '';
        input.classList.remove('has-value');
      });
      elements.digitInputs[0].focus();
    }, 900);
  }
}

function shakePasswordInputs() {
  const group = document.getElementById('digit-inputs-group');
  if (group) {
    group.classList.remove('shake-animation');
    void group.offsetWidth; // Trigger reflow
    group.classList.add('shake-animation');
  }
}

function showPasswordFeedback(msg, className) {
  if (!elements.passwordFeedback) return;
  elements.passwordFeedback.textContent = msg;
  elements.passwordFeedback.className = `password-feedback ${className}`;
}

function unlockWebsite() {
  state.isUnlocked = true;

  // Animate the envelope opening
  if (elements.welcomeEnvelope) {
    elements.welcomeEnvelope.classList.add('opened');
  }

  // Smoothly transition from Welcome Lock to Music Selection
  setTimeout(() => {
    elements.welcomeSection.classList.add('hidden');
    elements.musicSelectSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast("Our story is unlocked! Choose our soundtrack 🎶");
  }, 1200);
}


/* ==========================================================================
   2. MUSIC PLAYER SYSTEM (HTML5 Audio + Web Audio API Fallback)
   ========================================================================== */

function initMusicSystem() {
  renderMusicPickerDots();
  loadSong(state.currentSongIndex, false);
  initYouTubePlayer();

  // Single card music picker navigation
  if (elements.pickerPrevSongBtn) {
    elements.pickerPrevSongBtn.addEventListener('click', () => {
      const prevIndex = (state.currentSongIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
      switchSong(prevIndex, state.isPlaying);
    });
  }

  if (elements.pickerNextSongBtn) {
    elements.pickerNextSongBtn.addEventListener('click', () => {
      const nextIndex = (state.currentSongIndex + 1) % PLAYLIST.length;
      switchSong(nextIndex, state.isPlaying);
    });
  }

  if (elements.musicSingleCard) {
    elements.musicSingleCard.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        const prevIndex = (state.currentSongIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
        switchSong(prevIndex, state.isPlaying);
      } else if (e.key === 'ArrowRight') {
        const nextIndex = (state.currentSongIndex + 1) % PLAYLIST.length;
        switchSong(nextIndex, state.isPlaying);
      }
    });
  }

  // Preview Play button on Soundtrack Picker Card
  if (elements.pickerPreviewPlayBtn) {
    elements.pickerPreviewPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      elements.miniMusicPlayer.classList.remove('hidden');
      togglePlayPause();
      showToast(state.isPlaying ? `Playing ${PLAYLIST[state.currentSongIndex].title} 🎶` : "Soundtrack paused ⏸️");
    });
  }

  // Mini Player Controls
  if (elements.playerPlayBtn) {
    elements.playerPlayBtn.addEventListener('click', togglePlayPause);
  }
  if (elements.playerPrevBtn) {
    elements.playerPrevBtn.addEventListener('click', playPrevSong);
  }
  if (elements.playerNextBtn) {
    elements.playerNextBtn.addEventListener('click', () => playNextSong(false));
  }
  if (elements.playerAmbientBtn) {
    elements.playerAmbientBtn.addEventListener('click', toggleAmbientChimes);
  }
  if (elements.playerMinimizeBtn) {
    elements.playerMinimizeBtn.addEventListener('click', () => {
      elements.miniMusicPlayer.classList.add('hidden');
      showToast("Music dock minimized. Click 🎵 in the header anytime to re-open!");
    });
  }

  // Start Story button from Music Screen - Begins full song playback immediately
  if (elements.startStoryBtn) {
    elements.startStoryBtn.addEventListener('click', () => {
      elements.musicSelectSection.classList.add('hidden');
      elements.storyContainer.classList.remove('hidden');
      elements.siteHeader.classList.remove('hidden');
      elements.miniMusicPlayer.classList.remove('hidden');
      elements.floatingMascotWidget.classList.remove('hidden');
      elements.secretNoteBtn.classList.remove('hidden');

      // Start full song playback without delay
      startYouTubePlayback();

      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast(`Playing our soundtrack: ${PLAYLIST[state.currentSongIndex].title} 🎵`);
    });
  }
}

/* --------------------------------------------------------------------------
   YouTube IFrame API Integration (GitHub Pages & Localhost Compatible)
   -------------------------------------------------------------------------- */
let ytSafetyInterval = null;

function initYouTubePlayer() {
  if (state.ytPlayer) return;

  // Make globally accessible for early callback hook in index.html
  window.createYTPlayer = createYTPlayer;

  if (window.YT && typeof window.YT.ready === 'function') {
    window.YT.ready(createYTPlayer);
  } else if (window.YT && window.YT.Player) {
    createYTPlayer();
  } else {
    // YouTube API callback
    window.onYouTubeIframeAPIReady = createYTPlayer;
  }

  // Safety net interval: in case onYouTubeIframeAPIReady fired before listener was bound
  if (!ytSafetyInterval) {
    let attempts = 0;
    ytSafetyInterval = setInterval(() => {
      attempts++;
      if (state.ytPlayer || attempts > 40) {
        clearInterval(ytSafetyInterval);
        ytSafetyInterval = null;
        return;
      }
      if (window.YT && window.YT.Player) {
        clearInterval(ytSafetyInterval);
        ytSafetyInterval = null;
        createYTPlayer();
      }
    }, 250);
  }
}

function createYTPlayer() {
  if (state.ytPlayer) return;
  if (!window.YT || !window.YT.Player) return;

  try {
    const currentSong = PLAYLIST[state.currentSongIndex];
    const pageOrigin = window.location.origin && window.location.origin !== 'null'
      ? window.location.origin
      : window.location.protocol + '//' + window.location.host;

    state.ytPlayer = new YT.Player('yt-player-container', {
      height: '200',
      width: '200',
      videoId: currentSong.youtubeId,
      host: 'https://www.youtube-nocookie.com',
      playerVars: {
        enablejsapi: 1,
        origin: pageOrigin,
        playsinline: 1,
        controls: 0,
        rel: 0,
        start: currentSong.startSeconds || 0,
        modestbranding: 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
        'onError': onPlayerError
      }
    });

    // Ensure allow attribute is granted on iframe for autoplay permission
    setTimeout(() => {
      const iframe = document.getElementById('yt-player-container');
      if (iframe && iframe.tagName === 'IFRAME') {
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      }
    }, 100);
  } catch (err) {
    console.warn("YouTube Player initialization warning:", err);
  }
}

// Expose createYTPlayer globally early so callbacks never fail
window.createYTPlayer = createYTPlayer;

function onPlayerReady(event) {
  state.isYtReady = true;

  try {
    const iframe = document.getElementById('yt-player-container');
    if (iframe && iframe.tagName === 'IFRAME') {
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    }
  } catch (e) {}

  if (state.pendingPlay) {
    state.pendingPlay = false;
    startYouTubePlayback();
  }
}

function onPlayerError(event) {
  console.warn("YouTube Player error encountered:", event.data);
  // Codes: 101/150 (embed restricted by owner), 100 (not found/private), 5 (HTML5 error), 2 (invalid id)
  if (event.data === 101 || event.data === 150 || event.data === 100 || event.data === 5 || event.data === 2) {
    showToast("Notice: Audio streaming restricted by provider. Starting sweet chimes… 🌷");
    startAmbientChimes();
  }
}

function onPlayerStateChange(event) {
  // YT.PlayerState: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (cued)
  if (event.data === 1) { // Playing
    state.isPlaying = true;
    updatePlayPauseIcons(true);
    document.body.classList.remove('audio-paused');
  } else if (event.data === 2) { // Paused
    state.isPlaying = false;
    updatePlayPauseIcons(false);
    document.body.classList.add('audio-paused');
  } else if (event.data === 0) { // Ended - Auto-advance to next song
    playNextSong(true);
  }
}

function updatePlayPauseIcons(isPlaying) {
  if (elements.playIcon && elements.pauseIcon) {
    if (isPlaying) {
      elements.playIcon.classList.add('hidden');
      elements.pauseIcon.classList.remove('hidden');
    } else {
      elements.playIcon.classList.remove('hidden');
      elements.pauseIcon.classList.add('hidden');
    }
  }

  // Update cassette spinning reels & preview pill button
  if (elements.previewPillIcon) {
    elements.previewPillIcon.textContent = isPlaying ? "⏸" : "▶";
  }
  if (elements.previewPillText) {
    elements.previewPillText.textContent = isPlaying ? "Pause Preview" : "Listen to Preview";
  }
  if (elements.musicSingleCard) {
    elements.musicSingleCard.classList.toggle('is-playing', isPlaying);
  }
}

function startYouTubePlayback() {
  if (state.ytPlayer && state.isYtReady && typeof state.ytPlayer.playVideo === 'function') {
    try {
      state.ytPlayer.playVideo();
      state.isPlaying = true;
      updatePlayPauseIcons(true);
      document.body.classList.remove('audio-paused');
    } catch (err) {
      console.warn("YouTube playVideo execution warning:", err);
    }
  } else {
    state.pendingPlay = true;
    if (!state.ytPlayer) {
      initYouTubePlayer();
    }
  }
}

function togglePlayPause() {
  if (!state.ytPlayer || !state.isYtReady || typeof state.ytPlayer.getPlayerState !== 'function') {
    startYouTubePlayback();
    return;
  }
  const playerState = state.ytPlayer.getPlayerState();
  if (playerState === 1) { // Currently playing -> pause
    state.ytPlayer.pauseVideo();
    state.isPlaying = false;
    updatePlayPauseIcons(false);
    document.body.classList.add('audio-paused');
  } else { // Paused or cued -> play
    state.ytPlayer.playVideo();
    state.isPlaying = true;
    updatePlayPauseIcons(true);
    document.body.classList.remove('audio-paused');
  }
}

function renderMusicPickerDots() {
  if (!elements.pickerDotsStrip) return;
  elements.pickerDotsStrip.innerHTML = PLAYLIST.map((song, idx) => `
    <button type="button" class="picker-dot-btn ${idx === state.currentSongIndex ? 'active' : ''}" data-index="${idx}" aria-label="Track ${idx + 1}: ${song.title}" aria-selected="${idx === state.currentSongIndex ? 'true' : 'false'}"></button>
  `).join('');

  elements.pickerDotsStrip.querySelectorAll('.picker-dot-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetIndex = parseInt(btn.getAttribute('data-index'), 10);
      switchSong(targetIndex, state.isPlaying);
    });
  });
}

function loadSong(index, shouldPlay = false) {
  state.currentSongIndex = index;
  const song = PLAYLIST[index];
  const sideLetter = String.fromCharCode(65 + index); // A, B, C...
  const startAt = song.startSeconds || 0;

  // Update Mini Player Text
  if (elements.playerTrackName) elements.playerTrackName.textContent = song.title;
  if (elements.playerTrackArtist) elements.playerTrackArtist.textContent = `${song.artist} • Full Song`;

  // Update YouTube Video in Player
  if (state.ytPlayer && state.isYtReady) {
    if (shouldPlay) {
      if (typeof state.ytPlayer.loadVideoById === 'function') {
        state.ytPlayer.loadVideoById({
          videoId: song.youtubeId,
          startSeconds: startAt
        });
      }
      state.isPlaying = true;
      updatePlayPauseIcons(true);
      document.body.classList.remove('audio-paused');
    } else {
      if (typeof state.ytPlayer.cueVideoById === 'function') {
        state.ytPlayer.cueVideoById({
          videoId: song.youtubeId,
          startSeconds: startAt
        });
      }
    }
  } else if (shouldPlay) {
    state.pendingPlay = true;
    if (!state.ytPlayer) {
      initYouTubePlayer();
    }
  }

  // Update Music Picker Card UI
  if (elements.cassetteLabelTrack) elements.cassetteLabelTrack.textContent = `SIDE ${sideLetter}`;
  if (elements.pickerSongTitle) elements.pickerSongTitle.textContent = song.title;
  if (elements.pickerSongArtist) elements.pickerSongArtist.textContent = `${song.artist} • Full Soundtrack`;
  if (elements.pickerSongNote) elements.pickerSongNote.textContent = song.note;
  if (elements.pickerTrackTag) elements.pickerTrackTag.textContent = `SIDE ${sideLetter}`;
  if (elements.pickerTrackCounter) elements.pickerTrackCounter.textContent = `${index + 1} of ${PLAYLIST.length}`;

  // Update dot indicators
  if (elements.pickerDotsStrip) {
    const dots = elements.pickerDotsStrip.querySelectorAll('.picker-dot-btn');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
  }

  // Subtle tactile bounce on card switch
  if (elements.musicSingleCard) {
    elements.musicSingleCard.style.transform = 'scale(0.98)';
    setTimeout(() => {
      elements.musicSingleCard.style.transform = '';
    }, 120);
  }
}

function switchSong(index, shouldPlay = false) {
  if (state.currentSongIndex === index && !shouldPlay) return;
  loadSong(index, shouldPlay);
}

function playNextSong(autoPlay = false) {
  const nextIndex = (state.currentSongIndex + 1) % PLAYLIST.length;
  const shouldPlay = autoPlay || state.isPlaying;
  switchSong(nextIndex, shouldPlay);
}

function playPrevSong() {
  const prevIndex = (state.currentSongIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
  const shouldPlay = state.isPlaying;
  switchSong(prevIndex, shouldPlay);
}

/* ==========================================================================
   ORIGINAL ROYALTY-FREE AMBIENT CHIMES SYNTHESIZER
   (100% Original, Generative Music Box & Relaxing Harmonic Chords)
   Zero Copyright Infringement — Pure Peaceful Procedural Synthesis
   ========================================================================== */
let ambientSynthInterval = null;

function toggleAmbientChimes() {
  if (state.ambientChimesActive) {
    stopAmbientChimes();
    showToast("Ambient chimes paused 🌙");
  } else {
    startAmbientChimes();
    showToast("Playing soft romantic chimes ✨");
  }
}

function startAmbientChimes() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    if (!state.audioSynthContext) {
      state.audioSynthContext = new AudioCtx();
    }
    if (state.audioSynthContext.state === 'suspended') {
      state.audioSynthContext.resume();
    }

    const ctx = state.audioSynthContext;
    stopAmbientChimes();

    state.ambientChimesActive = true;
    if (elements.playerAmbientBtn) {
      elements.playerAmbientBtn.classList.add('active');
    }
    document.body.classList.remove('audio-paused');

    // Original, serene romantic chord progressions (Cmaj9, Am9, Fmaj7, G6)
    // 100% royalty-free procedural music box frequencies
    const ambientChords = [
      [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9
      [220.00, 261.63, 329.63, 392.00, 493.88], // Am9
      [174.61, 220.00, 261.63, 329.63, 440.00], // Fmaj7
      [196.00, 246.94, 293.66, 392.00, 440.00]  // G6
    ];

    let chordStep = 0;
    const playArpNote = () => {
      if (!state.ambientChimesActive) return;

      const currentChord = ambientChords[chordStep % ambientChords.length];
      const freq = currentChord[Math.floor(Math.random() * currentChord.length)];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine'; // pure, bell-like music box chime
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 2.3);

      chordStep++;
      ambientSynthInterval = setTimeout(playArpNote, 700 + Math.random() * 400);
    };

    playArpNote();
  } catch (err) {
    console.log("Ambient chimes notice:", err);
  }
}

function stopAmbientChimes() {
  state.ambientChimesActive = false;
  if (ambientSynthInterval) {
    clearTimeout(ambientSynthInterval);
    ambientSynthInterval = null;
  }
  if (elements.playerAmbientBtn) {
    elements.playerAmbientBtn.classList.remove('active');
  }
}

// Compatibility helper functions
function playSong() { startYouTubePlayback(); }
function pauseSong() {
  if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
    state.ytPlayer.pauseVideo();
  }
  stopAmbientChimes();
}
function startSynthFallback() { startAmbientChimes(); }
function stopSynthFallback() { stopAmbientChimes(); }


/* ==========================================================================
   3. PHOTO SCRAPBOOK & LIGHTBOX
   ========================================================================== */

function renderPolaroidGallery() {
  elements.polaroidGrid.innerHTML = '';
  if (elements.memoryCounterNum) {
    elements.memoryCounterNum.textContent = PHOTO_MEMORIES.length;
  }

  PHOTO_MEMORIES.forEach((memory, index) => {
    const card = document.createElement('div');
    card.className = 'polaroid-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View photo memory: ${memory.title}`);
    card.setAttribute('data-memory-index', index);

    const photos = memory.photos || (memory.image ? [{ image: memory.image, objectPosition: memory.objectPosition, alt: memory.title }] : []);
    const hasMultiple = photos.length > 1;
    const activeSubIdx = state.polaroidActiveIndices[index] || 0;
    const currentPhoto = photos[activeSubIdx] || photos[0] || {};

    let navHtml = '';
    if (hasMultiple) {
      navHtml = `
        <button class="gallery-frame-nav prev polaroid-gallery-prev" type="button" aria-label="Previous photo in this memory" title="Previous photo">‹</button>
        <button class="gallery-frame-nav next polaroid-gallery-next" type="button" aria-label="Next photo in this memory" title="Next photo">›</button>
        <span class="gallery-counter-pill polaroid-counter-pill">${activeSubIdx + 1} / ${photos.length}</span>
      `;
    }

    card.innerHTML = `
      <div class="polaroid-tape" aria-hidden="true"></div>
      <div class="polaroid-image-frame">
        <img src="${currentPhoto.image}" alt="${currentPhoto.alt || memory.title}" class="polaroid-img" loading="lazy" onerror="this.src='assets/stickers/postage-stamp.svg'" style="object-position: ${currentPhoto.objectPosition || memory.objectPosition || 'center center'};">
        ${navHtml}
      </div>
      ${hasMultiple ? `
        <div class="polaroid-dots-strip" role="tablist" aria-label="Photo options for this memory">
          ${photos.map((_, pIdx) => `<button type="button" class="polaroid-dot-btn ${pIdx === activeSubIdx ? 'active' : ''}" data-subindex="${pIdx}" aria-label="Go to photo ${pIdx + 1}" title="Photo ${pIdx + 1}"></button>`).join('')}
        </div>
      ` : ''}
      <div class="polaroid-caption">
        <h4 class="polaroid-title">${memory.title}</h4>
        <span class="polaroid-date">${memory.date}</span>
        <p class="polaroid-quote">${memory.quote}</p>
      </div>
    `;

    if (hasMultiple) {
      const prevBtn = card.querySelector('.polaroid-gallery-prev');
      const nextBtn = card.querySelector('.polaroid-gallery-next');
      const dotBtns = card.querySelectorAll('.polaroid-dot-btn');

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const curr = state.polaroidActiveIndices[index] || 0;
          switchPolaroidPhoto(index, curr - 1);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const curr = state.polaroidActiveIndices[index] || 0;
          switchPolaroidPhoto(index, curr + 1);
        });
      }

      dotBtns.forEach((dotBtn) => {
        dotBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetSubIdx = parseInt(dotBtn.getAttribute('data-subindex'), 10);
          switchPolaroidPhoto(index, targetSubIdx);
        });
      });
    }

    card.addEventListener('click', () => openLightbox(index));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      } else if (hasMultiple && e.key === 'ArrowLeft') {
        e.preventDefault();
        const curr = state.polaroidActiveIndices[index] || 0;
        switchPolaroidPhoto(index, curr - 1);
      } else if (hasMultiple && e.key === 'ArrowRight') {
        e.preventDefault();
        const curr = state.polaroidActiveIndices[index] || 0;
        switchPolaroidPhoto(index, curr + 1);
      }
    });

    elements.polaroidGrid.appendChild(card);
  });
}

function switchPolaroidPhoto(memoryIndex, targetSubIndex) {
  const memory = PHOTO_MEMORIES[memoryIndex];
  if (!memory || !memory.photos || memory.photos.length <= 1) return;

  const total = memory.photos.length;
  const newSubIndex = ((targetSubIndex % total) + total) % total;
  state.polaroidActiveIndices[memoryIndex] = newSubIndex;
  const currentPhoto = memory.photos[newSubIndex];

  // Update card in scrapbook grid
  const card = document.querySelector(`.polaroid-card[data-memory-index="${memoryIndex}"]`);
  if (card) {
    const img = card.querySelector('.polaroid-img');
    const pill = card.querySelector('.polaroid-counter-pill');
    const dots = card.querySelectorAll('.polaroid-dot-btn');

    if (img) {
      img.style.opacity = '0.35';
      setTimeout(() => {
        img.src = currentPhoto.image;
        img.alt = currentPhoto.alt || memory.title;
        img.style.objectPosition = currentPhoto.objectPosition || memory.objectPosition || 'center center';
        img.style.opacity = '1';
      }, 120);
    }

    if (pill) {
      pill.textContent = `${newSubIndex + 1} / ${total}`;
    }

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === newSubIndex);
      dot.setAttribute('aria-selected', idx === newSubIndex ? 'true' : 'false');
    });
  }

  // If Lightbox is open and showing this memory, update lightbox display in sync
  if (state.lightboxMode === 'memories' && state.activeLightboxIndex === memoryIndex && !elements.lightboxModal.classList.contains('hidden')) {
    updateLightboxMemoryPhoto(memoryIndex, newSubIndex);
  }
}

function updateLightboxMemoryPhoto(memoryIndex, subIndex) {
  const memory = PHOTO_MEMORIES[memoryIndex];
  if (!memory || !memory.photos) return;

  const total = memory.photos.length;
  const currentPhoto = memory.photos[subIndex] || memory.photos[0];

  elements.lightboxImg.style.opacity = '0.35';
  setTimeout(() => {
    elements.lightboxImg.src = currentPhoto.image;
    elements.lightboxImg.alt = currentPhoto.alt || memory.title;
    elements.lightboxImg.style.objectPosition = currentPhoto.objectPosition || memory.objectPosition || 'center center';
    elements.lightboxImg.style.opacity = '1';
  }, 120);

  if (elements.lightboxPanePill) {
    elements.lightboxPanePill.textContent = `${subIndex + 1} / ${total}`;
  }

  elements.lightboxCounter.textContent = `${memory.title} · Photo ${subIndex + 1} of ${total}`;

  if (elements.lightboxDotsStrip) {
    const dots = elements.lightboxDotsStrip.querySelectorAll('.lightbox-dot-btn');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === subIndex);
    });
  }
}

function openLightbox(index) {
  state.lightboxMode = 'memories';
  state.activeLightboxIndex = index;
  const memory = PHOTO_MEMORIES[index];

  const photos = memory.photos || (memory.image ? [{ image: memory.image, objectPosition: memory.objectPosition, alt: memory.title }] : []);
  const activeSubIdx = state.polaroidActiveIndices[index] || 0;
  const currentPhoto = photos[activeSubIdx] || photos[0] || {};
  const hasMultiple = photos.length > 1;

  elements.lightboxImg.src = currentPhoto.image || memory.image;
  elements.lightboxImg.alt = currentPhoto.alt || memory.title;
  elements.lightboxImg.style.imageRendering = 'auto';
  elements.lightboxImg.style.objectPosition = currentPhoto.objectPosition || memory.objectPosition || 'center center';

  elements.lightboxTitle.textContent = memory.title;
  elements.lightboxDate.textContent = memory.date;
  elements.lightboxQuote.textContent = `“${memory.quote}”`;
  elements.lightboxStory.textContent = memory.story;

  elements.lightboxPrevBtn.style.display = '';
  elements.lightboxNextBtn.style.display = '';

  // Setup sub-navigation inside lightbox if multiple photos
  if (hasMultiple) {
    elements.lightboxCounter.textContent = `${memory.title} · Photo ${activeSubIdx + 1} of ${photos.length}`;
    if (elements.lightboxPanePrev) elements.lightboxPanePrev.classList.remove('hidden');
    if (elements.lightboxPaneNext) elements.lightboxPaneNext.classList.remove('hidden');
    if (elements.lightboxPanePill) {
      elements.lightboxPanePill.textContent = `${activeSubIdx + 1} / ${photos.length}`;
      elements.lightboxPanePill.classList.remove('hidden');
    }
    if (elements.lightboxDotsStrip) {
      elements.lightboxDotsStrip.innerHTML = photos.map((_, pIdx) => `<button type="button" class="lightbox-dot-btn ${pIdx === activeSubIdx ? 'active' : ''}" data-subindex="${pIdx}" aria-label="Go to photo ${pIdx + 1}"></button>`).join('');
      elements.lightboxDotsStrip.classList.remove('hidden');

      elements.lightboxDotsStrip.querySelectorAll('.lightbox-dot-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetSubIdx = parseInt(btn.getAttribute('data-subindex'), 10);
          switchPolaroidPhoto(index, targetSubIdx);
        });
      });
    }
  } else {
    elements.lightboxCounter.textContent = `${index + 1} of ${PHOTO_MEMORIES.length}`;
    if (elements.lightboxPanePrev) elements.lightboxPanePrev.classList.add('hidden');
    if (elements.lightboxPaneNext) elements.lightboxPaneNext.classList.add('hidden');
    if (elements.lightboxPanePill) elements.lightboxPanePill.classList.add('hidden');
    if (elements.lightboxDotsStrip) {
      elements.lightboxDotsStrip.innerHTML = '';
      elements.lightboxDotsStrip.classList.add('hidden');
    }
  }

  elements.lightboxModal.classList.remove('hidden');
  spawnHeartBurst();
}

function closeLightbox() {
  elements.lightboxModal.classList.add('hidden');
  elements.lightboxImg.style.imageRendering = 'auto';
  elements.lightboxImg.style.objectPosition = 'center center';
  if (elements.lightboxPanePrev) elements.lightboxPanePrev.classList.add('hidden');
  if (elements.lightboxPaneNext) elements.lightboxPaneNext.classList.add('hidden');
  if (elements.lightboxPanePill) elements.lightboxPanePill.classList.add('hidden');
  if (elements.lightboxDotsStrip) {
    elements.lightboxDotsStrip.innerHTML = '';
    elements.lightboxDotsStrip.classList.add('hidden');
  }
}

function openCustomLightbox({ image, title, date, quote, story }) {
  state.lightboxMode = 'memories';
  elements.lightboxImg.src = image;
  elements.lightboxImg.alt = title;
  elements.lightboxImg.style.imageRendering = 'auto';
  elements.lightboxTitle.textContent = title;
  elements.lightboxDate.textContent = date || "Chapter 01 Memory";
  elements.lightboxQuote.textContent = quote.startsWith('“') ? quote : `“${quote}”`;
  elements.lightboxStory.textContent = story;
  elements.lightboxCounter.textContent = "Gaming Memory 🌿";

  elements.lightboxPrevBtn.style.display = 'none';
  elements.lightboxNextBtn.style.display = 'none';

  elements.lightboxModal.classList.remove('hidden');
  spawnHeartBurst();
}

/* ==========================================================================
   3.5 CHAPTER 1 TIMELINE PHOTO GALLERIES (Multi-Photo & Thumbnail Swapping)
   ========================================================================== */

function initChapter1Galleries() {
  const parts = ['a', 'b', 'c', 'd'];

  parts.forEach(part => {
    const card = document.querySelector(`.timeline-photo-card[data-part="${part}"]`);
    if (!card) return;

    const photos = CHAPTER_1_GALLERIES[part] || [];
    if (photos.length === 0) return;

    const frame = card.querySelector('.timeline-photo-frame');
    const counterPill = card.querySelector('.gallery-counter-pill');
    const prevBtn = card.querySelector('.gallery-frame-nav.prev');
    const nextBtn = card.querySelector('.gallery-frame-nav.next');
    const strip = card.querySelector('.timeline-thumbnails-strip');

    // Build or update thumbnails strip
    if (strip) {
      strip.innerHTML = '';
      if (photos.length > 1) {
        strip.classList.remove('hidden');
        if (counterPill) counterPill.classList.remove('hidden');
        if (prevBtn) prevBtn.classList.remove('hidden');
        if (nextBtn) nextBtn.classList.remove('hidden');

        photos.forEach((photo, idx) => {
          const thumbBtn = document.createElement('button');
          thumbBtn.type = 'button';
          thumbBtn.className = `gallery-thumb-btn ${idx === state.chapter1ActiveIndices[part] ? 'active' : ''}`;
          thumbBtn.setAttribute('data-index', idx);
          thumbBtn.setAttribute('role', 'tab');
          thumbBtn.setAttribute('aria-selected', idx === state.chapter1ActiveIndices[part] ? 'true' : 'false');
          thumbBtn.setAttribute('aria-label', `Photo ${idx + 1}: ${photo.title || 'Memory'}`);
          thumbBtn.title = photo.title || `Photo ${idx + 1}`;

          const thumbImg = document.createElement('img');
          thumbImg.src = photo.src;
          thumbImg.alt = photo.alt || photo.title || `Photo ${idx + 1}`;
          thumbImg.className = `gallery-thumb-img ${photo.pixelated ? 'pixelated-thumb' : ''} ${photo.fitContain ? 'contain-thumb' : ''}`;

          thumbBtn.appendChild(thumbImg);

          // Clicking thumbnail displays it on the main big photo!
          thumbBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            switchChapter1Photo(part, idx);
          });

          strip.appendChild(thumbBtn);
        });
      } else {
        strip.classList.add('hidden');
        if (counterPill) counterPill.classList.add('hidden');
        if (prevBtn) prevBtn.classList.add('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
      }
    }

    // Prev / Next button clicks on frame
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const current = state.chapter1ActiveIndices[part] || 0;
        const prev = (current - 1 + photos.length) % photos.length;
        switchChapter1Photo(part, prev);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const current = state.chapter1ActiveIndices[part] || 0;
        const next = (current + 1) % photos.length;
        switchChapter1Photo(part, next);
      });
    }

    // Clicking the main big photo frame opens Lightbox
    if (frame) {
      frame.addEventListener('click', () => {
        const activeIdx = state.chapter1ActiveIndices[part] || 0;
        openChapter1Lightbox(part, activeIdx);
      });

      frame.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const activeIdx = state.chapter1ActiveIndices[part] || 0;
          openChapter1Lightbox(part, activeIdx);
        } else if (e.key === 'ArrowLeft' && photos.length > 1) {
          e.preventDefault();
          const current = state.chapter1ActiveIndices[part] || 0;
          const prev = (current - 1 + photos.length) % photos.length;
          switchChapter1Photo(part, prev);
        } else if (e.key === 'ArrowRight' && photos.length > 1) {
          e.preventDefault();
          const current = state.chapter1ActiveIndices[part] || 0;
          const next = (current + 1) % photos.length;
          switchChapter1Photo(part, next);
        }
      });
    }

    // Initial render
    const initialIdx = state.chapter1ActiveIndices[part] || 0;
    switchChapter1Photo(part, initialIdx, false);
  });
}

function switchChapter1Photo(part, newIndex, animate = true) {
  const card = document.querySelector(`.timeline-photo-card[data-part="${part}"]`);
  if (!card) return;

  const photos = CHAPTER_1_GALLERIES[part] || [];
  if (!photos[newIndex]) return;

  state.chapter1ActiveIndices[part] = newIndex;
  const photo = photos[newIndex];

  const mainImg = card.querySelector('.timeline-photo-img');
  const captionEl = card.querySelector('.timeline-photo-caption');
  const counterPill = card.querySelector('.gallery-counter-pill');
  const strip = card.querySelector('.timeline-thumbnails-strip');

  if (mainImg) {
    if (animate) {
      mainImg.classList.remove('photo-swapping');
      void mainImg.offsetWidth;
      mainImg.classList.add('photo-swapping');
    }
    mainImg.src = photo.src;
    mainImg.alt = photo.alt || photo.title;
    if (photo.pixelated) {
      mainImg.classList.add('pixelated');
    } else {
      mainImg.classList.remove('pixelated');
    }
    if (photo.fitContain) {
      mainImg.classList.add('contain');
    } else {
      mainImg.classList.remove('contain');
    }
  }

  // Section caption below the photo remains constant and does not change
  if (captionEl) {
    const sectionInfo = CHAPTER_1_SECTION_INFO[part];
    if (sectionInfo && sectionInfo.caption) {
      captionEl.textContent = sectionInfo.caption;
    }
  }

  if (counterPill && photos.length > 1) {
    counterPill.textContent = `${newIndex + 1} / ${photos.length}`;
  }

  if (strip) {
    const thumbBtns = strip.querySelectorAll('.gallery-thumb-btn');
    thumbBtns.forEach((btn, idx) => {
      const isSelected = idx === newIndex;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      if (isSelected && typeof btn.scrollIntoView === 'function') {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    });
  }

  // If Lightbox is open and showing this part, synchronize its content
  if (state.lightboxMode === 'chapter1' && state.activeChapter1Part === part && !elements.lightboxModal.classList.contains('hidden')) {
    updateChapter1LightboxContent(part, newIndex);
  }
}

function openChapter1Lightbox(part, index) {
  state.lightboxMode = 'chapter1';
  state.activeChapter1Part = part;
  state.chapter1ActiveIndices[part] = index;

  updateChapter1LightboxContent(part, index);
  elements.lightboxModal.classList.remove('hidden');
  spawnHeartBurst();
}

function updateChapter1LightboxContent(part, index) {
  const photos = CHAPTER_1_GALLERIES[part] || [];
  const photo = photos[index];
  if (!photo) return;

  const sectionInfo = CHAPTER_1_SECTION_INFO[part] || {};
  const title = sectionInfo.title || photo.title;
  const quote = sectionInfo.quote || photo.quote;
  const story = sectionInfo.story || photo.story;

  elements.lightboxImg.src = photo.src;
  elements.lightboxImg.alt = photo.alt || title;
  elements.lightboxImg.style.objectPosition = 'center center';
  if (photo.pixelated) {
    elements.lightboxImg.style.imageRendering = 'pixelated';
  } else {
    elements.lightboxImg.style.imageRendering = 'auto';
  }
  elements.lightboxTitle.textContent = title;
  elements.lightboxDate.textContent = `The Beginning of Us · Part ${part.toUpperCase()}`;
  elements.lightboxQuote.textContent = quote.startsWith('“') ? quote : `“${quote}”`;
  elements.lightboxStory.textContent = story;
  elements.lightboxCounter.textContent = photos.length > 1 ? `Photo ${index + 1} of ${photos.length}` : "Gaming Memory 🌿";

  if (photos.length > 1) {
    elements.lightboxPrevBtn.style.display = '';
    elements.lightboxNextBtn.style.display = '';
  } else {
    elements.lightboxPrevBtn.style.display = 'none';
    elements.lightboxNextBtn.style.display = 'none';
  }
}


/* ==========================================================================
   4. BUCKET LIST SYSTEM (Interactive with LocalStorage)
   ========================================================================== */

function initBucketList() {
  const saved = localStorage.getItem('garden_bucket_list');
  if (saved) {
    try {
      state.bucketList = JSON.parse(saved);
    } catch {
      state.bucketList = DEFAULT_BUCKET_LIST.map(title => ({ title, completed: false }));
    }
  } else {
    state.bucketList = DEFAULT_BUCKET_LIST.map(title => ({ title, completed: false }));
  }

  renderBucketList();

  elements.addBucketBtn.addEventListener('click', () => {
    const val = elements.newBucketInput.value.trim();
    if (!val) return;
    state.bucketList.push({ title: val, completed: false });
    elements.newBucketInput.value = '';
    saveAndRenderBucketList();
    showToast("Added new dream to our wish list! ✨");
  });

  elements.newBucketInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      elements.addBucketBtn.click();
    }
  });

  elements.resetBucketBtn.addEventListener('click', () => {
    if (confirm("Reset completed dreams on our bucket list?")) {
      state.bucketList = DEFAULT_BUCKET_LIST.map(title => ({ title, completed: false }));
      saveAndRenderBucketList();
      showToast("Bucket list reset for new memories! 🌿");
    }
  });
}

function saveAndRenderBucketList() {
  localStorage.setItem('garden_bucket_list', JSON.stringify(state.bucketList));
  renderBucketList();
}

function renderBucketList() {
  elements.bucketItemsList.innerHTML = '';
  let completedCount = 0;

  state.bucketList.forEach((item, idx) => {
    if (item.completed) completedCount++;

    const row = document.createElement('div');
    row.className = `bucket-item-row ${item.completed ? 'completed' : ''}`;

    row.innerHTML = `
      <input type="checkbox" id="bucket-item-${idx}" class="bucket-checkbox" ${item.completed ? 'checked' : ''} aria-label="${item.title}">
      <label for="bucket-item-${idx}" class="bucket-item-text">${item.title}</label>
    `;

    const checkbox = row.querySelector('.bucket-checkbox');
    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      saveAndRenderBucketList();
      if (item.completed) {
        spawnHeartBurst();
        showToast("One step closer to our dream! 💚");
      }
    });

    elements.bucketItemsList.appendChild(row);
  });

  const total = state.bucketList.length;
  const percent = total > 0 ? (completedCount / total) * 100 : 0;
  elements.bucketProgressFill.style.width = `${percent}%`;
  elements.bucketProgressLabel.textContent = `${completedCount} of ${total} dreams completed ✨`;
}


/* ==========================================================================
   5. VIRTUAL TULIP GARDEN (Final Page)
   ========================================================================== */

function initGarden() {
  const savedCount = parseInt(localStorage.getItem('garden_tulip_count') || '0', 10);
  state.tulipCount = savedCount;
  updateGardenStats();

  // Populate existing planted tulips
  for (let i = 0; i < Math.min(state.tulipCount, 40); i++) {
    addPlantedTulipElement(false);
  }

  elements.plantTulipBtn.addEventListener('click', () => {
    state.tulipCount++;
    localStorage.setItem('garden_tulip_count', state.tulipCount.toString());
    addPlantedTulipElement(true);
    updateGardenStats();
    spawnHeartBurst();
    showToast("Planted a new green tulip with love! 🌷");
  });

  elements.resetGardenBtn.addEventListener('click', () => {
    if (confirm("Tidy up and replant our tulip garden?")) {
      state.tulipCount = 0;
      localStorage.setItem('garden_tulip_count', '0');
      elements.flowerbedContainer.innerHTML = '';
      updateGardenStats();
      showToast("Our garden is ready for new flowers! 🌿");
    }
  });
}

function updateGardenStats() {
  const count = state.tulipCount;
  elements.gardenCountLabel.textContent = `Our garden has ${count} ${count === 1 ? 'tulip' : 'tulips'} planted with love.`;
}

function addPlantedTulipElement(animate = true) {
  const tulip = document.createElement('img');
  tulip.src = 'assets/stickers/green-tulip.svg';
  tulip.alt = 'A planted green tulip';
  tulip.className = 'planted-tulip';
  tulip.title = 'Planted with love';
  
  if (!animate) {
    tulip.style.animation = 'none';
  }

  tulip.addEventListener('click', () => {
    spawnHeartBurst();
    showToast("This tulip holds a warm hug for you! 🌷");
  });

  elements.flowerbedContainer.appendChild(tulip);
  elements.flowerbedContainer.scrollTop = elements.flowerbedContainer.scrollHeight;
}


/* ==========================================================================
   6. EVENT LISTENERS & MODAL HANDLERS
   ========================================================================== */

function setupEventListeners() {
  // Navigation links smooth scroll
  elements.chapterNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Chapter 1 Confession Button
  elements.ch1ConfessionBtn.addEventListener('click', () => {
    openLetterModal(CONFESSION_LETTER);
  });

  // Note: Chapter 1 timeline photo frame clicks, thumbnails, and gallery lightbox are initialized in initChapter1Galleries()

  // Chapter 3 Interactive Cards
  elements.cardThingsLove.addEventListener('click', () => openLetterModal(THINGS_I_LOVE));
  elements.cardThingsLove.addEventListener('keydown', (e) => { if (e.key === 'Enter') openLetterModal(THINGS_I_LOVE); });

  elements.cardFavoriteMemory.addEventListener('click', () => openLightbox(0));
  elements.cardFavoriteMemory.addEventListener('keydown', (e) => { if (e.key === 'Enter') openLightbox(0); });

  elements.cardBucketList.addEventListener('click', () => {
    elements.bucketListModal.classList.remove('hidden');
  });
  elements.cardBucketList.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') elements.bucketListModal.classList.remove('hidden');
  });

  elements.cardHardDays.addEventListener('click', () => openLetterModal(HARD_DAYS_LETTER));
  elements.cardHardDays.addEventListener('keydown', (e) => { if (e.key === 'Enter') openLetterModal(HARD_DAYS_LETTER); });

  // Chapter 4: Unseal Love Letter
  elements.openLetterSealBtn.addEventListener('click', () => {
    elements.sealedEnvelopeCard.classList.add('hidden');
    elements.unfoldedLetter.classList.remove('hidden');
    spawnHeartBurst();
    showToast("Your letter is open 💌");
  });

  elements.continueToGardenBtn.addEventListener('click', () => {
    const ch5 = document.getElementById('chapter-5');
    if (ch5) ch5.scrollIntoView({ behavior: 'smooth' });
  });

  // Final Page 6 Buttons
  // BUTTON A: Read everything again
  elements.btnReadAgain.addEventListener('click', () => {
    const ch1 = document.getElementById('chapter-1');
    if (ch1) {
      ch1.scrollIntoView({ behavior: 'smooth' });
      showToast("Taking a stroll back to our beginning 🌿");
    }
  });

  // BUTTON B: Send me a little heart
  elements.btnSendHeart.addEventListener('click', () => {
    spawnHeartBurst(25);
    showToast("A little heart from you, and my day is already better. 💚");
  });

  // BUTTON C: One more surprise
  elements.btnMoreSurprise.addEventListener('click', openRandomSurprise);
  elements.drawAnotherSurpriseBtn.addEventListener('click', openRandomSurprise);

  // BUTTON D: Open a random memory
  elements.btnRandomMemory.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * PHOTO_MEMORIES.length);
    openLightbox(randomIndex);
  });

  // BUTTON E: A question for you
  elements.btnQuestionYou.addEventListener('click', () => {
    elements.questionModal.classList.remove('hidden');
    elements.questionChoices.classList.remove('hidden');
    elements.questionAnswerBox.classList.add('hidden');
  });

  // Question choices
  const choiceBtns = elements.questionChoices.querySelectorAll('.question-choice-btn');
  choiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.questionChoices.classList.add('hidden');
      elements.questionAnswerBox.classList.remove('hidden');
      spawnHeartBurst(30);
    });
  });

  // Lightbox Previous & Next
  elements.lightboxPrevBtn.addEventListener('click', () => {
    if (state.lightboxMode === 'chapter1') {
      const part = state.activeChapter1Part;
      const photos = CHAPTER_1_GALLERIES[part] || [];
      if (photos.length > 1) {
        const current = state.chapter1ActiveIndices[part] || 0;
        const prev = (current - 1 + photos.length) % photos.length;
        switchChapter1Photo(part, prev);
      }
    } else {
      const prev = (state.activeLightboxIndex - 1 + PHOTO_MEMORIES.length) % PHOTO_MEMORIES.length;
      openLightbox(prev);
    }
  });

  elements.lightboxNextBtn.addEventListener('click', () => {
    if (state.lightboxMode === 'chapter1') {
      const part = state.activeChapter1Part;
      const photos = CHAPTER_1_GALLERIES[part] || [];
      if (photos.length > 1) {
        const current = state.chapter1ActiveIndices[part] || 0;
        const next = (current + 1) % photos.length;
        switchChapter1Photo(part, next);
      }
    } else {
      const next = (state.activeLightboxIndex + 1) % PHOTO_MEMORIES.length;
      openLightbox(next);
    }
  });

  // Lightbox Pane Navigation (Multi-photo memories)
  if (elements.lightboxPanePrev) {
    elements.lightboxPanePrev.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.lightboxMode === 'memories') {
        const memIdx = state.activeLightboxIndex;
        const memory = PHOTO_MEMORIES[memIdx];
        if (memory && memory.photos && memory.photos.length > 1) {
          const curr = state.polaroidActiveIndices[memIdx] || 0;
          switchPolaroidPhoto(memIdx, curr - 1);
        }
      }
    });
  }

  if (elements.lightboxPaneNext) {
    elements.lightboxPaneNext.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.lightboxMode === 'memories') {
        const memIdx = state.activeLightboxIndex;
        const memory = PHOTO_MEMORIES[memIdx];
        if (memory && memory.photos && memory.photos.length > 1) {
          const curr = state.polaroidActiveIndices[memIdx] || 0;
          switchPolaroidPhoto(memIdx, curr + 1);
        }
      }
    });
  }

  // Floating Mascot clicks
  let mascotQuoteIndex = 0;
  elements.mascotToggleBtn.addEventListener('click', () => {
    elements.mascotSpeechBubble.classList.remove('hidden');
    elements.mascotSpeechText.textContent = MASCOT_QUOTES[mascotQuoteIndex % MASCOT_QUOTES.length];
    mascotQuoteIndex++;
    spawnHeartBurst(6);
  });

  // Secret note button easter egg
  elements.secretNoteBtn.addEventListener('click', () => {
    openLetterModal({
      badge: "Secret Note",
      title: "Just Wanted to Remind You",
      body: `
        <p>You found our little hidden note! 🌿</p>
        <p>I just wanted to slip in one extra reminder: you are truly cherished, adored, and appreciated for simply being who you are.</p>
        <p>No milestones, no pressure. Just my whole heart choosing you every single day.</p>
        <p style="font-family: var(--font-handwriting); font-size: 1.6rem; color: var(--color-forest); margin-top: 20px;">Always yours, 💚</p>
      `
    });
  });

  // Modal close buttons & clicking outside
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  // Keyboard navigation & accessibility (ESC to close, Left/Right for lightbox)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    } else if (!elements.lightboxModal.classList.contains('hidden')) {
      if (state.lightboxMode === 'memories') {
        const memIdx = state.activeLightboxIndex;
        const memory = PHOTO_MEMORIES[memIdx];
        if (memory && memory.photos && memory.photos.length > 1) {
          const curr = state.polaroidActiveIndices[memIdx] || 0;
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            switchPolaroidPhoto(memIdx, curr - 1);
            return;
          }
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            switchPolaroidPhoto(memIdx, curr + 1);
            return;
          }
        }
      }
      if (e.key === 'ArrowLeft') elements.lightboxPrevBtn.click();
      if (e.key === 'ArrowRight') elements.lightboxNextBtn.click();
    }
  });

  // Scrollspy & Back to Top
  window.addEventListener('scroll', handleWindowScroll, { passive: true });
  elements.backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mini player toggle shortcut in header
  elements.miniPlayerToggleBtn.addEventListener('click', () => {
    elements.miniMusicPlayer.classList.toggle('hidden');
  });
}

function openLetterModal({ badge, title, body }) {
  elements.letterModalBadge.textContent = badge;
  elements.letterModalTitle.textContent = title;
  elements.letterModalBody.innerHTML = body;
  elements.letterModal.classList.remove('hidden');
}

function openRandomSurprise() {
  const randomNote = SURPRISE_NOTES[Math.floor(Math.random() * SURPRISE_NOTES.length)];
  elements.surpriseText.textContent = randomNote;
  elements.surpriseModal.classList.remove('hidden');
  spawnHeartBurst(12);
}

function closeAllModals() {
  elements.lightboxModal.classList.add('hidden');
  elements.letterModal.classList.add('hidden');
  elements.bucketListModal.classList.add('hidden');
  elements.questionModal.classList.add('hidden');
  elements.surpriseModal.classList.add('hidden');
}

function handleWindowScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  // Update top progress bar
  if (elements.readingProgressBar) {
    elements.readingProgressBar.style.width = `${scrollPercent}%`;
  }

  // Toggle Back to Top button
  if (elements.backToTopBtn) {
    if (scrollTop > 350) {
      elements.backToTopBtn.classList.remove('hidden');
    } else {
      elements.backToTopBtn.classList.add('hidden');
    }
  }

  // Highlight active chapter nav link
  const chapters = document.querySelectorAll('.story-chapter');
  let currentActiveId = 'chapter-1';

  chapters.forEach(chapter => {
    const top = chapter.offsetTop - 150;
    if (scrollTop >= top) {
      currentActiveId = chapter.id;
    }
  });

  elements.chapterNavLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-target') === currentActiveId);
  });
}


/* ==========================================================================
   7. THEME & AMBIENT ANIMATIONS
   ========================================================================== */

function initThemeAndMotion() {
  // Check localStorage for night mode preference
  const isNight = localStorage.getItem('garden_night_mode') === 'true';
  setNightMode(isNight);

  elements.themeToggleBtn.addEventListener('click', () => {
    setNightMode(!state.nightMode);
  });

  elements.motionToggleBtn.addEventListener('click', () => {
    state.motionEnabled = !state.motionEnabled;
    elements.ambientParticles.style.display = state.motionEnabled ? 'block' : 'none';
    showToast(state.motionEnabled ? "Floating sparkles enabled ✨" : "Floating particles paused 🌿");
  });
}

function setNightMode(enable) {
  state.nightMode = enable;
  document.body.classList.toggle('theme-dark', enable);
  document.body.classList.toggle('theme-light', !enable);
  localStorage.setItem('garden_night_mode', enable.toString());
  
  if (elements.themeToggleBtn) {
    elements.themeToggleBtn.querySelector('.theme-icon').textContent = enable ? "☀️" : "🌙";
  }
}

function initDaysCounter() {
  if (!START_DATE || START_DATE.trim() === "") {
    // If not set, display a sweet spontaneous reminder
    elements.daysCounterText.textContent = "No special reason. Just you, and all the little moments we share.";
    elements.daysCounterWidget.classList.remove('hidden');
    return;
  }

  try {
    const start = new Date(START_DATE);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (!isNaN(diffDays)) {
      elements.daysCounterText.textContent = `${diffDays} beautiful days together, and a lifetime more to go.`;
      elements.daysCounterWidget.classList.remove('hidden');
    }
  } catch (err) {
    elements.daysCounterWidget.classList.add('hidden');
  }
}

/* Ambient Floating Hearts & Petals */
function startAmbientParticles() {
  if (!state.motionEnabled) return;

  const symbols = ['💚', '🌿', '🌷', '✨', '🍃', '🤍'];
  
  setInterval(() => {
    if (!state.motionEnabled || document.hidden) return;

    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    
    particle.style.left = `${Math.random() * 95}vw`;
    particle.style.fontSize = `${Math.random() * 12 + 14}px`;
    particle.style.animationDuration = `${Math.random() * 8 + 9}s`;

    elements.ambientParticles.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 18000);
  }, 1600);
}

function spawnHeartBurst(count = 15) {
  if (!state.motionEnabled) return;
  const symbols = ['💚', '🌷', '✨', '🤍', '🍃'];

  for (let i = 0; i < count; i++) {
    const burst = document.createElement('div');
    burst.className = 'floating-particle';
    burst.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    burst.style.left = `${Math.random() * 80 + 10}vw`;
    burst.style.bottom = `${Math.random() * 30 + 10}vh`;
    burst.style.fontSize = `${Math.random() * 16 + 18}px`;
    burst.style.animationDuration = `${Math.random() * 2 + 2.5}s`;

    elements.ambientParticles.appendChild(burst);
    setTimeout(() => burst.remove(), 4500);
  }
}

/* Toast Notifications */
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = message;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}


/* ==========================================================================
   8. SCROLL REVEAL
   ========================================================================== */

function initScrollReveal() {
  // Skip if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // ── Define what gets animated and how ──
  const targets = [
    // Chapter headers — fade up
    { selector: '.chapter-header',             cls: 'reveal-up'    },
    // Ch1 timeline cards — slide in from their layout side
    { selector: '.timeline-card.card-left',    cls: 'reveal-left'  },
    { selector: '.timeline-card.card-right',   cls: 'reveal-right' },
    // Interactive feature cards — pop up
    { selector: '.interactive-card',           cls: 'reveal-pop'   },
    // Letter / closing section
    { selector: '.letter-section',             cls: 'reveal-up'    },
    { selector: '.closing-section',            cls: 'reveal-up'    },
    // Memory doodles — subtle float up with slight delay
    { selector: '.memory-doodle',              cls: 'reveal-up'    },
  ];

  // Collect all elements to observe
  const revealEls = [];

  targets.forEach(({ selector, cls }) => {
    document.querySelectorAll(selector).forEach(el => {
      // Don't re-assign if already has a reveal class
      if (!el.classList.contains('reveal-up') &&
          !el.classList.contains('reveal-left') &&
          !el.classList.contains('reveal-right') &&
          !el.classList.contains('reveal-drop') &&
          !el.classList.contains('reveal-pop')) {
        el.classList.add(cls);
        revealEls.push(el);
      }
    });
  });

  // ── Intersection Observer ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      el.classList.add('is-visible');

      // Stop observing — reveal only happens once
      observer.unobserve(el);
    });
  }, {
    threshold: 0.12,       // trigger when 12% of element is visible
    rootMargin: '0px 0px -40px 0px'  // slight bottom offset for feel
  });

  revealEls.forEach(el => observer.observe(el));
}
