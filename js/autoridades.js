document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("traerDatosAutoridades"); // Obtén el botón
    const contenedor = document.getElementById("contenedorAutoridades"); // El contenedor donde se mostrarán los datos

    boton.addEventListener("click", function () {
        // Limpiar el contenedor antes de agregar nuevos datos
        contenedor.innerHTML = '';

        // Traer los datos desde el archivo JSON
        fetch('js/autoridades.json')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    const autoridad = data[i];

                    // Crear un div para contener las 2 columnas
                    const div = document.createElement("div");
                    div.classList.add("autoridad");

                    // Crear la primera columna con la autoridad y el cargo
                    const columna1 = document.createElement("div");
                    columna1.classList.add("columna1");
                    columna1.innerHTML = `<strong>${autoridad.nombre}</strong><em>${autoridad.cargo}</em>`;

                    // Crear la segunda columna con la descripción
                    const columna2 = document.createElement("div");
                    columna2.classList.add("columna2");
                    columna2.textContent = autoridad.descripcion;

                    // Agregar las columnas al div
                    div.appendChild(columna1);
                    div.appendChild(columna2);

                    // Añadir el div al contenedor
                    contenedor.appendChild(div);
                }
            })
            .catch(error => console.error("Error al cargar los datos: ", error));
    });
});
