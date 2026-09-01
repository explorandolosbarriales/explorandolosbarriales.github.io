/* =========================================================
   Audioguía.

   Uso en el HTML:
     <div class="audioguia" data-audio="assets/audio/nombre.mp4"></div>

   Con data-titulo se cambia el rótulo, útil cuando una página tiene
   la grabación partida en varios archivos:
     <div class="audioguia" data-audio="..." data-titulo="Audioguía · parte 1"></div>

   Sólo se muestran las audioguías GRABADAS. Si data-audio está
   vacío o el bloque no lo tiene, no se muestra nada: no hay
   lectura automática con la voz del navegador.

   Hoy existen estas grabaciones:
     Contexto general -> assets/audio/contexto-general-1.mp3 y -2.mp3
     Ruta Histórica   -> assets/audio/ruta-historica.mp4
     Ruta Productiva  -> assets/audio/ruta-productiva.mp4
   ========================================================= */

(function () {
  'use strict';

  var ICONO_PARLANTE =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M11 5 6 9H3v6h3l5 4V5Zm4.5 7a4 4 0 0 0-2-3.46v6.92A4 4 0 0 0 15.5 12Zm-2 -8v2.06a6 6 0 0 1 0 11.88V21a8 8 0 0 0 0-17Z"/>' +
    '</svg>';

  var cajas = document.querySelectorAll('.audioguia');

  Array.prototype.forEach.call(cajas, function (caja, i) {
    if (!caja.id) caja.id = 'audioguia-' + (i + 1);

    var grabacion = (caja.getAttribute('data-audio') || '').trim();

    /* Sin grabación no se muestra el bloque. */
    if (!grabacion) {
      caja.style.display = 'none';
      return;
    }

    var titulo = (caja.getAttribute('data-titulo') || '').trim() || 'Audioguía';

    caja.innerHTML =
      '<div class="audioguia__info">' +
        '<div class="audioguia__titulo">' + ICONO_PARLANTE + titulo + '</div>' +
      '</div>' +
      '<audio controls preload="none" src="' + grabacion + '"></audio>';
  });
})();
