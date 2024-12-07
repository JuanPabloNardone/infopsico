// Variable para almacenar los usuarios cargados desde el JSON
let usuarios = [];

// Cargar los usuarios desde el archivo JSON
fetch('js/usuarios.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        usuarios = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Referencia al formulario
const formLogin = document.getElementById('formLogin');

// Evento para manejar el inicio de sesión
formLogin.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir recarga de la página

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validar contra los usuarios cargados
    const usuarioEncontrado = usuarios.find(usuario => 
        usuario.nombre === nombre &&
        usuario.correo === correo &&
        usuario.password === password
    );

    if (usuarioEncontrado) {
        // Guardar datos del usuario en localStorage
        localStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
        // Redirigir a otra página si es necesario
        window.location.href = "tienda.html";
    } else {
        alert('Error: Usuario o contraseña incorrectos');
    }
});