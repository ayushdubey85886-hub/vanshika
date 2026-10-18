
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("backgroundMusic");
  const musicBtn = document.getElementById("musicBtn");
  const musicLabel = document.getElementById("musicLabel");

  // Music button: play/pause
  if (music && musicBtn && musicLabel) {
    music.volume = 0.7;

    musicBtn.addEventListener("click", async function () {
      if (music.paused) {
        musicLabel.textContent = "Gaana load ho raha hai...";
        musicBtn.disabled = true;

        try {
          await music.play();
          musicLabel.textContent = "Gaana band karo";
          musicBtn.setAttribute("aria-pressed", "true");
        } catch (error) {
          console.error("Music playback error:", error);
          musicLabel.textContent = "Dobara try karo";
          alert(
            "Music nahi chala. Internet check karo aur dobara try karo."
          );
        } finally {
          musicBtn.disabled = false;
        }
      } else {
        music.pause();
      }
    });

    music.addEventListener("play", function () {
      musicLabel.textContent = "Gaana band karo";
      musicBtn.setAttribute("aria-pressed", "true");
    });

    music.addEventListener("pause", function () {
      musicLabel.textContent = "Gaana chalu karo";
      musicBtn.setAttribute("aria-pressed", "false");
    });

    music.addEventListener("error", function () {
      console.error("Audio file load nahi hui.", music.error);
    });
  } else {
    console.error("Music player ke HTML elements nahi mile.");
  }

  // Heart surprise
  const heartBtn = document.getElementById("heartBtn");
  const heartMessage = document.getElementById("heartMessage");

  const messages = [
    "Tumhari muskaan bahut khaas hai. ❤️",
    "Tum jaisi ho, waise hi anmol ho. 💗",
    "Apne sapno ke liye hamesha chamakti raho. ✨",
    "Tumhare har din mein khushi aur sukoon ho. 🌷",
    "Hamesha khush rehna, Kareja. ♡"
  ];

  let messageIndex = 0;

  if (heartBtn && heartMessage) {
    heartBtn.addEventListener("click", function () {
      heartMessage.textContent = messages[messageIndex];
      messageIndex = (messageIndex + 1) % messages.length;
      createSpark();
    });
  }

  // Floating sparkles
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
    spark.style.animationDuration = 5 + Math.random() * 4 + "s";

    sparkleContainer.appendChild(spark);

    spark.addEventListener("animationend", function () {
      spark.remove();
    });

    window.setTimeout(function () {
      spark.remove();
    }, 10000);
  }

  for (let i = 0; i < 10; i++) {
    window.setTimeout(createSpark, i * 250);
  }

  let sparkleTimer = window.setInterval(createSpark, 1200);

  document.addEventListener("visibilitychange", function () {
    window.clearInterval(sparkleTimer);

    if (!document.hidden) {
      sparkleTimer = window.setInterval(createSpark, 1200);
    }
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
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

  console.log("Kareja website JavaScript loaded successfully.");
});
