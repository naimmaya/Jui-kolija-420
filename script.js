const loveBtn = document.getElementById("loveBtn");
const popup = document.getElementById("popup");

loveBtn.addEventListener("click", () => {
  popup.classList.add("show");

  createHearts();

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
});

function createHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    heart.style.fontSize =
      Math.floor(Math.random() * 18 + 15) + "px";

    heart.style.color =
      Math.random() > 0.5 ? "#ff2b9a" : "#ff8bd2";

    heart.style.textShadow =
      "0 0 12px #ff1493";

    document.body.appendChild(heart);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 220 + 80;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    heart.animate(
      [
        {
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 1
        },
        {
          transform:
            `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.2)`,
          opacity: 0
        }
      ],
      {
        duration: 1500 + Math.random() * 800,
        easing: "cubic-bezier(.17,.67,.83,.67)"
      }
    );

    setTimeout(() => {
      heart.remove();
    }, 2500);
  }
}
