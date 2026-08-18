/* =========================================================
   Trazado de los recorridos sobre las calles.

   El sitio ya NO consulta un servicio de ruteo en vivo: la versión
   anterior llamaba a GraphHopper con una API key visible en el
   repositorio público, de modo que cualquiera podía consumir la cuota
   y el mapa quedaba sin trazado al agotarse.

   Mientras estos arreglos estén vacíos, mapa.js une los hitos con una
   línea punteada directa. Es lo correcto por ahora, porque varias
   coordenadas de datos-rutas.js todavía son aproximadas (marcadas con
   "TODO verificar coordenada") y un trazado calle por calle sobre
   puntos estimados daría una precisión falsa.

   CUANDO LAS COORDENADAS ESTÉN VERIFICADAS: calcular el recorrido una
   sola vez (por ejemplo en https://map.project-osrm.org/ o
   https://graphhopper.com/maps/, exportando la geometría) y pegar acá
   la lista de pares [lat, lng]. El mapa la usa automáticamente, sin
   pedidos de red ni claves.
   ========================================================= */

window.RUTAS_GEO = {
  historica: [],
  productiva: []
};
