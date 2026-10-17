
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

if (music && musicButton) {
  musicButton.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();
        musicButton.textContent = "❚❚ Pause Our Song 🎶";
      } catch (error) {
        musicButton.textContent = "Music nahi chala — file check karo 🎵";
        console.error("Music playback failed:", error);
      }
    } else {
      music.pause();
      musicButton.textContent = "▶ Play Our Song 🎶";
    }
  });

  music.addEventListener("ended", () => {
    musicButton.textContent = "▶ Play Our Song 🎶";
  });
}
