//---------------------------------------------------------------------

// Obtener datos del carrito y del usuario
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const usuario = JSON.parse(localStorage.getItem('usuario')) || []; 
console.log(usuario);

// Mostrar datos del usuario
document.getElementById('datosUsuario').innerHTML = `
    <p><b>Nombre y apellido / Razón Social: </b>${usuario.nombre}</p>
    <p><b>Domicilio: </b>${usuario.direccion.calle} ${usuario.direccion.numero} (${usuario.direccion.codigo_postal})</p>
    <p><b>Teléfono: </b>${usuario.telefono}</p>
    <p><b>Mail: </b>${usuario.correo}</p>`;

// Mostrar productos
let total = 0;
const tbody = document.getElementById('listadoProductos');
carrito.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    const fila = `
        <tr>
            <td>${producto.nombre} - ${producto.autor}</td>
            <td>$ ${producto.precio.toLocaleString('es-AR')}</td>
            <td>${producto.cantidad}</td>
            <td>$ ${subtotal.toLocaleString('es-AR')}</td>
        </tr>
    `;
    tbody.innerHTML += fila;
});

// Mostrar total
document.getElementById('total').textContent = total.toLocaleString('es-AR');

// Botón para imprimir
document.getElementById('imprimir').addEventListener('click', () => {
    window.print();
});
