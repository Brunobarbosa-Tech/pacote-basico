const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".card");
const total = cards.length;

let angle = 0;

const radius = 200;

// Posiciona as imagens em círculo
cards.forEach((card, index) => {
  const rotation = index * (360 / total);

  card.style.transform = `rotateY(${rotation}deg)
         translateZ(${radius}px)`;
});

// Rotação contínua
function rotateCarousel() {
  angle -= 0.3;

  carousel.style.transform = `rotateY(${angle}deg)`;

  requestAnimationFrame(rotateCarousel);
}

rotateCarousel();
