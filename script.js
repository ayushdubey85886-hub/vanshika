
document.addEventListener("DOMContentLoaded", () => {
  // 🎵 Background music
  const music = document.getElementById("backgroundMusic");
  const musicBtn = document.getElementById("musicBtn");
  const musicLabel = document.getElementById("musicLabel");

  if (music && musicBtn && musicLabel) {
    music.volume = 0.55;
    musicLabel.textContent = "Gaana chalu karo";

    musicBtn.addEventListener("click", async () => {
      if (music.paused) {
        try {
          await music.play();
          musicLabel.textContent = "Gaana band karo";
        } catch (error) {
          musicLabel.textContent = "Dobara koshish karo";
          console.error("Music play error:", error);
        }
      } else {
        music.pause();
        musicLabel.textContent = "Gaana chalu karo";
      }
    });

    music.addEventListener("play", () => {
      musicLabel.textContent = "Gaana band karo";
    });

    music.addEventListener("pause", () => {
      musicLabel.textContent = "Gaana chalu karo";
    });

    music.addEventListener("error", () => {
      musicLabel.textContent = "Gaana nahi mila 💔";
      console.error("MP3 load nahi hui. File path check karo.");
    });
  }

  // 💗 Surprise button
  const heartBtn = document.getElementById("heartBtn");
  const heartMessage = document.getElementById("heartMessage");

  const messages = [
    "Kareja, tum meri life ka sabse pyaara hissa ho. 💗",
    "Tumhari smile mera favourite view hai. 🌸",
    "Doori chahe jitni ho, tum mere dil ke kareeb ho. 💕",
    "Tumhare saath har chhoti si baat bhi special lagti hai. ✨",
    "Kareja, tum hamesha khush raho — bas yahi wish hai. 🫶",
    "Tum meri favourite notification ho. 💌"
  ];

  let lastMessage = -1;

  if (heartBtn && heartMessage) {
    heartBtn.addEventListener("click", () => {
      let randomIndex;

      do {
        randomIndex = Math.floor(Math.random() * messages.length);
      } while (messages.length > 1 && randomIndex === lastMessage);

      lastMessage = randomIndex;
      heartMessage.textContent = messages[randomIndex];
      heartMessage.classList.remove("show");

      requestAnimationFrame(() => {
        heartMessage.classList.add("show");
      });

      createHearts(12);
    });
  }

  // 💕 Floating hearts
  function createHearts(amount = 1) {
    for (let i = 0; i < amount; i++) {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.textContent = ["💗", "💖", "💕", "❤️", "✨"][
        Math.floor(Math.random() * 5)
      ];

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = 14 + Math.random() * 22 + "px";
      heart.style.animationDuration = 3 + Math.random() * 4 + "s";
      heart.style.setProperty("--drift", (Math.random() * 120 - 60) + "px");

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 7500);
    }
  }

  // Hearts appear occasionally
  setInterval(() => {
    if (document.visibilityState === "visible") {
      createHearts(1);
    }
  }, 1800);
});
