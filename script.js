const hero = document.getElementById("hero");

const backgrounds = [
  "img/Hero1.png",
  "img/Hero2.jpg",
  "img/Hero3.jpg",
  "img/Hero4.jpg"
];

let current = 0;

const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");

// Cargar primera imagen
bg1.style.backgroundImage = `url(${images[0]})`;

function nextImage() {
  const next = (current + 1) % images.length;

  // bg2 carga la nueva imagen
  bg2.style.backgroundImage = `url(${images[next]})`;

  // Hacemos fade: bg2 entra
  bg2.style.opacity = 1;

  // Luego de la animación, cambiamos roles
  setTimeout(() => {
    bg1.style.backgroundImage = bg2.style.backgroundImage;
    bg2.style.opacity = 0; // se apaga para siguiente ciclo
    current = next;
  }, 1500); // mismo tiempo que el CSS transition
}

setInterval(nextImage, 5000);









