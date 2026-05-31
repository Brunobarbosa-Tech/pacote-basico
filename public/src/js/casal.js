function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const stars = ["✩"];

  particle.textContent = stars[Math.floor(Math.random() * stars.length)];

  particle.style.left = Math.random() * 100 + "%";

  particle.style.fontSize = Math.random() * 12 + 8 + "px";

  particle.style.animationDuration = Math.random() * 5 + 6 + "s";

  document.querySelector(".particles").appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 11000);
}

setInterval(createParticle, 200);

const card = document.querySelector(".love-card");

setInterval(() => {
  card.style.boxShadow = `
    0 0 45px rgba(255, 255, 255, 0.10),
    0 0 90px rgba(255, 255, 255, 0.18)
  `;

  setTimeout(() => {
    card.style.boxShadow = `
      0 0 35px rgba(255, 255, 255, 0.07),
      0 0 70px rgba(255, 255, 255, 0.12)
    `;
  }, 900);
}, 2500);
