/* =========================================================
   Datos de las rutas culturales de Los Barriales.
   Fuente única para: mapas, grillas de hitos y popups.

   Los títulos y los resúmenes son texto literal del documento
   "BorradorBarrialesActualizado.docx". No se redactó nada aquí.

   ARCHIVO GENERADO. Para corregir una coordenada, editar el valor
   de "coords" del hito correspondiente.
   ========================================================= */

(function (global) {
  'use strict';

  var PLACEHOLDER = 'assets/images/placeholder.svg';

  var DATOS = {
    rutas: {
      historica: {
        id: 'historica',
        nombre: 'Ruta Histórica',
        titulo: 'RUTA HISTÓRICA: Los orígenes de un pueblo construido entre caminos e instituciones',
        url: 'rutaHistorica.html',
        color: '#6E1E2B',
        hitos: [
        {
        // TODO verificar coordenada
          n: 1, id: 'molino-orfila',
          nombre: 'Molino Orfila',
          url: 'molinoOrfila.html',
          imagen: PLACEHOLDER,
          resumen: 'En 1816, el General José de San Martín refiere a Los Barriales cuando eleva un pedido al Gobernador Intendente Toribio Luzuriaga, para ser acreedor de 250 cuadras (que, medidas en hectáreas equivalen a 394) de terreno para establecer allí su chacra.',
          coords: [-33.165, -68.55], aprox: true
        },
        {
        // TODO verificar coordenada
          n: 2, id: 'union-vecinal',
          nombre: 'Unión Vecinal de Servicios Públicos Los Barriales',
          url: 'unionVecinal.html',
          imagen: PLACEHOLDER,
          resumen: 'La Unión Vecinal de Servicios Públicos Los Barriales ha sido, desde hace décadas, una de las instituciones más representativas del distrito.',
          coords: [-33.0979, -68.5705], aprox: true
        },
        {
          n: 3, id: 'plaza-mercedes-tomasa',
          nombre: 'Plaza Mercedes Tomasa de San Martín y Pirámide Los Barriales',
          url: 'plazaMercedesTomasa.html',
          imagen: PLACEHOLDER,
          resumen: 'La Plaza Mercedes Tomasa de San Martín constituye el principal espacio público y cívico de Los Barriales.',
          coords: [-33.097148385437414, -68.57226223184199], aprox: false
        },
        {
          n: 4, id: 'capilla',
          nombre: 'Capilla Nuestra Señora de la Luz',
          url: 'capilla.html',
          imagen: 'assets/images/Capilla%20Nuestra%20Se%C3%B1ora%20de%20la%20Luz.jpeg',
          resumen: 'Se sitúa frente a la plaza de Los Barriales, lo que facilita su reconocimiento a la distancia.',
          coords: [-33.097651589908914, -68.57180047674866], aprox: false
        },
        {
          n: 5, id: 'escuela-gervasio-posadas',
          nombre: 'Escuela 1-019 Gervasio A. Posadas',
          url: 'escuelaGervasioPosadas.html',
          imagen: 'assets/images/Escuela%20Gervasio%20Posadas.jpeg',
          resumen: 'Se ubica en la calle Remedios de Escalada s/n, a 100 metros al noroeste de la plaza distrital.',
          coords: [-33.09647835202471, -68.5728215957926], aprox: false
        },
        {
        // TODO verificar coordenada
          n: 6, id: 'estacion-benjamin-matienzo',
          nombre: 'Estación Benjamin Matienzo',
          url: 'estacionBenjaminMatienzo.html',
          imagen: PLACEHOLDER,
          resumen: 'La estación ferroviaria se ubica sobre el Carril Nuevo (RP61), a 700 metros al norte de la Ruta provincial 60 y en proximidad a la Calle Remedios de Escalada, uno de los principales ejes históricos del distrito.',
          coords: [-33.0909, -68.566], aprox: true
        },
        {
        // TODO verificar coordenada
          n: 7, id: 'cementerio-distrital',
          nombre: 'Cementerio distrital',
          url: 'cementerioDistrital.html',
          imagen: PLACEHOLDER,
          resumen: 'El Cementerio Distrital fue creado hacia fines del siglo XIX y conserva sepulturas que datan de 1890.',
          coords: [-33.0885, -68.576], aprox: true
        }
        ]
      },
      productiva: {
        id: 'productiva',
        nombre: 'Ruta Productiva',
        titulo: 'RUTA PRODUCTIVA. Tras las huellas de la vitivinicultura y el trabajo rural',
        url: 'rutaProductiva.html',
        color: '#5A6740',
        hitos: [
        {
        // TODO verificar coordenada
          n: 1, id: 'arroyo-claro',
          nombre: 'Arroyo Claro',
          url: 'arroyoClaro.html',
          imagen: PLACEHOLDER,
          resumen: 'El Humedal arroyo Claro se localiza al noreste del distrito Los Barriales, sobre el Carril Nuevo (RP61), a 700 metros al norte de la Ruta provincial 60, s/n.',
          coords: [-33.086, -68.562], aprox: true
        },
        {
          n: 2, id: 'corrales-negros',
          nombre: 'Bodega Corrales Negros',
          url: 'corralesNegros.html',
          imagen: 'assets/images/Corrales%20Negros.jpeg',
          resumen: 'El nombre de esta bodega conserva la memoria de un antiguo paraje vinculado con los caminos que atravesaban la zona desde la época colonial.',
          coords: [-33.07525468767633, -68.582508505586], aprox: false
        },
        {
          n: 3, id: 'benedetti',
          nombre: 'Bodega Benedetti',
          url: 'benedetti.html',
          imagen: 'assets/images/Benedetti.jpg',
          resumen: 'Bodegas y Viñedos Benedetti es una empresa familiar fundada en 1948 por Próspero Antonio Benedetti, descendiente de inmigrantes italianos.',
          coords: [-33.11247083912999, -68.59922660558345], aprox: false
        },
        {
          n: 4, id: 'alter-ego',
          nombre: 'Bodega Alter Ego',
          url: 'alterEgo.html',
          imagen: PLACEHOLDER,
          resumen: 'Se ubica sobre la Ruta Provincial 60, y fue construida en 1966.',
          coords: [-33.09454710762305, -68.58269190558468], aprox: false
        },
        {
          n: 5, id: 'juan-puppato',
          nombre: 'Bodega Juan Puppato',
          url: 'bodegaPuppato.html',
          imagen: 'assets/images/bodegaPupatto.png',
          resumen: 'Localizada sobre Ruta Provincial 60, a 100 metros al oeste de calle Cura. Fue construida en 1941, aunque los viñedos datan de 1910.',
          coords: [-33.10088133186869, -68.56488259209146], aprox: false
        },
        {
        // TODO verificar coordenada
          n: 6, id: 'pupinco',
          nombre: 'Bodega Pupinco',
          url: 'bodegaPupinco.html',
          imagen: 'assets/images/Bodega%20Pupinco.jpeg',
          resumen: 'Construida en 1981, la Bodega Pupinco constituye un ejemplo de arquitectura industrial de líneas racionalistas.',
          coords: [-33.1035, -68.559], aprox: true
        },
        {
        // TODO verificar coordenada
          n: 7, id: 'finca-santa-maria',
          nombre: 'Bodega Finca Santa María',
          url: null,
          imagen: PLACEHOLDER,
          resumen: '',
          coords: [-33.108, -68.547], aprox: true
        },
        {
          n: 8, id: 'olivicola-barroso',
          nombre: 'Olivícola Barroso hnos',
          url: 'olivicolaBarroso.html',
          imagen: 'assets/images/olivicolaBarroso.jpeg',
          resumen: 'Aunque la vitivinicultura constituye la actividad agrícola más característica de Mendoza, el cultivo del olivo también posee una extensa trayectoria en la provincia.',
          coords: [-33.10580705638048, -68.55159731907658], aprox: false
        },
        {
          n: 9, id: 'nietas-de-lipari',
          nombre: 'Bodega Nietas de Liparí',
          url: 'nietasDeLipari.html',
          imagen: 'assets/images/Nietas%20de%20Lipar%C3%AD.jpeg',
          resumen: 'La Bodega Nietas de Liparí presenta una característica que la distingue dentro del paisaje vitivinícola de Los Barriales: es la única del distrito dedicada a la producción orgánica.',
          coords: [-33.11169889090452, -68.54578283441923], aprox: false
        },
        {
        // TODO verificar coordenada
          n: 10, id: 'informador-turistico',
          nombre: 'Informador turístico de Junín',
          url: 'informadorTuristico.html',
          imagen: PLACEHOLDER,
          resumen: 'Se localiza en el predio contiguo a la rotonda del Agua y el Trabajo, sobre la Ruta Provincial 60 , en Los Barriales.',
          coords: [-33.1129, -68.546], aprox: true
        },
        {
          n: 11, id: 'monumento-agua-trabajo',
          nombre: 'Monumento al Agua y al Trabajo',
          url: 'monumentoAguaTrabajo.html',
          imagen: PLACEHOLDER,
          resumen: 'Este hito se localiza en la rotonda de calle Miguez y Ruta Provincial 60 , rodeado por un paisaje donde todavía predominan las áreas cultivadas mayormente con vid y olivos.',
          coords: [-33.11364683301512, -68.54512979024025], aprox: false
        },
        {
        // TODO verificar coordenada
          n: 12, id: 'hugo-zamora',
          nombre: 'Bodega Hugo Zamora',
          url: null,
          imagen: PLACEHOLDER,
          resumen: '',
          coords: [-33.1175, -68.539], aprox: true
        }
        ]
      }
    },

    obtenerRutas: function (cual) {
      if (!cual || cual === 'todas') return [DATOS.rutas.historica, DATOS.rutas.productiva];
      return DATOS.rutas[cual] ? [DATOS.rutas[cual]] : [];
    },

    buscarHito: function (id) {
      var claves = Object.keys(DATOS.rutas);
      for (var i = 0; i < claves.length; i++) {
        var ruta = DATOS.rutas[claves[i]];
        for (var j = 0; j < ruta.hitos.length; j++) {
          if (ruta.hitos[j].id === id) {
            return { ruta: ruta, hito: ruta.hitos[j] };
          }
        }
      }
      return null;
    }
  };

  global.DATOS_RUTAS = DATOS;
})(window);
