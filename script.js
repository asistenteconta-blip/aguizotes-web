// Selección de capas
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");

// Imágenes del hero
const images = [
  "img/Hero1.png",
  "img/Hero2.jpg",
  "img/Hero3.jpg",
  "img/Hero4.jpg"
];

let current = 0;

// Cargar primera imagen
bg1.style.backgroundImage = `url(${images[0]})`;

// Precarga para evitar flashes
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

// Cambio con fade suave
function nextImage() {
  const next = (current + 1) % images.length;

  // bg2 toma la nueva imagen
  bg2.style.backgroundImage = `url(${images[next]})`;

  // fade in
  bg2.style.opacity = 1;

  // luego de animación, intercambiamos
  setTimeout(() => {
    bg1.style.backgroundImage = bg2.style.backgroundImage;
    bg2.style.opacity = 0;
    current = next;
  }, 1500);
}

// Cambio cada 5s
setInterval(nextImage, 5000);











