
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ========================================
  // BACKGROUND MUSIC
  // ========================================

  const music = document.getElementById("backgroundMusic");
  const musicBtn = document.getElementById("musicBtn");
  const musicLabel = document.getElementById("musicLabel");

  if (music && musicBtn && musicLabel) {
    music.volume = 0.6;

    musicBtn.addEventListener("click", async () => {
      if (music.paused) {
        musicBtn.disabled = true;
        musicLabel.textContent = "Gaana load ho raha hai...";

        try {
          await music.play();
          musicLabel.textContent = "Gaana band karo";
          musicBtn.setAttribute("aria-pressed", "true");
        } catch (error) {
          console.error("Music playback error:", error);

          musicLabel.textContent = "Dobara try karo";
          musicBtn.setAttribute("aria-pressed", "false");

          if (error.name === "NotSupportedError") {
            alert(
              "Audio file ka format ya file path galat hai. " +
              "GitHub par MP3 file check karo."
            );
          } else {
            alert(
              "Gaana nahi chala. Internet connection aur MP3 file check karo."
            );
          }
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
      console.error(
        "Audio file could not load:",
        music.error ? music.error.code : "Unknown error"
      );
    });
  }

  // ========================================
  // HEART SURPRISE BUTTON
  // ========================================

  const heartBtn = document.getElementById("heartBtn");
  const heartMessage = document.getElementById("heartMessage");

  const surpriseMessages = [
    "Kareja, tumhari muskaan bahut khaas hai. ❤️",
    "Hamesha khush rehna aur apne sapne poore karna. ✨",
    "Tumhari chhoti-chhoti baatein bhi yaadgaar hain. 💗",
    "Tum jaisi ho, waise hi anmol ho. ♡",
    "Tumhare har din mein khushi aur sukoon ho. 🌷"
  ];

  let surpriseIndex = 0;

  if (heartBtn && heartMessage) {
    heartBtn.addEventListener("click", () => {
      heartMessage.textContent =
        surpriseMessages[surpriseIndex % surpriseMessages.length];

      surpriseIndex++;

      createHeart();
    });
  }

  // ========================================
  // FLOATING HEARTS AND SPARKLES
  // ========================================

  const sparkleContainer = document.querySelector(".sparkles");

  function createHeart() {
    if (!sparkleContainer) return;

    const heart = document.createElement("span");
    heart.className = "spark";
    heart.textContent = ["♡", "♥", "✧", "💕"][
      Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 94 + "%";
    heart.style.fontSize = 14 + Math.random() * 18 + "px";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";

    sparkleContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });

    // Fallback cleanup if animation is disabled
    window.setTimeout(() => heart.remove(), 9000);
  }

  // Keep the animation lightweight
  let heartTimer = window.setInterval(createHeart, 1100);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearInterval(heartTimer);
    } else {
      heartTimer = window.setInterval(createHeart, 1100);
    }
  });

  // ========================================
  // SHARE WEBSITE
  // ========================================

  const shareBtn = document.getElementById("shareBtn");
  const toast = document.getElementById("toast");

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const shareData = {
        title: "Kareja ♡",
        text: "Tumhare liye ek chhoti si duniya ❤️",
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(shareData.url);
          showToast("Website link copy ho gaya! ❤️");
        } else {
          window.prompt("Website link copy karo:", shareData.url);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Share error:", error);
          showToast("Link share nahi ho saka.");
        }
      }
    });
  }

  // ========================================
  // SMOOTH SECTION NAVIGATION
  // ========================================

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

  // ========================================
  // CONSOLE STATUS
  // ========================================

  console.log("Kareja website JavaScript loaded successfully ❤️");
});
