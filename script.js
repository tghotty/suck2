window.onload = function () {

  const popup = document.getElementById("popup");
  const emojiContainer = document.getElementById("emoji-container");

  // Emoji rain
  if (emojiContainer) {
    for (let i = 0; i < 30; i++) {
      let emoji = document.createElement("div");
      emoji.className = "emoji";
      emoji.innerHTML = "🎉";

      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.animationDuration = (2 + Math.random() * 3) + "s";

      emojiContainer.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, 4000);
    }
  }

  // Hide popup after 3 sec
  if (popup) {
    setTimeout(() => {
      popup.style.opacity = "0";

      setTimeout(() => {
        popup.style.display = "none";
      }, 500);

    }, 1000);
  }
};