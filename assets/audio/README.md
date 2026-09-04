# Audioguías

Esta carpeta guarda las grabaciones de las audioguías.

Sólo se muestran audioguías **grabadas**. No hay lectura automática con la voz
del navegador: si una página no tiene grabación, no aparece el reproductor.

## Grabaciones actuales

| Página | Archivo |
|---|---|
| Contexto general (parte 1) | `contexto-general-1.mp3` |
| Contexto general (parte 2) | `contexto-general-2.mp3` |
| Contexto general (parte 3) | `contexto-general-3.mp3` |
| Contexto general (parte 4) | `contexto-general-4.mp4` |
| Ruta Histórica | `ruta-historica.mp4` |
| Ruta Productiva | `ruta-productiva.mp4` |

## Cómo agregar una audioguía nueva

1. Guardar la grabación en esta carpeta (mp4 o mp3; recomendado 128 kbps mono,
   para que cargue rápido en el celular).
2. En el HTML de esa página, agregar el bloque con la ruta del archivo:

   ```html
   <div class="audioguia" data-audio="assets/audio/nombre.mp4"></div>
   ```

3. Verificar que la página cargue `assets/js/audioguia.js` antes de
   `assets/js/site.js`.

No hay que tocar nada más.
