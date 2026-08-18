/* =========================================================
   Mapas Leaflet de las rutas culturales.

   Inicializa cualquier contenedor del tipo:
     <div class="mapa-ruta" data-ruta="historica|productiva|todas"></div>
     <div class="mapa-ruta" data-hito="capilla"></div>   (mapa de un solo punto)

   Los datos salen de datos-rutas.js y el trazado de rutas-geo.js.
   No se hacen pedidos a servicios de ruteo.
   ========================================================= */

(function () {
  'use strict';

  if (typeof L === 'undefined' || !window.DATOS_RUTAS) return;

  var GEO = window.RUTAS_GEO || {};

  function capaBase() {
    return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; colaboradores de <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
  }

  function icono(hito, ruta) {
    var extra = ruta.id === 'productiva' ? ' marcador-numero--productiva' : '';
    return L.divIcon({
      className: '',
      html: '<div class="marcador-numero' + extra + '"><span>' + hito.n + '</span></div>',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -30]
    });
  }

  /* El popup solo muestra texto que viene del documento: el nombre del hito
     y su resumen. El único agregado es el número de orden dentro de la ruta. */
  function popup(hito, ruta) {
    var etiquetaExtra = ruta.id === 'productiva' ? ' popup-hito__etiqueta--productiva' : '';
    var titulo = hito.url
      ? '<a href="' + hito.url + '">' + hito.nombre + '</a>'
      : hito.nombre;

    return '<div class="popup-hito">' +
      '<img src="' + hito.imagen + '" alt="" loading="lazy">' +
      '<div class="popup-hito__cuerpo">' +
        '<span class="popup-hito__etiqueta' + etiquetaExtra + '">' + ruta.nombre + ' · ' + hito.n + '</span>' +
        '<h4>' + titulo + '</h4>' +
        (hito.resumen ? '<p>' + hito.resumen + '</p>' : '') +
      '</div>' +
    '</div>';
  }

  function dibujarRuta(mapa, ruta, capas) {
    var grupo = L.layerGroup().addTo(mapa);
    capas[ruta.id] = grupo;

    var puntos = ruta.hitos.map(function (h) { return h.coords; });
    var trazado = (GEO[ruta.id] && GEO[ruta.id].length) ? GEO[ruta.id] : puntos;

    L.polyline(trazado, {
      color: ruta.color,
      weight: 4,
      opacity: .85,
      dashArray: '9, 9',
      lineCap: 'round'
    }).addTo(grupo);

    ruta.hitos.forEach(function (hito) {
      L.marker(hito.coords, { icon: icono(hito, ruta), title: hito.n + '. ' + hito.nombre })
        .bindPopup(popup(hito, ruta), { minWidth: 250, maxWidth: 250 })
        .addTo(grupo);
    });

    return puntos;
  }

  function encuadrar(mapa, puntos) {
    if (!puntos.length) return;
    mapa.fitBounds(L.latLngBounds(puntos), { padding: [45, 45], maxZoom: 15 });
  }

  /* ---------- Mapas de ruta ---------- */

  Array.prototype.forEach.call(document.querySelectorAll('.mapa-ruta[data-ruta]'), function (caja) {
    var cual = caja.getAttribute('data-ruta');
    var rutas = window.DATOS_RUTAS.obtenerRutas(cual);
    if (!rutas.length) return;

    var mapa = L.map(caja, { scrollWheelZoom: false });
    capaBase().addTo(mapa);
    mapa.on('click', function () { mapa.scrollWheelZoom.enable(); });
    mapa.on('mouseout', function () { mapa.scrollWheelZoom.disable(); });

    var capas = {};
    var todos = [];
    rutas.forEach(function (ruta) {
      todos = todos.concat(dibujarRuta(mapa, ruta, capas));
    });
    encuadrar(mapa, todos);

    /* Filtros por ruta, si la página los declara junto al mapa. */
    var filtros = document.querySelectorAll('.mapa-filtro[data-mapa="' + caja.id + '"]');
    Array.prototype.forEach.call(filtros, function (boton) {
      boton.addEventListener('click', function () {
        var elegida = boton.getAttribute('data-ruta');

        Array.prototype.forEach.call(filtros, function (b) {
          b.classList.toggle('is-activo', b === boton);
          b.setAttribute('aria-pressed', String(b === boton));
        });

        var visibles = [];
        Object.keys(capas).forEach(function (id) {
          var mostrar = (elegida === 'todas' || elegida === id);
          if (mostrar) {
            capas[id].addTo(mapa);
            visibles = visibles.concat(window.DATOS_RUTAS.rutas[id].hitos.map(function (h) { return h.coords; }));
          } else {
            mapa.removeLayer(capas[id]);
          }
        });
        encuadrar(mapa, visibles);
      });
    });
  });

  /* ---------- Mapa de un solo hito ---------- */

  Array.prototype.forEach.call(document.querySelectorAll('.mapa-ruta[data-hito]'), function (caja) {
    var encontrado = window.DATOS_RUTAS.buscarHito(caja.getAttribute('data-hito'));
    if (!encontrado) return;

    var mapa = L.map(caja, {
      scrollWheelZoom: false,
      dragging: !L.Browser.mobile,
      zoomControl: true
    }).setView(encontrado.hito.coords, 15);

    capaBase().addTo(mapa);

    L.marker(encontrado.hito.coords, {
      icon: icono(encontrado.hito, encontrado.ruta),
      title: encontrado.hito.nombre
    }).addTo(mapa);
  });
})();
