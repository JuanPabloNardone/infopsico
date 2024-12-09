// Obtener el contenedor del header
const headerContainer = document.getElementById('header');

// Obtener datos del usuario desde localStorage
const nombreUsuario = JSON.parse(localStorage.getItem('usuario'));

// Generar el contenido del header dinámico
let header = `
    <div class="contenedor-header">
        <div class="navegacion">
            <a href="index.html">
                <img src="img/logo_InfoPsico.png" alt="logo_infopsico" class="logo">
            </a>
            <button id="abrir" class="abrir-menu">
                <img src="img/barra-de-menus.png" alt="menu">
            </button>
            <nav id="nav">
                <button class="cerrar-menu" id="cerrar">X</button>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="psicologia.html">La psicología</a></li>
                    <li><a href="emociones.html">Las emociones</a></li>
                    <li><a href="comentarios.html">Comentarios</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
`;

// Modificar la barra de navegación según el estado del usuario
if (nombreUsuario) {
    // Si hay un usuario logueado, mostrar "Tienda" y "Cerrar sesión"
    header += `
        <li><a href="tienda.html">Tienda</a></li>
        <li><a id="nav-logout" href="#">Cerrar sesión</a></li>
    `;
} else {
    // Si no hay usuario logueado, mostrar "Iniciar sesión"
    header += `<li><a id="nav-login" href="login.html">Iniciar sesión</a></li>`;
}

header += `
                </ul>
            </nav>
        </div>
        <h1>InfoPsico</h1>
        <h4>Tu web de Psicología y aprendizaje</h4>
    </div>
`;

// Insertar el header en la página
headerContainer.innerHTML = header;

// Agregar funcionalidad al botón de cerrar sesión
if (nombreUsuario) {
    const logoutButton = document.getElementById('nav-logout');
    logoutButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            localStorage.removeItem('usuario');
            localStorage.removeItem('carrito'); // Opcional: eliminar el carrito
            window.location.href = 'index.html'; // Redirigir al inicio
        }
    });
}
