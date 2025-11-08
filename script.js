// Floating hearts & emojis
const emojis = ["💖", "💞", "❤️", "💘", "💕", "🌸", "🌹"];
const container = document.getElementById("floating-emojis");

setInterval(() => {
  const emoji = document.createElement("span");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = 4 + Math.random() * 4 + "s";
  container.appendChild(emoji);
  setTimeout(() => emoji.remove(), 7000);
}, 400);

// Slideshow
let slideIndex = 0;
showSlides();
function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let s of slides) s.style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3500); // switch every 3.5s
}

// Typewriter function
function typeWriterEffect(element, text, speed = 45) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else clearInterval(interval);
  }, speed);
}

// Text contents
const texts = {
  letter: `💌 My Dearest Mercy,

From the moment you entered my life, everything changed.  
Your laughter is my music, your eyes my light, your love my strength.  
Every day, I thank God for bringing you into my heart.  
I promise to always treasure you, protect you, and never let go.  

Forever yours,
Wilson 💗`,

  poem: `🌹 My Poem for You 🌹

You're the rhythm my heart beats to,  
The sunshine breaking my morning dew.  
With every breath, I think of you —  
Mercy, my world begins and ends with you. 💞`,

  message: `💬 Hi Kasichana kangu,

You mean more to me than words could ever say.  
You're my calm, my fire, my favorite reason to smile.  
Thank you for choosing me, for loving me truly.  
I’ll love you more with each new sunrise. 💖
In whatever we go though may we always remeber we will come back storng and win it back together.
Wanja never ever doubt me or give up on me.
I love you`
};

// Buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const target = document.getElementById(targetId);
    document.querySelectorAll(".typewriter").forEach((el) => (el.style.display = "none"));
    target.style.display = "block";
    typeWriterEffect(target, texts[targetId]);
  });
});

// Audio control
const audio = document.getElementById("bg-audio");
const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "🔊";
  } else {
    audio.pause();
    playBtn.textContent = "🔈";
  }
});

