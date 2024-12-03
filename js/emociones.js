async function cargarEmociones() {
    try {
        // Cargar el archivo JSON
        const respuesta = await fetch('js/emociones.json');
        if (!respuesta.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const datos = await respuesta.json();
        
        // Seleccionar el contenedor de emociones
        const contenedorEmociones = document.querySelector('.contenedor-emociones');
        contenedorEmociones.innerHTML = ''; // Limpiamos contenido previo, si lo hubiera

        // Recorrer las emociones usando un bucle for
        for (let i = 0; i < datos.emociones.length; i++) {
            const emocion = datos.emociones[i];
            
            // Crear el HTML de la emoción
            const emocionHTML = `
                <div class="emocion">
                    <h2>${emocion.nombre}</h2>
                    <div class="contenedor-imagen-emocion">
                        <img src="${emocion.imagen}" alt="${emocion.nombre}">
                    </div>
                    <div class="descripcion-emocion">
                        <h3>${emocion.subtitulos[0]}</h3>
                        <p>${emocion.descripciones[0]}</p>
                        <h3>${emocion.subtitulos[1]}</h3>
                        <p>${emocion.descripciones[1]}</p>
                        <h3>${emocion.subtitulos[2]}</h3>
                        <p>${emocion.descripciones[2]}</p>
                    </div>
                </div>
            `;
            
            // Insertar el HTML en el contenedor
            contenedorEmociones.innerHTML += emocionHTML;
        }
    } catch (error) {
        console.error('Hubo un problema al cargar las emociones:', error);
        document.querySelector('.contenedor-emociones').innerHTML = `<p>Error al cargar las emociones. Intenta nuevamente más tarde.</p>`;
    }
}

// Llamar a la función para cargar las emociones
document.addEventListener("DOMContentLoaded", cargarEmociones);


