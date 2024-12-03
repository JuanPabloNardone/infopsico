function traerComentarios() {
    // Lista de comentarios extensos
    const comentariosPositivos = [
        "La información que ofrecen es muy útil y está muy bien organizada. Me ayudó a entender más sobre mis problemas emocionales.",
        "Muy buen contenido, pero me gustaría ver más artículos sobre manejo del estrés. ¡Gracias por compartir esta información!",
        "Excelente página. Todo el contenido es claro y accesible. Me encanta cómo se abordan los temas de salud mental.",
        "Me gustaron algunos artículos, pero creo que podrían ser un poco más profundos en ciertos temas. Aun así, es muy útil.",
        "La página es buena, pero sería genial que incluyeran más recursos descargables. Eso facilitaría el acceso offline para todos.",
        "El contenido está muy bien hecho. Me encantaron los artículos sobre bienestar emocional, muy útiles y prácticos para el día a día."
    ];

    const estrellasPositivas = [3, 4, 5, 3, 4, 5];

    fetch("https://randomuser.me/api/?results=200&nat=es")
        .then(response => response.json())
        .then(data => {
            const comentariosSection = document.querySelector(".comentarios-section");
            comentariosSection.innerHTML = ""; // Limpiamos los comentarios existentes

            let contador = 0;

            for (let i = 0; i < data.results.length && contador < 6; i++) {
                const user = data.results[i];
                const pais = user.location.country;
                const ciudad = user.location.city;

                
                // Filtramos usuarios únicamente de España
                if (pais.includes("Spain") || pais.includes("España")) {
                    const nombre = user.name.first;
                    const apellido = user.name.last;
                    const foto = user.picture.medium;
                    
                    // Selección aleatoria de comentario y estrellas
                    const indiceAleatorio = Math.floor(Math.random() * comentariosPositivos.length);
                    const comentarioSeleccionado = comentariosPositivos[indiceAleatorio];
                    const estrellasSeleccionadas = estrellasPositivas[indiceAleatorio];

                    // Generación dinámica de las estrellas
                    let estrellasHTML = '';
                    for (let j = 0; j < 5; j++) {
                        estrellasHTML += j < estrellasSeleccionadas 
                            ? '<span class="estrella llena"></span>' 
                            : '<span class="estrella vacia"></span>';
                    }

                    const comentarioHTML = `
                        <div class="comentario">
                            <div class="comentario-header">
                                <img src="${foto}" alt="foto" class="avatar-usuario">
                                <div class="comentario-info">
                                    <span class="comentario-nombre">${nombre} ${apellido} (${ciudad})</span>
                                    <div class="estrellas">
                                        ${estrellasHTML}
                                    </div>
                                </div>
                            </div>
                            <p class="comentario-texto">"${comentarioSeleccionado}"</p>
                        </div>
                    `;

                    comentariosSection.innerHTML += comentarioHTML;
                    contador++;
                }
            }

            if (contador === 0) {
                comentariosSection.innerHTML = "<p>No se encontraron usuarios de España.</p>";
            }
        })
        .catch(error => console.error("Error al cargar los comentarios:", error));
}

document.addEventListener("DOMContentLoaded", traerComentarios);