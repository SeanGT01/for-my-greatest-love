# 🌿 A Little Garden of Us — For My Favorite Person

> *“No special occasion. No particular reason. Just you, and all the little reasons I love you.”*

A romantic, cozy, and interactive digital scrapbook and love letter website designed for the love of your life. Built with HTML5, CSS3, and vanilla JavaScript, styled with soft sage greens, cream stationery, green tulips, and adorable Pochacco-inspired puppy moments.

---

## ✨ Features Summary

1. **The Locked Love Letter (Welcome Screen)**
   - Cream stationery card with corner green tulips and Pochacco holding a love letter.
   - 4-digit secret password box with auto-focus movement, backspace, and paste support.
   - Shake animation and sweet message on incorrect entry, plus a customizable hint.
   - Envelope unsealing animation upon entering the correct password.
2. **Music Selection & Persistent Player (Powered by Spotify)**
   - 3 customizable soundtrack choices powered legally by official Spotify Embeds.
   - Interactive preview card on the selection screen with authentic album art and playback.
   - **Original Royalty-Free Ambient Chimes:** An original Web Audio music box / ambient harmonic synthesizer with gentle relaxing chimes (100% royalty-free).
   - Persistent mini player dock that follows her across all chapters with quick track switching and ambient chimes toggle.
3. **Chapter 01: The Beginning of Us**
   - Scrapbook timeline telling the story of meeting online while gaming.
   - Includes your real gaming memory photos across Blox Fruits, Minecraft, and Stardew Valley!
   - Parts A through D with customized captions tailored to your avatars and memories.
   - Interactive button: *"Read what I never told you…"* revealing a handwritten confession modal.
4. **Chapter 02: Little Moments, Big Feelings (Photo Scrapbook)**
   - Responsive grid of slightly rotated polaroid cards with washi tape and cute paper shadows.
   - Clickable polaroids opening a full-screen Lightbox with title, date badge, quote, and full personal memory story.
   - Keyboard arrow navigation (`←` / `→`) and smooth previous/next buttons.
   - Floating hearts burst when opening memories.
5. **Chapter 03: My Favorite Place Is With You**
   - 4 interactive feature cards:
     - 💌 **Things I Love About You:** Sweet personal list.
     - ✨ **My Favorite Memory:** Featured memory & story.
     - 🌿 **Things I Want to Do With You:** Interactive bucket list with checkboxes, live progress bar, add-a-dream input, and `localStorage` memory.
     - 🍵 **A Letter for Your Hard Days:** A comforting letter she can return to whenever she feels tired, sad, or overwhelmed.
6. **Chapter 04: One Last Letter (For Now)**
   - Centerpiece full-screen cream paper letter with green ribbon and wax seal.
   - Interactive wax seal button: breaking the seal smoothly reveals the handwritten letter.
   - Sincere reminder that she deserves to feel loved and appreciated on ordinary days, not just milestones.
7. **Chapter 05: A Little Garden of Us (Final Page)**
   - Animated flowerbed where green tulips sway and float.
   - Interactive Dashboard:
     - **Button A:** *Read everything again* (smooth scroll to top without re-entering password).
     - **Button B:** *Send me a little heart* (shower of hearts and sweet toast message).
     - **Button C:** *One more surprise* (draws a randomized cute love note from 12+ messages).
     - **Button D:** *Plant a tulip* (plants a virtual tulip in the garden canvas, increments counter, saved in `localStorage`).
     - **Button E:** *Open a random memory* (random polaroid lightbox).
     - **Button F:** *A question for you…* (*“Will you keep making little memories with me?”* with two playful choices).
8. **Cozy Extras & Quality of Life**
   - 🌙 **Cozy Night Mode** toggle (warm olive/sage dark mode for reading in bed).
   - ✨ **Sparkles Toggle** (turn off floating particles on low-power devices).
   - 🐾 **Interactive Floating Mascot** (tap Pochacco for cute speech bubbles).
   - 💌 **Secret Note Easter Egg** floating in the corner.
   - ⬆️ **Back to Top** floating button.

---

## 🔒 Important Security Notice About Static Passwords

> [!IMPORTANT]
> The 4-digit code on this website is a **playful, romantic lock designed to create a fun, interactive moment** for your girlfriend when she first opens the letter.
> Because this is a static website (with no backend server or private database), the code and images are present in the frontend files. It does **not** provide cryptographic protection against someone who opens browser Developer Tools to inspect files. Keep this in mind when choosing which photos to share!

---

## 🚀 How to Run Locally

You don't need any complex installation, Node.js, or backend servers!

### Option 1: Direct File Opening
Simply double-click `index.html` in your file explorer to open it in your browser (Chrome, Safari, Edge, or Firefox).

### Option 2: Local Development Server (Recommended for audio)
Some browsers restrict local file audio playback when opened via `file://`. Running a local server is quick:

- **Using Python:**
  ```bash
  python -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.

- **Using Node (npx):**
  ```bash
  npx serve .
  ```

---

## 🎨 How to Personalize Your Website

All your customizable content is neatly organized at the very top of [`script.js`](file:///c:/Users/seanm/Downloads/for-my-greatest-love-main/for-my-greatest-love-main/script.js).

### 1. Changing the 4-Digit Password & Hint
Open `script.js` and locate lines 17-21:
```javascript
// Change "1234" to any 4 digits (e.g. her birth date, your meetup date, or a cute secret number)
const ACCESS_CODE = "1234";

// Customize the hint she sees when clicking "Need a little hint? 🌿"
const HINT_TEXT = "Hint: Try 1234 (our secret number)";
```

### 2. Adding Your Real Photos (Chapter 02 Scrapbook)
1. Copy your photos (e.g., `photo1.jpg`, `photo2.jpg`) into the `assets/photos/` folder.
2. In `script.js`, edit the `PHOTO_MEMORIES` array:
```javascript
const PHOTO_MEMORIES = [
  {
    image: "assets/photos/photo1.jpg", // path to your image
    title: "The day we finally met",
    date: "August 14, 2023",
    quote: "After all those conversations, I finally got to see you in real life.",
    story: "Write your heartfelt story or memory here..."
  },
  // Add as many photos as you want!
];
```

### 2.1 Adding Photos to Chapter 01 (Parts A, B, C, D Multi-Photo Galleries)
Each timeline card in **Chapter 01** has its own built-in interactive gallery with thumbnail selector strips and next/prev arrows. You can add **1, 2, 3, or more than 3 photos** to any part!

1. Place your new photo files into `assets/photos/`.
2. Open [`script.js`](file:///c:/Users/seanm/Downloads/for-my-greatest-love-main/for-my-greatest-love-main/script.js) and find `CHAPTER_1_GALLERIES` (around line 98):
```javascript
const CHAPTER_1_GALLERIES = {
  a: [ /* Part A photos */ ],
  b: [ /* Part B photos */ ],
  c: [ /* Part C photos */ ],
  d: [ /* Part D photos */ ]
};
```
3. To add more photos to any part, simply append a new photo item to that part's array:
```javascript
{
  src: "assets/photos/your-photo.png",
  alt: "Brief photo description",
  caption: "“Caption displayed below the photo”",
  title: "Title in fullscreen lightbox",
  quote: "Sweet quote in fullscreen lightbox",
  story: "Story description in fullscreen lightbox"
}
```
* **Thumbnail Swapping:** When you click any small thumbnail, it instantly displays as the main big photo.
* **Fullscreen Lightbox:** Clicking the big photo opens it in fullscreen with full story details and left/right arrows to browse all photos in that part!

### 3. Customizing Your Soundtrack (Official YouTube Soundtracks)
All music on this website is powered legally and royalty-free via official YouTube Embeds, playing seamlessly as pure background audio with **zero video player shown on any page**. Full songs play from start to finish with no 30-second preview caps and no account login needed.

To change the songs:
1. Search for the song or official lyric video on YouTube.
2. Copy the Video ID from the URL (the characters right after `watch?v=`, e.g. for `https://www.youtube.com/watch?v=ifY5MF4zZ0k`, the ID is `ifY5MF4zZ0k`).
3. Update the `PLAYLIST` array in `script.js`:
```javascript
const PLAYLIST = [
  {
    title: "Your Song Name",
    artist: "Artist Name",
    youtubeId: "ifY5MF4zZ0k", // Your YouTube Video ID
    youtubeUrl: "https://www.youtube.com/watch?v=ifY5MF4zZ0k",
    startSeconds: 0, // Optional start offset in seconds (e.g. 0 to start immediately)
    note: "Why this song reminds you of her... 🤍"
  },
  // Add as many tracks as you like!
];
```
*(Note: An original procedural Web Audio music box synthesizer with gentle romantic chimes is also built right into the player dock via the ✨ button!)*

### 4. Customizing the Love Letters & Story
In `script.js`:
- **Chapter 1 Story & Confession:** Edit `CONFESSION_LETTER` for the hidden note revealed in Chapter 1.
- **Chapter 3 Lists:** Edit `THINGS_I_LOVE`, `HARD_DAYS_LETTER`, and `DEFAULT_BUCKET_LIST`.
- **Chapter 4 Centerpiece Letter:** You can customize the parchment text directly in `index.html` under `<article class="unfolded-parchment-letter">` or in `script.js`.
- **Surprise Notes:** Add your own inside jokes or compliments in `SURPRISE_NOTES`.

### 5. Setting "Days Since We Met" (Optional)
In `script.js`, set:
```javascript
const START_DATE = "2023-05-20"; // Format: YYYY-MM-DD
```
If you leave it blank (`""`), it automatically displays a sweet message:
*“No special reason. Just you, and all the little moments we share.”*

---

## 🌐 Free & Easy Deployment to the Web

To send the link to her phone so she can open it anytime:

### Method A: GitHub Pages (100% Free)
1. Push your repository to GitHub.
2. Go to your repository on GitHub and click **Settings**.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Branch**, select `main` (or `master`) and `/root`, then click **Save**.
5. After 1-2 minutes, GitHub will give you a live link: `https://yourusername.github.io/your-repo-name/`.

### Method B: Netlify Drop (Instant, No Git Required)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the whole `for-my-greatest-love-main` folder into the browser.
3. Netlify will give you a live URL in 10 seconds!

---

## 📁 Project Structure

```
for-my-greatest-love-main/
├── index.html                 # Main website structure & semantic HTML
├── style.css                  # Romantic scrapbook aesthetic, animations, & themes
├── script.js                  # Configuration, Spotify player, polaroids, modals, & garden
├── README.md                  # Customization & deployment guide
├── assets/
│   ├── music/                 # Soundtrack guide & documentation (no raw MP3s needed)
│   ├── photos/                # Put your favorite photos here
│   └── stickers/              # Pochacco stickers, green tulips, stamp, wax seal, etc.
│       ├── pochacco-welcome.svg
│       ├── pochacco-headphones.svg
│       ├── pochacco-gaming.svg
│       ├── pochacco-camera.svg
│       ├── pochacco-tulips.svg
│       ├── pochacco-cheer.svg
│       ├── green-tulip.svg
│       ├── postage-stamp.svg
│       ├── wax-seal.svg
│       └── game-controller.svg
```

---

<p align="center">
  <strong>Made with love for an ordinary day. 🌿</strong>
</p>
