==================================================
                  InfoPsico - Sitio Web de Psicología y Aprendizaje
==================================================
Realizado por: Juan Pablo Nardone Fernández
Programa "Talento tech" - 14/11/2024 - Comisión 24228

InfoPsico es un sitio web dedicado a la divulgación de la psicología, el aprendizaje emocional y el bienestar mental. Ofrece recursos sobre temas como la ansiedad, depresión, estrés y psicoterapia. Los usuarios pueden acceder a artículos, comentarios, información de contacto, y recibir novedades sobre temas de salud mental.

--------------------------------------------------
               Estructura del Proyecto
--------------------------------------------------

Este proyecto está dividido en varias secciones, cada una destinada a proporcionar contenido y funcionalidad específica.

Estructura de Archivos:
------------------------
/InfoPsico
    /css
        styles.css           # Archivo de estilos CSS
    /img
        logo_InfoPsico.png   # Logo del sitio web
        barra-de-menus.png   # Ícono de menú
        domicilio.png        # Ícono de dirección
        telefono.png         # Ícono de teléfono
        email.png            # Ícono de correo electrónico
        whatsapp.png         # Ícono de WhatsApp
        horario.png          # Ícono de horario de atención
        logo_faceboook.png   # Ícono de Facebook
        logo_instagram.png   # Ícono de Instagram
        logo_linkedin.png    # Ícono de LinkedIn
        logo_x.png           # Ícono de X (red social)
    /js
        navbar.js            # Funcionalidad de la barra de navegación (abrir/cerrar menú)
    index.html               # Página principal
    psicologia.html          # Página sobre la psicología
    emociones.html           # Página sobre las emociones
    comentarios.html         # Página de comentarios
    contacto.html            # Página de contacto

--------------------------------------------------
                 Páginas Principales
--------------------------------------------------

El sitio está compuesto por las siguientes páginas:

- **index.html**: Página principal, que presenta la web y los temas destacados de psicología.
- **psicologia.html**: Página que explica qué es la psicología y su importancia en el aprendizaje 
  y el bienestar.
- **emociones.html**: Página dedicada a las emociones y cómo gestionarlas.
- **comentarios.html**: Sección donde los usuarios pueden dejar sus comentarios sobre el sitio 
  y los temas tratados.
- **contacto.html**: Página de contacto donde los usuarios pueden enviar consultas y mensajes 
  a través de un formulario.

--------------------------------------------------
                Formulario de Contacto
--------------------------------------------------

El formulario de contacto en la página **contacto.html** permite a los usuarios enviar sus 
consultas y comentarios, especificando:

- **Nombre Completo**
- **Correo Electrónico**
- **Tema de Consulta** (Ansiedad, Depresión, Estrés, Psicoterapia, Otros)
- **Edad**
- **Género** (Masculino, Femenino, Otro)
- **Recibir Novedades** (Checkbox)
- **Mensaje**

El formulario está integrado con **Formspree**, lo que permite enviar los mensajes sin necesidad 
de configurar un servidor backend.

--------------------------------------------------
                     Diseño y Estilo
--------------------------------------------------

El diseño de la web utiliza una combinación de fuentes de Google y un esquema de colores basado 
en tonos de granada. Los estilos están definidos en el archivo **css/styles.css**, que proporciona 
una estructura de página limpia, moderna y accesible. El menú de navegación es responsivo y se 
adapta a dispositivos móviles mediante un botón de apertura y cierre de menú.

--------------------------------------------------
                   Redes Sociales
--------------------------------------------------

En el pie de página, se encuentran enlaces a las redes sociales de **InfoPsico**, incluidas 
Facebook, Instagram, LinkedIn, y X (antes Twitter). Además, hay un mapa interactivo que muestra 
la ubicación física de la Fundación Centro Psicoanalítico Argentino, junto con los datos de contacto 
(teléfono, correo electrónico y WhatsApp).

--------------------------------------------------
                     Pie de Página
--------------------------------------------------

El pie de página incluye:
- Información sobre la creación del sitio web.
- Accesos rápidos a las páginas principales.
- Enlaces a las redes sociales.
- Un mapa embebido con la ubicación de la fundación.

--------------------------------------------------
                   Funcionalidades
--------------------------------------------------

- **Navegación fluida**: La barra de navegación está diseñada para ser fácil de usar, con un 
  menú desplegable que se adapta a pantallas más pequeñas.
- **Formulario de contacto funcional**: Los usuarios pueden enviar sus consultas directamente 
  desde la web.
- **Responsive Design**: El sitio es totalmente responsivo y se adapta a diferentes tamaños de 
  pantalla, incluidos móviles y tabletas.

--------------------------------------------------
                   Tecnologías Utilizadas
--------------------------------------------------

- **HTML5**: Estructura del sitio web.
- **CSS3**: Estilos y diseño del sitio.
- **JavaScript**: Funcionalidad interactiva (menú desplegable).
- **Formspree**: Para la gestión de formularios de contacto.

--------------------------------------------------
                   Cambios implementados para la segunda entrega (JavaScript)
--------------------------------------------------

**GENERALES**
1. FOOTER incorporados por JS en todos los html, disponible en "footer.js".

2. HEADER incorporados por JS en todos los html, disponible en "HEADER.js".

3. SECCIÓN COMENTARIOS: Se cambian los comentarios y se agregan desde https://randomuser.me/

4. EMOCIONES POR JSON: Se crea un archivo emociones.json donde se traen las 6 emociones del archivo JSON.

**CARRITO DE COMPRAS**
1. LOGIN: No se implementa la registración de usuarios por limitaciones del FrontEnd.

2. MUESTRA DE PRODUCTOS EN CARDS: Los datos se levantal del JSON de productos.

3. CARRITO DE COMPRAS: Generación del carrito de compras.

4. VEP de pago: Una vez que se seleccionan los productos, se puede generar un VEP de pago ficticio e imprimir.

**SESIONES**
- Se maneja localStorage para almacenar datos del usuario y selecciones del carrito de compras.
- Las sesiones se abren a través del formulario login y se cierran dentro de la tienda.

**CARRITO RESPONSIVE**
- Se ajusta elcarrito para que sea responsivo en 3 puntos de corte

**DATOS EN JSON**
- Persisten diversos datos de solo lectura en JSON (usuarios, libros, emociones, autoridades)

**ARCHIVOS JS DIFERENCIADOS**
- Se guarda el código en archivos diferenciados de acuerdo a la funcionalidad que representa cada uno