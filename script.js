const hero = document.getElementById("hero");

const backgrounds = [
  "img/Hero1.png",
  "img/Hero2.jpg",
  "img/Hero3.jpg",
  "img/Hero4.jpg"
];

let current = 0;

backgrounds.forEach(src => {
  const img = new Image();
  img.src = src;
});


// Mostrar la primera imagen al cargar
function showInitialBackground() {
  hero.style.backgroundImage = `url(${backgrounds[0]})`;
  hero.style.transition = "background-image 1s ease-in-out";
}

// Cambiar la imagen de fondo cada 5 segundos
function changeBackground() {
  current = (current + 1) % backgrounds.length;
  hero.style.backgroundImage = `url(${backgrounds[current]})`;
}

// Esperar a que el documento cargue completamente antes de iniciar
window.addEventListener("load", () => {
  showInitialBackground();             // muestra la primera
  setInterval(changeBackground, 5000); // luego cambia cada 5 seg
});










