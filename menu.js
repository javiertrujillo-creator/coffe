
function toggleDetalles(id) {
    const overlay = document.getElementById(id);

    if (overlay.style.display === "block") {
    overlay.style.display = "none";
    } else {
    overlay.style.display = "block";
    }
}

// ===============================
// CARRITO
// ===============================

// cargar carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// actualizar contador al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();

  // detectar todos los botones comprar
    const botones = document.querySelectorAll(".btn-comprar");

    botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);

        agregarAlCarrito(nombre, precio);
    });
    });
});

// ===============================
// AGREGAR AL CARRITO
// ===============================
function agregarAlCarrito(nombre, precio) {
    const producto = {
    nombre: nombre,
    precio: precio,
    cantidad: 1
    };

    carrito.push(producto);

  // guardar
    localStorage.setItem("carrito", JSON.stringify(carrito));

  // actualizar contador
    actualizarContador();

  // aviso bonito
    alert(nombre + " agregado al carrito 🛒");
}

// ===============================
// ACTUALIZAR CONTADOR
// ===============================
function actualizarContador() {
    const contador = document.getElementById("contador-carrito");

    if (!contador) return;

    let total = 0;

    carrito.forEach(prod => {
    total += prod.cantidad;
    });

    contador.textContent = total;
}