// ১. পাসওয়ার্ড চেক করার ফাংশন
function checkPassword() {
    const inputVal = document.getElementById("passInput").value.trim().toLowerCase();
    const errorMsg = document.getElementById("errorMsg");
    
    // পাসওয়ার্ড হিসেবে "jui kolija" বা "জুই কলিজা" দেওয়া যাবে
    if(inputVal === "jui kolija" || inputVal === "জুই কলিজা") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        
        // মিউজিক ও ইফেক্ট চালু করা
        const music = document.getElementById("bg-music");
        music.play().then(() => {
            document.querySelector(".music-player-btn").classList.add("playing");
            document.getElementById("musicText").innerText = "মিউজিক অন";
        }).catch(e => console.log("Auto-play restricted"));
        
        startHeartRain();
        startCounter();
    } else {
        errorMsg.innerText = "ভুল নাম বা পাসওয়ার্ড! আবার চেষ্টা করুন ❌";
    }
}

// ২. ব্যাকগ্রাউন্ড মিউজিক টগল ও ডিস্ক অ্যানিমেশন
let isPlaying = true;
function toggleMusic() {
    const music = document.getElementById("bg-music");
    const playerBtn = document.querySelector(".music-player-btn");
    const musicText = document.getElementById("musicText");
    
    if(isPlaying) {
        music.pause();
        playerBtn.classList.remove("playing");
        musicText.innerText = "মিউজিক অফ";
    } else {
        music.play();
        playerBtn.classList.add("playing");
        musicText.innerText = "মিউজিক অন";
    }
    isPlaying = !isPlaying;
}

// ৩. লাভ রেইন (উপর থেকে নিচে হার্ট পড়ার ইফেক্ট)
function startHeartRain() {
    const container = document.getElementById("rainContainer");
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("raindrop-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 12 + 10) + "px";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}

// ৪. রিলেশনশিপ টাইম কাউন্টার (সম্পর্কের শুরুর তারিখ: YYYY-MM-DD)
const startDate = new Date("2025-01-01T00:00:00");

function startCounter() {
    const counterDiv = document.getElementById("counter");
    
    function update() {
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        
        counterDiv.innerHTML = `
            <div class="time-box"><span>${days}</span><small>দিন</small></div>
            <div class="time-box"><span>${hours}</span><small>ঘণ্টা</small></div>
            <div class="time-box"><span>${minutes}</span><small>মিনিট</small></div>
            <div class="time-box"><span>${seconds}</span><small>সেকেন্ড</small></div>
        `;
    }
    update();
    setInterval(update, 1000);
}

// ৫. মিনি লাভ কুইজ লজিক
function answerQuiz(option) {
    const resultText = document.getElementById("quizResult");
    if(option === 1) {
        resultText.innerText = "সঠিক উত্তর! সমুদ্রের চেয়েও গভীর আমাদের ভালোবাসা 🌊❤️";
    } else if(option === 2) {
        resultText.innerText = "একদম ঠিক! আকাশের তারার মতো আমাদের ভালোবাসা অন্তহীন ✨💖";
    } else {
        resultText.innerText = "সবচেয়ে সুন্দর উত্তর! প্রাণের চেয়েও বেশি ভালোবাসি 🥰♾️";
    }
}

// ৬. রেন্ডম লাভ কোট জেনারেটর
const quotes = [
    "\"তুমি আমার হাসির কারণ, আমার আনন্দের কারণ! ❤️\"",
    "\"তোমার সাথে কাটানো প্রতিটি মুহূর্ত আমার জীবনের সেরা মুহূর্ত। 🌸\"",
    "\"পৃথিবীর সবুজের চেয়েও তোমার মুখের হাসি আমার কাছে বেশি সুন্দর। ✨\"",
    "\"সারা জীবন এভাবেই তোমার হাত ধরে থাকতে চাই। ♾️\"",
    "\"আমার প্রতিটি নিঃশ্বাসে শুধু তোমার নাম জড়িয়ে আছে। 🥰\""
];

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("loveQuote").innerText = quotes[randomIndex];
}

// ৭. পপআপ মোডাল কন্ট্রোল
function openModal() {
    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ৮. 3D হার্ট টিল্ট এফেক্ট
const heart3d = document.getElementById("heart3d");
document.addEventListener("pointermove", (event) => {
    if (!heart3d) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * -20;
    heart3d.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
