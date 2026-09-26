const loveBtn = document.getElementById("loveBtn");
const popup = document.getElementById("popup");

loveBtn.addEventListener("click", () => {
  popup.classList.add("show");

  heartBurst();
  sparkleBurst();

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3500);
});


/* =========================
   HEART BURST
========================= */

function heartBurst() {

  for (let i = 0; i < 35; i++) {

    const heart = document.createElement("div");

    heart.innerHTML =
      Math.random() > 0.35 ? "♥" : "❤";

    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "48%";

    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    heart.style.color =
      Math.random() > 0.5
        ? "#ff2b9a"
        : "#ff9bdd";

    heart.style.fontSize =
      (12 + Math.random() * 25) + "px";

    heart.style.textShadow =
      "0 0 8px #ff008c, 0 0 18px #ff008c";

    document.body.appendChild(heart);

    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      100 + Math.random() * 350;

    const x =
      Math.cos(angle) * distance;

    const y =
      Math.sin(angle) * distance;

    const rotate =
      Math.random() * 720 - 360;

    heart.animate(
      [
        {
          transform:
            "translate(-50%, -50%) scale(0) rotate(0deg)",
          opacity: 0
        },

        {
          transform:
            "translate(-50%, -50%) scale(1.2)",
          opacity: 1,
          offset: 0.15
        },

        {
          transform:
            `translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            )
            scale(.4)
            rotate(${rotate}deg)`,

          opacity: 0
        }
      ],
      {
        duration: 1800 + Math.random() * 1400,

        easing:
          "cubic-bezier(.17,.67,.25,1)"
      }
    );

    setTimeout(() => {
      heart.remove();
    }, 3400);
  }
}


/* =========================
   SPARKLE BURST
========================= */

function sparkleBurst() {

  for (let i = 0; i < 45; i++) {

    const sparkle =
      document.createElement("div");

    sparkle.innerHTML = "✦";

    sparkle.style.position = "fixed";
    sparkle.style.left = "50%";
    sparkle.style.top = "48%";

    sparkle.style.zIndex = "9998";
    sparkle.style.pointerEvents = "none";

    sparkle.style.color =
      Math.random() > .5
        ? "#ffffff"
        : "#ff62bd";

    sparkle.style.fontSize =
      (6 + Math.random() * 12) + "px";

    sparkle.style.textShadow =
      "0 0 10px #ff4db8";

    document.body.appendChild(sparkle);

    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      120 + Math.random() * 400;

    const x =
      Math.cos(angle) * distance;

    const y =
      Math.sin(angle) * distance;

    sparkle.animate(
      [
        {
          transform:
            "translate(-50%, -50%) scale(0)",
          opacity: 0
        },

        {
          transform:
            "translate(-50%, -50%) scale(1)",
          opacity: 1
        },

        {
          transform:
            `translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            )
            scale(0)`,

          opacity: 0
        }
      ],
      {
        duration: 1300 + Math.random() * 1200,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      sparkle.remove();
    }, 2800);
  }
}


/* =========================
   3D HEART TILT
========================= */

const heart = document.querySelector(".heart-3d");

document.addEventListener("pointermove", (e) => {

  if (!heart) return;

  const x =
    (e.clientX / window.innerWidth - 0.5) * 12;

  const y =
    (e.clientY / window.innerHeight - 0.5) * -12;

  heart.style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;
});


/* =========================
   TOUCH EFFECT
========================= */

document.addEventListener("touchstart", (e) => {

  if (!e.touches[0]) return;

  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;

  createTouchHeart(x, y);

});


function createTouchHeart(x, y) {

  const heart =
    document.createElement("div");

  heart.innerHTML = "♥";

  heart.style.position = "fixed";
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  heart.style.zIndex = "9999";
  heart.style.pointerEvents = "none";

  heart.style.color = "#ff42ad";
  heart.style.fontSize = "24px";

  heart.style.textShadow =
    "0 0 12px #ff008c";

  document.body.appendChild(heart);

  heart.animate(
    [
      {
        transform:
          "translate(-50%, -50%) scale(.3)",
        opacity: 0
      },

      {
        transform:
          "translate(-50%, -90px) scale(1.3)",
        opacity: 1
      },

      {
        transform:
          "translate(-50%, -180px) scale(.5)",
        opacity: 0
      }
    ],
    {
      duration: 1200,
      easing: "ease-out"
    }
  );

  setTimeout(() => {
    heart.remove();
  }, 1300);
}
