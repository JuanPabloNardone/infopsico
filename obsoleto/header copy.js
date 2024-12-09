header = `
        <div class="contenedor-header">
            <div class="navegacion">
                <a href="index.html">
                    <img src="img/logo_InfoPsico.png" alt="logo_infopsico" class="logo">
                </a>
                <button id="abrir" class="abrir-menu">
                    <img src="img/barra-de-menus.png" alt="menu">
                </button>
                <nav id="nav">
                    <button class="cerrar-menu" id="cerrar">
                        X
                    </button>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="psicologia.html">La psicología</a></li>
                        <li><a href="emociones.html">Las emociones</a></li>
                        <li><a href="comentarios.html">Comentarios</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                        <li><a id="nav-login" href="login.html">Iniciar sesión</a></li>
                    </ul>
                </nav>
            </div>
            <h1>InfoPsico</h1>
            <h4>Tu web de Psicología y aprendizaje</h4>
        </div>
`
document.getElementById('header').innerHTML = header
