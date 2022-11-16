const btn = document.querySelector('.btn-info');
btn.addEventListener("click", () => {
    console.log("graficar")
    main("#material")
});
function main(id) {
    $.getJSON("http://127.0.0.1:8000/gra", function(datos) {
        console.log(datos)
        const grafica = document.querySelector(id);
            // Las etiquetas son las que van en el eje X.
            const etiquetas = ["1.0", "2.5","10","temperatura"]
            // Podemos tener varios conjuntos de datos. Comencemos con uno
            const datos1 = {
                label: "Material Particulado 0.1",
                data: datos["1.0"], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                borderColor: 'blue',
                borderWidth: 1,// Ancho del borde
                tension: 0.1,
                fill: false,
            };
            const datos25 = {
                label: "Material Particulado 2.5",
                data: datos["2.5"], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
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
            const temp = {
                label: "Material Particulado 10",
                data: datos["temperatura"], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                borderColor: 'yellow',
                borderWidth: 1,// Ancho del borde
                tension: 0.1,
                fill: false,
            };
            
            var myChart=new Chart(grafica, {
                type: 'line',// Tipo de gráfica
                data: {
                    labels: etiquetas,
                    datasets: [
                        datos1,
                        datos25,
                        datos10,
                        temp,
                        // Aquí más datos...
                    ]
                },
            });


    });
}