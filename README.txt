EXPLORAR LOS BARRIALES, JUNÍN
Historias y paisajes del este mendocino
https://explorandolosbarriales.github.io/

Sitio web de las rutas culturales del distrito Los Barriales, departamento de
Junín, provincia de Mendoza. Es uno de los resultados del Proyecto de
Comunicación Pública de la Ciencia 2025-2026, financiado por la Secretaría de
Investigación, Internacionales y Posgrado (SIIP) de la Universidad Nacional de
Cuyo (Ord. Nº 27/2023-C.S., Res. Nº 3628/2025).


CÓMO ESTÁ ARMADO
================

Sitio estático, sin compilación: se publica en GitHub Pages tal como está.
Tecnologías: HTML + Bootstrap 4 (solo la grilla y utilidades) + Leaflet + JS
sin dependencias.

Para verlo en la computadora antes de publicar:

    python -m http.server 8000

y abrir http://localhost:8000


DE DÓNDE SALE EL TEXTO
======================

Todo el texto visible del sitio está copiado literalmente del documento
"BorradorBarrialesActualizado.docx". No hay ni un párrafo redactado por fuera
de ese archivo: si algo tiene que cambiar, se cambia en el .docx.

Lo único que no sale del documento son las palabras de navegación, que no son
contenido: Inicio, Saltar al contenido, Cómo llegar, Audioguía, Escuchar,
Pausar, Continuar, Detener, Las dos rutas, y los textos de accesibilidad para
lectores de pantalla.


PÁGINAS
=======

  index.html                      Portada: el título, las dos rutas culturales
                                  con su objetivo, y los mapas debajo
  contextualizacionGeneral.html   Contextualización general (con audioguía)
  rutaHistorica.html              Ruta Histórica: objetivo, descripción, mapa
                                  y los 7 componentes
  rutaProductiva.html             Ruta Productiva: objetivo, descripción, mapa
                                  y los 12 componentes

  Un archivo por componente, por ejemplo capilla.html, molinoOrfila.html,
  bodegaPuppato.html, nietasDeLipari.html, etc.

  Bodega Finca Santa María y Bodega Hugo Zamora aparecen en la lista y en el
  mapa, pero SIN página propia: el documento las enumera y no trae texto sobre
  ellas. Cuando lo tengan, se les crea la página.


DÓNDE SE EDITA CADA COSA
========================

  assets/js/datos-rutas.js   Los hitos: nombre, orden, coordenadas, foto, resumen
                             y a qué página enlazan. De acá salen los mapas, las
                             tarjetas y los popups. ES EL ÚNICO LUGAR donde se
                             cargan o corrigen puntos del recorrido.

  assets/js/layout.js        La barra de navegación y el pie de página (incluido
                             el texto legal del proyecto). Se editan una vez y
                             cambian en las 23 páginas.

  assets/css/custom.css      Colores, tipografías y todos los componentes del
                             diseño. Los colores están arriba de todo, en :root.

  assets/js/audioguia.js     La audioguía. Ver assets/audio/README.md para pasar
                             de la voz del navegador a grabaciones en MP3.

  assets/js/rutas-geo.js     Trazado de los recorridos sobre las calles. Está
                             vacío a propósito: ver las instrucciones adentro.

  El texto de cada hito vive en su propio archivo .html.


PENDIENTES, TODOS EN EL DOCUMENTO
=================================

Estas cosas se arreglan editando el .docx y volviendo a generar:

  - Bodega Finca Santa María y Bodega Hugo Zamora no tienen texto.
  - En la Unión Vecinal, la intersección del surtidor figura como "XXXXX".
  - En Bodega Corrales Negros hay dos párrafos repetidos (la versión redactada
    y su borrador). Se publican los dos, tal como están en el documento.
  - La lista de componentes de la Ruta Histórica saltea los números 5 y 7, y la
    de la Ruta Productiva no incluye al Informador turístico de Junín, que sí
    tiene texto propio. En el sitio se numeran de corrido.
  - Dice "Olivícola Barros Hermanos" en un párrafo y "Olivícola Barroso" en
    otro; y "20 millones de kg entre uvas".

Del sitio:

  - Faltan fotografías de varios componentes; mientras tanto se muestra
    assets/images/placeholder.svg.
  - Hay coordenadas aproximadas: están marcadas en datos-rutas.js con el
    comentario "TODO verificar coordenada".


CRÉDITOS
========

Diseño y desarrollo sobre la base de la plantilla "Places" de ProBootstrap
(Creative Commons 3.0 — https://probootstrap.com/license/).

Bootstrap        https://getbootstrap.com/
Leaflet          https://leafletjs.com/
OpenStreetMap    https://www.openstreetmap.org/copyright
Google Fonts     Fraunces y Work Sans
