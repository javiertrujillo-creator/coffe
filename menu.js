document.addEventListener("DOMContentLoaded", function(){

// ============================
// GUARDAR PRODUCTOS
// ============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.querySelectorAll(".btn-comprar").forEach(btn => {

btn.addEventListener("click", function(){

const nombre = btn.dataset.nombre;
const precio = btn.dataset.precio;

carrito.push({
nombre:nombre,
precio:precio
});

localStorage.setItem("carrito",JSON.stringify(carrito));

actualizarContador();

alert("Producto agregado al carrito");

});

});

function actualizarContador(){

const contador = document.getElementById("contador-carrito");

if(contador){
contador.textContent = carrito.length;
}

}

actualizarContador();


// ============================
// DETALLES PRODUCTO
// ============================

window.toggleDetalles = function(boton){

const card = boton.closest(".menu-card");

card.classList.toggle("active");

}


// ============================
// MOSTRAR CARRITO
// ============================

const lista = document.getElementById("lista-productos");
const totalHTML = document.getElementById("total");

function mostrarCarrito(){

if(!lista) return;

lista.innerHTML="";

let total=0;

carrito.forEach((producto,index)=>{

total += parseInt(producto.precio);

lista.innerHTML += `
<div class="producto">

<div class="producto-info">
<img src="./img/hot-beverages.png">

<div>
<strong>${producto.nombre}</strong>
<p>$${producto.precio}</p>
</div>

</div>

<button class="eliminar" onclick="eliminar(${index})">X</button>

</div>
`;

});

if(totalHTML){
totalHTML.textContent = "$"+total;
}

}

window.eliminar = function(index){

carrito.splice(index,1);

localStorage.setItem("carrito",JSON.stringify(carrito));

mostrarCarrito();

actualizarContador();

}

mostrarCarrito();


// ============================
// CONTACTO
// ============================

const form = document.getElementById("formContacto");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Mensaje enviado correctamente ✅");

form.reset();

});

}

});

// ============================
// BOTON PAGAR
// ============================
document.addEventListener("DOMContentLoaded", function(){

const btnPagar = document.getElementById("btn-pagar");

if(btnPagar){

btnPagar.addEventListener("click", function(){

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if(carrito.length === 0){

alert("Tu carrito está vacío 🛒");
return;

}

alert("✅ Pago realizado con éxito");

localStorage.removeItem("carrito");

location.reload();

});

}

});

// =======================
// REGISTRO
// =======================

const formRegistro = document.getElementById("formRegistro");

if(formRegistro){

formRegistro.addEventListener("submit",(e)=>{

e.preventDefault();

const usuario = document.getElementById("usuario").value;
const correo = document.getElementById("correo").value;
const password = document.getElementById("password").value;

const usuarioData = {
usuario,
correo,
password
};

localStorage.setItem("usuario",JSON.stringify(usuarioData));

alert("Registro exitoso ✅");

window.location.href="login.html";

});

}



// =======================
// LOGIN
// =======================

const formLogin = document.getElementById("formLogin");

if(formLogin){

formLogin.addEventListener("submit",(e)=>{

e.preventDefault();

const correo = document.getElementById("loginCorreo").value;
const password = document.getElementById("loginPassword").value;

const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

if(!usuarioGuardado){

alert("No existe usuario ❌");
return;

}

if(correo === usuarioGuardado.correo && password === usuarioGuardado.password){

alert("Bienvenido "+usuarioGuardado.usuario+" ☕");

window.location.href="index.html";

}else{

alert("Correo o contraseña incorrectos ❌");

}

});

}