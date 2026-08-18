/* =========================================================
   Audioguía.

   Uso en el HTML:
     <div class="audioguia" data-target="#texto" data-audio=""></div>

   - data-audio VACÍO  -> el navegador lee en voz alta el texto de
     data-target usando la síntesis de voz del sistema (Web Speech API).
   - data-audio CON RUTA a un MP3 -> se muestra un reproductor de audio
     normal con esa grabación.

   PARA PASAR A AUDIO REAL: grabar el MP3, guardarlo en assets/audio/
   y completar data-audio="assets/audio/nombre.mp3". No hay que tocar
   este archivo.
   ========================================================= */

(function () {
  'use strict';

  var ICONOS = {
    parlante: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Zm4.5 7a4 4 0 0 0-2-3.46v6.92A4 4 0 0 0 15.5 12Zm-2 -8v2.06a6 6 0 0 1 0 11.88V21a8 8 0 0 0 0-17Z"/></svg>',
    play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    pausa: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>',
    stop: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 6h12v12H6z"/></svg>'
  };

  var sintesis = window.speechSynthesis;

  /* El texto del contenedor destino, limpio y sin los bloques que no
     forman parte de la narración. */
  function extraerTexto(destino) {
    var copia = destino.cloneNode(true);
    Array.prototype.forEach.call(
      copia.querySelectorAll('.audioguia, figure, figcaption, .aviso, .no-leer'),
      function (el) { el.remove(); }
    );
    return copia.textContent.replace(/\s+/g, ' ').trim();
  }

  /* speechSynthesis corta los textos largos en varios navegadores:
     se parte en fragmentos por oración y se encolan de a uno. */
  function partir(texto) {
    var partes = texto.match(/[^.!?]+[.!?]*\s*/g) || [texto];
    var trozos = [];
    var actual = '';

    partes.forEach(function (parte) {
      if ((actual + parte).length > 200 && actual) {
        trozos.push(actual.trim());
        actual = '';
      }
      actual += parte;
    });
    if (actual.trim()) trozos.push(actual.trim());
    return trozos;
  }

  function vozEspanola() {
    var voces = sintesis.getVoices() || [];
    return voces.filter(function (v) { return /^es(-|_)?/i.test(v.lang); })[0] ||
           voces.filter(function (v) { return /spanish|español/i.test(v.name); })[0] ||
           null;
  }

  function montarReproductorMp3(caja, src) {
    caja.innerHTML =
      '<div class="audioguia__info">' +
        '<div class="audioguia__titulo">' + ICONOS.parlante + 'Audioguía</div>' +
      '</div>' +
      '<audio controls preload="none" src="' + src + '"></audio>';
  }

  function montarLectorDeVoz(caja, destino) {
    caja.innerHTML =
      '<div class="audioguia__info">' +
        '<div class="audioguia__titulo">' + ICONOS.parlante + 'Audioguía</div>' +
      '</div>' +
      '<div class="audioguia__controles">' +
        '<button type="button" class="audioguia__btn js-play" aria-label="Reproducir la audioguía">' +
          ICONOS.play + '<span>Escuchar</span></button>' +
        '<button type="button" class="audioguia__btn js-stop" aria-label="Detener la audioguía" disabled>' +
          ICONOS.stop + '<span>Detener</span></button>' +
        '<label class="sr-only" for="' + caja.id + '-vel">Velocidad de lectura</label>' +
        '<select class="audioguia__velocidad js-velocidad" id="' + caja.id + '-vel">' +
          '<option value="0.85">0,85×</option>' +
          '<option value="1" selected>1×</option>' +
          '<option value="1.25">1,25×</option>' +
          '<option value="1.5">1,5×</option>' +
        '</select>' +
      '</div>';

    var btnPlay = caja.querySelector('.js-play');
    var btnStop = caja.querySelector('.js-stop');
    var selVel = caja.querySelector('.js-velocidad');
    var etiqueta = btnPlay.querySelector('span');

    var cola = [];
    var indice = 0;
    var leyendo = false;

    function pintar(estado) {
      if (estado === 'leyendo') {
        btnPlay.innerHTML = ICONOS.pausa + '<span>Pausar</span>';
        btnPlay.setAttribute('aria-label', 'Pausar la audioguía');
        btnStop.disabled = false;
      } else if (estado === 'pausado') {
        btnPlay.innerHTML = ICONOS.play + '<span>Continuar</span>';
        btnPlay.setAttribute('aria-label', 'Continuar la audioguía');
        btnStop.disabled = false;
      } else {
        btnPlay.innerHTML = ICONOS.play + '<span>Escuchar</span>';
        btnPlay.setAttribute('aria-label', 'Reproducir la audioguía');
        btnStop.disabled = true;
      }
      void etiqueta;
    }

    function decir(i) {
      if (i >= cola.length) {
        leyendo = false;
        indice = 0;
        pintar('detenido');
        return;
      }
      indice = i;

      var frase = new SpeechSynthesisUtterance(cola[i]);
      var voz = vozEspanola();
      if (voz) frase.voice = voz;
      frase.lang = voz ? voz.lang : 'es-AR';
      frase.rate = parseFloat(selVel.value) || 1;

      frase.onend = function () {
        if (leyendo) decir(i + 1);
      };
      frase.onerror = function () {
        leyendo = false;
        pintar('detenido');
      };

      sintesis.speak(frase);
    }

    function detener() {
      leyendo = false;
      indice = 0;
      sintesis.cancel();
      pintar('detenido');
    }

    btnPlay.addEventListener('click', function () {
      if (sintesis.speaking && !sintesis.paused && leyendo) {
        sintesis.pause();
        pintar('pausado');
        return;
      }
      if (sintesis.paused) {
        sintesis.resume();
        pintar('leyendo');
        return;
      }

      sintesis.cancel();
      cola = partir(extraerTexto(destino));
      if (!cola.length) return;
      leyendo = true;
      pintar('leyendo');
      decir(0);
    });

    btnStop.addEventListener('click', detener);

    selVel.addEventListener('change', function () {
      if (!leyendo) return;
      // La velocidad se aplica al retomar: se reinicia desde la frase actual.
      var desde = indice;
      sintesis.cancel();
      decir(desde);
    });

    // Cambiar de página con la voz activa la deja sonando en algunos navegadores.
    window.addEventListener('beforeunload', function () { sintesis.cancel(); });
    window.addEventListener('pagehide', function () { sintesis.cancel(); });
  }

  var cajas = document.querySelectorAll('.audioguia');
  Array.prototype.forEach.call(cajas, function (caja, i) {
    if (!caja.id) caja.id = 'audioguia-' + (i + 1);

    var mp3 = (caja.getAttribute('data-audio') || '').trim();
    if (mp3) {
      montarReproductorMp3(caja, mp3);
      return;
    }

    var destino = document.querySelector(caja.getAttribute('data-target') || '');
    if (!destino || !sintesis || typeof SpeechSynthesisUtterance !== 'function') {
      caja.style.display = 'none';
      return;
    }

    montarLectorDeVoz(caja, destino);
  });

  // Chrome carga las voces de forma asincrónica.
  if (sintesis && typeof sintesis.addEventListener === 'function') {
    sintesis.addEventListener('voiceschanged', function () { vozEspanola(); });
  }
})();
