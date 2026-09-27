const loveBtn = document.getElementById("loveBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

// CLICK BUTTON
loveBtn.addEventListener("click", () => {
  popup.classList.add("show");

  heartExplosion();
  sparkleExplosion();
  rosePetals();
  butterflies();
});

// CLOSE POPUP
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});

// CLICK OUTSIDE
popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});

// HEART EXPLOSION
function heartExplosion() {
  for (let i = 0; i < 40; i++) {
    createFloating(
      Math.random() > 0.5 ? "💗" : "❤️",
      45 + Math.random() * 10,
      40 + Math.random() * 20,
      20 + Math.random() * 25,
      2 + Math.random() * 2
    );
  }
}

// SPARKLES
function sparkleExplosion() {
  for (let i = 0; i < 45; i++) {
    createFloating(
      Math.random() > 0.5 ? "✦" : "✨",
      45 + Math.random() * 10,
      40 + Math.random() * 20,
      10 + Math.random() * 15,
      1.5 + Math.random() * 2
    );
  }
}

// ROSE PETALS
function rosePetals() {
  for (let i = 0; i < 20; i++) {
    createFloating(
      "🌹",
      Math.random() * 100,
      100,
      18 + Math.random() * 20,
      3 + Math.random() * 3
    );
  }
}

// BUTTERFLIES
function butterflies() {
  for (let i = 0; i < 8; i++) {
    createFloating(
      "🦋",
      Math.random() * 100,
      80 + Math.random() * 20,
      25 + Math.random() * 15,
      3 + Math.random() * 2
    );
  }
}

// CREATE ANIMATION
function createFloating(
  emoji, x, y, size, duration
) {
  const item = document.createElement("div");

  item.className = "floating";
  item.textContent = emoji;

  item.style.left = x + "vw";
  item.style.top = y + "vh";
  item.style.fontSize = size + "px";

  item.style.animationDuration = duration + "s";

  document.body.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, duration * 1000 + 100);
}

// TOUCH HEART
document.addEventListener("touchstart", (event) => {
  const touch = event.touches[0];

  if (!touch) return;

  const heart = document.createElement("div");

  heart.textContent = "💗";
  heart.className = "floating";
  heart.style.left = touch.clientX + "px";
  heart.style.top = touch.clientY + "px";
  heart.style.fontSize = "25px";
  heart.style.animationDuration = "1.5s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1600);
}, { passive: true });

// 3D HEART TILT
const heart3D = document.querySelector(".heart-3d");

document.addEventListener("pointermove", (event) => {
  if (!heart3D) return;

  const x =
    (event.clientX / window.innerWidth - 0.5) * 20;

  const y =
    (event.clientY / window.innerHeight - 0.5) * -20;

  heart3D.style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;
});
