window.addEventListener("DOMContentLoaded", () => {

    const bg1 = document.querySelector(".bg1");
    const bg2 = document.querySelector(".bg2");

    const images = [
        "img/Hero1.png",
        "img/Hero2.jpg",
        "img/Hero3.jpg",
        "img/Hero4.jpg"
    ];

    let current = 0;

    // primera imagen
    bg1.style.backgroundImage = `url(${images[0]})`;

    // precarga
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    function nextImage() {
        const next = (current + 1) % images.length;

        bg2.style.backgroundImage = `url(${images[next]})`;
        bg2.style.opacity = 1;

        setTimeout(() => {
            bg1.style.backgroundImage = bg2.style.backgroundImage;
            bg2.style.opacity = 0;
            current = next;
        }, 1500);
    }

    setInterval(nextImage, 5000);

});

// ===== MENU HAMBURGUESA =====
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

// abrir/cerrar
hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// cerrar menú cuando se elige algo
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
