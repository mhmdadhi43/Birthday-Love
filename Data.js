// TARGET: 15 Februari jam 07:00 WIB
const targetDate = new Date("2026-02-15T07:05:00+07:00");

const muteBtn = document.getElementById("muteBtn");
const music = document.getElementById("bgMusic");
const timerEl = document.getElementById("timer");
const button = document.getElementById("btnLove");

function updateTimer() {
    const now = new Date();
    let selisih = Math.floor((targetDate - now) / 1000);

    if (selisih <= 0) {
        timerEl.innerText = "💖 Waktu Telah Tiba 💖";
        button.classList.remove("disabled");
        button.innerText = "💌 Masuk Sekarang 💌";
        music.play().catch(() => { });
        return;
    }

    let hari = Math.floor(selisih / 86400);
    let jam = Math.floor((selisih % 86400) / 3600);
    let menit = Math.floor((selisih % 3600) / 60);
    let detik = selisih % 60;

    timerEl.innerText =
        `${hari} Hari ${String(jam).padStart(2, "0")}:` +
        `${String(menit).padStart(2, "0")}:` +
        `${String(detik).padStart(2, "0")}`;
}

updateTimer();

// Start music after first user interaction
document.addEventListener("click", () => {
    if (music.paused) {
        music.volume = 0.5;
        music.play().catch(() => {});
        muteBtn.textContent = "🔊";
    }
}, { once: true });

// Mute / Unmute
muteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // biar nggak ganggu klik lain
    music.muted = !music.muted;
    muteBtn.textContent = music.muted ? "🔇" : "🔊";
});