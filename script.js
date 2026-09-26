const loveBtn = document.getElementById("loveBtn");
const popup = document.getElementById("popup");


// ================================
// CLICK BUTTON
// ================================

loveBtn.addEventListener("click", () => {

  popup.classList.add("show");

  heartExplosion();
  sparkleExplosion();
  rosePetals();
  butterflies();

  setTimeout(() => {
    popup.classList.remove("show");
  }, 4000);

});


// ================================
// HEART EXPLOSION
// ================================

function heartExplosion() {

  for (let i = 0; i < 45; i++) {

    const heart = document.createElement("div");

    heart.textContent =
      Math.random() > 0.25 ? "♥" : "❤";

    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "45%";

    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    heart.style.color =
      Math.random() > .5
        ? "#ff168f"
        : "#ff9bdd";

    heart.style.fontSize =
      (14 + Math.random() * 25) + "px";

    heart.style.textShadow =
      "0 0 8px #ff008c, 0 0 22px #ff008c";

    document.body.appendChild(heart);

    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      100 + Math.random() * 420;

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
            "translate(-50%,-50%) scale(0)",
          opacity: 0
        },

        {
          transform:
            "translate(-50%,-50%) scale(1.3)",
          opacity: 1
        },

        {
          transform:
            `translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            )
            rotate(${rotate}deg)
            scale(.3)`,

          opacity: 0
        }
      ],
      {
        duration:
          1600 + Math.random() * 1800,

        easing:
          "cubic-bezier(.17,.67,.25,1)"
      }
    );

    setTimeout(() => heart.remove(), 3600);
  }
}


// ================================
// SPARKLES
// ================================

function sparkleExplosion() {

  for (let i = 0; i < 55; i++) {

    const star = document.createElement("div");

    star.textContent =
      Math.random() > .5 ? "✦" : "✧";

    star.style.position = "fixed";
    star.style.left = "50%";
    star.style.top = "45%";

    star.style.zIndex = "9998";
    star.style.pointerEvents = "none";

    star.style.color =
      Math.random() > .5
        ? "#ffffff"
        : "#ff65bd";

    star.style.fontSize =
      (7 + Math.random() * 14) + "px";

    star.style.textShadow =
      "0 0 12px #ff4db8";

    document.body.appendChild(star);

    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      100 + Math.random() * 450;

    const x =
      Math.cos(angle) * distance;

    const y =
      Math.sin(angle) * distance;

    star.animate(
      [
        {
          transform:
            "translate(-50%,-50%) scale(0)",
          opacity: 0
        },

        {
          transform:
            "translate(-50%,-50%) scale(1.2)",
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
        duration:
          1000 + Math.random() * 1700,

        easing: "ease-out"
      }
    );

    setTimeout(() => star.remove(), 3000);
  }
}


// ================================
// ROSE PETALS
// ================================

function rosePetals() {

  for (let i = 0; i < 22; i++) {

    const petal = document.createElement("div");

    petal.textContent = "🌹";

    petal.style.position = "fixed";

    petal.style.left =
      Math.random() * 100 + "vw";

    petal.style.top = "-50px";

    petal.style.zIndex = "9997";
    petal.style.pointerEvents = "none";

    petal.style.fontSize =
      (14 + Math.random() * 18) + "px";

    const duration =
      3500 + Math.random() * 3000;

    const rotate =
      Math.random() * 720 - 360;

    const drift =
      Math.random() * 220 - 110;

    petal.animate(
      [
        {
          transform:
            "translateY(0) rotate(0deg)",
          opacity: 0
        },

        {
          opacity: 1
        },

        {
          transform:
            `translate(
              ${drift}px,
              110vh
            )
            rotate(${rotate}deg)`,

          opacity: 0
        }
      ],
      {
        duration: duration,
        easing: "ease-in-out"
      }
    );

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), duration + 100);
  }
}


// ================================
// BUTTERFLIES
// ================================

function butterflies() {

  for (let i = 0; i < 8; i++) {

    const butterfly =
      document.createElement("div");

    butterfly.textContent = "🦋";

    butterfly.style.position = "fixed";

    butterfly.style.left =
      Math.random() * 90 + 5 + "vw";

    butterfly.style.top =
      (30 + Math.random() * 50) + "vh";

    butterfly.style.zIndex = "9996";
    butterfly.style.pointerEvents = "none";

    butterfly.style.fontSize =
      (18 + Math.random() * 16) + "px";

    const x =
      Math.random() * 160 - 80;

    const y =
      Math.random() * 300 - 150;

    butterfly.animate(
      [
        {
          transform:
            "translate(0,0) scale(.4)",
          opacity: 0
        },

        {
          transform:
            "translate(0,-30px) scale(1)",
          opacity: 1
        },

        {
          transform:
            `translate(${x}px,${y}px)
             scale(.7)
             rotate(15deg)`,

          opacity: 0
        }
      ],
      {
        duration:
          2500 + Math.random() * 2000,

        easing: "ease-in-out"
      }
    );

    document.body.appendChild(butterfly);

    setTimeout(
      () => butterfly.remove(),
      5000
    );
  }
}


// ================================
// TOUCH HEART
// ================================

document.addEventListener(
  "touchstart",
  (event) => {

    const touch = event.touches[0];

    if (!touch) return;

    createTouchHeart(
      touch.clientX,
      touch.clientY
    );

  },
  { passive: true }
);


function createTouchHeart(x, y) {

  const heart =
    document.createElement("div");

  heart.textContent = "♥";

  heart.style.position = "fixed";

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  heart.style.zIndex = "9999";

  heart.style.pointerEvents = "none";

  heart.style.color = "#ff42ad";

  heart.style.fontSize = "25px";

  heart.style.textShadow =
    "0 0 12px #ff008c";

  document.body.appendChild(heart);

  heart.animate(
    [
      {
        transform:
          "translate(-50%,-50%) scale(.2)",
        opacity: 0
      },

      {
        transform:
          "translate(-50%,-90px) scale(1.3)",
        opacity: 1
      },

      {
        transform:
          "translate(-50%,-190px) scale(.4)",
        opacity: 0
      }
    ],
    {
      duration: 1300,
      easing: "ease-out"
    }
  );

  setTimeout(
    () => heart.remove(),
    1400
  );
}


// ================================
// MOUSE 3D HEART TILT
// ================================

const heart3D =
  document.querySelector(".heart-3d");

document.addEventListener(
  "pointermove",
  (event) => {

    if (!heart3D) return;

    const x =
      (event.clientX /
        window.innerWidth - .5) * 14;

    const y =
      (event.clientY /
        window.innerHeight - .5) * -14;

    heart3D.style.transform =
      `rotateY(${x}deg) rotateX(${y}deg)`;
  }
);
