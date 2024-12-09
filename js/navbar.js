const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

function abrirMenu(){
    nav.classList.add("visible");
}
function cerrarMenu(){
    nav.classList.remove("visible");
}

abrir.addEventListener("click", abrirMenu)
cerrar.addEventListener("click", cerrarMenu)

// Clase actve dinámica, de acuerdo a la página activa

const currentPage = window.location.pathname.split('/').pop(); // Obtener la URL actual

// Seleccionar todos los enlaces de la barra de navegación
const navLinks = document.querySelectorAll('nav ul li a');

// Recorrer los enlaces y agregar la clase "active" al que corresponda
navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active'); // Por si alguna otra página tenía marcada la clase
    }
});

// Barra de navegación dinámica, depenndiendo del inicio de sesión

// Obtener el elemento del botón en la barra de navegación
const navLoginButton = document.getElementById('nav-login');

// Verificar si el usuario está logueado
let usuario = localStorage.getItem('usuario');

// Si hay un usuario en localStorage
if (usuario) {
    // Cambiar texto y enlace del botón
    navLoginButton.textContent = 'Tienda';
    navLoginButton.href = 'tienda.html';
} else {
    // Asegurarse de que el botón siga siendo "Iniciar sesión"
    navLoginButton.textContent = 'Iniciar sesión';
    navLoginButton.href = 'login.html';
}
