"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // MUSIC PLAYER
  const music = document.getElementById("backgroundMusic");
  const musicBtn = document.getElementById("musicBtn");
  const musicLabel = document.getElementById("musicLabel");

  if (music && musicBtn && musicLabel) {
    music.volume = 0.6;

    musicBtn.addEventListener("click", async () => {
      if (music.paused) {
        musicLabel.textContent = "Gaana load ho raha hai...";
        musicBtn.disabled = true;

        try {
          await music.play();
          musicLabel.textContent = "Gaana band karo";
          musicBtn.setAttribute("aria-pressed", "true");
        } catch (error) {
          console.error("Music playback failed:", error);
          musicLabel.textContent = "Dobara try karo";
          alert("Gaana nahi chala. Error: " + error.message);
        } finally {
          musicBtn.disabled = false;
        }
      } else {
        music.pause();
      }
    });

    music.addEventListener("play", () => {
      musicLabel.textContent = "Gaana band karo";
      musicBtn.setAttribute("aria-pressed", "true");
    });

    music.addEventListener("pause", () => {
      musicLabel.textContent = "Gaana chalu karo";
      musicBtn.setAttribute("aria-pressed", "false");
    });

    music.addEventListener("error", () => {
      console.error("Audio file load nahi hui.", music.error);
    });
  } else {
    console.error("Music button ya audio element nahi mila.");
  }

  // HEART SURPRISE
  const heartBtn = document.getElementById("heartBtn");
  const heartMessage = document.getElementById("heartMessage");

  const messages = [
    "Kareja, tumhari muskaan meri sabse pasandida hai. ❤️",
    "Tum jaisi ho, waise hi bahut anmol ho. 🥹",
    "Apne sapno ke liye hamesha chamakti rehna. ✨",
    "Tumhare har din mein khushi aur sukoon ho. 💗",
    "Tumhari khushi hamesha bani rahe. 💖"
  ];

  let messageIndex = 0;

  if (heartBtn && heartMessage) {
    heartBtn.addEventListener("click", () => {
      heartMessage.textContent = messages[messageIndex];
      messageIndex = (messageIndex + 1) % messages.length;

      heartBtn.classList.add("revealed");
      createSpark();
    });
  }

  // FLOATING SPARKLES
  const sparkleContainer = document.querySelector(".sparkles");
  const symbols = ["♡", "✦", "♥", "✧"];

  function createSpark() {
    if (!sparkleContainer) return;

    const spark = document.createElement("span");
    spark.className = "spark";
    spark.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    spark.style.left = Math.random() * 96 + "%";
    spark.style.fontSize = 12 + Math.random() * 16 + "px";
    spark.style.animationDuration = 5 + Math.random() * 5 + "s";

    sparkleContainer.appendChild(spark);

    spark.addEventListener("animationend", () => spark.remove());
    window.setTimeout(() => spark.remove(), 11000);
  }

  for (let i = 0; i < 12; i++) {
    window.setTimeout(createSpark, i * 250);
  }

  let sparkleTimer = window.setInterval(createSpark, 900);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearInterval(sparkleTimer);
    } else {
      window.clearInterval(sparkleTimer);
      sparkleTimer = window.setInterval(createSpark, 900);
    }
  });

  // SMOOTH NAVIGATION
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  console.log("Kareja website JavaScript loaded ❤️");
});
