let map = L.map('map').setView([-38.740857,-72.594756],13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);



var myIcon = L.icon({
    iconUrl: 'https://cdn.memegenerator.es/descargar/4538894',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});
    
L.marker([-38.740857,-72.594756], {icon: myIcon}).addEventListener("click", () => {
    console.log("Primero")
    const a=document.querySelector("#grafica2");
    principal("#grafica1")
}).addTo(map);
L.marker([-38.6588862375975,-72.4814466126939], {icon: myIcon}).addEventListener("click", () => {
    console.log("#grafica2")
    principal("#grafica2")
}).addTo(map);

function principal(id) {
    $.getJSON("http://127.0.0.1:8000/grafica", function(datos) {
        console.log(datos)
        const grafica = document.querySelector(id);
            // Las etiquetas son las que van en el eje X.
            const etiquetas = ["1", "2","3","4"]
            // Podemos tener varios conjuntos de datos. Comencemos con uno
            const datos01 = {
                label: "Material Particulado 0.1",
                data: datos["01"], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                borderColor: 'blue',
                borderWidth: 1,// Ancho del borde
                tension: 0.1,
                fill: false,
            };
            const datos25 = {
                label: "Material Particulado 2.5",
                data: datos["25"], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                borderColor: 'red',
                borderWidth: 1,// Ancho del borde
                tension: 0.1,
                fill: false,
            };
            const datos10 = {
                label: "Material Particulado 10",
                data: datos["10"], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                borderColor: 'green',
                borderWidth: 1,// Ancho del borde
                tension: 0.1,
                fill: false,
            };
            
            var myChart=new Chart(grafica, {
                type: 'line',// Tipo de gráfica
                data: {
                    labels: etiquetas,
                    datasets: [
                        datos01,
                        datos25,
                        datos10,
                        // Aquí más datos...
                    ]
                },
            });


    });
}
