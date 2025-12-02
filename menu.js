// Seleccionar botones y platos
const buttons = document.querySelectorAll('.menu-categorias button');
const items = document.querySelectorAll('.menu-item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // quitar clase activa
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.dataset.category;

    items.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

const btnEs = document.getElementById("btn-es");
const btnEn = document.getElementById("btn-en");
const menuEs = document.getElementById("menu-es");
const menuEn = document.getElementById("menu-en");

// al inicio ocultamos todo
menuEs.style.display = "none";
menuEn.style.display = "none";

// ESPAÑOL
btnEs.addEventListener("click", () => {
  
  // si YA está activo → ocultar todo
  if (btnEs.classList.contains("active")) {
    btnEs.classList.remove("active");
    menuEs.style.display = "none";
    return; // salir sin mostrar nada
  }

  // activar español
  btnEs.classList.add("active");
  btnEn.classList.remove("active");

  menuEs.style.display = "block";
  menuEn.style.display = "none";
});

// INGLÉS
btnEn.addEventListener("click", () => {

  // si YA está activo → ocultar todo
  if (btnEn.classList.contains("active")) {
    btnEn.classList.remove("active");
    menuEn.style.display = "none";
    return;
  }

  // activar inglés
  btnEn.classList.add("active");
  btnEs.classList.remove("active");

  menuEn.style.display = "block";
  menuEs.style.display = "none";
});



// Seleccionar todas las imágenes dentro de .menu-imagen
const imagenesMenu = document.querySelectorAll(".menu-imagen img");

// Modal
const modal = document.getElementById("menu-modal");
const modalImg = document.getElementById("modal-img");
const cerrar = document.querySelector(".cerrar-modal");

// Agregar evento a *cada* imagen del menú
imagenesMenu.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    document.body.classList.add("blur-activo");
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("blur-activo");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("blur-activo");
  }
});

// ===== MENÚ HAMBURGUESA =====
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// cerrar menú al hacer click en un link
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});





