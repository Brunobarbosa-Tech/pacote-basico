document.addEventListener("DOMContentLoaded", () => {

    // CURSOR
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX - 6 + "px";
        cursor.style.top = e.clientY - 6 + "px";
    });

    // PARTICLES
    function createParticle() {
        const p = document.createElement("div");
        p.classList.add("particle");

        p.style.left = Math.random() * 100 + "%";

        document.querySelector(".particles").appendChild(p);

        setTimeout(() => p.remove(), 6000);
    }

    setInterval(createParticle, 300);
});

// SURPRISE
function showSurprise() {
    const msg = document.getElementById("specialMessage");

    if (msg) {
        msg.classList.add("show");
    }

    createHearts();
}

// HEARTS
function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.fontSize = "18px";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }
}