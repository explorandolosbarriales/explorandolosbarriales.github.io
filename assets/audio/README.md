# Audioguías

Esta carpeta guarda las grabaciones de las audioguías.

Mientras esté vacía, el sitio **igual tiene audioguía**: el navegador lee el texto
en voz alta con la síntesis de voz del dispositivo (Web Speech API), así que la
opción de escuchar desde el celular ya funciona.

## Cómo pasar a la grabación real

1. Grabar el audio y exportarlo a MP3 (recomendado: 128 kbps mono, para que
   cargue rápido en el celular).
2. Guardar el archivo acá con uno de estos nombres:

   | Página | Archivo |
   |---|---|
   | Contextualización general | `contextualizacion.mp3` |
   | Ruta Histórica | `ruta-historica.mp3` |
   | Ruta Productiva | `ruta-productiva.mp3` |

3. En el HTML de esa página, buscar el bloque de la audioguía y completar el
   atributo `data-audio`:

   ```html
   <!-- antes -->
   <div class="audioguia" data-target="#texto-contextualizacion" data-audio=""></div>

   <!-- después -->
   <div class="audioguia" data-target="#texto-contextualizacion" data-audio="assets/audio/contextualizacion.mp3"></div>
   ```

No hay que tocar nada más: el reproductor cambia solo de lector de voz a
reproductor de audio.
