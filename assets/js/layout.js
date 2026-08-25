/* =========================================================
   Navegación y pie de página comunes a todo el sitio.
   Se inyectan desde acá para no repetirlos en cada HTML:
   editando este archivo se actualizan las 23 páginas.

   Cada página declara su sección activa con
   <body data-seccion="inicio|contexto|historica|productiva">
   ========================================================= */

(function () {
  'use strict';

  var seccion = document.body.getAttribute('data-seccion') || '';
  var navFija = document.body.hasAttribute('data-nav-fija');

  /* Los nombres salen del documento: "CONTEXTUALIZACIÓN GENERAL (PESTAÑA)",
     "RUTA HISTÓRICA" y "RUTA PRODUCTIVA". "Inicio" es sólo navegación. */
  var enlaces = [
    { id: 'inicio', texto: 'Inicio', url: 'index.html' },
    { id: 'contexto', texto: 'Contexto general', url: 'contextualizacionGeneral.html' },
    { id: 'historica', texto: 'Ruta Histórica', url: 'rutaHistorica.html' },
    { id: 'productiva', texto: 'Ruta Productiva', url: 'rutaProductiva.html' },
    { id: 'protagonistas', texto: 'Protagonistas', url: 'protagonistas.html' },
    { id: 'bibliografia', texto: 'Bibliografía', url: 'bibliografia.html' }
  ];

  var marcaSvg =
    '<svg class="marca-icono" width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
    '<circle cx="16" cy="16" r="15" stroke="#C9A24A" stroke-width="2"/>' +
    '<path d="M16 7c3.4 2.6 5.1 5.5 5.1 8.7 0 3.4-2.3 6-5.1 9.3-2.8-3.3-5.1-5.9-5.1-9.3 0-3.2 1.7-6.1 5.1-8.7Z" fill="#C9A24A"/>' +
    '<circle cx="16" cy="15" r="2.2" fill="#4E1219"/>' +
    '</svg>';

  /* ---------- Navegación ---------- */

  var nav = document.getElementById('site-nav');
  if (nav) {
    var items = enlaces.map(function (e) {
      var activo = e.id === seccion ? ' class="is-activo" aria-current="page"' : '';
      return '<li><a href="' + e.url + '"' + activo + '>' + e.texto + '</a></li>';
    }).join('');

    nav.className = 'nav-sitio' + (navFija ? ' nav-sitio--fija' : '');
    nav.innerHTML =
      '<div class="container">' +
        '<a class="nav-marca" href="index.html">' + marcaSvg +
          '<span>Explorar Los Barriales<small>Junín, Mendoza</small></span>' +
        '</a>' +
        '<button class="nav-boton" type="button" aria-expanded="false" aria-controls="nav-lista" aria-label="Abrir el menú">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
        '<ul class="nav-lista" id="nav-lista">' + items + '</ul>' +
      '</div>';

    var boton = nav.querySelector('.nav-boton');
    var lista = nav.querySelector('.nav-lista');

    boton.addEventListener('click', function () {
      var abierto = lista.classList.toggle('is-abierta');
      boton.setAttribute('aria-expanded', String(abierto));
      boton.setAttribute('aria-label', abierto ? 'Cerrar el menú' : 'Abrir el menú');
    });

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && lista.classList.contains('is-abierta')) {
        lista.classList.remove('is-abierta');
        boton.setAttribute('aria-expanded', 'false');
        boton.focus();
      }
    });

    if (!navFija) {
      var marcarScroll = function () {
        nav.classList.toggle('is-solida', window.scrollY > 80);
      };
      marcarScroll();
      window.addEventListener('scroll', marcarScroll, { passive: true });
    }
  }

  /* ---------- Pie de página ---------- */

  var pie = document.getElementById('site-footer');
  if (pie) {
    var anio = new Date().getFullYear();

    /* Los dos párrafos son el texto que el documento pide "al pie de la
       pestaña principal", copiado literalmente. No se agrega nada más;
       la atribución de OpenStreetMap es un requisito de licencia del mapa. */
    pie.className = 'pie';
    pie.innerHTML =
      '<div class="container">' +
        '<div class="pie__legal">' +
          '<p>Esta página web es uno de los resultados del Proyecto de Comunicación Pública de la Ciencia ' +
          '2025-2026, financiado por la Secretaría de Investigación, Internacionales y Posgrado (SIIP), ' +
          'de la Universidad Nacional de Cuyo, conforme a lo establecido en la Ordenanza Nº27/2023-C.S. ' +
          'y aprobado mediante Res. N°3628/2025. Directora: Dra. Clarisa Suden (FFyL-UNCuyo, ' +
          'INCIHUSA-CONICET), Codirector: Dr. Matias Esteves (FI-UNCuyo, INCIHUSA-CONICET). ' +
          'Integrantes: Dra. Cecilia Raffa, Arq. Paula Martedí, Dr. Pablo Suárez, Est. Paulina Suden ' +
          'y Lic. Káren Suárez.</p>' +
          '<p>La información y contenido presentados son de exclusiva responsabilidad de su autor/a ' +
          'y no constituyen una posición institucional de la Universidad Nacional de Cuyo.</p>' +
          '<p class="pie__atribucion">&copy; ' + anio + ' &middot; ' +
          '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a></p>' +
        '</div>' +
      '</div>';
  }
})();
