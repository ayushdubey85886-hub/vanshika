
document.addEventListener("DOMContentLoaded", () => {
  // 🎵 BACKGROUND MUSIC
  const music = document.getElementById("backgroundMusic");
  const musicBtn = document.getElementById("musicBtn");
  const musicLabel = document.getElementById("musicLabel");

  if (music && musicBtn && musicLabel) {
    music.volume = 0.55;

    musicBtn.addEventListener("click", async () => {
      if (music.paused) {
        musicLabel.textContent = "Gaana load ho raha hai...";

        try {
          await music.play();
          musicLabel.textContent = "Gaana band karo";
        } catch (error) {
          console.error("Music error:", error);
          musicLabel.textContent = "Dobara try karo 💗";
        }
      } else {
        music.pause();
      }
    });

    music.addEventListener("play", () => {
      musicLabel.textContent = "Gaana band karo";
    });

    music.addEventListener("pause", () => {
      musicLabel.textContent = "Gaana chalu karo";
    });

    music.addEventListener("error", () => {
      musicLabel.textContent = "Music file nahi mili";
      console.error("MP3 file load nahi hui.");
    });
  }

  // 💗 SURPRISE MESSAGE
  const heartBtn = document.getElementById("heartBtn");
  const heartMessage = document.getElementById("heartMessage");

  const messages = [
    "Kareja, tum meri zindagi ka bahut pyaara hissa ho. 💗",
    "Tumhari muskaan mere din ko khaas bana deti hai. 🌸",
    "Tumhari khushi mere liye bahut maayne rakhti hai. 💕",
    "Tumhare saath bitaya har pal yaadgaar hai. ✨",
    "Kareja, tum jaisi ho, waise hi bahut anmol ho. ❤️",
    "Tumhare sapne hamesha poore hon aur tum muskurati raho. 🫶",
    "Meri taraf se tumhare liye ek badi si virtual jhappi. 💖"
  ];

  let lastMessage = -1;

  if (heartBtn && heartMessage) {
    heartBtn.addEventListener("click", () => {
      let index;

      do {
        index = Math.floor(Math.random() * messages.length);
      } while (index === lastMessage);

      lastMessage = index;
      heartMessage.textContent = messages[index];

      heartMessage.classList.remove("show");
      void heartMessage.offsetWidth;
      heartMessage.classList.add("show");

      createHearts(12);
    });
  }

  // ✨ FLOATING HEARTS
  function createHearts(count = 1) {
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("span");

      heart.className = "floating-heart";
      heart.textContent = ["💗", "💖", "💕", "❤️", "✨"][
        Math.floor(Math.random() * 5)
      ];

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = 14 + Math.random() * 20 + "px";
      heart.style.animationDuration = 3 + Math.random() * 4 + "s";
      heart.style.setProperty(
        "--drift",
        Math.random() * 100 - 50 + "px"
      );

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 7500);
    }
  }

  // Har 2 second mein ek floating heart
  setInterval(() => {
    if (document.visibilityState === "visible") {
      createHearts(1);
    }
  }, 2000);
});
