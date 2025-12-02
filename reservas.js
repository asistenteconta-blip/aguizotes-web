// ================= MOSTRAR FORMULARIO =================
function mostrarReserva(tipo) {
    document.getElementById("form-mesa").style.display = (tipo === "mesa") ? "block" : "none";
    document.getElementById("form-evento").style.display = (tipo === "evento") ? "block" : "none";

    document.querySelectorAll(".switch-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}



// --- BOTÓN MESA ---
document.getElementById("btn-whatsapp-mesa").addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("mesa-nombre").value;
    const tel = document.getElementById("mesa-telefono").value;
    const fecha = document.getElementById("mesa-fecha").value;
    const hora = document.getElementById("mesa-hora").value;
    const personas = document.getElementById("mesa-personas").value;
    const comentarios = document.getElementById("mesa-comentarios").value || "Sin comentarios";

    let mensaje = 
`* Reserva de Mesa*
 *Nombre:* ${nombre}
 *Teléfono:* ${tel}
 *Fecha:* ${fecha}
 *Hora:* ${hora}
 *Personas:* ${personas}
 *Comentarios:* ${comentarios}`;

    let url = "https://wa.me/50687133551?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
});


// --- BOTÓN EVENTO ---
document.getElementById("btn-whatsapp-evento").addEventListener("click", function (e) {
    e.preventDefault();

    const empresa = document.getElementById("ev-empresa").value;
    const nombre = document.getElementById("ev-nombre").value;
    const tel = document.getElementById("ev-telefono").value;
    const fecha = document.getElementById("ev-fecha").value;
    const hora = document.getElementById("ev-hora").value;
    const detalles = document.getElementById("ev-detalles").value || "Sin detalles adicionales";

    let mensaje = 
` *Reserva de Evento Especial*
 *Empresa/Grupo:* ${empresa}
 *Responsable:* ${nombre}
 *Teléfono:* ${tel}
 *Fecha:* ${fecha}
 *Hora:* ${hora}
 *Detalles:* ${detalles}`;

    let url = "https://wa.me/50687133551?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
});



function mostrarReserva(tipo){
    
    // Ocultar ambos formularios
    document.getElementById("form-mesa").style.display = "none";
    document.getElementById("form-evento").style.display = "none";

    // Mostrar solo el seleccionado
    if(tipo === "mesa") document.getElementById("form-mesa").style.display = "block";
    if(tipo === "evento") document.getElementById("form-evento").style.display = "block";

    // MANEJO DE CLASE ACTIVE 🟡
    document.querySelectorAll(".switch-btn").forEach(b => b.classList.remove("active"));
    document.querySelector(`[onclick="mostrarReserva('${tipo}')"]`).classList.add("active");

}






