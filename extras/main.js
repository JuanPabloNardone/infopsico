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