
// Comprobar si hay productos en el carrito
function verificarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const botonGenerarVEP = document.getElementById('generarVEP');

    if (carrito.length > 0) {
        botonGenerarVEP.style.display = 'inline-block'; // Mostrar el botón si hay productos
    } else {
        botonGenerarVEP.style.display = 'none'; // Ocultar el botón si no hay productos
    }
}

// Evento click en el botón "Generar VEP"
document.getElementById('generarVEP').addEventListener('click', () => {
    window.open('vep.html', '_blank'); // Abrir la página del VEP
});

// Llamar la función al cargar la página
verificarCarrito();