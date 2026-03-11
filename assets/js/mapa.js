document.addEventListener("DOMContentLoaded", function () {

    var lugares = [
        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        },

        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        },
        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        },
        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        },
        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        },
        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        },
        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        },
        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        },
        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        },
        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        },
        {
            titulo: "Bodega Pupatto",
            imagen: "assets/images/bp1.jpg",
            descripcion: "Una bodega con mucha historia, fundada en el año 1941 y hoy comandada por la cuarta generación. El Sr. Emiliano, productor vitivinícola de cuarta generación, es el responsable de la bodega.",
            web: "bodegaPuppato.html",
            instagram: "https://www.instagram.com/puppatofamilywines/reels/"
        }
    ];

    // Puntos turísticos
    var puntos = [
        [-33.07525468767633, -68.582508505586], //corrales negros
        [-33.11247083912999, -68.59922660558345], //benedetti
        [-33.09454710762305, -68.58269190558468], //bodega alter ego
        [-33.09647835202471, -68.5728215957926], //escuale g. a posadas
        [-33.097148385437414, -68.57226223184199], //plaza mercedes tomasa de san martin
        [-33.097651589908914, -68.57180047674866], //capilla nuestra señora de la luz
        [-33.10088133186869, -68.56488259209146], //pupatto
        [-33.10580705638048, -68.55159731907658], //olivícola barroso
        [-33.11169889090452, -68.54578283441923], //nietas de lipari
        [-33.11364683301512, -68.54512979024025], //mon al agua y al trabajo
        [-33.1122032437294, -68.55257506510546] //bodega productores del valle
    ];

    var map = L.map('map').setView(puntos[0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    async function dibujarRutaGraphHopper(puntos) {
        const apiKey = '885536fc-8b0b-435e-9cf8-be1753b09238';

        // Dividir puntos en grupos de 5, con solapamiento en los extremos
        async function obtenerSegmento(segmento) {
            const body = {
                points: segmento.map(p => [p[1], p[0]]),
                vehicle: 'car',
                locale: 'es',
                points_encoded: false
            };

            const response = await fetch(`https://graphhopper.com/api/1/route?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await response.json();

            if (data.paths && data.paths.length > 0) {
                return data.paths[0].points.coordinates.map(c => [c[1], c[0]]);
            }
            return [];
        }

        try {
            // Dividir en grupos: [0-4], [4-8], [8-10]
            const segmentos = [];
            for (let i = 0; i < puntos.length - 1; i += 4) {
                segmentos.push(puntos.slice(i, i + 5));
            }

            // Obtener todas las rutas en paralelo
            const resultados = await Promise.all(segmentos.map(s => obtenerSegmento(s)));

            // Unir todas las coordenadas
            const coordsTotal = resultados.flat();

            if (coordsTotal.length > 0) {
                L.polyline(coordsTotal, {
                    color: 'red',
                    weight: 4,
                    dashArray: '10, 10'
                }).addTo(map);
            }

        } catch (error) {
            console.error('Error GraphHopper:', error);
            L.polyline(puntos, { color: 'red', weight: 4, dashArray: '10, 10' }).addTo(map);
        }
    }

    dibujarRutaGraphHopper(puntos);

    puntos.forEach((coord, index) => {

        var numeroIcono = L.divIcon({
            className: '',
            html: `<div class="marker-number">${index + 1}</div>`,
            iconSize: [30, 30]
        });

        var marker = L.marker(coord, {icon: numeroIcono}).addTo(map);

        marker.on('click', function () {

            // Zoom automático con animación
            map.flyTo(coord, 15, {duration: 1.5});

            // Abrir modal
            abrirModal(index);

        });

    });


    function abrirModal(index) {
        document.getElementById("modalTitulo").innerText = lugares[index].titulo;
        document.getElementById("modalImagen").src = lugares[index].imagen;
        document.getElementById("modalDescripcion").innerText = lugares[index].descripcion;

        document.getElementById("modalWeb").href = lugares[index].web;
        document.getElementById("modalInstagram").href = lugares[index].instagram;

        $('#infoModal').modal('show');
    }

});
