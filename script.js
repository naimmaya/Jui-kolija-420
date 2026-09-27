// ১. পাসওয়ার্ড প্রোটেকশন লজিক (এখানে সিক্রেট কোড হিসেবে "1402" বা আপনার পছন্দমতো সংখ্যা দিতে পারেন)
const SECRET_CODE = "1402"; 

function checkPassword() {
    const inputVal = document.getElementById("passInput").value;
    if(inputVal === SECRET_CODE) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        
        // মিউজিক প্লে করার চেষ্টা
        const music = document.getElementById("bg-music");
        music.play().catch(e => console.log("Auto-play restricted"));
        
        startFloatingHearts();
        startCounter();
    } else {
        document.getElementById("errorMsg").innerText = "ভুল কোড! আবার চেষ্টা করুন ❌";
    }
}

// ২. ব্যাকগ্রাউন্ড মিউজিক টগল
let isPlaying = true;
function toggleMusic() {
    const music = document.getElementById("bg-music");
    const btn = document.getElementById("musicToggle");
    if(isPlaying) {
        music.pause();
        btn.innerText = "🔇 মিউজিক অন";
    } else {
        music.play();
        btn.innerText = "🎵 মিউজিক অফ";
    }
    isPlaying = !isPlaying;
}

// ৩. ফ্লোটিং হার্ট অ্যানিমেশন জেনারেটর
function startFloatingHearts() {
    const container = document.getElementById("floatingHearts");
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("float-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 15 + 10) + "px";
        heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 400);
}

// ৪. রিলেশনশিপ টাইম কাউন্টার (এখানে আপনার সম্পর্কের শুরুর তারিখ দিন: YYYY-MM-DD)
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

// ৫. পপআপ মোডাল কন্ট্রোল
function openModal() {
    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// বাইরে ক্লিক করলে মোডাল বন্ধ হবে
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ৬. 3D হার্ট টিল্ট এফেক্ট
const heart3d = document.getElementById("heart3d");
document.addEventListener("pointermove", (event) => {
    if (!heart3d) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * -20;
    heart3d.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
