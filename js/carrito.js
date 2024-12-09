// Función para cargar los productos desde el archivo JSON
function cargarProductos() {
    fetch('js/libros.json')
        .then(response => response.json())
        .then(data => {
            const contenedorProductos = document.getElementById('productos');
            contenedorProductos.innerHTML = ''; // Limpiar contenido previo
            for (const id in data) {
                const producto = data[id];
                const nombreImagen = `${producto.Titulo} - ${producto.Autor} (${producto.Año}).png`;

                const productoDiv = document.createElement('div');
                productoDiv.classList.add('producto');
                
                productoDiv.innerHTML = `
                <img src="img/libros/${nombreImagen}" alt="${producto.Titulo}" width="100">
                <div>
                    <h3>${producto.Titulo}</h3>
                    <p><i>${producto.Autor} (${producto.Año})</i></p>
                    <p class="precio">$ ${producto.Precio.toLocaleString('es-AR')}</p>
                    <p><b>Cantidad:</b> <span class="cantidad" data-id="${id}">1</span></p>
                    <button class="btn-cantidad" data-id="${id}" data-cambio="-1">-</button>
                    <button class="btn-cantidad" data-id="${id}" data-cambio="1">+</button>
                </div>
                <div>
                    <p><b>Subtotal:</b> <br> <span class="precio"> $ <span class="subtotal" data-id="${id}">${producto.Precio.toLocaleString('es-AR')}</span></span></p>
                    <button class="agregar-carrito" data-id="${id}" data-nombre="${producto.Titulo}" data-autor="${producto.Autor}" data-precio="${producto.Precio}">
                        Agregar al Carrito
                    </button>
                </div>
                
            `;
                contenedorProductos.appendChild(productoDiv);
            }

            // Vuelve a asociar los eventos a los botones generados dinámicamente
            asociarEventosBotones();
            asociarEventosCantidad();
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Función para asociar eventos a los botones de agregar
function asociarEventosBotones() {
    var botonesAgregar = document.getElementsByClassName('agregar-carrito');
    for (var i = 0; i < botonesAgregar.length; i++) {
        botonesAgregar[i].addEventListener('click', agregarProducto);
    }
}

// Función para asociar los eventos de los botones de cantidad (+ y -)
function asociarEventosCantidad() {
    var botonesCantidad = document.getElementsByClassName('btn-cantidad');
    for (var i = 0; i < botonesCantidad.length; i++) {
        botonesCantidad[i].addEventListener('click', cambiarCantidad);
    }
}

// Función para agregar productos al carrito
function agregarProducto(event) {
    const id = event.target.getAttribute('data-id');
    const nombre = event.target.getAttribute('data-nombre');
    const autor = event.target.getAttribute('data-autor');
    const precio = parseFloat(event.target.getAttribute('data-precio'));
    const cantidadInput = document.querySelector(`.cantidad[data-id="${id}"]`);
    const cantidad = parseInt(cantidadInput ? cantidadInput.textContent : 1); // Cantidad seleccionada

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Verificamos si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === id);
    
    if (productoExistente) {
        // Si el producto existe, actualizamos la cantidad sin exceder 10
        const nuevaCantidad = productoExistente.cantidad + cantidad;
        if (nuevaCantidad <= 10) {
            productoExistente.cantidad = nuevaCantidad; // Sumar correctamente la cantidad
        } else {
            productoExistente.cantidad = 10; // Fijamos el máximo en 10
        }
    } else {
        // Si el producto no está en el carrito, lo agregamos
        carrito.push({
            id: id,
            nombre: nombre,
            autor: autor,
            precio: precio,
            cantidad: cantidad
        });
    }

    // Guardamos el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizamos la cantidad y el subtotal en el HTML (si es necesario)
    if (cantidadInput) {
        cantidadInput.textContent = '1'; // Reinicia a 1 después de agregar al carrito
    }

    // Resetear el subtotal en el HTML (si está presente)
    const subtotalSpan = document.querySelector(`.subtotal[data-id="${id}"]`);
    if (subtotalSpan) {
        subtotalSpan.textContent = precio.toLocaleString('es-AR'); // Reinicia el subtotal al precio unitario
    }

    // Actualizamos el carrito en la vista
    cargarCarrito(); 
}

function cargarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar la lista del carrito
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let totalDelCarrito = 0; // Variable para almacenar el total

    carrito.forEach(producto => {
        // Calcular el subtotal (precio * cantidad)
        const subtotal = producto.precio * producto.cantidad;
        
        // Crear los elementos del carrito
        const productoDiv = document.createElement('div');
        
        const nombreCantidadP = document.createElement('p');
        nombreCantidadP.textContent = `${producto.nombre} (${producto.cantidad} u)`;
        nombreCantidadP.classList.add('titulo-carrito');
        
        const autorAñoP = document.createElement('p');
        autorAñoP.textContent = `${producto.autor}`;
        autorAñoP.classList.add('autor-carrito');
        
        const subtotalP = document.createElement('p');
        subtotalP.textContent = `$ ${subtotal.toLocaleString('es-AR')}`; // Muestra el subtotal con el precio y la cantidad correcta
        subtotalP.classList.add('precio-carrito');
        
        // Añadir los elementos al div del producto
        productoDiv.appendChild(nombreCantidadP);
        productoDiv.appendChild(autorAñoP);
        productoDiv.appendChild(subtotalP);
        
        // Añadir el producto al carrito en la vista
        listaCarrito.appendChild(productoDiv);

        // Sumar el subtotal al total
        totalDelCarrito += subtotal;
    });

    // Mostrar el total al final del carrito
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('total-carrito');
    
    const totalP = document.createElement('p');
    totalP.textContent = `Total: $ ${totalDelCarrito.toLocaleString('es-AR')}`;
    totalP.classList.add('total-carrito-texto');
    
    totalDiv.appendChild(totalP);
    listaCarrito.appendChild(totalDiv); // Añadir el total al final del carrito
    verificarCarrito();
}


// Función para cambiar la cantidad de un producto en el carrito (+ o -)
function cambiarCantidad(event) {
    const id = event.target.getAttribute('data-id');
    const cambio = parseInt(event.target.getAttribute('data-cambio'));
    const cantidadSpan = document.querySelector(`.cantidad[data-id="${id}"]`);
    let cantidad = parseInt(cantidadSpan.textContent);

    cantidad += cambio;

    if (cantidad > 0 && cantidad < 11) {
        cantidadSpan.textContent = cantidad;
        const producto = {
            id: id,
            cantidad: cantidad
        };

        // Actualizamos el subtotal en el HTML
        const precio = parseFloat(document.querySelector(`.agregar-carrito[data-id="${id}"]`).getAttribute('data-precio'));
        const subtotalSpan = document.querySelector(`.subtotal[data-id="${id}"]`);
        subtotalSpan.textContent = (cantidad * precio).toLocaleString('es-AR'); // Para puntos separadores de miles

        // Actualizamos la cantidad en el carrito
        actualizarCarrito(id, cantidad);
    } else {
        // Si la cantidad es 0, eliminamos el producto del carrito
        eliminarProductoDelCarrito(id);
    }
}

// Función para actualizar la cantidad de un producto en el carrito
function actualizarCarrito(id, cantidad) {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad = cantidad;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}

// Función para eliminar un producto del carrito si la cantidad es 0
function eliminarProductoDelCarrito(id) {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(item => item.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click', function () {
    localStorage.removeItem('carrito');
    cargarCarrito();
});

// Cargar productos al iniciar la página
document.addEventListener('DOMContentLoaded', function () {
    cargarProductos();
    cargarCarrito();
});

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