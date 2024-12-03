document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formularioContacto");

    const campos = {
        nombre: document.getElementById("nombre"),
        correo: document.getElementById("correo"),
        tema: document.getElementById("tema"),
        edad: document.getElementById("edad"),
        genero: document.querySelectorAll('input[name="genero"]'),
        mensaje: document.getElementById("mensaje"),
        subtituloGenero: document.getElementById("subtituloGenero") // Asegúrate de tener este ID en el HTML.
    };

    const validarCampo = (campo, condicion, mensaje) => {
        if (condicion) {
            campo.classList.add("error");
            campo.setCustomValidity(mensaje);
        } else {
            campo.classList.remove("error");
            campo.setCustomValidity(""); // Limpia el mensaje de error.
        }
    };

    formulario.addEventListener("submit", function (evento) {
        let esValido = true;

        validarCampo(
            campos.nombre,
            campos.nombre.value.trim() === "" || campos.nombre.value.length > 30,
            "Ingresa un nombre válido (máximo 30 caracteres)."
        );
        validarCampo(
            campos.correo,
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.correo.value),
            "Ingresa un correo válido."
        );
        validarCampo(
            campos.tema,
            campos.tema.value === "",
            "Selecciona un tema."
        );
        validarCampo(
            campos.edad,
            isNaN(parseInt(campos.edad.value)) || campos.edad.value < 0 || campos.edad.value > 100,
            "Ingresa una edad válida (0-100)."
        );
        validarCampo(
            campos.mensaje,
            campos.mensaje.value.trim() === "",
            "Este campo es obligatorio."
        );

        const generoSeleccionado = Array.from(campos.genero).some(input => input.checked);
        if (!generoSeleccionado) {
            campos.subtituloGenero.classList.add("error-label");
            esValido = false;
        } else {
            campos.subtituloGenero.classList.remove("error-label");
        }

        // Evitar el envío si hay errores
        if (!formulario.checkValidity() || !esValido) {
            evento.preventDefault();
        }
    });

    // Eliminar errores al corregir campos
    ["input", "change"].forEach(eventType => {
        Object.values(campos).forEach(campo => {
            if (campo.tagName || campo.length) {
                const elementos = campo.length ? Array.from(campo) : [campo];
                elementos.forEach(elemento => {
                    elemento.addEventListener(eventType, function () {
                        elemento.classList.remove("error");
                        elemento.setCustomValidity(""); // Limpia la validación personalizada.
                        if (campo === campos.tema) {
                            campos.tema.setCustomValidity(""); // Limpia directamente el campo de tema.
                        }
                    });
                });
            }
        });
    });

    // Eliminar la clase de error cuando se selecciona un género
    campos.genero.forEach(input => {
        input.addEventListener("change", function () {
            campos.subtituloGenero.classList.remove("error-label");
        });
    });
});
