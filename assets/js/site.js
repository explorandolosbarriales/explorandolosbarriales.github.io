/* =========================================================
   Comportamientos generales del sitio:
   aparición de bloques al hacer scroll, índice lateral
   activo y fallback de imágenes rotas.
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Aparición progresiva ---------- */

  var revelables = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    Array.prototype.forEach.call(revelables, function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        var el = entrada.target;
        var demora = Array.prototype.indexOf.call(el.parentNode.children, el) % 4;
        el.style.transitionDelay = (demora * 90) + 'ms';
        el.classList.add('is-visible');
        observador.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    Array.prototype.forEach.call(revelables, function (el) {
      observador.observe(el);
    });
  }

  /* ---------- Índice lateral: marcar la sección visible ---------- */

  var indice = document.querySelector('.indice');
  if (indice && 'IntersectionObserver' in window) {
    var enlaces = Array.prototype.slice.call(indice.querySelectorAll('a[href^="#"]'));
    var destinos = enlaces
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);

    if (destinos.length) {
      var vigia = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          enlaces.forEach(function (a) {
            a.classList.toggle('is-activo', a.getAttribute('href') === '#' + entrada.target.id);
          });
        });
      }, { rootMargin: '-25% 0px -65% 0px' });

      destinos.forEach(function (d) { vigia.observe(d); });
    }
  }

  /* ---------- Imágenes que no cargan ---------- */

  document.addEventListener('error', function (ev) {
    var el = ev.target;
    if (el.tagName !== 'IMG' || el.dataset.falloBack) return;
    el.dataset.falloBack = '1';
    el.src = 'assets/images/placeholder.svg';
  }, true);
})();
