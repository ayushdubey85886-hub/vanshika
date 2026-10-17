
const sparkles = document.querySelector(".sparkles");
const symbols = ["♡", "✦", "♥", "✧"];

function makeSpark() {
  if (!sparkles) return;

  const el = document.createElement("span");
  el.className = "spark";
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.left = Math.random() * 100 + "%";
  el.style.fontSize = 10 + Math.random() * 16 + "px";

  const duration = 7 + Math.random() * 8;
  el.style.animationDuration = duration + "s";

  sparkles.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

for (let i = 0; i < 14; i++) {
  setTimeout(makeSpark, i * 250);
}
setInterval(makeSpark, 650);

// Kareja ke liye surprise messages
const heartMessages = [
  "Kareja, tumhari muskaan meri sabse pasandida hai. ❤️",
  "Tum jaisi ho, waise hi bahut anmol ho. 🥹",
  "Apne sapno ke liye hamesha chamakti rehna. ✨",
  "Aaj yaad rakhna: tum bahut pyaari ho. 💗",
  "Tumhare liye ek pyaara sa virtual hug! 🤗",
  "Tumhari khushi hamesha bani rahe, bas yahi chahta hoon. 💖"
];

let messageIndex = 0;

const heartBtn = document.getElementById("heartBtn");
const heartMessage = document.getElementById("heartMessage");

if (heartBtn && heartMessage) {
  heartBtn.addEventListener("click", () => {
    heartMessage.textContent = heartMessages[messageIndex];
    messageIndex = (messageIndex + 1) % heartMessages.length;

    heartBtn.textContent = "Tumhare liye, dil se ♡";
    heartBtn.classList.add("revealed");
  });
}

// Chhote notification messages
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// Music: phone par user ke tap ke baad play karne ki koshish
const music = document.getElementById("backgroundMusic");

if (music) {
  music.volume = 0.55;

  async function playMusic() {
    try {
      await music.play();
    } catch (error) {
      console.log("Gaana chalane ke liye dobara tap karo.");
    }
  }

  document.addEventListener("pointerdown", playMusic, { once: true });
}
