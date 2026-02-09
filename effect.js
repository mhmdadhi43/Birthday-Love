function loveExplosion(e) {
    const hearts = ["💖","💕","💘","💗","❤️"];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "love";
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

        const x = (Math.random() - 0.5) * 200 + "px";
        const y = (Math.random() - 0.5) * 200 + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1200);
    }
}

const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

if (music && muteBtn) {

    // Musik mulai setelah klik pertama
    document.addEventListener("click", () => {
        if (music.paused) {
            music.volume = 0.5;
            music.play().catch(() => {});
            muteBtn.textContent = "🔊";
        }
    }, { once: true });

    // Tombol mute
    muteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        music.muted = !music.muted;
        muteBtn.textContent = music.muted ? "🔇" : "🔊";
    });

}
